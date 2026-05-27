const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONFIG_FILE = path.join(__dirname, 'config_github.json');

const colors = {
  reset: '\x1b[0m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  bold: '\x1b[1m'
};

console.log(`${colors.cyan}${colors.bold}====================================================${colors.reset}`);
console.log(`${colors.cyan}${colors.bold}  Sauvegarde et Envoi de l'Application vers GitHub  ${colors.reset}`);
console.log(`${colors.cyan}${colors.bold}====================================================${colors.reset}\n`);

// Load configuration
let config = { github_branch: 'main' };
if (fs.existsSync(CONFIG_FILE)) {
  try {
    config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  } catch (err) {}
}
const branch = config.github_branch || 'main';

// Helper to run git
function runGit(command, showOutput = false) {
  try {
    const result = execSync(command, { encoding: 'utf8', stdio: showOutput ? 'inherit' : 'pipe' });
    return showOutput ? true : result;
  } catch (err) {
    if (!showOutput && err.stderr) {
      console.error(`${colors.red}Erreur Git: ${err.stderr.toString().trim()}${colors.reset}`);
    }
    return null;
  }
}

// Check if Git is initialized
const isGitRepo = runGit('git rev-parse --is-inside-work-tree');
if (isGitRepo === null) {
  console.log(`${colors.red}Erreur: Git n'est pas initialise dans ce dossier ou n'est pas disponible.${colors.reset}`);
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Entrez le message de validation (Commit) [defaut: "Mise a jour de l'application"]: `, (commitMsg) => {
  const finalMsg = commitMsg.trim() || "Mise a jour de l'application";
  
  console.log(`\n${colors.cyan}1. Ajout des modifications...${colors.reset}`);
  runGit('git add .');

  console.log(`${colors.cyan}2. Enregistrement des modifications (Commit)...${colors.reset}`);
  const commitRes = runGit(`git commit -m "${finalMsg.replace(/"/g, '\\"')}"`);
  if (commitRes === null) {
    console.log(`${colors.yellow}Aucune modification a enregistrer.${colors.reset}`);
  } else {
    console.log(`${colors.green}Modifications enregistrees.${colors.reset}`);
  }

  console.log(`${colors.cyan}3. Envoi vers GitHub (Push) sur la branche ${colors.bold}${branch}${colors.reset}...`);
  console.log(`${colors.yellow}Remarque: Si le depot est prive ou que c'est votre premier envoi, Git pourra ouvrir une fenetre d'authentification.${colors.reset}`);
  
  const pushRes = runGit(`git push origin ${branch}`, true);

  if (pushRes !== null) {
    console.log(`\n${colors.green}${colors.bold}✅ Succes: L'application a ete envoyee sur GitHub avec succes !${colors.reset}`);
  } else {
    console.log(`\n${colors.red}${colors.bold}❌ Erreur: Echec de l'envoi vers GitHub. Verifiez vos droits d'acces et votre connexion.${colors.reset}`);
  }
  
  rl.close();
});
