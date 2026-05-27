const { execSync, exec } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const CONFIG_FILE = path.join(__dirname, 'config_github.json');

// --- Console Colors ---
const colors = {
  reset: '\x1b[0m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  bold: '\x1b[1m'
};

console.log(`${colors.cyan}${colors.bold}====================================================${colors.reset}`);
console.log(`${colors.cyan}${colors.bold}  Lancement de l'application Devis Mariage         ${colors.reset}`);
console.log(`${colors.cyan}${colors.bold}====================================================${colors.reset}\n`);

// 1. Load configuration
let config = {};
if (fs.existsSync(CONFIG_FILE)) {
  try {
    config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  } catch (err) {
    console.log(`${colors.red}Erreur lors de la lecture de config_github.json. Utilisation des valeurs par defaut.${colors.reset}`);
  }
}

// Default configuration fallback
config.github_repository = config.github_repository || '';
config.github_branch = config.github_branch || 'main';
config.github_token = config.github_token || '';
config.github_backup_filename = config.github_backup_filename || 'mariage_devis_backup.json';
config.auto_update_on_launch = config.auto_update_on_launch !== false;

// 2. Git Check and Auto-Update
function runGit(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: 'pipe' }).trim();
  } catch (err) {
    return null;
  }
}

let isGitRepo = false;
if (config.auto_update_on_launch) {
  console.log(`${colors.cyan}Verification des mises a jour GitHub...${colors.reset}`);
  
  const gitVersion = runGit('git --version');
  if (!gitVersion) {
    console.log(`${colors.yellow}Attention: Git n'est pas installe sur ce systeme. Mise a jour automatique ignoree.${colors.reset}`);
  } else {
    isGitRepo = runGit('git rev-parse --is-inside-work-tree') === 'true';
    
    if (!isGitRepo && config.github_repository) {
      console.log(`${colors.yellow}Initialisation du depot Git local...${colors.reset}`);
      runGit('git init');
      runGit(`git remote add origin https://github.com/${config.github_repository}.git`);
      isGitRepo = true;
    }
    
    if (isGitRepo && config.github_repository) {
      // Ensure origin URL is set correctly
      runGit(`git remote set-url origin https://github.com/${config.github_repository}.git`);
      
      const branch = config.github_branch;
      console.log(`Branche active: ${colors.bold}${branch}${colors.reset}`);
      
      // Fetch latest changes
      console.log(`Recuperation de l'etat distant depuis GitHub...`);
      const fetchResult = runGit(`git fetch origin ${branch}`);
      
      if (fetchResult !== null) {
        // Compare commits
        const localCommit = runGit('git rev-parse HEAD');
        const remoteCommit = runGit(`git rev-parse origin/${branch}`);
        
        if (localCommit && remoteCommit && localCommit !== remoteCommit) {
          // Check if local is behind remote
          const behindCount = runGit(`git log HEAD..origin/${branch} --oneline`);
          if (behindCount) {
            const lines = behindCount.split('\n').filter(Boolean);
            console.log(`${colors.green}${colors.bold}Mise a jour disponible ! (${lines.length} nouveau(x) commit(s) trouve(s))${colors.reset}`);
            console.log(`${colors.yellow}Mise a jour en cours...${colors.reset}`);
            
            const pullResult = runGit(`git pull origin ${branch}`);
            if (pullResult !== null) {
              console.log(`${colors.green}Application mise a jour avec succes !${colors.reset}`);
            } else {
              console.log(`${colors.red}Erreur: Echec de la mise a jour automatique (git pull).${colors.reset}`);
            }
          } else {
            console.log(`${colors.yellow}Votre version locale possede des modifications non poussees.${colors.reset}`);
          }
        } else {
          console.log(`${colors.green}Votre application est a jour.${colors.reset}`);
        }
      } else {
        console.log(`${colors.red}Impossible de se connecter a GitHub. Mode hors-ligne active.${colors.reset}`);
      }
    } else {
      console.log(`${colors.yellow}Aucun depot GitHub configure dans config_github.json. Mise a jour ignoree.${colors.reset}`);
    }
  }
  console.log('');
}

// 3. Simple Static HTTP Server with API Support
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = parsedUrl.pathname;

  // API Route: GET config
  if (pathname === '/api/config' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (fs.existsSync(CONFIG_FILE)) {
      res.end(fs.readFileSync(CONFIG_FILE, 'utf8'));
    } else {
      res.end(JSON.stringify({}));
    }
    return;
  }

  // API Route: POST config (updates local config_github.json file)
  if (pathname === '/api/config' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const configData = JSON.parse(body);
        
        // Merge with existing config to preserve missing fields
        const finalConfig = { ...config, ...configData };
        
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(finalConfig, null, 2), 'utf8');
        config = finalConfig; // Update in-memory configuration
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Format JSON invalide' }));
      }
    });
    return;
  }

  // Static files handling
  if (pathname === '/') {
    pathname = '/index.html';
  }

  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);

  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`${colors.green}${colors.bold}Serveur demarre sur http://127.0.0.1:${PORT}${colors.reset}`);
  console.log(`Appuyez sur Ctrl+C dans cette console pour fermer le serveur.`);
  
  // 4. Open browser automatically
  console.log(`\nOuverture de l'application dans votre navigateur...`);
  exec(`start http://127.0.0.1:${PORT}/`);
});
