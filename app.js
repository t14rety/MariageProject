/* =============================================
   REACTIVE QUOTE MODULE — Agence de Mariage
   Bilingual: Français / العربية
   With Admin Edit Mode
   ============================================= */

// ─── i18n: UI Translations ───────────────────────────────────
const translations = {
  fr: {
    badge: 'Devis interactif',
    title: 'Composez votre Mariage de Rêve',
    subtitle: 'Sélectionnez vos prestations, ajustez les détails et obtenez votre devis personnalisé en temps réel.',
    statPrestations: 'Prestations',
    statOptions: 'Options',
    statSelected: 'Sélectionnées',
    sectionTitle: 'Nos Prestations',
    sectionSubtitle: 'Activez ou désactivez les options selon vos envies',
    badgeOptional: '✦ Optionnel',
    badgeIncluded: '● Inclus',
    unit: '/ unité',
    qtyLabel: 'Qté',
    subtotalLabel: 'Sous-total',
    toggleOn: 'Inclus dans le devis',
    toggleOff: 'Ajouter au devis',
    totalHT: 'Total HT',
    tva: 'TVA (19%)',
    totalTTC: 'Total TTC',
    prestationsLabel: 'Prestations',
    btnPdf: 'Générer PDF',
    pdfTitle: '✦ Devis Mariage ✦',
    pdfDate: 'Établi le',
    pdfAgency: 'Agence Élégance Nuptiale — Algérie',
    pdfColPrestation: 'Prestation',
    pdfColQty: 'Qté',
    pdfColUnitPrice: 'Prix unit.',
    pdfColTotal: 'Total',
    pdfValidity: "Ce devis est valable 30 jours à compter de sa date d'émission.",
    pdfContact: 'Agence Élégance Nuptiale — contact@elegance-nuptiale.dz — +213 5 55 12 34 56',
    toastGenerating: '📄 Génération du PDF en cours...',
    toastSuccess: '✅ PDF généré avec succès !',
    toastPrint: "✅ Fenêtre d'impression ouverte !",
    toastEditOn: '✏️ Mode édition activé',
    toastEditOff: '💾 Modifications sauvegardées',
    toastItemAdded: '✅ Prestation ajoutée',
    toastItemDeleted: '🗑️ Prestation supprimée',
    toastReset: '↺ Données réinitialisées',
    editBtn: 'Éditer',
    editBtnDone: 'Terminé',
    deleteConfirm: 'Supprimer cette prestation ?',
    addCardTitle: 'Ajouter une prestation',
    modalTitle: 'Nouvelle prestation',
    modalTitleFr: 'Titre (Français)',
    modalTitleAr: 'Titre (Arabe)',
    modalDescFr: 'Description (Français)',
    modalDescAr: 'Description (Arabe)',
    modalPrice: 'Prix unitaire (DA)',
    modalQty: 'Quantité',
    modalImage: "Image (Fichier ou URL)",
    modalOptional: 'Prestation optionnelle',
    modalAdd: 'Ajouter',
    modalCancel: 'Annuler',
    resetBtn: 'Réinitialiser',
    resetConfirm: 'Réinitialiser toutes les données par défaut ?',
    editTitlePlaceholder: 'Titre…',
    editDescPlaceholder: 'Description…',
    editPricePlaceholder: 'Prix…',
    compName: "Nom de l'entreprise",
    compPhone: "Téléphone",
    compEmail: "E-mail",
    compAddress: "Adresse / Pays",
    compSettingsTitle: "Paramètres de l'entreprise",
    btnBrowse: "Parcourir...",
    lblLogoPlaceholder: "Pas de logo",
    toastLogoRemoved: "🗑️ Logo supprimé",
    toastLogoAdded: "✅ Logo chargé",
    modalPhotoReady: "Image prête",
    lblModalBrowse: "📷 Choisir...",
    btnBrowseLogo: "📁 Choisir Logo...",
    clientBtn: 'Clients',
    activeProject: 'Projet Actif',
    clientManagerTitle: 'Gestion des Clients & Projets',
    clientsList: 'Liste des Clients',
    addClient: 'Nouveau Client',
    clientNameLabel: 'Nom / Nom des mariés *',
    clientPhoneLabel: 'Téléphone',
    clientEmailLabel: 'E-mail',
    clientAddressLabel: 'Adresse',
    saveBtn: 'Enregistrer',
    cancelBtn: 'Annuler',
    selectClientPrompt: 'Sélectionnez un client pour voir ses projets ou modifier ses informations.',
    projectsHeading: 'Projets du Client',
    addProjectBtn: 'Nouveau Projet',
    projectNameLabel: 'Nom du projet *',
    projectDateLabel: 'Date de l\'événement',
    createBtn: 'Créer',
    loadProjectBtn: 'Charger',
    deleteClientConfirm: 'Supprimer ce client et tous ses projets ?',
    deleteProjectConfirm: 'Supprimer ce projet ?',
    toastClientSaved: '✅ Client enregistré',
    toastClientDeleted: '🗑️ Client supprimé',
    toastProjectCreated: '✅ Projet créé',
    toastProjectDeleted: '🗑️ Projet supprimé',
    toastProjectLoaded: '🔌 Projet chargé avec succès !',
    toastProjectUnloaded: '🔌 Retour au devis général',
    pdfClientDetails: 'Informations du Client',
    pdfClientName: 'Client',
    pdfProjectName: 'Projet',
    pdfClientPhone: 'Téléphone',
    pdfClientEmail: 'E-mail',
    pdfClientAddress: 'Adresse',
    pdfProjectDate: 'Date événement',
    lblClientInfoTitle: 'Informations du Client',
    lblInfoClient: 'Client',
    lblInfoProject: 'Projet',
    lblInfoPhone: 'Téléphone',
    lblInfoEmail: 'E-mail',
    lblInfoAddress: 'Adresse',
    btnExportDb: '💾 Exporter Sauvegarde',
    lblImportDb: '📁 Importer Sauvegarde',
    toastDatabaseExported: '💾 Sauvegarde téléchargée !',
    toastDatabaseImported: '✅ Sauvegarde importée avec succès !',
    toastDatabaseImportError: '❌ Erreur lors de l\'importation de la sauvegarde !',
    btnGithubBackup: 'Sauvegarder sur GitHub',
    btnGithubRestore: 'Restaurer depuis GitHub',
    btnGithubConfig: 'Configuration GitHub',
    lblGithubConfigTitle: 'Paramètres GitHub',
    lblGhRepo: 'Dépôt (owner/repo)',
    lblGhBranch: 'Branche',
    lblGhFile: 'Nom du fichier de sauvegarde',
    lblGhToken: 'GitHub Personal Access Token (PAT)',
    btnSaveGhConfig: 'Enregistrer',
    toastGithubConfigSaved: '✅ Configuration GitHub enregistrée !',
    toastGithubBackupSuccess: '✅ Sauvegarde envoyée sur GitHub avec succès !',
    toastGithubBackupError: '❌ Échec de la sauvegarde sur GitHub.',
    toastGithubRestoreSuccess: '✅ Données restaurées depuis GitHub !',
    toastGithubRestoreError: '❌ Échec de la restauration depuis GitHub.',
    toastGithubTokenRequired: '⚠️ Un token GitHub Personal Access Token est requis !'
  },
  ar: {
    badge: 'عرض أسعار تفاعli',
    title: 'صمّم حفل زفافك الأحلام',
    subtitle: 'اختر خدماتك، عدّل التفاصيل واحصل على عرض أسعارك المخصص في الوقت الفعلي.',
    statPrestations: 'الخدمات',
    statOptions: 'الخيارات',
    statSelected: 'المختارة',
    sectionTitle: 'خدماتنا',
    sectionSubtitle: 'فعّل أو عطّل الخيارات حسب رغبتك',
    badgeOptional: '✦ اختياري',
    badgeIncluded: '● مشمول',
    unit: '/ للوحدة',
    qtyLabel: 'الكمية',
    subtotalLabel: 'المجموع الفرعي',
    toggleOn: 'مشمول في العرض',
    toggleOff: 'إضافة للعرض',
    totalHT: 'المجموع قبل الضريبة',
    tva: 'الضريبة (19%)',
    totalTTC: 'المجموع الكلي',
    prestationsLabel: 'الخدمات',
    btnPdf: 'تحميل PDF',
    pdfTitle: '✦ عرض أسعار الزفاف ✦',
    pdfDate: 'بتاريخ',
    pdfAgency: 'وكالة أناقة الزفاف — الجزائر',
    pdfColPrestation: 'الخدمة',
    pdfColQty: 'الكمية',
    pdfColUnitPrice: 'سعر الوحدة',
    pdfColTotal: 'المجموع',
    pdfValidity: 'هذا العرض صالح لمدة 30 يوماً من تاريخ إصداره.',
    pdfContact: 'وكالة أناقة الزفاف — contact@elegance-nuptiale.dz — 56 34 12 55 5 213+',
    toastGenerating: '📄 جاري إنشاء ملف PDF...',
    toastSuccess: '✅ تم إنشاء PDF بنجاح!',
    toastPrint: '✅ تم فتح نافذة الطباعة!',
    toastEditOn: '✏️ وضع التعديل مفعّل',
    toastEditOff: '💾 تم حفظ التعديلات',
    toastItemAdded: '✅ تمت إضافة الخدمة',
    toastItemDeleted: '🗑️ تم حذف الخدمة',
    toastReset: '↺ تمت إعادة تعيين البيانات',
    editBtn: 'تعديل',
    editBtnDone: 'تم',
    deleteConfirm: 'حذف هذه الخدمة؟',
    addCardTitle: 'إضافة خدمة',
    modalTitle: 'خدمة جديدة',
    modalTitleFr: 'العنوان (بالفرنسية)',
    modalTitleAr: 'العنوان (بالعربية)',
    modalDescFr: 'الوصف (بالفرنسية)',
    modalDescAr: 'الوصف (بالعربية)',
    modalPrice: 'سعر الوحدة (د.ج)',
    modalQty: 'الكمية',
    modalImage: 'الصورة (ملف أو رابط)',
    modalOptional: 'خدمة اختيارية',
    modalAdd: 'إضافة',
    modalCancel: 'إلغاء',
    resetBtn: 'إعادة تعيين',
    resetConfirm: 'إعادة تعيين جميع البيانات إلى الوضع الافتراضية؟',
    editTitlePlaceholder: 'العنوان…',
    editDescPlaceholder: 'الوصف…',
    editPricePlaceholder: 'السعر…',
    compName: "اسم الشركة",
    compPhone: "الهاتف",
    compEmail: "البريد الإلكتروني",
    compAddress: "العنوان / البلد",
    compSettingsTitle: "إعدادات الشركة",
    btnBrowse: "تصفح...",
    lblLogoPlaceholder: "لا يوجد شعار",
    toastLogoRemoved: "🗑️ تم حذف الشعار",
    toastLogoAdded: "✅ تم تحميل الشعار",
    modalPhotoReady: "الصورة جاهزة",
    lblModalBrowse: "📷 اختيار...",
    btnBrowseLogo: "📁 اختيار الشعار...",
    clientBtn: 'العملاء',
    activeProject: 'المشروع النشط',
    clientManagerTitle: 'إدارة العملاء والمشاريع',
    clientsList: 'قائمة العملاء',
    addClient: 'عميل جديد',
    clientNameLabel: 'الاسم / اسم العروسين *',
    clientPhoneLabel: 'الهاتف',
    clientEmailLabel: 'البريد الإلكتروني',
    clientAddressLabel: 'العنوان',
    saveBtn: 'حفظ',
    cancelBtn: 'إلغاء',
    selectClientPrompt: 'اختر عميلاً لعرض مشاريعه أو تعديل بياناته.',
    projectsHeading: 'مشاريع العميل',
    addProjectBtn: 'مشروع جديد',
    projectNameLabel: 'اسم المشروع *',
    projectDateLabel: 'تاريخ الحدث',
    createBtn: 'إنشاء',
    loadProjectBtn: 'تحميل',
    deleteClientConfirm: 'هل تريد حذف هذا العميل وجميع مشاريعه؟',
    deleteProjectConfirm: 'هل تريد حذف هذا المشروع؟',
    toastClientSaved: '✅ تم حفظ العميل',
    toastClientDeleted: '🗑️ تم حذف العميل',
    toastProjectCreated: '✅ تم إنشاء المشروع',
    toastProjectDeleted: '🗑️ تم حذف المشروع',
    toastProjectLoaded: '🔌 تم تحميل المشروع بنجاح!',
    toastProjectUnloaded: '🔌 العودة إلى عرض الأسعار العام',
    pdfClientDetails: 'معلومات العميل',
    pdfClientName: 'العميل',
    pdfProjectName: 'المشروع',
    pdfClientPhone: 'الهاتف',
    pdfClientEmail: 'البريد الإلكتروني',
    pdfClientAddress: 'العنوان',
    pdfProjectDate: 'تاريخ الحدث',
    lblClientInfoTitle: 'معلومات العميل',
    lblInfoClient: 'العميل',
    lblInfoProject: 'المشروع',
    lblInfoPhone: 'الهاتف',
    lblInfoEmail: 'البريد الإلكتروني',
    lblInfoAddress: 'العنوان',
    btnExportDb: '💾 تصدير النسخة الاحتياطية',
    lblImportDb: '📁 استيراد النسخة الاحتياطية',
    toastDatabaseExported: '💾 تم تحميل النسخة الاحتياطية!',
    toastDatabaseImported: '✅ تم استيراد النسخة الاحتياطية بنجاح!',
    toastDatabaseImportError: '❌ خطأ أثناء استيراد النسخة الاحتياطية!',
    btnGithubBackup: 'نسخ احتياطي إلى GitHub',
    btnGithubRestore: 'استعادة من GitHub',
    btnGithubConfig: 'إعدادات GitHub',
    lblGithubConfigTitle: 'إعدادات GitHub',
    lblGhRepo: 'المستودع (owner/repo)',
    lblGhBranch: 'الفرع',
    lblGhFile: 'اسم ملف النسخ الاحتياطي',
    lblGhToken: 'رمز الوصول الشخصي لـ GitHub (PAT)',
    btnSaveGhConfig: 'حفظ',
    toastGithubConfigSaved: '✅ تم حفظ إعدادات GitHub !',
    toastGithubBackupSuccess: '✅ تم إرسال النسخة الاحتياطي بنجاح إلى GitHub !',
    toastGithubBackupError: '❌ فشل النسخ الاحتياطي إلى GitHub.',
    toastGithubRestoreSuccess: '✅ تم استعادة البيانات من GitHub بنجاح !',
    toastGithubRestoreError: '❌ فشل استعادة البيانات من GitHub.',
    toastGithubTokenRequired: '⚠️ رمز الوصول لـ GitHub (PAT) مطلوب !'
  },
};

