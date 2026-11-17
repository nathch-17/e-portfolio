export const PROFILE = {
  name: 'Nathan Chaignon',
  handle: '@nathch-17',
  email: 'chaignonnathan@gmail.com',
  githubUrl: 'https://github.com/nathch-17',
  linkedinUrl: 'https://www.linkedin.com/in/nathan-nathan-chaignon-758350386',
  cvUrl: './CV_Nathan_Chaignon.pdf',
  role: 'Étudiant en BUT Informatique (IUT de Caen) — Développeur C, Java, Web/SQL & Linux',
  location: 'Caen & Avranches (Normandie) • Permis B',
  availability: 'Stage 8 à 10 semaines dès le 5 avril 2027',
  manifesto:
    "Étudiant en BUT Informatique passionné par le développement (C, Java, Web/SQL) et les environnements Linux (Arch / Debian). À la recherche d'un stage de 8 à 10 semaines à partir du 5 avril 2027, je souhaite mettre à profit ma curiosité technique et la rigueur du travail en équipe acquise en sauvetage opérationnel pour contribuer activement à vos projets.",
};

export const CV_DATA = {
  internshipGoal: {
    title: 'Recherche de stage en développement informatique',
    duration: '8 à 10 semaines',
    startDate: 'À partir du 5 avril 2027',
    mobility: 'Caen, Avranches & Normandie (Permis B)',
  },
  education: [
    {
      period: '2025 — 2028',
      degree: 'BUT Informatique',
      specialization:
        "Parcours : Réalisation d'applications (Conception, Développement, Validation)",
      institution: 'IUT Grand Ouest Normandie — Caen',
      highlights: [
        'Développement orienté objet (Java / JavaFX), C bas-niveau, Web dynamique (PHP / SQL)',
        "Situations d'Apprentissage et d'Évaluation (SAÉ) en équipe agile",
      ],
    },
    {
      period: '2025',
      degree: 'Baccalauréat Général',
      specialization: 'Spécialités Mathématiques, NSI & Physique-Chimie',
      institution: 'Lycée Littré — Avranches',
      highlights: [
        'Algorithmique, programmation Python/SQL et bases des systèmes en NSI',
      ],
    },
    {
      period: 'Certification',
      degree: 'Formation Secourisme & Sauvetage Côtier (PSE / SSA)',
      specialization: 'Premiers Secours en Équipe & Surveillance et Sauvetage Aquatique',
      institution: 'Secourisme Opérationnel',
      highlights: [
        'Gestion du stress, prise de décision rapide et rigueur du travail en équipe',
      ],
    },
  ],
  experiences: [
    {
      role: 'Surveillant-Sauveteur Qualifié',
      period: 'Saisons Hiver & Été',
      organization: 'Piscine (l’hiver) & Plage / Littoral (l’été)',
      description:
        "Surveillance opérationnelle, prévention des risques, interventions de secours en équipe (PSE/SSA) et responsabilité directe de la sécurité du public.",
      tags: ['Travail en équipe', 'Rigueur opérationnelle', 'Sang-froid', 'PSE / SSA'],
    },
    {
      role: "Stage d'observation — Service Informatique",
      period: 'Stage de découverte',
      organization: 'CAF (Caisse d’Allocations Familiales)',
      description:
        "Découverte du fonctionnement d'une direction informatique, de la maintenance des postes et de l'exploitation des systèmes au sein d'un organisme public.",
      tags: ['Systèmes & Réseaux', 'Support IT', 'Service Public'],
    },
  ],
  skillCategories: [
    {
      title: 'Langages de programmation',
      items: ['C', 'Java', 'Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'Lua', 'Shell / Bash'],
    },
    {
      title: 'Technologies, IHM & Web',
      items: ['JavaFX', 'HTML5 / CSS3', 'Bootstrap', 'Tailwind CSS', 'React / Vue', 'Raylib (C)'],
    },
    {
      title: 'Outils, Systèmes & IA',
      items: [
        'Linux (Arch / Debian)',
        'Hyprland / Wayland',
        'Neovim (LSP)',
        'Git & GitHub',
        'Maven / CMake / Make',
        'Windows',
        'Agents IA (Antigravity, Claude, Gemini)',
      ],
    },
  ],
  languages: [
    { lang: 'Français', level: 'Langue maternelle' },
    { lang: 'Anglais', level: 'Niveau B1 (Technique & Opérationnel)' },
    { lang: 'Espagnol', level: 'Niveau A1' },
  ],
  interests: [
    'Hardware & High-tech',
    'Natation & Sports nautiques',
    'Secourisme & Sauvetage côtier',
    'Cinéma',
  ],
};

export const FEATURED_PROJECTS = [
  {
    id: '01',
    slug: 'site-viking-transport',
    title: 'Viking Transport — Réseau Normand',
    subtitle:
      'Plateforme web dynamique de réservation en PHP & SQL réalisée en équipe lors d’un sprint universitaire de 3 jours',
    category: 'Web & Fullstack',
    repoName: 'nathch-17/site_viking_transport',
    repoUrl: 'https://github.com/nathch-17/site_viking_transport',
    client: 'Projet Universitaire (BUT Info — IUT de Caen)',
    year: '2026',
    role: 'Développeur Fullstack PHP/SQL (Équipe Devik)',
    timeline: 'Sprint intensif de 3 jours',
    deliverables: 'Backend PHP/SQL, Interface HTML/CSS/JS & Règles Métiers',
    language: 'PHP / SQL / JS / CSS',
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badgeColor: '#FF4D00',
    summary:
      "Application web de réservation réalisée en 3 jours pour une entreprise fictive gérant les transports en commun en Normandie : backend PHP/SQL, interface HTML/CSS/JS, intégration des règles métiers, espace client et back-office d'administration complet.",
    metrics: [
      { value: '72h', label: 'Sprint de livraison en équipe (Équipe Devik)' },
      { value: '20+', label: 'Pages & contrôleurs PHP (Front + Back-Office)' },
      { value: '4 Modules', label: 'Réservation, Carte, Espace Client & Dashboard Admin' },
      { value: 'PHP / SQL', label: 'Intégration complète des règles métiers & base relationnelle' },
    ],
    challenge:
      "Livrer en seulement 3 jours, en travail collaboratif, un site web fonctionnel de bout en bout pour une compagnie de transport régional normande : gestion des lignes, recherche d'itinéraires et d'horaires, réservation de titres de transport, authentification sécurisée et administration complète du réseau.",
    solution:
      "Mise en place d'une architecture PHP modulaire autour d'un système de templates (`template.php`, `includes/`), d'une base de données structurée (`bdd/`) et d'une séparation claire entre le portail voyageur (`lignes.php`, `horaires.php`, `carte.php`, `trajet.php`, `reserver.php`, `tarifs.php`) et le back-office administrateur (`admin_dashboard.php`, `admin_stats.php`, `admin_client.php`, `admin_modif_ligne.php`).",
    process: [
      {
        step: '01',
        title: 'Modélisation SQL & Charte Viking',
        desc: "Définition du schéma relationnel (lignes, arrêts, horaires, clients, réservations) et de l'identité visuelle normande (équipe Viking & équipe technique Devik).",
      },
      {
        step: '02',
        title: 'Parcours Voyageur & Carte',
        desc: "Développement des vues publiques : consultation des lignes (`lignes.php`), grille horaire (`horaires.php`), carte du réseau (`carte.php`), calcul de trajet (`trajet.php`) et tarifs.",
      },
      {
        step: '03',
        title: 'Espace Client & Réservation',
        desc: "Implémentation du cycle d'authentification (`inscription.php`, `connexion.php`, `deconnexion.php`), gestion du profil (`profil.php`) et tunnel de réservation (`reserver.php`).",
      },
      {
        step: '04',
        title: 'Back-Office & Statistiques',
        desc: "Création du panneau d'administration (`admin_dashboard.php`) permettant le CRUD complet des clients, la modification des lignes en temps réel et le suivi statistique (`admin_stats.php`).",
      },
    ],
    architecture: [
      { path: 'index.php & template.php', info: "Point d'entrée principal et gabarit de mise en page partagé" },
      { path: 'lignes.php / horaires.php / carte.php', info: 'Consultation interactive du réseau de transport normand' },
      { path: 'trajet.php / reserver.php / tarifs.php', info: "Recherche d'itinéraires, grille tarifaire et réservation de billets" },
      { path: 'connexion.php / inscription.php / profil.php', info: 'Gestion des sessions utilisateurs et espace personnel' },
      { path: 'admin_dashboard.php / admin_stats.php', info: 'Tableau de bord administrateur, métriques et gestion du réseau' },
      { path: 'admin_client.php / admin_modif_ligne.php', info: 'Outils CRUD pour administrer les voyageurs et les lignes' },
    ],
    codeSnippet: `// Architecture modulaire des routes — site_viking_transport
├── bdd/                        # Scripts SQL & connexion base de données
├── includes/                   # En-têtes, navigation & gardes de session
├── index.php                   # Accueil du réseau Viking Transport
├── lignes.php & carte.php      # Exploration des lignes en Normandie
├── horaires.php & trajet.php   # Recherche d'itinéraires & horaires
├── reserver.php & tarifs.php   # Tunnel de réservation & abonnements
├── profil.php & connexion.php  # Authentification & compte voyageur
└── admin_dashboard.php         # Back-office : stats, lignes & clients`,
    tags: ['PHP', 'SQL', 'HTML5 / CSS3 / JS', 'Travail en Équipe', 'Back-Office Admin', 'BUT Info'],
    visualType: 'viking-php',
  },
  {
    id: '02',
    slug: 'raycaster-raylib-c',
    title: 'Raycaster 3D Engine in C (Raylib)',
    subtitle:
      'Moteur de rendu pseudo-3D temps réel développé en C avec Raylib : structures de données dynamiques, mémoire et logique de jeu',
    category: 'Système & Bas-Niveau',
    repoName: 'nathch-17/raycaster-raylib-c',
    repoUrl: 'https://github.com/nathch-17/raycaster-raylib-c',
    client: 'Projet Personnel Système & Graphisme',
    year: '2026',
    role: 'Développeur C / Moteur Graphique',
    timeline: 'Projet personnel itératif',
    deliverables: 'Moteur Raycasting DDA, Textures, HUD & Makefile',
    language: 'C (GCC) + Raylib',
    accent: 'from-red-500/20 via-orange-500/10 to-transparent',
    badgeColor: '#EF4444',
    summary:
      "Développement en C d'un moteur graphique de type Raycaster utilisant la bibliothèque Raylib. Met en œuvre l'algorithme DDA, des structures de données dynamiques, la gestion rigoureuse de la mémoire et la logique de déplacement/collision temps réel.",
    metrics: [
      { value: '60+ FPS', label: 'Rendu temps réel fluide en C natif avec Raylib' },
      { value: 'DDA', label: 'Algorithme Digital Differential Analyzer sans distorsion fisheye' },
      { value: '5 Modules', label: 'Découpage propre : game, raycaster, player, map, hud' },
      { value: 'Makefile', label: 'Compilation automatisée GCC (make, clean, fclean, re)' },
    ],
    challenge:
      "Comprendre et implémenter les mathématiques du rendu pseudo-3D en C pur : lancer un faisceau de rayons depuis la caméra du joueur, calculer les intersections exactes avec la grille 2D, corriger l'effet fisheye grâce à la distance perpendiculaire au plan caméra, et plaquer des textures murales.",
    solution:
      "Implémentation de l'algorithme DDA (Digital Differential Analyzer) dans `src/raycaster.c` couplé à une architecture modulaire stricte (`game.c`, `player.c`, `map.c`, `hud.c` et leurs en-têtes dans `include/`), avec un système de build automatisé par `Makefile`.",
    process: [
      {
        step: '01',
        title: 'Grille 2D & Physique Joueur',
        desc: 'Modélisation de la carte dans `map.c` et gestion des vecteurs de position, direction, rotation et détection de collisions dans `player.c`.',
      },
      {
        step: '02',
        title: 'Lancer de Rayons (DDA)',
        desc: 'Calcul pas-à-pas des intersections horizontales et verticales sur la grille 2D avec correction trigonométrique de la distance perpendiculaire.',
      },
      {
        step: '03',
        title: 'Projection Verticale & Textures',
        desc: 'Calcul de la hauteur des colonnes murales à l’écran en fonction de la distance, ombrage selon l’orientation Nord/Sud vs Est/Ouest et chargement des textures (`texture/`).',
      },
      {
        step: '04',
        title: 'HUD, Mini-carte & Boucle de Jeu',
        desc: 'Intégration de l’interface tête haute (`hud.c`) et orchestration de la boucle d’événements et de rendu dans `game.c`.',
      },
    ],
    architecture: [
      { path: 'src/raycaster.c', info: 'Cœur mathématique du lancer de rayons (algorithme DDA) et projection des tranches verticales' },
      { path: 'src/player.c & include/player.h', info: 'Cinématique du joueur, déplacements, rotation caméra et collisions murales' },
      { path: 'src/map.c & include/map.h', info: 'Définition de la matrice du niveau et requêtes de cellules' },
      { path: 'src/hud.c & include/hud.h', info: 'Affichage des informations joueur, mini-map et superpositions visuelles' },
      { path: 'src/game.c & Makefile', info: 'Initialisation de la fenêtre Raylib, game loop et règles de compilation GCC' },
    ],
    codeSnippet: `// Structure du moteur Raycaster (nathch-17/raycaster-raylib-c)
├── include/
│   ├── game.h       # État global du moteur & boucle principale
│   ├── hud.h        # Rendu de l'interface & indicateurs
│   ├── map.h        # Dimensions & matrice de la carte 2D
│   └── player.h     # Position (x, y), angle, FOV & vitesse
├── src/
│   ├── game.c       # InitWindow, boucle de rendu & nettoyage
│   ├── hud.c        # Superposition 2D & statistiques temps réel
│   ├── map.c        # Chargement et vérification des murs
│   ├── player.c     # Gestion des entrées clavier & collisions
│   └── raycaster.c  # Algorithme DDA & rendu des colonnes 3D
├── texture/         # Textures murales et ressources graphiques
└── Makefile         # Règles : all, clean, fclean, re -> ./test`,
    tags: ['C', 'Raylib', 'Algorithme DDA', 'Moteur 3D', 'Makefile', 'Structures de données'],
    visualType: 'raycaster',
  },
  {
    id: '03',
    slug: 'yinsh-java-javafx',
    title: 'YINSH — Moteur Java & Interface JavaFX',
    subtitle:
      'Implantation du moteur en équipe de 4 puis d’une interface graphique interactive en JavaFX pour le jeu de plateau YINSH',
    category: 'Architecture & POO',
    repoName: 'nathch-17/YINSH_java & YINSH_UI',
    repoUrl: 'https://github.com/nathch-17/YINSH_UI',
    secondaryRepoUrl: 'https://github.com/nathch-17/YINSH_java',
    client: 'SAÉ BUT Informatique — IUT de Caen',
    year: '2026',
    role: 'Développeur Java / JavaFX (Équipe de 4 + UI)',
    timeline: 'Sprint 2 jours (Moteur) + Extension SAÉ (JavaFX)',
    deliverables: 'Module Coordonnées Hexagonales, Moteur YINSH & App JavaFX',
    language: 'Java 21 + JavaFX + Maven',
    accent: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    badgeColor: '#4F46E5',
    summary:
      "Implémentation complète du jeu de société abstrait YINSH (projet GIPF). D'abord conçu en sprint intensif de 2 jours en équipe de 4 pour la logique métier et le système de coordonnées hexagonales (`YINSH_java`), puis prolongé par l'implantation d'une interface graphique complète en JavaFX (`YINSH_UI`).",
    metrics: [
      { value: '2 Dépôts', label: 'YINSH_java (Cœur métier) & YINSH_UI (Interface JavaFX)' },
      { value: 'Java 21', label: 'Architecture multi-modules Maven (application + hexagonalCoordinate)' },
      { value: '48h', label: 'Sprint initial en équipe de 4 pour le moteur de règles' },
      { value: 'JUnit', label: 'Suite de tests automatisés validant la géométrie hexagonale' },
    ],
    challenge:
      "Modéliser fidèlement un plateau hexagonal non-rectangulaire où les anneaux se déplacent selon 6 axes directionnels, retournent automatiquement les marqueurs sautés, et déclenchent le retrait d'anneaux dès que 5 marqueurs de même couleur sont alignés — tout en séparant strictement le modèle métier de la vue JavaFX.",
    solution:
      "Architecture Maven multi-modules découplant le module dédié aux coordonnées hexagonales (`hexagonalCoordinate`) du module applicatif (`application`). La logique gère les mouvements valides, le retournement de pions et la détection d'alignements sur 3 axes hexagonaux, tandis que JavaFX assure le rendu vectoriel interactif du plateau.",
    process: [
      {
        step: '01',
        title: 'Système de Coordonnées Hexagonales',
        desc: 'Création d’un module dédié (`HexagonalCoordinates`) gérant l’indexation axiale, le calcul de voisinage, les vecteurs de déplacement et la validation des intersections.',
      },
      {
        step: '02',
        title: 'Moteur de Règles YINSH (Sprint 48h)',
        desc: 'En équipe de 4 : placement initial des 5 anneaux par joueur, pose de marqueurs, saut par-dessus les lignes de marqueurs et retournement bicolore.',
      },
      {
        step: '03',
        title: 'Détection d’Alignements & Victoire',
        desc: 'Algorithme d’analyse directionnelle détectant les séquences de 5 marqueurs identiques et gérant le retrait de la ligne ainsi que d’un anneau du joueur.',
      },
      {
        step: '04',
        title: 'Interface Graphique JavaFX (`YINSH_UI`)',
        desc: 'Conception de la scène interactive JavaFX : tracé géométrique du plateau, prévisualisation des coups légaux, animations d’état et lancement via `mvn javafx:run`.',
      },
    ],
    architecture: [
      { path: 'YINSH_java / HexagonalCoordinates', info: 'Bibliothèque géométrique pour grilles hexagonales et déplacements axiaux' },
      { path: 'YINSH_UI / YINSH / pom.xml', info: 'Configuration parent Maven orchestrant les sous-modules Java 21' },
      { path: 'YINSH_UI / YINSH / hexagonalCoordinate', info: 'Module Maven réutilisable de coordonnées et calculs vectoriels' },
      { path: 'YINSH_UI / YINSH / application', info: 'Contrôleurs, vues JavaFX et boucle d’interaction joueur contre joueur' },
    ],
    codeSnippet: `# Architecture multi-modules Maven (YINSH_java & YINSH_UI)
YINSH/
├── pom.xml                    # Parent Maven (JDK 21 + JUnit + JavaFX)
├── hexagonalCoordinate/       # Module géométrique (axes, distances, voisins)
└── application/               # Module métier + Interface graphique JavaFX
    └── mvn javafx:run         # Lancement direct du plateau interactif`,
    tags: ['Java 21', 'JavaFX', 'Maven Multi-Modules', 'JUnit', 'Géométrie Hexagonale', 'POO'],
    visualType: 'yinsh',
  },
  {
    id: '04',
    slug: 'dotfiles2-hyprland',
    title: 'Dotfiles — Système & Environnement Linux (Arch)',
    subtitle:
      'Configuration avancée Arch Linux & Wayland : dotfiles Hyprland, Neovim LSP, WezTerm, Quickshell & shell scripting',
    category: 'Linux & Environnement',
    repoName: 'nathch-17/dotfiles2',
    repoUrl: 'https://github.com/nathch-17/dotfiles2',
    client: 'Environnement de développement quotidien (Arch Linux)',
    year: '2026',
    role: 'Administrateur & Créateur Système Linux',
    timeline: 'Évolution continue (2026)',
    deliverables: 'Configs Hyprland, Neovim LSP, WezTerm, Quickshell & Scripts',
    language: 'Lua / Shell / CSS / Conf',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badgeColor: '#10B981',
    summary:
      "Configuration avancée d'un système Arch Linux sous Wayland / Hyprland : gestion des dotfiles, configuration Neovim avec LSP en Lua, shell scripting (Bash / Fish), gestion de paquets, partitionnement et interface graphique sur-mesure (Quickshell / DankMaterialShell).",
    metrics: [
      { value: '18+', label: 'Outils et démons configurés dans .config/' },
      { value: 'Arch Linux', label: 'Partitionnement, gestion de paquets & compositeur Hyprland' },
      { value: 'Neovim LSP', label: 'IDE complet configuré en Lua + WezTerm GPU' },
      { value: 'CSS / GTK', label: 'Thématisation unifiée GTK 3.0, GTK 4.0 & Firefox userChrome' },
    ],
    challenge:
      "Construire sur Arch Linux un environnement de développement à la fois minimaliste, esthétique et immédiatement productif, où chaque brique (compositeur Wayland, barre système, terminal, éditeur Neovim LSP, explorateur de fichiers, scripts shell) est maîtrisée de bout en bout.",
    solution:
      "Centralisation modulaire dans `dotfiles2` regroupant la configuration du compositeur (`hypr/`, `hyprlock/`, `hyprland-dock/`, `nwg-displays`), du shell graphique (`quickshell/`, `DankMaterialShell/`, `rofi/`), du terminal (`.wezterm.lua`, `kitty/`, `fish/`) et des outils de développement (`nvim/` avec LSP, `lazygit/`, `yazi/`, `btop/`).",
    process: [
      {
        step: '01',
        title: 'Installation Arch, Partitionnement & Hyprland',
        desc: 'Mise en place du système Arch Linux, gestion des paquets et configuration du compositeur Wayland Hyprland, `hyprlock` et `nwg-displays`.',
      },
      {
        step: '02',
        title: 'Widgets Quickshell & DankMaterialShell',
        desc: 'Intégration d’une interface système moderne avec Quickshell, DankMaterialShell, dock Hyprland et lanceur d’applications Rofi stylisé en CSS.',
      },
      {
        step: '03',
        title: 'Neovim LSP, WezTerm & Shell Scripting',
        desc: 'Configuration Lua de Neovim (serveurs LSP, complétion, treesitter) et WezTerm (`.wezterm.lua`), couplée au shell scripting (`fish`/`bash`), `yazi` et `lazygit`.',
      },
      {
        step: '04',
        title: 'Harmonie Visuelle GTK & Navigateur',
        desc: 'Application de feuilles de style cohérentes sur `gtk-3.0`, `gtk-4.0`, Thunar, ainsi que des personnalisations CSS pour Firefox (`firefox/`) et Zen Browser (`zen/`).',
      },
    ],
    architecture: [
      { path: '.config/hypr & .config/hyprlock', info: 'Configuration du compositeur Wayland, raccourcis clavier, espaces de travail et verrouillage' },
      { path: '.config/quickshell & DankMaterialShell', info: 'Barre système réactive, centre de contrôle et notifications Wayland' },
      { path: '.config/nvim & .config/lazygit', info: 'Configuration Neovim (LSP, plugins Lua) et interface Git en terminal' },
      { path: '.wezterm.lua & .config/kitty', info: 'Émulateurs de terminal accélérés par le GPU avec polices Nerd Fonts et ligatures' },
      { path: '.config/fish, yazi, btop, rofi', info: 'Shell interactif, scripts, explorateur de fichiers TUI, moniteur système et lanceur' },
      { path: '.config/gtk-3.0, gtk-4.0 & firefox/', info: 'Thèmes sombres unifiés pour les applications graphiques et le navigateur' },
    ],
    codeSnippet: `# Arborescence de nathch-17/dotfiles2 (Arch Linux)
dotfiles2/
├── .wezterm.lua                # Config Lua du terminal WezTerm
├── firefox/                    # Personnalisation userChrome.css
├── .local/                     # Scripts shell & ressources utilisateur
└── .config/
    ├── hypr/ & hyprlock/       # Tiling WM Wayland & écran de veille
    ├── quickshell/ & rofi/     # Shell graphique & lanceur d'apps
    ├── DankMaterialShell/      # Composants UI Material sous Wayland
    ├── nvim/ & lazygit/        # Neovim LSP & workflow Git
    ├── fish/ & yazi/ & btop/   # Shell scripting, fichiers TUI & monitoring
    └── gtk-3.0/ & gtk-4.0/     # Thèmes système unifiés`,
    tags: ['Arch Linux', 'Hyprland', 'Neovim LSP', 'Shell / Bash / Fish', 'WezTerm (Lua)', 'Quickshell'],
    visualType: 'dotfiles',
  },
  {
    id: '05',
    slug: 'memory-allocator-c',
    title: 'My Malloc — Custom Memory Allocator',
    subtitle:
      'Réimplémentation bas-niveau de l’allocateur mémoire dynamique en C (gestion du tas, alignement et fragmentation)',
    category: 'Système & Bas-Niveau',
    repoName: 'nathch-17/memory-allocator',
    repoUrl: 'https://github.com/nathch-17/memory-allocator',
    client: 'Projet d’Ingénierie Système en C',
    year: '2026',
    role: 'Développeur Système C',
    timeline: 'Projet de recherche & implémentation',
    deliverables: 'Bibliothèque my_malloc, Utilitaires d’alignement & Suite de tests',
    language: 'C (CMake & Makefile)',
    accent: 'from-violet-500/20 via-purple-500/10 to-transparent',
    badgeColor: '#8B5CF6',
    summary:
      "Réimplémentation complète de l'allocateur mémoire standard (`malloc`) en C afin de maîtriser le fonctionnement interne de la mémoire dynamique : gestion directe du tas (heap), alignement mémoire des adresses, découpage de blocs (splitting) et réduction de la fragmentation.",
    metrics: [
      { value: 'Bas-Niveau', label: 'Manipulation directe des pointeurs et en-têtes de blocs en C' },
      { value: 'Aligné', label: 'Respect de l’alignement mémoire matériel sur les frontières d’octets' },
      { value: 'O(n)', label: 'Parcours de liste chaînée de blocs avec réutilisation des zones libres' },
      { value: 'Tests', label: 'Vérification via suite dédiée (`tests/`), Makefile et CMakeLists.txt' },
    ],
    challenge:
      "Lorsque l'on appelle `malloc()` en C, le système d'exploitation ne fournit que des pages ou segments mémoire bruts. Le défi consiste à concevoir une structure de métadonnées légère précédant chaque allocation, capable de suivre les blocs libres et occupés, de découper un grand bloc libre sans gaspiller d'espace et de garantir l'alignement des pointeurs retournés.",
    solution:
      "Conception dans `src/my_malloc.c`, `src/utils.c` et `include/my_malloc.h` d'un gestionnaire de tas structuré en liste chaînée de blocs avec en-têtes (taille, statut libre/occupé, pointeur suivant). Intégration de fonctions utilitaires d'alignement et de découpage de blocs, accompagnées d'un dossier `tests/` et d'un double support `Makefile` / `CMakeLists.txt`.",
    process: [
      {
        step: '01',
        title: 'Conception des En-têtes de Blocs',
        desc: 'Définition de la structure de métadonnées dans `include/my_malloc.h` stockant la taille utile, le flag de disponibilité et les pointeurs de chaînage.',
      },
      {
        step: '02',
        title: 'Alignement & Utilitaires (`utils.c`)',
        desc: 'Implémentation des calculs d’alignement mémoire pour assurer que chaque adresse renvoyée au programme appelant respecte les contraintes de l’architecture CPU.',
      },
      {
        step: '03',
        title: 'Allocation, Splitting & Réutilisation (`my_malloc.c`)',
        desc: 'Recherche d’un bloc libre suffisant, découpage (block splitting) lorsque le bloc est trop grand pour limiter la fragmentation interne, ou extension du tas.',
      },
      {
        step: '04',
        title: 'Libération & Tests Unitaires (`tests/`)',
        desc: 'Validation des allocations multiples, des libérations et de la stabilité des pointeurs à travers des scénarios de test compilés via `make` et `CMake`.',
      },
    ],
    architecture: [
      { path: 'include/my_malloc.h', info: 'Prototypes de l’allocateur, constantes d’alignement et structures de métadonnées des blocs' },
      { path: 'src/my_malloc.c', info: 'Logique principale d’allocation sur le tas, recherche de blocs libres et gestion des segments' },
      { path: 'src/utils.c', info: 'Fonctions auxiliaires d’alignement mémoire, de découpage et de manipulation d’en-têtes' },
      { path: 'tests/', info: 'Scénarios de validation vérifiant l’intégrité du tas et la réutilisation des blocs libérés' },
      { path: 'Makefile & CMakeLists.txt', info: 'Outils de compilation générant `compile_commands.json` pour l’analyse statique' },
    ],
    codeSnippet: `// Représentation conceptuelle du tas (nathch-17/memory-allocator)
+-------------------------------------------------------------------+
| [Header: 64B | USED] -> Données Utilisateur (Alignées)            |
+-------------------------------------------------------------------+
| [Header: 128B | FREE] -> Bloc libre réutilisable (Splitting prêt) |
+-------------------------------------------------------------------+
| [Header: 32B | USED] -> Données Utilisateur (Alignées)            |
+-------------------------------------------------------------------+
// Fichiers clés : include/my_malloc.h | src/my_malloc.c | src/utils.c`,
    tags: ['C', 'Gestion Mémoire', 'Heap / Malloc', 'Pointeurs & Alignement', 'CMake / Makefile', 'Système'],
    visualType: 'malloc',
  },
];

export const OTHER_REPOS = [
  {
    name: 'MemeDrop',
    fullName: 'nathch-17/MemeDrop',
    language: 'TypeScript / Vue / Electron',
    year: '2026',
    description:
      "Application Windows et Linux (Arch) reliée à un bot Discord (OAuth2 + WebSocket) pour envoyer des images, sons et vidéos dans un overlay temps réel au-dessus des autres applications. Monorepo npm avec déploiement Docker / TrueNAS.",
    url: 'https://github.com/nathch-17/MemeDrop',
    tags: ['TypeScript', 'Electron', 'Vue', 'Discord Bot', 'WebSocket', 'Docker'],
  },
  {
    name: 'Gribouille_projetBUT',
    fullName: 'nathch-17/Gribouille_projetBUT',
    language: 'Java / JavaFX',
    year: '2026',
    description:
      "Application graphique de dessin vectoriel et matriciel réalisée en JavaFX dans le cadre du BUT Informatique : gestion des outils de tracé, palette de couleurs, épaisseurs et événements souris.",
    url: 'https://github.com/nathch-17/Gribouille_projetBUT',
    tags: ['Java', 'JavaFX', 'IHM', 'Dessin', 'BUT Info'],
  },
  {
    name: 'SAE101',
    fullName: 'nathch-17/SAE101',
    language: 'C',
    year: '2026',
    description:
      "Premier projet de Situation d'Apprentissage et d'Évaluation (SAÉ 1.01) consistant à concevoir et programmer un jeu complet en langage C.",
    url: 'https://github.com/nathch-17/SAE101',
    tags: ['C', 'Algorithmique', 'Jeu Console', 'SAÉ 1.01'],
  },
  {
    name: 'memory',
    fullName: 'nathch-17/memory',
    language: 'JavaScript',
    year: '2026',
    description:
      "Jeu de paires (Memory) interactif développé en JavaScript pour le navigateur, mettant en œuvre la manipulation du DOM et la gestion d'états asynchrones.",
    url: 'https://github.com/nathch-17/memory',
    tags: ['JavaScript', 'DOM', 'Jeu Web', 'Front-End'],
  },
];