// ─── Default Items (bilingual text on each item) ──────────────
const defaultItems = [
  {
    id: 'lieu',
    titre_fr: 'Lieu de Réception',
    titre_ar: 'قاعة الاستقبال',
    desc_fr: "Domaine d'exception avec jardins, salle de fêtes et terrasse panoramique.",
    desc_ar: 'قاعة فاخرة مع حدائق وصالة احتفالات وشرفة بانورامية.',
    prix_unitaire: 800000,
    quantite: 1,
    est_optionnel: false,
    est_selectionne: true,
    image_principale: 'images/lieu_reception.png',
  },
  {
    id: 'traiteur',
    titre_fr: 'Traiteur Gastronomique',
    titre_ar: 'خدمة الطعام الفاخر',
    desc_fr: 'Menu raffiné en 5 services, entrées variées, plats traditionnels et modernes.',
    desc_ar: 'قائمة طعام راقية من 5 أطباق، مقبلات متنوعة، أطباق تقليدية وعصرية.',
    prix_unitaire: 8000,
    quantite: 100,
    est_optionnel: false,
    est_selectionne: true,
    image_principale: 'images/traiteur_gastronomique.png',
  },
  {
    id: 'decoration',
    titre_fr: 'Décoration Florale',
    titre_ar: 'تنسيق الزهور',
    desc_fr: 'Centres de table, arche nuptiale, bouquets de mariée et boutonnières.',
    desc_ar: 'تنسيقات الطاولات، قوس الزفاف، باقة العروس وأزرار الجاكيت.',
    prix_unitaire: 35000,
    quantite: 10,
    est_optionnel: false,
    est_selectionne: true,
    image_principale: 'images/decoration_florale.png',
  },
  {
    id: 'photo',
    titre_fr: 'Photographe & Vidéaste',
    titre_ar: 'مصور فوتوغرافي وفيديو',
    desc_fr: 'Couverture complète, album premium 40 pages et film cinématique.',
    desc_ar: 'تغطية كاملة، ألبوم فاخر 40 صفحة وفيلم سينمائي.',
    prix_unitaire: 150000,
    quantite: 1,
    est_optionnel: true,
    est_selectionne: true,
    image_principale: 'images/photographe_mariage.png',
  },
  {
    id: 'musique',
    titre_fr: 'DJ & Ambiance Musicale',
    titre_ar: 'دي جي وأجواء موسيقية',
    desc_fr: 'DJ professionnel, éclairage scénique, son haute-fidélité et playlist sur mesure.',
    desc_ar: 'دي جي محترف، إضاءة مسرحية، صوت عالي الجودة وقائمة أغاني مخصصة.',
    prix_unitaire: 80000,
    quantite: 1,
    est_optionnel: true,
    est_selectionne: false,
    image_principale: 'images/dj_musique.png',
  },
  {
    id: 'gateau',
    titre_fr: 'Wedding Cake',
    titre_ar: 'كعكة الزفاف',
    desc_fr: 'Pièce montée sur mesure, 5 étages, design exclusif par notre chef pâtissier.',
    desc_ar: 'كعكة مصممة خصيصاً من 5 طبقات، تصميم حصري من طاهينا المختص.',
    prix_unitaire: 1500,
    quantite: 100,
    est_optionnel: true,
    est_selectionne: true,
    image_principale: 'images/wedding_cake.png',
  },
  {
    id: 'voiture',
    titre_fr: 'Voiture de Prestige',
    titre_ar: 'سيارة فاخرة',
    desc_fr: 'Mercedes ou BMW série 7 avec chauffeur, décoration florale incluse.',
    desc_ar: 'مرسيدس أو بي إم دبليو الفئة السابعة مع سائق، تزيين بالزهور مشمول.',
    prix_unitaire: 60000,
    quantite: 1,
    est_optionnel: true,
    est_selectionne: false,
    image_principale: 'images/voiture_luxe.png',
  },
  {
    id: 'fairepart',
    titre_fr: 'Faire-Part & Papeterie',
    titre_ar: 'بطاقات الدعوة',
    desc_fr: 'Suite complète : save the date, invitations, menus et marque-places.',
    desc_ar: 'مجموعة كاملة: بطاقات حجز الموعد، دعوات، قوائم طعام وبطاقات الأماكن.',
    prix_unitaire: 800,
    quantite: 100,
    est_optionnel: true,
    est_selectionne: false,
    image_principale: 'images/faire_part.png',
  },
];

const TVA_RATE = 0.19;
const STORAGE_KEY = 'mariage_devis_data';

// ─── State ────────────────────────────────────────────────────
let currentLang = 'fr';
let editMode = false;

function t(key) {
  return translations[currentLang][key] || key;
}

function tItem(item) {
  return {
    titre: item['titre_' + currentLang] || item.titre_fr || '',
    description: item['desc_' + currentLang] || item.desc_fr || '',
  };
}

function isRTL() {
  return currentLang === 'ar';
}

// ─── Image Compression Utility (via Canvas) ───────────────────
function processImageFile(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxDim = 320; // 320px is perfect for thumbnails and PDF rendering
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxDim) {
          height *= maxDim / width;
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width *= maxDim / height;
          height = maxDim;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Get resized jpeg at compressed quality to conserve localStorage quota
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      callback(compressedDataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ─── localStorage ─────────────────────────────────────────────
function saveToStorage(store) {
  const data = {
    items: store.state.items.map((item) => {
      const plain = {};
      for (const key of Object.keys(item)) {
        plain[key] = item[key];
      }
      return plain;
    }),
    customHeader: store.state.customHeader || null,
    activeClientId: store.state.activeClientId || null,
    activeProjectId: store.state.activeProjectId || null,
    companyInfo: store.state.companyInfo ? {
      name: store.state.companyInfo.name,
      phone: store.state.companyInfo.phone,
      email: store.state.companyInfo.email,
      address: store.state.companyInfo.address,
      logo: store.state.companyInfo.logo,
    } : null,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
    // Sync active project back to clients database
    if (store.state.activeClientId && store.state.activeProjectId) {
      updateClientProjectData(store.state.activeClientId, store.state.activeProjectId, {
        items: data.items,
        customHeader: data.customHeader
      });
    }
  } catch (e) {
    console.error('LocalStorage save quota error:', e);
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    /* ignore parse errors */
  }
  return null;
}

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

// ─── Reactive Engine ──────────────────────────────────────────
function createReactiveStore(initialItems) {
  const listeners = new Set();
  let debounceId = null;

  const handler = {
    set(target, property, value) {
      target[property] = value;
      scheduleNotify();
      return true;
    },
  };

  const state = new Proxy({ 
    customHeader: null,
    activeClientId: null,
    activeProjectId: null,
    companyInfo: new Proxy({
      name: "Agence Élégance Nuptiale",
      phone: "+213 5 55 12 34 56",
      email: "contact@elegance-nuptiale.dz",
      address: "Algérie",
      logo: ""
    }, handler)
  }, handler);
  
  state.items = initialItems.map((item) => new Proxy({ ...item }, handler));

  function scheduleNotify() {
    if (debounceId) cancelAnimationFrame(debounceId);
    debounceId = requestAnimationFrame(() => {
      debounceId = null;
      listeners.forEach((fn) => fn(state));
    });
  }

  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function getComputed() {
    const selectedItems = state.items.filter((i) => i.est_selectionne);
    const total_ht = selectedItems.reduce(
      (sum, item) => sum + item.prix_unitaire * item.quantite,
      0
    );
    const tva = total_ht * TVA_RATE;
    const total_ttc = total_ht + tva;
    const nbSelected = selectedItems.length;
    const nbOptions = state.items.filter((i) => i.est_optionnel).length;
    return { total_ht, tva, total_ttc, nbSelected, nbOptions };
  }


  // ── Actions ──
  function toggleSelection(id) {
    const item = state.items.find((i) => i.id === id);
    if (item) item.est_selectionne = !item.est_selectionne;
  }

  function updateQuantity(id, qty) {
    const item = state.items.find((i) => i.id === id);
    if (item) item.quantite = Math.max(1, qty);
  }

  function updateItemField(id, field, value) {
    const item = state.items.find((i) => i.id === id);
    if (item) item[field] = value;
  }

  function addItem(newItem) {
    const proxied = new Proxy({ ...newItem }, handler);
    state.items.push(proxied);
    scheduleNotify();
  }

  function removeItem(id) {
    const idx = state.items.findIndex((i) => i.id === id);
    if (idx !== -1) {
      state.items.splice(idx, 1);
      scheduleNotify();
    }
  }

  function resetItems(items) {
    state.items.length = 0;
    items.forEach((item) => {
      state.items.push(new Proxy({ ...item }, handler));
    });
    state.customHeader = null;
    scheduleNotify();
  }

  return {
    state,
    subscribe,
    getComputed,
    toggleSelection,
    updateQuantity,
    updateItemField,
    addItem,
    removeItem,
    resetItems,
  };
}

// ─── Format Helpers ───────────────────────────────────────────
function formatPrice(amount) {
  return (
    new Intl.NumberFormat('fr-DZ', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount) + ' DA'
  );
}

function formatPriceDecimal(amount) {
  return (
    new Intl.NumberFormat('fr-DZ', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount) + ' DA'
  );
}

// ─── Language Switching ───────────────────────────────────────
function switchLanguage(store) {
  currentLang = currentLang === 'fr' ? 'ar' : 'fr';
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
  updateStaticText(store);
  renderCards(store);
  const computed = store.getComputed();
  updateStickyBar(computed);
  updateStats(store);
}

function updateStaticText(store) {
  // Header
  const badge = document.querySelector('.header__badge');
  if (badge) badge.innerHTML = `<span class="header__badge-dot"></span>${t('badge')}`;

  const headerTitle = document.querySelector('.header__title');
  const headerSub = document.querySelector('.header__subtitle');

  // Use custom header if set
  const ch = store.state.customHeader;
  if (ch && ch['title_' + currentLang]) {
    headerTitle.textContent = ch['title_' + currentLang];
  } else {
    headerTitle.textContent = t('title');
  }
  if (ch && ch['subtitle_' + currentLang]) {
    headerSub.textContent = ch['subtitle_' + currentLang];
  } else {
    headerSub.textContent = t('subtitle');
  }

  if (editMode) {
    headerTitle.setAttribute('contenteditable', 'true');
    headerSub.setAttribute('contenteditable', 'true');
    headerTitle.classList.add('editable');
    headerSub.classList.add('editable');
  } else {
    headerTitle.removeAttribute('contenteditable');
    headerSub.removeAttribute('contenteditable');
    headerTitle.classList.remove('editable');
    headerSub.classList.remove('editable');
  }

  // Stats labels
  const statLabels = document.querySelectorAll('.stat-item__label');
  if (statLabels[0]) statLabels[0].textContent = t('statPrestations');
  if (statLabels[1]) statLabels[1].textContent = t('statOptions');
  if (statLabels[2]) statLabels[2].textContent = t('statSelected');

  // Section
  document.querySelector('.section-title h2').textContent = t('sectionTitle');
  document.querySelector('.section-title p').textContent = t('sectionSubtitle');

  // Sticky bar labels
  const stickyLabels = document.querySelectorAll('.sticky-bar__label');
  if (stickyLabels[0]) stickyLabels[0].textContent = t('totalHT');
  if (stickyLabels[1]) stickyLabels[1].textContent = t('tva');
  if (stickyLabels[2]) stickyLabels[2].textContent = t('totalTTC');
  if (stickyLabels[3]) stickyLabels[3].textContent = t('prestationsLabel');

  // PDF button
  const btnPdf = document.getElementById('btn-generate-pdf');
  if (btnPdf) btnPdf.innerHTML = `<span class="btn-pdf__icon">📄</span>${t('btnPdf')}`;

  // Language pills
  const pillFr = document.getElementById('pill-fr');
  const pillAr = document.getElementById('pill-ar');
  if (pillFr && pillAr) {
    if (currentLang === 'fr') {
      pillFr.classList.add('lang-pill--active');
      pillAr.classList.remove('lang-pill--active');
    } else {
      pillAr.classList.add('lang-pill--active');
      pillFr.classList.remove('lang-pill--active');
    }
  }

  // Edit toggle button text
  const editLabel = document.getElementById('edit-toggle-label');
  if (editLabel) editLabel.textContent = editMode ? t('editBtnDone') : t('editBtn');

  // Reset button
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.textContent = '↺ ' + t('resetBtn');
    resetBtn.style.display = editMode ? '' : 'none';
  }

  // Company Settings Pane
  const settingsSection = document.getElementById('company-settings-section');
  if (settingsSection) {
    settingsSection.style.display = editMode ? 'block' : 'none';

    // Update labels and placeholder text
    document.getElementById('comp-settings-title').textContent = t('compSettingsTitle');
    document.getElementById('lbl-comp-name').textContent = t('compName');
    document.getElementById('lbl-comp-phone').textContent = t('compPhone');
    document.getElementById('lbl-comp-email').textContent = t('compEmail');
    document.getElementById('lbl-comp-address').textContent = t('compAddress');
    
    const labelBrowseLogo = document.getElementById('label-browse-logo');
    if (labelBrowseLogo) {
      labelBrowseLogo.innerHTML = `📁 ${t('btnBrowseLogo')} <input type="file" id="input-comp-logo" accept="image/*" style="display:none" onchange="window.handleCompanyLogo(this)" />`;
    }
    const btnRemoveLogo = document.getElementById('btn-remove-logo');
    if (btnRemoveLogo) {
      btnRemoveLogo.textContent = t('toastLogoRemoved').split(' ')[1]; // "Supprimer" text in clean format
    }

    // Populate data
    const info = store.state.companyInfo;
    if (info) {
      document.getElementById('input-comp-name').value = info.name || '';
      document.getElementById('input-comp-phone').value = info.phone || '';
      document.getElementById('input-comp-email').value = info.email || '';
      document.getElementById('input-comp-address').value = info.address || '';

      const preview = document.getElementById('comp-logo-preview');
      const placeholder = document.getElementById('comp-logo-placeholder');
      if (info.logo) {
        preview.src = info.logo;
        preview.style.display = 'block';
        placeholder.style.display = 'none';
      } else {
        preview.src = '';
        preview.style.display = 'none';
        placeholder.style.display = 'block';
        placeholder.textContent = t('lblLogoPlaceholder');
      }
    }
  }

  // Client manager i18n
  const clientBtnLabel = document.getElementById('client-btn-label');
  if (clientBtnLabel) clientBtnLabel.textContent = t('clientBtn');

  const clientModalTitle = document.getElementById('client-modal-title');
  if (clientModalTitle) clientModalTitle.textContent = t('clientManagerTitle');

  const lblClientsList = document.getElementById('lbl-clients-list');
  if (lblClientsList) lblClientsList.textContent = t('clientsList');

  const btnAddClientTrigger = document.getElementById('btn-add-client-trigger');
  if (btnAddClientTrigger) btnAddClientTrigger.textContent = '+ ' + (currentLang === 'ar' ? t('addClient').substring(2) : t('addClient')); // clean up emoji or translate cleanly

  const lblSelectClientPrompt = document.getElementById('lbl-select-client-prompt');
  if (lblSelectClientPrompt) lblSelectClientPrompt.textContent = t('selectClientPrompt');

  const lblProjectsHeading = document.getElementById('lbl-projects-heading');
  if (lblProjectsHeading) lblProjectsHeading.textContent = t('projectsHeading');

  const btnExportDb = document.getElementById('btn-export-db');
  if (btnExportDb) btnExportDb.textContent = t('btnExportDb');

  const importDbLabel = document.getElementById('lbl-import-db');
  if (importDbLabel) {
    importDbLabel.innerHTML = `📁 ${t('lblImportDb')} <input type="file" id="input-import-db" accept=".json" style="display:none" onchange="window.importDatabase(this)" />`;
  }

  // GitHub translations
  const btnGithubBackup = document.getElementById('btn-github-backup');
  if (btnGithubBackup) btnGithubBackup.innerHTML = `☁️ ${t('btnGithubBackup')}`;

  const btnGithubRestore = document.getElementById('btn-github-restore');
  if (btnGithubRestore) btnGithubRestore.innerHTML = `☁️ ${t('btnGithubRestore')}`;

  const btnGithubConfigToggle = document.getElementById('btn-github-config-toggle');
  if (btnGithubConfigToggle) btnGithubConfigToggle.innerHTML = `⚙️ ${t('btnGithubConfig')}`;

  const lblGithubConfigTitle = document.getElementById('lbl-github-config-title');
  if (lblGithubConfigTitle) lblGithubConfigTitle.textContent = t('lblGithubConfigTitle');

  const lblGhRepo = document.getElementById('lbl-gh-repo');
  if (lblGhRepo) lblGhRepo.textContent = t('lblGhRepo');

  const lblGhBranch = document.getElementById('lbl-gh-branch');
  if (lblGhBranch) lblGhBranch.textContent = t('lblGhBranch');

  const lblGhFile = document.getElementById('lbl-gh-file');
  if (lblGhFile) lblGhFile.textContent = t('lblGhFile');

  const lblGhToken = document.getElementById('lbl-gh-token');
  if (lblGhToken) lblGhToken.textContent = t('lblGhToken');

  const btnSaveGhConfig = document.getElementById('btn-save-gh-config');
  if (btnSaveGhConfig) btnSaveGhConfig.textContent = t('btnSaveGhConfig');

  const clientModalCloseBtn = document.getElementById('client-modal-btn-close');
  if (clientModalCloseBtn) clientModalCloseBtn.textContent = currentLang === 'ar' ? 'إغلاق' : 'Fermer';

  // Client info display card i18n
  const lblClientInfoTitle = document.getElementById('lbl-client-info-title');
  if (lblClientInfoTitle) lblClientInfoTitle.textContent = t('lblClientInfoTitle');

  const lblInfoClient = document.getElementById('lbl-info-client');
  if (lblInfoClient) lblInfoClient.textContent = t('lblInfoClient');

  const lblInfoProject = document.getElementById('lbl-info-project');
  if (lblInfoProject) lblInfoProject.textContent = t('lblInfoProject');

  const lblInfoPhone = document.getElementById('lbl-info-phone');
  if (lblInfoPhone) lblInfoPhone.textContent = t('lblInfoPhone');

  const lblInfoEmail = document.getElementById('lbl-info-email');
  if (lblInfoEmail) lblInfoEmail.textContent = t('lblInfoEmail');

  const lblInfoAddress = document.getElementById('lbl-info-address');
  if (lblInfoAddress) lblInfoAddress.textContent = t('lblInfoAddress');
}

// ─── Edit Mode ────────────────────────────────────────────────
function toggleEditMode(store) {
  editMode = !editMode;
  document.body.classList.toggle('is-edit-mode', editMode);

  if (!editMode) {
    // Save custom header text
    const headerTitle = document.querySelector('.header__title');
    const headerSub = document.querySelector('.header__subtitle');
    if (!store.state.customHeader) {
      store.state.customHeader = {};
    }
    store.state.customHeader['title_' + currentLang] = headerTitle.textContent;
    store.state.customHeader['subtitle_' + currentLang] = headerSub.textContent;
    saveToStorage(store);
    showToast(t('toastEditOff'));
  } else {
    showToast(t('toastEditOn'));
  }

  updateStaticText(store);
  renderCards(store);
  updateStats(store);
}

// ─── DOM Rendering ────────────────────────────────────────────
function renderCards(store) {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';

  store.state.items.forEach((item) => {
    const card = document.createElement('div');
    card.className = `card${item.est_selectionne ? ' is-selected' : ''}${editMode ? ' is-editing' : ''}`;
    card.id = `card-${item.id}`;

    const lineTotal = item.prix_unitaire * item.quantite;
    const itemText = tItem(item);

    if (editMode) {
      card.innerHTML = `
        <button class="card__delete-btn" data-delete-id="${item.id}" title="${t('deleteConfirm')}">✕</button>
        <div class="card__image-wrapper">
          <img class="card__image" src="${item.image_principale}" alt="${itemText.titre}" loading="lazy"
               onerror="this.style.display='none'" />
          <div class="card__image-overlay"></div>
          <div class="card__image-edit">
            <label class="btn-browse-card" style="margin-bottom: 6px;">
              📷 ${t('btnBrowse')}
              <input type="file" accept="image/*" style="display:none" onchange="window.handleCardPhoto(this, '${item.id}')" />
            </label>
            <input type="text" class="card__edit-input card__edit-input--url"
                   value="${item.image_principale.startsWith('data:') ? '' : item.image_principale}"
                   data-field="image_principale" data-id="${item.id}"
                   placeholder="Ou URL image…" />
          </div>
        </div>
        <div class="card__body">
          <input type="text" class="card__edit-input card__edit-input--title"
                 value="${itemText.titre}"
                 data-field="titre_${currentLang}" data-id="${item.id}"
                 placeholder="${t('editTitlePlaceholder')}" />
          <textarea class="card__edit-input card__edit-input--desc"
                    data-field="desc_${currentLang}" data-id="${item.id}"
                    placeholder="${t('editDescPlaceholder')}">${itemText.description}</textarea>
          <div class="card__price-row">
            <div class="card__edit-price-group">
              <input type="number" class="card__edit-input card__edit-input--price"
                     value="${item.prix_unitaire}"
                     data-field="prix_unitaire" data-id="${item.id}"
                     placeholder="${t('editPricePlaceholder')}" min="0" />
              <span class="card__price-unit">DA ${t('unit')}</span>
            </div>
            <div class="card__quantity">
              <span class="card__qty-label">${t('qtyLabel')}</span>
              <button class="card__qty-btn" data-action="decrease" data-id="${item.id}">−</button>
              <span class="card__qty-value">${item.quantite}</span>
              <button class="card__qty-btn" data-action="increase" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
        <div class="card__footer">
          <label class="card__opt-toggle">
            <input type="checkbox" ${item.est_optionnel ? 'checked' : ''} data-opt-id="${item.id}" />
            <span>${t('badgeOptional')}</span>
          </label>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="card__image-wrapper">
          <img class="card__image" src="${item.image_principale}" alt="${itemText.titre}" loading="lazy"
               onerror="this.style.display='none'" />
          <div class="card__image-overlay"></div>
          <span class="card__badge ${item.est_optionnel ? '' : 'card__badge--required'}">
            ${item.est_optionnel ? t('badgeOptional') : t('badgeIncluded')}
          </span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${itemText.titre}</h3>
          <p class="card__description">${itemText.description}</p>
          <div class="card__price-row">
            <div>
              <span class="card__price">${formatPrice(item.prix_unitaire)}</span>
              <span class="card__price-unit"> ${t('unit')}</span>
            </div>
            <div class="card__quantity">
              <span class="card__qty-label">${t('qtyLabel')}</span>
              <button class="card__qty-btn" data-action="decrease" data-id="${item.id}">−</button>
              <span class="card__qty-value">${item.quantite}</span>
              <button class="card__qty-btn" data-action="increase" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
        <div class="card__line-total">
          <span class="card__line-total-label">${t('subtotalLabel')}</span>
          <span class="card__line-total-value">${formatPrice(lineTotal)}</span>
        </div>
        <div class="card__footer">
          <div class="card__toggle ${item.est_selectionne ? 'is-active' : ''}" data-toggle-id="${item.id}">
            <div class="card__checkbox"></div>
            <span class="card__toggle-label">${item.est_selectionne ? t('toggleOn') : t('toggleOff')}</span>
          </div>
        </div>
      `;
    }
    grid.appendChild(card);
  });

  // Add "new" card in edit mode
  if (editMode) {
    const addCard = document.createElement('div');
    addCard.className = 'card card--add-new';
    addCard.id = 'card-add-new';
    addCard.innerHTML = `
      <div class="card--add-new__inner">
        <span class="card--add-new__icon">+</span>
        <span class="card--add-new__label">${t('addCardTitle')}</span>
      </div>
    `;
    addCard.addEventListener('click', () => openModal());
    grid.appendChild(addCard);
  }

  bindCardEvents(store);
}

function bindCardEvents(store) {
  // Toggle selection (view mode)
  document.querySelectorAll('[data-toggle-id]').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      store.toggleSelection(toggle.dataset.toggleId);
    });
  });

  // Quantity buttons
  document.querySelectorAll('.card__qty-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = store.state.items.find((i) => i.id === btn.dataset.id);
      if (!item) return;
      const newQty = btn.dataset.action === 'increase' ? item.quantite + 1 : item.quantite - 1;
      store.updateQuantity(btn.dataset.id, newQty);
    });
  });

  if (editMode) {
    // Delete buttons
    document.querySelectorAll('[data-delete-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(t('deleteConfirm'))) {
          store.removeItem(btn.dataset.deleteId);
          showToast(t('toastItemDeleted'));
          saveToStorage(store);
        }
      });
    });

    // Inline edit inputs (text, textarea, number)
    document.querySelectorAll('.card__edit-input').forEach((input) => {
      const handler = () => {
        const field = input.dataset.field;
        const id = input.dataset.id;
        let value = input.value;

        if (field === 'prix_unitaire') {
          value = Math.max(0, parseInt(value) || 0);
        }

        store.updateItemField(id, field, value);
        saveToStorage(store);
      };
      input.addEventListener('change', handler);
      input.addEventListener('blur', handler);
    });

    // Optional toggle checkbox
    document.querySelectorAll('[data-opt-id]').forEach((chk) => {
      chk.addEventListener('change', () => {
        store.updateItemField(chk.dataset.optId, 'est_optionnel', chk.checked);
        saveToStorage(store);
      });
    });
  }
}

// ─── Sticky bar & Stats ──────────────────────────────────────
function updateStickyBar(computed) {
  const els = {
    ht: document.getElementById('total-ht'),
    tva: document.getElementById('total-tva'),
    ttc: document.getElementById('total-ttc'),
    count: document.getElementById('selected-count'),
  };
  if (els.ht) { els.ht.textContent = formatPriceDecimal(computed.total_ht); animateValue(els.ht); }
  if (els.tva) { els.tva.textContent = formatPriceDecimal(computed.tva); animateValue(els.tva); }
  if (els.ttc) { els.ttc.textContent = formatPriceDecimal(computed.total_ttc); animateValue(els.ttc); }
  if (els.count) els.count.textContent = computed.nbSelected;
}

function updateStats(store) {
  const computed = store.getComputed();
  const el1 = document.getElementById('stat-total-items');
  const el2 = document.getElementById('stat-options');
  const el3 = document.getElementById('stat-selected');
  if (el1) el1.textContent = store.state.items.length;
  if (el2) el2.textContent = computed.nbOptions;
  if (el3) el3.textContent = computed.nbSelected;
}

function animateValue(el) {
  el.classList.remove('updating');
  void el.offsetWidth;
  el.classList.add('updating');
}

// ─── Toast ────────────────────────────────────────────────────
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 2500);
}

// ─── Modal ────────────────────────────────────────────────────
function openModal() {
  const modal = document.getElementById('add-modal');
  if (!modal) return;

  // Update modal labels for current language
  modal.querySelector('.modal__title').textContent = t('modalTitle');
  modal.querySelector('[data-label="titleFr"]').textContent = t('modalTitleFr');
  modal.querySelector('[data-label="titleAr"]').textContent = t('modalTitleAr');
  modal.querySelector('[data-label="descFr"]').textContent = t('modalDescFr');
  modal.querySelector('[data-label="descAr"]').textContent = t('modalDescAr');
  modal.querySelector('[data-label="price"]').textContent = t('modalPrice');
  modal.querySelector('[data-label="qty"]').textContent = t('modalQty');
  modal.querySelector('[data-label="image"]').textContent = t('modalImage');
  modal.querySelector('[data-label="optional"]').textContent = t('modalOptional');
  modal.querySelector('#modal-btn-add').textContent = t('modalAdd');
  modal.querySelector('#modal-btn-cancel').textContent = t('modalCancel');

  // Reset form
  modal.querySelector('#modal-form').reset();
  if (typeof window.clearModalPhoto === 'function') {
    window.clearModalPhoto();
  }
  modal.classList.add('is-open');
}

function closeModal() {
  const modal = document.getElementById('add-modal');
  if (modal) modal.classList.remove('is-open');
}

function handleModalSubmit(store) {
  const form = document.getElementById('modal-form');
  const titreFr = form.querySelector('#input-titre-fr').value.trim();
  const titreAr = form.querySelector('#input-titre-ar').value.trim();
  const descFr = form.querySelector('#input-desc-fr').value.trim();
  const descAr = form.querySelector('#input-desc-ar').value.trim();
  const prix = parseInt(form.querySelector('#input-prix').value) || 0;
  const qty = parseInt(form.querySelector('#input-qty').value) || 1;
  const imageUrl = form.querySelector('#input-image').value.trim();
  const isOptional = form.querySelector('#input-optional').checked;

  if (!titreFr && !titreAr) return;

  const newItem = {
    id: 'custom_' + Date.now(),
    titre_fr: titreFr || titreAr,
    titre_ar: titreAr || titreFr,
    desc_fr: descFr,
    desc_ar: descAr,
    prix_unitaire: prix,
    quantite: qty,
    est_optionnel: isOptional,
    est_selectionne: true,
    image_principale: imageUrl || '',
  };

  store.addItem(newItem);
  saveToStorage(store);
  closeModal();
  showToast(t('toastItemAdded'));
}

// ─── PDF Generation ───────────────────────────────────────────
async function generatePDF(store) {
  try {
    showToast(t('toastGenerating'));

    const computed = store.getComputed();
    const selectedItems = store.state.items.filter((i) => i.est_selectionne);
    const dir = isRTL() ? 'rtl' : 'ltr';
    const align = isRTL() ? 'right' : 'left';
    const alignEnd = isRTL() ? 'left' : 'right';
    const fontFamily = isRTL()
      ? "'Noto Sans Arabic', 'Inter', Arial, sans-serif"
      : "'Inter', Arial, sans-serif";
    const serifFont = isRTL()
      ? "'Noto Sans Arabic', Georgia, serif"
      : "'Playfair Display', Georgia, serif";

    const today = new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-DZ' : 'fr-DZ', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

    const info = store.state.companyInfo;

    // ── Color Palette (gold accents on white background) ──
    const C = {
      bgDeep:    '#ffffff',
      bgSurface: '#fdfbf7',
      bgCard:    '#f8f4ec',
      gold100:   '#faf0d7',
      gold200:   '#f0daa5',
      gold300:   '#d4af78',
      gold400:   '#c9a050',
      gold500:   '#b8860b',
      textPrimary:   '#1a1a2e',
      textSecondary: '#666666',
      textMuted:     '#999999',
      glassBorder:   '#e8e0d0',
      glassBorderHover: 'rgba(212, 175, 120, 0.45)',
      rowEven:   '#ffffff',
      rowOdd:    '#fdfbf7',
    };

    // ── Generate unique quote reference ──
    const activeProjectId = store.state.activeProjectId;
    const refSeed = activeProjectId ? activeProjectId.replace('project_', '') : String(Date.now());
    const refCode = refSeed.slice(-6).toUpperCase();
    const refYear = new Date().getFullYear();
    const quoteRef = `DEV-${refYear}-${refCode}`;

    // ── Retrieve client + project data ──
    const activeClientId = store.state.activeClientId;
    let client = null;
    let project = null;
    if (activeClientId && activeProjectId) {
      const clients = loadClients();
      client = clients.find(c => c.id === activeClientId);
      project = client ? client.projects.find(p => p.id === activeProjectId) : null;
    }

    // ── Layout Modes Configurations ──
    function getModeParams(mode) {
      if (mode === 'extra-compact') {
        return {
          logoMaxHeight: '32px',
          headerMarginBottom: '6px',
          dividerMarginBottom: '6px',
          rowPadding: '4px 6px',
          imageSize: '24px',
          totalsMarginTop: '4px',
          totalsPadding: '2px 0',
          totalsFontSize: '10px',
          totalsTtcFontSize: '12px',
          tableMarginBottom: '6px',
          titleFontSize: '10px',
          descFontSize: '8px'
        };
      } else if (mode === 'compact') {
        return {
          logoMaxHeight: '45px',
          headerMarginBottom: '10px',
          dividerMarginBottom: '10px',
          rowPadding: '6px 10px',
          imageSize: '32px',
          totalsMarginTop: '6px',
          totalsPadding: '4px 0',
          totalsFontSize: '11px',
          totalsTtcFontSize: '14px',
          tableMarginBottom: '10px',
          titleFontSize: '11px',
          descFontSize: '9px'
        };
      } else {
        // standard
        return {
          logoMaxHeight: '60px',
          headerMarginBottom: '15px',
          dividerMarginBottom: '15px',
          rowPadding: '8px 12px',
          imageSize: '40px',
          totalsMarginTop: '10px',
          totalsPadding: '6px 0',
          totalsFontSize: '13px',
          totalsTtcFontSize: '17px',
          tableMarginBottom: '15px',
          titleFontSize: '12px',
          descFontSize: '10px'
        };
      }
    }

    // ── Dynamic HTML Generator ──
    function buildHtmlString(mode, params, pageBreakLastRow) {
      let companyLogoHtml = '';
      if (info && info.logo) {
        companyLogoHtml = `<img src="${info.logo}" style="height: ${params.logoMaxHeight}; max-width: 180px; object-fit: contain; margin-bottom: 10px; display: block;" />`;
      }

      const companyName = info ? info.name : t('pdfAgency');
      const companyColHtml = `
        <td style="width: 50%; vertical-align: top; text-align: ${align}; padding-${isRTL() ? 'left' : 'right'}: 20px;">
          ${companyLogoHtml}
          <div style="font-family: ${serifFont}; font-size: ${mode === 'standard' ? '20px' : (mode === 'compact' ? '17px' : '14px')}; font-weight: 700; color: ${C.gold300}; margin-bottom: 6px; line-height: 1.2;">${companyName}</div>
          ${info && info.address ? `<div style="font-size: ${mode === 'standard' ? '11px' : '9px'}; color: ${C.textSecondary}; margin-bottom: 3px;">📍 ${info.address}</div>` : ''}
          ${info && info.phone ? `<div style="font-size: ${mode === 'standard' ? '11px' : '9px'}; color: ${C.textSecondary}; margin-bottom: 3px;">📞 ${info.phone}</div>` : ''}
          ${info && info.email ? `<div style="font-size: ${mode === 'standard' ? '11px' : '9px'}; color: ${C.textSecondary};">✉ ${info.email}</div>` : ''}
        </td>
      `;

      let clientDetailRows = '';
      if (client) {
        clientDetailRows = `
          <div style="margin-top: ${mode === 'standard' ? '14px' : '8px'}; padding-top: ${mode === 'standard' ? '12px' : '8px'}; border-top: 1px solid ${C.glassBorder};">
            <div style="font-size: ${mode === 'standard' ? '9px' : '8px'}; text-transform: uppercase; letter-spacing: 0.1em; color: ${C.textMuted}; margin-bottom: ${mode === 'standard' ? '8px' : '4px'};">${t('pdfClientDetails')}</div>
            <div style="font-size: ${mode === 'standard' ? '13px' : '11px'}; font-weight: 700; color: ${C.gold300}; margin-bottom: 4px;">${client.name}</div>
            ${project ? `<div style="font-size: ${mode === 'standard' ? '11px' : '9px'}; color: ${C.textSecondary}; margin-bottom: 2px;">${project.name}${project.date ? ' — ' + project.date : ''}</div>` : ''}
            ${client.phone ? `<div style="font-size: ${mode === 'standard' ? '11px' : '9px'}; color: ${C.textSecondary}; margin-bottom: 2px;">📞 ${client.phone}</div>` : ''}
            ${client.email ? `<div style="font-size: ${mode === 'standard' ? '11px' : '9px'}; color: ${C.textSecondary}; margin-bottom: 2px;">✉ ${client.email}</div>` : ''}
            ${client.address ? `<div style="font-size: ${mode === 'standard' ? '11px' : '9px'}; color: ${C.textSecondary};">📍 ${client.address}</div>` : ''}
          </div>
        `;
      }

      const quoteColHtml = `
        <td style="width: 50%; vertical-align: top; text-align: ${alignEnd}; padding-${isRTL() ? 'right' : 'left'}: 20px;">
          <div style="background: ${C.bgCard}; border: 1px solid ${C.glassBorder}; border-radius: 8px; padding: ${mode === 'standard' ? '12px 16px' : (mode === 'compact' ? '8px 12px' : '6px 8px')}; text-align: ${align};">
            <table style="width: 100%; border-collapse: collapse; font-size: ${mode === 'standard' ? '11px' : '9px'};">
              <tr>
                <td style="color: ${C.textMuted}; padding: 3px 0; white-space: nowrap; width: 45%;">${currentLang === 'ar' ? 'المرجع' : 'Référence'}</td>
                <td style="color: ${C.gold200}; font-weight: 600; padding: 3px 0;">${quoteRef}</td>
              </tr>
              <tr>
                <td style="color: ${C.textMuted}; padding: 3px 0;">${t('pdfDate')}</td>
                <td style="color: ${C.textPrimary}; padding: 3px 0;">${today}</td>
              </tr>
              ${project && project.date ? `
              <tr>
                <td style="color: ${C.textMuted}; padding: 3px 0;">${t('pdfProjectDate')}</td>
                <td style="color: ${C.textPrimary}; padding: 3px 0;">${project.date}</td>
              </tr>
              ` : ''}
            </table>
            ${clientDetailRows}
          </div>
        </td>
      `;

      const headerHtml = `
        <div style="text-align: center; font-family: ${serifFont}; font-size: ${mode === 'standard' ? '28px' : (mode === 'compact' ? '22px' : '18px')}; font-weight: 700; color: ${C.textPrimary}; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: ${mode === 'standard' ? '20px' : (mode === 'compact' ? '15px' : '10px')};">
          ${currentLang === 'ar' ? 'عرض أسعار' : 'DEVIS'}
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: ${params.headerMarginBottom};">
          <tr>
            ${isRTL() ? quoteColHtml + companyColHtml : companyColHtml + quoteColHtml}
          </tr>
        </table>
        <div style="height: 2px; background: linear-gradient(90deg, ${C.gold500}, ${C.gold300}, ${C.gold500}); margin-bottom: ${params.dividerMarginBottom}; border-radius: 1px;"></div>
      `;

      const tableHtml = `
        <table style="width: 100%; border-collapse: collapse; margin-bottom: ${params.tableMarginBottom};">
          <thead>
            <tr>
              <th style="text-align: ${align}; padding: ${params.rowPadding}; font-size: 10px; color: ${C.textMuted}; border-bottom: 1px solid ${C.glassBorderHover}; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">${t('pdfColPrestation')}</th>
              <th style="text-align: center; padding: ${params.rowPadding}; font-size: 10px; color: ${C.textMuted}; border-bottom: 1px solid ${C.glassBorderHover}; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">${t('pdfColQty')}</th>
              <th style="text-align: ${alignEnd}; padding: ${params.rowPadding}; font-size: 10px; color: ${C.textMuted}; border-bottom: 1px solid ${C.glassBorderHover}; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">${t('pdfColUnitPrice')}</th>
              <th style="text-align: ${alignEnd}; padding: ${params.rowPadding}; font-size: 10px; color: ${C.textMuted}; border-bottom: 1px solid ${C.glassBorderHover}; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">${t('pdfColTotal')}</th>
            </tr>
          </thead>
          <tbody>
            ${selectedItems.map((item, i) => {
              const txt = tItem(item);
              const rowBg = i % 2 === 0 ? C.rowEven : C.rowOdd;
              const isLastRow = (i === selectedItems.length - 1);
              const isLastRowAndShouldBreak = isLastRow && pageBreakLastRow;
              return `
                <tr style="background: ${rowBg}; ${isLastRowAndShouldBreak ? 'page-break-before: always; break-before: page;' : ''}" ${isLastRow ? 'id="pdf-last-row"' : ''}>
                  <td style="padding: ${params.rowPadding}; border-bottom: 1px solid ${C.glassBorder}; text-align: ${align};">
                    <div style="display: table; width: 100%;">
                      <div style="display: table-row;">
                        ${item.image_principale ? `
                          <div style="display: table-cell; vertical-align: middle; width: calc(${params.imageSize} + 10px); padding-${isRTL() ? 'left' : 'right'}: 10px;">
                            <img src="${item.image_principale}" style="width: ${params.imageSize}; height: ${params.imageSize}; object-fit: cover; border-radius: 6px; border: 1px solid ${C.glassBorder};" />
                          </div>
                        ` : ''}
                        <div style="display: table-cell; vertical-align: top;">
                          <strong style="font-size: ${params.titleFontSize}; color: ${C.textPrimary}; display: inline-block; margin-bottom: 2px;">${txt.titre}</strong><br>
                          <span style="font-size: ${params.descFontSize}; color: ${C.textSecondary}; line-height: 1.3; display: inline-block;">${txt.description}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style="text-align: center; padding: ${params.rowPadding}; border-bottom: 1px solid ${C.glassBorder}; font-size: ${params.titleFontSize}; color: ${C.textPrimary}; vertical-align: middle;">${item.quantite}</td>
                  <td style="text-align: ${alignEnd}; padding: ${params.rowPadding}; border-bottom: 1px solid ${C.glassBorder}; font-size: ${params.titleFontSize}; color: ${C.textSecondary}; vertical-align: middle;">${formatPrice(item.prix_unitaire)}</td>
                  <td style="text-align: ${alignEnd}; padding: ${params.rowPadding}; border-bottom: 1px solid ${C.glassBorder}; font-weight: 600; font-size: ${params.titleFontSize}; color: ${C.gold300}; vertical-align: middle;">${formatPrice(item.prix_unitaire * item.quantite)}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;

      const totalsHtml = `
        <div id="pdf-totals-block" style="width: 280px; margin-${isRTL() ? 'right' : 'left'}: auto; margin-${isRTL() ? 'left' : 'right'}: 0; page-break-inside: avoid; margin-top: ${params.totalsMarginTop};">
          <table style="width: 100%; border-collapse: collapse; font-size: ${params.totalsFontSize};">
            <tr style="border-bottom: 1px solid ${C.glassBorder};">
              <td style="padding: ${params.totalsPadding}; color: ${C.textSecondary}; text-align: ${align};">${t('totalHT')}</td>
              <td style="padding: ${params.totalsPadding}; font-weight: 500; text-align: ${alignEnd}; color: ${C.textPrimary};">${formatPriceDecimal(computed.total_ht)}</td>
            </tr>
            <tr style="border-bottom: 1px solid ${C.glassBorder};">
              <td style="padding: ${params.totalsPadding}; color: ${C.textSecondary}; text-align: ${align};">${t('tva')}</td>
              <td style="padding: ${params.totalsPadding}; font-weight: 500; text-align: ${alignEnd}; color: ${C.textPrimary};">${formatPriceDecimal(computed.tva)}</td>
            </tr>
            <tr style="border-top: 2px solid ${C.gold300};">
              <td style="padding: 8px 0; font-size: ${params.totalsTtcFontSize}; font-weight: 700; color: ${C.textPrimary}; text-align: ${align};">${t('totalTTC')}</td>
              <td style="padding: 8px 0; font-size: ${params.totalsTtcFontSize}; font-weight: 700; color: ${C.gold300}; text-align: ${alignEnd};">${formatPriceDecimal(computed.total_ttc)}</td>
            </tr>
          </table>
        </div>
      `;

      return `
        <div style="font-family: ${fontFamily}; color: ${C.textPrimary}; padding: 0 0 10px 0; max-width: 750px; margin: 0 auto; direction: ${dir}; background: ${C.bgDeep}; box-sizing: border-box;">
          ${headerHtml}
          ${tableHtml}
          ${totalsHtml}
        </div>
      `;
    }

    // ── Off-Screen Measurer ──
    function measureLayout(mode, pageBreakLastRow) {
      const params = getModeParams(mode);
      const htmlStr = buildHtmlString(mode, params, pageBreakLastRow);

      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '0';
      tempDiv.style.width = '750px';
      tempDiv.style.background = '#ffffff';
      tempDiv.style.boxSizing = 'border-box';
      tempDiv.style.visibility = 'hidden';
      document.body.appendChild(tempDiv);
      tempDiv.innerHTML = htmlStr;

      const tempRect = tempDiv.getBoundingClientRect();
      const lastRow = tempDiv.querySelector('#pdf-last-row');
      const totalsBlock = tempDiv.querySelector('#pdf-totals-block');

      const contentHeight = tempRect.height;
      const lastRowRect = lastRow ? lastRow.getBoundingClientRect() : null;
      const totalsRect = totalsBlock ? totalsBlock.getBoundingClientRect() : null;

      const lastRowTop = lastRowRect ? (lastRowRect.top - tempRect.top) : 0;
      const lastRowBottom = lastRowRect ? (lastRowRect.bottom - tempRect.top) : 0;
      const totalsTop = totalsRect ? (totalsRect.top - tempRect.top) : 0;
      const totalsBottom = totalsRect ? (totalsRect.bottom - tempRect.top) : 0;

      document.body.removeChild(tempDiv);

      return { contentHeight, lastRowTop, lastRowBottom, totalsTop, totalsBottom };
    }

    // ── Optimization Solver ──
    let chosenMode = 'standard';
    let chosenPageBreakLastRow = false;
    const P = 1022; // Printable page height limit in pixels for A4 width 750px

    // Helper to calculate which page an element starts on, considering overflow push
    function getElementPage(top, bottom, P) {
      const k = Math.floor(top / P) + 1;
      if (bottom > k * P) {
        return k + 1;
      }
      return k;
    }

    // 1. Measure standard
    let metrics = measureLayout('standard', false);
    if (metrics.contentHeight <= P) {
      chosenMode = 'standard';
      chosenPageBreakLastRow = false;
    } else {
      // 2. Measure compact
      metrics = measureLayout('compact', false);
      if (metrics.contentHeight <= P) {
        chosenMode = 'compact';
        chosenPageBreakLastRow = false;
      } else {
        // 3. Measure extra-compact
        metrics = measureLayout('extra-compact', false);
        if (metrics.contentHeight <= P) {
          chosenMode = 'extra-compact';
          chosenPageBreakLastRow = false;
        } else {
          // 4. Multi-page document
          // Use compact for 8+ items, standard otherwise for better presentation spacing
          const defaultMultiPageMode = selectedItems.length >= 8 ? 'compact' : 'standard';
          metrics = measureLayout(defaultMultiPageMode, false);

          const pageT = getElementPage(metrics.totalsTop, metrics.totalsBottom, P);
          const pageLastRow = getElementPage(metrics.lastRowTop, metrics.lastRowBottom, P);

          if (pageT > pageLastRow) {
            // Totals block is alone on the last page! Force page break before the last row
            chosenMode = defaultMultiPageMode;
            chosenPageBreakLastRow = true;
          } else {
            chosenMode = defaultMultiPageMode;
            chosenPageBreakLastRow = false;
          }
        }
      }
    }

    const finalParams = getModeParams(chosenMode);
    const htmlString = buildHtmlString(chosenMode, finalParams, chosenPageBreakLastRow);

    // Expose layout decisions for testing and verification
    window.__lastPDFResult = {
      chosenMode,
      chosenPageBreakLastRow,
      finalParams,
      htmlString,
      metrics
    };

    // ── Footer ──
    const contactText = info
      ? `${info.name} • ${info.email} • ${info.phone} • ${info.address}`
      : t('pdfContact');

    // Create a temporary container to render the footer using html2canvas.
    // This allows Arabic text, emojis, custom fonts and layout to be rendered
    // correctly as an image without encoding/rendering issues in jsPDF.
    const footerContainer = document.createElement('div');
    footerContainer.style.position = 'absolute';
    footerContainer.style.left = '0px';
    footerContainer.style.top = '0px';
    footerContainer.style.zIndex = '-9999';
    footerContainer.style.width = '750px';
    footerContainer.style.background = '#ffffff';
    footerContainer.style.boxSizing = 'border-box';
    footerContainer.style.display = 'block';
    document.body.appendChild(footerContainer);

    footerContainer.innerHTML = `
      <div style="font-family: ${fontFamily}; color: ${C.textPrimary}; padding: 15px 20px; text-align: center; direction: ${dir}; box-sizing: border-box; background: #ffffff;">
        <div style="height: 1px; background: ${C.glassBorder}; margin-bottom: 12px; width: 100%;"></div>
        <p style="font-size: 10px; color: ${C.textMuted}; margin: 0 0 6px 0; line-height: 1.4;">${t('pdfValidity')}</p>
        <p style="font-size: 10px; color: ${C.textMuted}; margin: 0; line-height: 1.4; font-weight: 500;">${contactText}</p>
      </div>
    `;

    let footerDataUrl = null;
    let footerHeightMm = 15; // default fallback

    const h2c = typeof html2canvas !== 'undefined' ? html2canvas : (window.html2canvas || null);
    if (h2c) {
      try {
        const canvas = await h2c(footerContainer, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          scrollX: 0,
          scrollY: 0,
          windowWidth: 750
        });
        footerDataUrl = canvas.toDataURL('image/png');
        const aspect = canvas.height / canvas.width;
        footerHeightMm = 190 * aspect; // 190mm fits A4 width (210) minus left/right margins (10+10)
      } catch (err) {
        console.error('Error rendering footer canvas:', err);
      }
    } else {
      console.error('html2canvas is not defined! Ensure html2pdf bundle is loaded.');
    }
    document.body.removeChild(footerContainer);

    if (typeof html2pdf !== 'undefined') {
      const opt = {
        margin: [10, 10, 28, 10], // bottom margin is 28mm to leave a blank zone for the footer image
        filename: `devis-mariage-${Date.now()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: false,
          scrollX: 0,
          scrollY: 0,
          backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(htmlString).toPdf().get('pdf').then(pdf => {
        const totalPages = pdf.internal.getNumberOfPages();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const pageWidth = pdf.internal.pageSize.getWidth();

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);

          // Render the footer image at the absolute bottom of each page
          if (footerDataUrl) {
            const yPos = pageHeight - footerHeightMm - 10;
            pdf.addImage(footerDataUrl, 'PNG', 10, yPos, 190, footerHeightMm);
          } else {
            // Text-based fallback if canvas render failed
            pdf.setFontSize(8);
            pdf.setTextColor(150, 150, 150);
            pdf.text(t('pdfValidity'), pageWidth / 2, pageHeight - 16, { align: 'center' });
            pdf.text(contactText, pageWidth / 2, pageHeight - 11, { align: 'center' });
          }

          // Render the page numbering below the footer image
          pdf.setFontSize(8);
          pdf.setTextColor(150, 150, 150);
          const pageText = currentLang === 'ar'
            ? `${i} / ${totalPages}`
            : `Page ${i} / ${totalPages}`;
            
          pdf.text(
            pageText,
            pageWidth / 2,
            pageHeight - 6,
            { align: 'center' }
          );
        }
      }).save()
        .then(() => showToast(t('toastSuccess')))
        .catch(err => {
          console.error('html2pdf render error:', err);
          alert('PDF Render Error: ' + err.message);
        });
    } else {
      // Fallback: Open in print window
      const printWin = window.open('', '_blank');
      const printFooterHtml = `
        <div style="margin-top: 40px; padding-top: 15px; border-top: 1px solid ${C.glassBorder}; text-align: center;">
          <p style="font-size: 11px; color: ${C.textSecondary}; margin: 0 0 5px 0;">${t('pdfValidity')}</p>
          <p style="font-size: 11px; color: ${C.textSecondary}; margin: 0;">${contactText}</p>
        </div>
      `;
      const printHtmlString = `
        <div style="font-family: ${fontFamily}; color: ${C.textPrimary}; padding: 20px; max-width: 750px; margin: 0 auto; direction: ${dir}; background: #ffffff;">
          ${htmlString}
          ${printFooterHtml}
        </div>
      `;
      printWin.document.write(`
        <!DOCTYPE html>
        <html lang="${currentLang}" dir="${dir}">
          <head>
            <title>${t('pdfTitle')}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
            <style>
              body { background: #f0f0f0; margin: 0; padding: 20px; }
              @media print {
                body { background: #fff; padding: 0; }
              }
            </style>
          </head>
          <body>
            ${printHtmlString}
          </body>
        </html>
      `);
      printWin.document.close();
      printWin.focus();
      setTimeout(() => {
        printWin.print();
        showToast(t('toastPrint'));
      }, 600);
    }
  } catch (error) {
    console.error('PDF generation crashed globally:', error);
    alert('PDF Generation Crash: ' + error.message);
  }
}

// ─── Initialization ───────────────────────────────────────────
let _store = null;

window.toggleLang = function () {
  if (_store) switchLanguage(_store);
};

window.toggleEdit = function () {
  if (_store) toggleEditMode(_store);
};

window.resetData = function () {
  if (_store && confirm(t('resetConfirm'))) {
    clearStorage();
    _store.resetItems(defaultItems);
    editMode = false;
    document.body.classList.remove('is-edit-mode');
    updateStaticText(_store);
    renderCards(_store);
    updateStickyBar(_store.getComputed());
    updateStats(_store);
    showToast(t('toastReset'));
  }
};

window.updateCompanyInfo = function (field, value) {
  if (_store && _store.state.companyInfo) {
    _store.state.companyInfo[field] = value;
    saveToStorage(_store);
  }
};

window.handleCompanyLogo = function (input) {
  if (input.files && input.files[0] && _store) {
    processImageFile(input.files[0], (dataUrl) => {
      _store.state.companyInfo.logo = dataUrl;
      saveToStorage(_store);
      updateStaticText(_store);
      showToast(t('toastLogoAdded'));
    });
  }
};

window.removeCompanyLogo = function () {
  if (_store && _store.state.companyInfo) {
    _store.state.companyInfo.logo = "";
    saveToStorage(_store);
    updateStaticText(_store);
    showToast(t('toastLogoRemoved'));
  }
};

window.handleCardPhoto = function (input, id) {
  if (input.files && input.files[0] && _store) {
    processImageFile(input.files[0], (dataUrl) => {
      _store.updateItemField(id, 'image_principale', dataUrl);
      saveToStorage(_store);
      renderCards(_store);
    });
  }
};

window.handleModalPhoto = function (input) {
  if (input.files && input.files[0]) {
    processImageFile(input.files[0], (dataUrl) => {
      const previewImg = document.getElementById('modal-photo-preview');
      const previewWrapper = document.getElementById('modal-photo-preview-wrapper');
      const inputUrl = document.getElementById('input-image');
      if (previewImg) previewImg.src = dataUrl;
      if (previewWrapper) previewWrapper.style.display = 'flex';
      if (inputUrl) {
        inputUrl.value = dataUrl;
        inputUrl.disabled = true;
      }
      showToast(t('modalPhotoReady'));
    });
  }
};

window.clearModalPhoto = function () {
  const previewImg = document.getElementById('modal-photo-preview');
  const previewWrapper = document.getElementById('modal-photo-preview-wrapper');
  const inputUrl = document.getElementById('input-image');
  const fileInput = document.getElementById('modal-input-image-file');
  if (previewImg) previewImg.src = '';
  if (previewWrapper) previewWrapper.style.display = 'none';
  if (inputUrl) {
    inputUrl.value = '';
    inputUrl.disabled = false;
  }
  if (fileInput) fileInput.value = '';
};

// ─── Client & Project Management Database ─────────────────────
const CLIENTS_STORAGE_KEY = 'mariage_devis_clients';

function loadClients() {
  try {
    const raw = localStorage.getItem(CLIENTS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading clients:', e);
  }
  return [];
}

function saveClients(clients) {
  try {
    localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(clients));
  } catch (e) {
    console.error('LocalStorage client database save quota error:', e);
  }
}

function updateClientProjectData(clientId, projectId, projectData) {
  const clients = loadClients();
  const client = clients.find((c) => c.id === clientId);
  if (!client) return;
  const project = client.projects.find((p) => p.id === projectId);
  if (!project) return;
  
  project.items = projectData.items;
  project.customHeader = projectData.customHeader;
  saveClients(clients);
}

// ─── Client Modal & Panel CRUD Actions ────────────────────────
window.selectedClientIdInModal = null;

window.openClientModal = function() {
  const modal = document.getElementById('client-modal');
  if (!modal) return;
  modal.classList.add('is-open');
  
  // Render client list
  window.renderClientsList();
  
  // Reset the pane view to welcome or current active client if any
  const store = _store;
  if (store && store.state.activeClientId) {
    window.selectClient(store.state.activeClientId);
  } else {
    // Show welcome screen
    document.getElementById('client-pane-welcome').style.display = 'flex';
    document.getElementById('client-form').style.display = 'none';
    document.getElementById('client-projects-view').style.display = 'none';
  }
};

window.closeClientModal = function() {
  const modal = document.getElementById('client-modal');
  if (modal) modal.classList.remove('is-open');
};

window.renderClientsList = function() {
  const container = document.getElementById('clients-list-container');
  if (!container) return;
  container.innerHTML = '';
  
  const clients = loadClients();
  const activeClientId = _store ? _store.state.activeClientId : null;
  const currentSelectedInModal = window.selectedClientIdInModal || activeClientId;
  
  if (clients.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 20px; font-size: 0.78rem; color: var(--color-text-muted);">${currentLang === 'ar' ? 'لا يوجد عملاء بعد' : 'Aucun client pour le moment.'}</div>`;
    return;
  }
  
  clients.forEach((client) => {
    const btn = document.createElement('div');
    const isActive = client.id === currentSelectedInModal;
    btn.className = `client-item-card ${isActive ? 'is-active' : ''}`;
    
    const numProjects = client.projects ? client.projects.length : 0;
    const projectText = currentLang === 'ar' 
      ? `مشاريع: ${numProjects}` 
      : `${numProjects} projet${numProjects > 1 ? 's' : ''}`;
      
    btn.innerHTML = `
      <span class="client-item-card__name">${client.name}</span>
      <span class="client-item-card__projects-count">${projectText}</span>
    `;
    
    btn.addEventListener('click', () => {
      window.selectClient(client.id);
    });
    
    container.appendChild(btn);
  });
};

window.selectClient = function(clientId) {
  window.selectedClientIdInModal = clientId;
  
  // Highlight active client in left list
  const container = document.getElementById('clients-list-container');
  if (container) {
    const items = container.querySelectorAll('.client-item-card');
    const clients = loadClients();
    items.forEach((item, idx) => {
      if (clients[idx] && clients[idx].id === clientId) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }
  
  const clients = loadClients();
  const client = clients.find(c => c.id === clientId);
  if (!client) return;
  
  // Hide other panes, show projects view
  document.getElementById('client-pane-welcome').style.display = 'none';
  document.getElementById('client-form').style.display = 'none';
  document.getElementById('client-projects-view').style.display = 'flex';
  
  // Fill details
  document.getElementById('view-client-name').textContent = client.name;
  document.getElementById('view-client-phone').textContent = client.phone || '-';
  document.getElementById('view-client-email').textContent = client.email || '-';
  document.getElementById('view-client-address').textContent = client.address || '-';
  
  // Update translation fields
  document.getElementById('lbl-view-phone').textContent = (currentLang === 'ar' ? 'الهاتف' : 'Tél') + ' :';
  document.getElementById('lbl-view-email').textContent = (currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email') + ' :';
  document.getElementById('lbl-view-address').textContent = (currentLang === 'ar' ? 'العنوان' : 'Adresse') + ' :';
  
  // Hide project creation form by default
  document.getElementById('project-form').style.display = 'none';
  
  // Render projects
  window.renderProjectsList(client);
};

window.showAddClientForm = function() {
  document.getElementById('client-pane-welcome').style.display = 'none';
  document.getElementById('client-projects-view').style.display = 'none';
  
  const form = document.getElementById('client-form');
  form.style.display = 'flex';
  form.reset();
  document.getElementById('edit-client-id').value = '';
  
  // Translate labels
  document.getElementById('client-form-title').textContent = t('addClient');
  document.getElementById('lbl-form-client-name').textContent = t('clientNameLabel');
  document.getElementById('lbl-form-client-phone').textContent = t('clientPhoneLabel');
  document.getElementById('lbl-form-client-email').textContent = t('clientEmailLabel');
  document.getElementById('lbl-form-client-address').textContent = t('clientAddressLabel');
  document.getElementById('btn-save-client').textContent = t('saveBtn');
};

window.cancelClientForm = function() {
  const editId = document.getElementById('edit-client-id').value;
  if (editId) {
    window.selectClient(editId);
  } else if (window.selectedClientIdInModal) {
    window.selectClient(window.selectedClientIdInModal);
  } else {
    document.getElementById('client-form').style.display = 'none';
    document.getElementById('client-pane-welcome').style.display = 'flex';
  }
};

window.saveClient = function() {
  const name = document.getElementById('client-name-input').value.trim();
  if (!name) return;
  
  const phone = document.getElementById('client-phone-input').value.trim();
  const email = document.getElementById('client-email-input').value.trim();
  const address = document.getElementById('client-address-input').value.trim();
  const editId = document.getElementById('edit-client-id').value;
  
  const clients = loadClients();
  let selectedId = '';
  
  if (editId) {
    // Editing
    const client = clients.find(c => c.id === editId);
    if (client) {
      client.name = name;
      client.phone = phone;
      client.email = email;
      client.address = address;
    }
    selectedId = editId;
  } else {
    // Creating new
    const newClient = {
      id: 'client_' + Date.now(),
      name,
      phone,
      email,
      address,
      projects: []
    };
    clients.push(newClient);
    selectedId = newClient.id;
  }
  
  saveClients(clients);
  showToast(t('toastClientSaved'));
  
  // Refresh client list
  window.renderClientsList();
  
  // Select the client
  window.selectClient(selectedId);
  
  // Update active project UI just in case this is the active client
  if (_store && _store.state.activeClientId === selectedId) {
    updateActiveProjectUI(_store);
  }
};

window.editClient = function() {
  const clientId = window.selectedClientIdInModal;
  if (!clientId) return;
  const clients = loadClients();
  const client = clients.find(c => c.id === clientId);
  if (!client) return;
  
  document.getElementById('client-pane-welcome').style.display = 'none';
  document.getElementById('client-projects-view').style.display = 'none';
  
  const form = document.getElementById('client-form');
  form.style.display = 'flex';
  
  document.getElementById('edit-client-id').value = client.id;
  document.getElementById('client-name-input').value = client.name || '';
  document.getElementById('client-phone-input').value = client.phone || '';
  document.getElementById('client-email-input').value = client.email || '';
  document.getElementById('client-address-input').value = client.address || '';
  
  // Translate labels
  document.getElementById('client-form-title').textContent = currentLang === 'ar' ? 'تعديل بيانات العميل' : 'Modifier les coordonnées';
  document.getElementById('lbl-form-client-name').textContent = t('clientNameLabel');
  document.getElementById('lbl-form-client-phone').textContent = t('clientPhoneLabel');
  document.getElementById('lbl-form-client-email').textContent = t('clientEmailLabel');
  document.getElementById('lbl-form-client-address').textContent = t('clientAddressLabel');
  document.getElementById('btn-save-client').textContent = t('saveBtn');
};

window.deleteClient = function() {
  const clientId = window.selectedClientIdInModal;
  if (!clientId) return;
  
  if (confirm(t('deleteClientConfirm'))) {
    let clients = loadClients();
    clients = clients.filter(c => c.id !== clientId);
    saveClients(clients);
    
    // If deleted client is active, unload active project!
    if (_store && _store.state.activeClientId === clientId) {
      window.unloadActiveProject();
    }
    
    showToast(t('toastClientDeleted'));
    window.selectedClientIdInModal = null;
    window.renderClientsList();
    
    // Reset details pane
    document.getElementById('client-projects-view').style.display = 'none';
    document.getElementById('client-form').style.display = 'none';
    document.getElementById('client-pane-welcome').style.display = 'flex';
  }
};

window.renderProjectsList = function(client) {
  const container = document.getElementById('projects-list-container');
  if (!container) return;
  container.innerHTML = '';
  
  const activeProjectId = _store ? _store.state.activeProjectId : null;
  const projects = client.projects || [];
  
  if (projects.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 20px; font-size: 0.78rem; color: var(--color-text-muted);">${currentLang === 'ar' ? 'لا يوجد مشاريع بعد' : 'Aucun projet pour le moment.'}</div>`;
    return;
  }
  
  projects.forEach((proj) => {
    const card = document.createElement('div');
    const isActive = proj.id === activeProjectId;
    card.className = `project-item-card ${isActive ? 'is-active-project' : ''}`;
    
    const info = document.createElement('div');
    info.className = 'project-item-card__info';
    
    const dateText = proj.date ? proj.date : '-';
    info.innerHTML = `
      <strong class="project-item-card__name">${proj.name}</strong>
      <span class="project-item-card__meta">${currentLang === 'ar' ? 'تاريخ الحدث : ' + dateText : 'Événement : ' + dateText}</span>
    `;
    
    const actions = document.createElement('div');
    actions.className = 'project-item-card__actions';
    
    // Load/unload action button
    if (isActive) {
      const unloadBtn = document.createElement('button');
      unloadBtn.type = 'button';
      unloadBtn.className = 'btn-danger-outline';
      unloadBtn.style.padding = '4px 8px';
      unloadBtn.style.fontSize = '0.7rem';
      unloadBtn.textContent = currentLang === 'ar' ? 'إغلاق' : 'Décharger';
      unloadBtn.addEventListener('click', () => {
        window.unloadActiveProject();
        window.selectClient(client.id); // Refresh view
      });
      actions.appendChild(unloadBtn);
    } else {
      const loadBtn = document.createElement('button');
      loadBtn.type = 'button';
      loadBtn.className = 'btn-browse';
      loadBtn.style.padding = '4px 8px';
      loadBtn.style.fontSize = '0.7rem';
      loadBtn.textContent = t('loadProjectBtn');
      loadBtn.addEventListener('click', () => {
        window.loadProject(client.id, proj.id);
        window.selectClient(client.id); // Refresh view
      });
      actions.appendChild(loadBtn);
    }
    
    // Delete action button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.style.cssText = `
      background: transparent;
      border: none;
      color: var(--color-text-secondary);
      font-size: 0.8rem;
      cursor: pointer;
      padding: 4px;
    `;
    deleteBtn.textContent = '✕';
    deleteBtn.title = t('deleteProjectConfirm');
    deleteBtn.addEventListener('click', () => {
      window.deleteProject(client.id, proj.id);
    });
    
    actions.appendChild(deleteBtn);
    card.appendChild(info);
    card.appendChild(actions);
    container.appendChild(card);
  });
};

window.showAddProjectForm = function() {
  const form = document.getElementById('project-form');
  form.style.display = 'flex';
  form.reset();
  
  // Translate labels
  document.getElementById('lbl-form-project-name').textContent = t('projectNameLabel');
  document.getElementById('lbl-form-project-date').textContent = t('projectDateLabel');
};

window.cancelProjectForm = function() {
  document.getElementById('project-form').style.display = 'none';
};

window.saveProject = function() {
  const clientId = window.selectedClientIdInModal;
  if (!clientId) return;
  
  const name = document.getElementById('project-name-input').value.trim();
  if (!name) return;
  const date = document.getElementById('project-date-input').value;
  
  const clients = loadClients();
  const client = clients.find(c => c.id === clientId);
  if (!client) return;
  
  // Deep copy current items in the store as the baseline (or defaultItems if none loaded)
  const baseItems = _store ? _store.state.items.map(item => {
    const copy = {};
    for (const k of Object.keys(item)) {
      copy[k] = item[k];
    }
    return copy;
  }) : defaultItems;
  
  // Capture current customHeader as well
  const baseCustomHeader = (_store && _store.state.customHeader) ? { ..._store.state.customHeader } : null;
  
  const newProject = {
    id: 'project_' + Date.now(),
    name,
    date,
    items: baseItems,
    customHeader: baseCustomHeader
  };
  
  if (!client.projects) client.projects = [];
  client.projects.push(newProject);
  
  saveClients(clients);
  showToast(t('toastProjectCreated'));
  
  // Hide project form
  document.getElementById('project-form').style.display = 'none';
  
  // Refresh lists
  window.renderClientsList();
  window.selectClient(clientId);
};

window.deleteProject = function(clientId, projectId) {
  if (confirm(t('deleteProjectConfirm'))) {
    const clients = loadClients();
    const client = clients.find(c => c.id === clientId);
    if (!client) return;
    
    client.projects = client.projects.filter(p => p.id !== projectId);
    saveClients(clients);
    
    // If deleted project is active, unload it
    if (_store && _store.state.activeClientId === clientId && _store.state.activeProjectId === projectId) {
      window.unloadActiveProject();
    }
    
    showToast(t('toastProjectDeleted'));
    window.renderClientsList();
    window.selectClient(clientId);
  }
};

window.loadProject = function(clientId, projectId) {
  const clients = loadClients();
  const client = clients.find(c => c.id === clientId);
  if (!client) return;
  const project = client.projects.find(p => p.id === projectId);
  if (!project) return;
  
  if (_store) {
    // First prevent save sync during load by resetting fields
    _store.state.activeClientId = null;
    _store.state.activeProjectId = null;
    
    // Load project items
    _store.resetItems(project.items);
    _store.state.customHeader = project.customHeader || null;
    
    // Set active client and project
    _store.state.activeClientId = clientId;
    _store.state.activeProjectId = projectId;
    
    saveToStorage(_store);
    updateActiveProjectUI(_store);
    
    showToast(t('toastProjectLoaded'));
    window.closeClientModal();
  }
};

window.unloadActiveProject = function() {
  if (_store) {
    // Clear active project attributes
    _store.state.activeClientId = null;
    _store.state.activeProjectId = null;
    
    // Load general devis state or default items
    const saved = loadFromStorage();
    const items = saved && saved.items ? saved.items : defaultItems;
    
    _store.resetItems(items);
    _store.state.customHeader = (saved && saved.customHeader) ? saved.customHeader : null;
    
    saveToStorage(_store);
    updateActiveProjectUI(_store);
    
    showToast(t('toastProjectUnloaded'));
  }
};

// ─── Active Project UI Banner/Display ─────────────────────────
function updateActiveProjectUI(store) {
  const banner = document.getElementById('active-project-banner');
  const bannerText = document.getElementById('active-project-banner-text');
  const infoDisplay = document.getElementById('client-info-display');
  
  const activeClientId = store.state.activeClientId;
  const activeProjectId = store.state.activeProjectId;
  
  if (activeClientId && activeProjectId) {
    const clients = loadClients();
    const client = clients.find(c => c.id === activeClientId);
    const project = client ? client.projects.find(p => p.id === activeProjectId) : null;
    
    if (client && project) {
      // Show active project banner
      if (banner) banner.style.display = 'flex';
      if (bannerText) {
        bannerText.textContent = `${t('activeProject')}: ${client.name} - ${project.name} (${project.date || ''})`;
      }
      
      // Show client info display
      if (infoDisplay) infoDisplay.style.display = 'block';
      
      // Update details in client-info-display card
      const nameEl = document.getElementById('info-client-name');
      const projEl = document.getElementById('info-project-name');
      const phoneEl = document.getElementById('info-client-phone');
      const emailEl = document.getElementById('info-client-email');
      const addrEl = document.getElementById('info-client-address');
      
      if (nameEl) nameEl.textContent = client.name;
      if (projEl) projEl.textContent = `${project.name} (${project.date ? project.date : '-'})`;
      if (phoneEl) phoneEl.textContent = client.phone || '-';
      if (emailEl) emailEl.textContent = client.email || '-';
      if (addrEl) addrEl.textContent = client.address || '-';
    } else {
      // Fallback if data is missing
      if (banner) banner.style.display = 'none';
      if (infoDisplay) infoDisplay.style.display = 'none';
    }
  } else {
    if (banner) banner.style.display = 'none';
    if (infoDisplay) infoDisplay.style.display = 'none';
  }
}

// ─── GitHub Sync and Backup ──────────────────────────────────
let githubConfig = {
  github_repository: '',
  github_branch: 'main',
  github_token: '',
  github_backup_filename: 'mariage_devis_backup.json',
  auto_update_on_launch: true
};

async function loadGitHubConfig() {
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const data = await res.json();
      githubConfig = { ...githubConfig, ...data };
      
      const inputRepo = document.getElementById('input-gh-repo');
      const inputBranch = document.getElementById('input-gh-branch');
      const inputFilename = document.getElementById('input-gh-file');
      const inputToken = document.getElementById('input-gh-token');
      
      if (inputRepo) inputRepo.value = githubConfig.github_repository || '';
      if (inputBranch) inputBranch.value = githubConfig.github_branch || 'main';
      if (inputFilename) inputFilename.value = githubConfig.github_backup_filename || 'mariage_devis_backup.json';
      if (inputToken) inputToken.value = githubConfig.github_token || '';
    }
  } catch (err) {
    console.error('Error loading GitHub config:', err);
  }
}

window.toggleGitHubConfig = function() {
  const panel = document.getElementById('github-config-panel');
  if (panel) {
    const isHidden = panel.style.display === 'none';
    panel.style.display = isHidden ? 'block' : 'none';
  }
};

window.saveGitHubConfig = async function() {
  const repo = document.getElementById('input-gh-repo').value.trim();
  const branch = document.getElementById('input-gh-branch').value.trim() || 'main';
  const file = document.getElementById('input-gh-file').value.trim() || 'mariage_devis_backup.json';
  const token = document.getElementById('input-gh-token').value.trim();

  const configData = {
    github_repository: repo,
    github_branch: branch,
    github_backup_filename: file,
    github_token: token,
    auto_update_on_launch: githubConfig.auto_update_on_launch
  };

  try {
    const res = await fetch('/api/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(configData)
    });

    if (res.ok) {
      githubConfig = { ...githubConfig, ...configData };
      showToast(t('toastGithubConfigSaved'));
      const panel = document.getElementById('github-config-panel');
      if (panel) panel.style.display = 'none';
    } else {
      throw new Error('Echec de la sauvegarde sur le serveur local');
    }
  } catch (err) {
    console.error('Error saving GitHub config:', err);
    alert('Error: ' + err.message);
  }
};

window.backupToGitHub = async function() {
  if (!githubConfig.github_repository) {
    alert(currentLang === 'ar' ? 'يرجى تهيئة مستودع GitHub أولاً!' : 'Veuillez d\'abord configurer le dépôt GitHub !');
    window.toggleGitHubConfig();
    return;
  }
  if (!githubConfig.github_token) {
    showToast(t('toastGithubTokenRequired'));
    alert(currentLang === 'ar' ? 'رمز الوصول لـ GitHub (PAT) مطلوب لإجراء النسخ الاحتياطي!' : 'Un GitHub Personal Access Token (PAT) est requis pour effectuer la sauvegarde !');
    window.toggleGitHubConfig();
    return;
  }

  try {
    showToast(currentLang === 'ar' ? 'جاري النسخ الاحتياطي إلى GitHub...' : 'Sauvegarde en cours vers GitHub...');
    
    const devisData = loadFromStorage();
    const clientsData = loadClients();
    const backup = {
      version: 1,
      devis_data: devisData,
      clients_data: clientsData
    };
    
    const backupStr = JSON.stringify(backup, null, 2);
    const base64Content = btoa(unescape(encodeURIComponent(backupStr)));
    
    const url = `https://api.github.com/repos/${githubConfig.github_repository}/contents/${githubConfig.github_backup_filename}`;
    const headers = {
      'Authorization': `Bearer ${githubConfig.github_token}`,
      'Accept': 'application/vnd.github.v3+json'
    };

    // Check if file exists to get its SHA
    let sha = undefined;
    try {
      const checkRes = await fetch(`${url}?ref=${githubConfig.github_branch}`, { headers });
      if (checkRes.ok) {
        const fileData = await checkRes.json();
        sha = fileData.sha;
      }
    } catch (err) {
      // File doesn't exist yet
    }

    const putBody = {
      message: 'Sauvegarde automatique depuis l\'application Devis Mariage',
      content: base64Content,
      branch: githubConfig.github_branch
    };
    if (sha) {
      putBody.sha = sha;
    }

    const putRes = await fetch(url, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putBody)
    });

    if (putRes.ok) {
      showToast(t('toastGithubBackupSuccess'));
    } else {
      const errData = await putRes.json();
      throw new Error(errData.message || 'GitHub API Error');
    }
  } catch (err) {
    console.error('GitHub Backup error:', err);
    showToast(t('toastGithubBackupError'));
    alert((currentLang === 'ar' ? 'فشل النسخ الاحتياطي: ' : 'Échec de la sauvegarde : ') + err.message);
  }
};

window.restoreFromGitHub = async function() {
  if (!githubConfig.github_repository) {
    alert(currentLang === 'ar' ? 'يرجى تهيئة مستودع GitHub أولاً!' : 'Veuillez d\'abord configurer le dépôt GitHub !');
    window.toggleGitHubConfig();
    return;
  }
  if (!githubConfig.github_token) {
    showToast(t('toastGithubTokenRequired'));
    alert(currentLang === 'ar' ? 'رمز الوصول لـ GitHub (PAT) مطلوب لإجراء الاستعادة!' : 'Un GitHub Personal Access Token (PAT) est requis pour effectuer la restauration !');
    window.toggleGitHubConfig();
    return;
  }

  const confirmMsg = currentLang === 'ar' 
    ? 'هل أنت متأكد؟ سيتم استبدال جميع البيانات المحلية الحالية بالبيانات المستعادة من GitHub.'
    : 'Êtes-vous sûr ? Toutes vos données locales actuelles seront écrasées par les données restaurées depuis GitHub.';
  if (!confirm(confirmMsg)) return;

  try {
    showToast(currentLang === 'ar' ? 'جاري استعادة البيانات من GitHub...' : 'Restauration en cours depuis GitHub...');
    
    const url = `https://api.github.com/repos/${githubConfig.github_repository}/contents/${githubConfig.github_backup_filename}`;
    const headers = {
      'Authorization': `Bearer ${githubConfig.github_token}`,
      'Accept': 'application/vnd.github.v3+json'
    };

    const getRes = await fetch(`${url}?ref=${githubConfig.github_branch}`, { headers });
    if (!getRes.ok) {
      if (getRes.status === 404) {
        throw new Error(currentLang === 'ar' ? 'الملف غير موجود في المستودع' : 'Le fichier de sauvegarde n\'existe pas dans le dépôt');
      }
      const errData = await getRes.json();
      throw new Error(errData.message || 'GitHub API Error');
    }

    const fileData = await getRes.json();
    const base64Content = fileData.content.replace(/\s/g, ''); // strip spaces/newlines
    const decodedStr = decodeURIComponent(escape(atob(base64Content)));
    const backup = JSON.parse(decodedStr);

    if (!backup || !backup.version) {
      throw new Error(currentLang === 'ar' ? 'صيغة ملف غير صالحة' : 'Format de sauvegarde invalide');
    }

    // Restore data
    if (backup.devis_data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(backup.devis_data));
    }
    if (backup.clients_data) {
      localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(backup.clients_data));
    }

    showToast(t('toastGithubRestoreSuccess'));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (err) {
    console.error('GitHub Restore error:', err);
    showToast(t('toastGithubRestoreError'));
    alert((currentLang === 'ar' ? 'فشلت الاستعادة: ' : 'Échec de la restauration : ') + err.message);
  }
};

// ─── JSON Export/Import Backup ────────────────────────────────
window.exportDatabase = function() {
  try {
    const devisData = loadFromStorage();
    const clientsData = loadClients();
    
    const backup = {
      version: 1,
      devis_data: devisData,
      clients_data: clientsData
    };
    
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mariage_devis_backup_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(t('toastDatabaseExported'));
  } catch (e) {
    console.error('Export error:', e);
    alert('Export failed: ' + e.message);
  }
};

window.importDatabase = function(input) {
  if (!input.files || !input.files[0]) return;
  
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const backup = JSON.parse(e.target.result);
      
      // Validation check
      if (!backup || !backup.version) {
        throw new Error('Format de fichier invalide');
      }
      
      // Restore devis data
      if (backup.devis_data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(backup.devis_data));
      }
      
      // Restore clients database
      if (backup.clients_data) {
        localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(backup.clients_data));
      }
      
      showToast(t('toastDatabaseImported'));
      
      // Reload page to reflect changes cleanly
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error('Import error:', err);
      showToast(t('toastDatabaseImportError'));
      alert((currentLang === 'ar' ? 'حدث خطأ أثناء استيراد البيانات: ' : 'Erreur d\'importation de données : ') + err.message);
    }
  };
  reader.readAsText(file);
  // Reset file input value so same file can be imported again
  input.value = '';
};

document.addEventListener('DOMContentLoaded', () => {
  // Load GitHub configuration from the server
  loadGitHubConfig();

  // Load saved data or use defaults
  const saved = loadFromStorage();
  const items = saved && saved.items ? saved.items : defaultItems;

  _store = createReactiveStore(items);

  if (saved && saved.customHeader) {
    _store.state.customHeader = saved.customHeader;
  }

  if (saved && saved.companyInfo) {
    for (const key of Object.keys(saved.companyInfo)) {
      _store.state.companyInfo[key] = saved.companyInfo[key];
    }
  }

  if (saved && saved.activeClientId) {
    _store.state.activeClientId = saved.activeClientId;
  }
  
  if (saved && saved.activeProjectId) {
    _store.state.activeProjectId = saved.activeProjectId;
  }

  // Initial render
  updateStaticText(_store);
  renderCards(_store);
  updateStickyBar(_store.getComputed());
  updateStats(_store);
  updateActiveProjectUI(_store);

  // Subscribe to reactive updates
  _store.subscribe(() => {
    renderCards(_store);
    updateStickyBar(_store.getComputed());
    updateStats(_store);
    updateActiveProjectUI(_store);
  });

  // PDF button
  document.getElementById('btn-generate-pdf').addEventListener('click', () => generatePDF(_store));

  // Modal events
  document.getElementById('modal-btn-add').addEventListener('click', () => handleModalSubmit(_store));
  document.getElementById('modal-btn-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', closeModal);

  // Header edit save on blur
  document.querySelector('.header__title').addEventListener('blur', () => {
    if (!editMode || !_store) return;
    if (!_store.state.customHeader) _store.state.customHeader = {};
    _store.state.customHeader['title_' + currentLang] = document.querySelector('.header__title').textContent;
    saveToStorage(_store);
  });
  document.querySelector('.header__subtitle').addEventListener('blur', () => {
    if (!editMode || !_store) return;
    if (!_store.state.customHeader) _store.state.customHeader = {};
    _store.state.customHeader['subtitle_' + currentLang] = document.querySelector('.header__subtitle').textContent;
    saveToStorage(_store);
  });
});
