import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sun,
  Moon,
  Mail,
  Check,
  Github,
  Linkedin,
  FileText,
  Download,
  MapPin,
  Car,
  GraduationCap,
  Briefcase,
  Globe,
  Heart,
  LayoutGrid,
  List,
  FolderGit2,
  ExternalLink,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  PROFILE,
  CV_DATA,
  FEATURED_PROJECTS,
  OTHER_REPOS,
} from './data/projects';
import {
  ProjectCardGraphic,
  InteractiveCaseStudyWidget,
} from './components/ProjectVisualPreview';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [viewMode, setViewMode] = useState('grid');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showCvPreview, setShowCvPreview] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (activeCaseStudy) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeCaseStudy]);

  const categories = [
    'Tous',
    'Web & Fullstack',
    'Système & Bas-Niveau',
    'Architecture & POO',
    'Linux & Environnement',
  ];

  const filteredProjects =
    selectedCategory === 'Tous'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleNextCaseStudy = () => {
    if (!activeCaseStudy) return;
    const currentIndex = FEATURED_PROJECTS.findIndex(
      (p) => p.id === activeCaseStudy.id
    );
    const nextIndex = (currentIndex + 1) % FEATURED_PROJECTS.length;
    setActiveCaseStudy(FEATURED_PROJECTS[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#F5F5F3] transition-colors duration-300">
      {/* Sticky Minimal Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-[#FAF9F6]/85 dark:bg-[#0A0A0A]/85 border-b border-[#E5E4DF] dark:border-[#262626]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="font-bold tracking-tight text-sm uppercase flex items-center gap-2 hover:text-[#FF4D00] transition-colors"
            >
              <span>NATHAN CHAIGNON</span>
              <span className="font-mono text-xs text-neutral-400 font-normal">
                {PROFILE.handle}
              </span>
            </button>
            <span className="hidden lg:inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#F3F2EE] dark:bg-[#1F1F1F] text-neutral-600 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
              {PROFILE.availability}
            </span>
          </div>

          <nav className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <a
              href="#work"
              onClick={() => setActiveCaseStudy(null)}
              className="hover:text-[#FF4D00] transition-colors"
            >
              Projets ({FEATURED_PROJECTS.length})
            </a>
            <a
              href="#cv"
              onClick={() => setActiveCaseStudy(null)}
              className="hidden sm:inline hover:text-[#FF4D00] transition-colors"
            >
              CV & Parcours
            </a>
            <a
              href="#github-archive"
              onClick={() => setActiveCaseStudy(null)}
              className="hidden md:inline hover:text-[#FF4D00] transition-colors"
            >
              Autres Dépôts
            </a>
            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF4D00] text-white hover:opacity-90 transition-opacity"
              title="Ouvrir mon CV au format PDF"
            >
              <FileText size={13} />
              <span>CV PDF</span>
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3F2EE] dark:bg-[#1F1F1F] hover:bg-[#0A66C2] hover:text-white transition-colors"
              title="Profil LinkedIn de Nathan Chaignon"
            >
              <Linkedin size={13} />
              <span className="hidden xl:inline">LinkedIn</span>
            </a>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3F2EE] dark:bg-[#1F1F1F] hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] transition-colors"
              title="Profil GitHub @nathch-17"
            >
              <Github size={13} />
              <span className="hidden xl:inline">GitHub</span>
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-[#E5E4DF] dark:border-[#262626] hover:border-[#FF4D00] transition-colors"
              aria-label="Basculer le thème clair/sombre"
              title="Basculer le mode Sombre / Clair"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Folio Kit Case Study Deep-Dive View */}
      {activeCaseStudy ? (
        <article className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-[#FF4D00] transition-colors"
            >
              <ArrowLeft size={14} /> Retour aux projets sélectionnés
            </button>
            <div className="flex flex-wrap items-center gap-3">
              {activeCaseStudy.secondaryRepoUrl && (
                <a
                  href={activeCaseStudy.secondaryRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E4DF] dark:border-[#262626] text-xs font-mono hover:border-[#FF4D00] transition-colors"
                >
                  <Github size={14} />
                  <span>Voir YINSH_java (Moteur)</span>
                  <ExternalLink size={12} />
                </a>
              )}
              <a
                href={activeCaseStudy.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] dark:hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>Voir sur GitHub ({activeCaseStudy.repoName})</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* 1. Case Study Header & Metadata Strip */}
          <div className="space-y-6 border-b border-[#E5E4DF] dark:border-[#262626] pb-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#FF4D00]">
              <span>ÉTUDE DE CAS {activeCaseStudy.id}</span>
              <span>•</span>
              <span>{activeCaseStudy.category}</span>
              <span>•</span>
              <span>{activeCaseStudy.language}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif-editorial italic tracking-tight leading-none">
              {activeCaseStudy.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
              {activeCaseStudy.summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E5E4DF] dark:border-[#262626]">
              <div>
                <p className="text-[10px] font-mono uppercase text-neutral-400">
                  CADRE / CLIENT
                </p>
                <p className="font-medium text-sm mt-1">
                  {activeCaseStudy.client}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-neutral-400">
                  RÔLE
                </p>
                <p className="font-medium text-sm mt-1">
                  {activeCaseStudy.role}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-neutral-400">
                  TIMELINE
                </p>
                <p className="font-medium text-sm mt-1">
                  {activeCaseStudy.timeline}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-neutral-400">
                  LIVRABLES
                </p>
                <p className="font-medium text-sm mt-1">
                  {activeCaseStudy.deliverables}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Impact Metrics Bento Grid */}
          <section className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              01 / MÉTRIQUES CLÉS & CARACTÉRISTIQUES TECHNIQUES
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {activeCaseStudy.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] flex flex-col justify-between"
                >
                  <p className="text-3xl md:text-4xl font-bold tracking-tight text-[#FF4D00]">
                    {m.value}
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. The Challenge vs. The Solution (2-Column Split) */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                02 / LE DÉFI TECHNIQUE
              </span>
              <h3 className="text-xl font-bold">Problématique & Contraintes</h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {activeCaseStudy.challenge}
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
                03 / LA SOLUTION ARCHITECTURALE
              </span>
              <h3 className="text-xl font-bold">Conception & Implémentation</h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {activeCaseStudy.solution}
              </p>
            </div>
          </section>

          {/* 4. Interactive Technical Widget */}
          <section className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              04 / APERÇU TECHNIQUE INTERACTIF
            </p>
            <InteractiveCaseStudyWidget type={activeCaseStudy.visualType} />
          </section>

          {/* 5. Engineering Process Steps (01 -> 04) */}
          <section className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              05 / PROCESSUS DE DÉVELOPPEMENT
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {activeCaseStudy.process.map((p) => (
                <div
                  key={p.step}
                  className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-3"
                >
                  <span className="inline-block font-mono text-xs px-2.5 py-1 rounded bg-[#F3F2EE] dark:bg-[#1F1F1F] text-[#FF4D00] font-semibold">
                    ÉTAPE {p.step}
                  </span>
                  <h4 className="font-bold text-base">{p.title}</h4>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. File Architecture & Code Breakdown */}
          <section className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                06 / ARCHITECTURE DU DÉPÔT
              </span>
              <h3 className="text-xl font-bold">Modules & Fichiers Clés</h3>
              <div className="divide-y divide-[#E5E4DF] dark:divide-[#262626]">
                {activeCaseStudy.architecture.map((item) => (
                  <div key={item.path} className="py-3 space-y-1">
                    <p className="font-mono text-xs font-semibold text-[#FF4D00]">
                      {item.path}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {item.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl bg-[#111113] text-neutral-200 border border-[#262626] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                  <span>ARBORESCENCE & STRUCTURE</span>
                  <span>{activeCaseStudy.repoName}</span>
                </div>
                <pre className="mt-4 p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                  {activeCaseStudy.codeSnippet}
                </pre>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {activeCaseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/10 text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Next Case Study Footer */}
          <footer className="pt-10 border-t border-[#E5E4DF] dark:border-[#262626] flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase text-neutral-400">
                CONTINUER L’EXPLORATION
              </p>
              <p className="text-lg font-bold mt-1">
                Découvrir le projet suivant du portfolio
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="px-5 py-3 rounded-full border border-[#E5E4DF] dark:border-[#262626] text-xs font-mono uppercase tracking-wider hover:border-[#FF4D00] transition-colors"
              >
                Tous les projets
              </button>
              <button
                onClick={handleNextCaseStudy}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4D00] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <span>Projet Suivant</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </footer>
        </article>
      ) : (
        /* Main Minimalist Responsive Portfolio View */
        <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-28">
          {/* Editorial Hero Section */}
          <section className="space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                {PROFILE.role}
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[#FF4D00] bg-[#FF4D00]/10 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
                OBJECTIF : STAGE 8 À 10 SEMAINES DÈS LE 5 AVRIL 2027
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-[5.25rem] font-normal tracking-tight leading-[0.98]">
              Concevoir du code{' '}
              <span className="font-serif-editorial italic text-[#FF4D00]">
                bas-niveau
              </span>
              , des interfaces JavaFX & des applications web.
            </h1>

            <div className="pt-8 border-t border-[#E5E4DF] dark:border-[#262626] grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-3 font-mono text-xs">
                <p className="text-neutral-400 uppercase">COORDONNÉES & MOBILITÉ</p>
                <div className="space-y-1.5 text-neutral-700 dark:text-neutral-300">
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#FF4D00]" />
                    <span>Caen & Avranches (Normandie)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Car size={14} className="text-[#FF4D00]" />
                    <span>Permis B • Véhiculé</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                  {PROFILE.manifesto}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={PROFILE.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FF4D00] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <FileText size={14} />
                    <span>Consulter mon CV (PDF)</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A66C2] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] dark:hover:text-white transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub @nathch-17</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-[#E5E4DF] dark:border-[#262626] text-xs font-mono uppercase tracking-wider hover:border-[#FF4D00] transition-colors"
                  >
                    {copiedEmail ? <Check size={14} /> : <Mail size={14} />}
                    <span>{copiedEmail ? 'Email copié !' : 'Copier Email'}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 01 / Selected Works (5 Featured Projects) */}
          <section id="work" className="space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E5E4DF] dark:border-[#262626] pb-6">
              <div>
                <span className="font-mono text-xs text-neutral-400">
                  01 / PROJETS PHARES (ACADÉMIQUES & PERSONNELS)
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mt-1">
                  Études de cas & Réalisations GitHub
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                        selectedCategory === cat
                          ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111]'
                          : 'bg-[#F3F2EE] dark:bg-[#1F1F1F] text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="inline-flex rounded-full p-1 bg-[#F3F2EE] dark:bg-[#1F1F1F] border border-[#E5E4DF] dark:border-[#262626]">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-full transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white dark:bg-[#141414] text-[#FF4D00] shadow-sm'
                        : 'text-neutral-500'
                    }`}
                    title="Vue Grille (Cards)"
                  >
                    <LayoutGrid size={14} />
                  </button>
                  <button
                    onClick={() => setViewMode('index')}
                    className={`p-1.5 rounded-full transition-colors ${
                      viewMode === 'index'
                        ? 'bg-white dark:bg-[#141414] text-[#FF4D00] shadow-sm'
                        : 'text-neutral-500'
                    }`}
                    title="Vue Index Minimaliste"
                  >
                    <List size={14} />
                  </button>
                </div>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveCaseStudy(project)}
                    className={`group cursor-pointer rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] overflow-hidden hover:border-[#FF4D00] transition-all flex flex-col justify-between ${
                      index === 0 && selectedCategory === 'Tous'
                        ? 'md:col-span-2'
                        : ''
                    }`}
                  >
                    <div
                      className={`${
                        index === 0 && selectedCategory === 'Tous'
                          ? 'aspect-[16/9] md:aspect-[21/9]'
                          : 'aspect-[16/10]'
                      } bg-gradient-to-br ${project.accent} p-6 md:p-8 flex flex-col justify-between relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs z-10">
                        <span className="px-3 py-1 rounded-md bg-white/85 dark:bg-black/70 backdrop-blur-sm font-medium">
                          {project.id} — {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline px-2.5 py-1 rounded-md bg-white/75 dark:bg-black/60 text-[11px]">
                            {project.language}
                          </span>
                          <span className="w-9 h-9 rounded-full bg-white dark:bg-black flex items-center justify-center group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                            <ArrowUpRight size={16} />
                          </span>
                        </div>
                      </div>

                      <div className="my-4 z-10 max-w-2xl group-hover:scale-[1.01] transition-transform duration-300">
                        <ProjectCardGraphic type={project.visualType} />
                      </div>

                      <div className="z-10">
                        <p className="font-mono text-xs uppercase text-neutral-500 dark:text-neutral-400">
                          {project.repoName} • {project.timeline}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-5">
                      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E5E4DF] dark:border-[#262626]">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F3F2EE] dark:bg-[#1F1F1F] text-neutral-600 dark:text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#FF4D00] font-semibold">
                          <span>Lire l’étude de cas</span>
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="divide-y divide-[#E5E4DF] dark:divide-[#262626] border-t border-b border-[#E5E4DF] dark:border-[#262626]">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveCaseStudy(project)}
                    className="py-6 px-4 -mx-4 rounded-xl hover:bg-white dark:hover:bg-[#141414] cursor-pointer transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center group"
                  >
                    <div className="md:col-span-1 font-mono text-xs text-neutral-400">
                      {project.id}
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-bold text-lg group-hover:text-[#FF4D00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-neutral-500">
                        {project.repoName}
                      </p>
                    </div>
                    <div className="md:col-span-3 font-mono text-xs text-neutral-500">
                      {project.category}
                    </div>
                    <div className="md:col-span-2 font-mono text-xs">
                      {project.language}
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF4D00]">
                        <span>Étude de cas</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 02 / CV, Parcours Académique, Expériences & Compétences */}
          <section id="cv" className="space-y-12">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E5E4DF] dark:border-[#262626] pb-6">
              <div>
                <span className="font-mono text-xs text-neutral-400">
                  02 / CURRICULUM VITAE & PARCOURS
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mt-1">
                  Formations, Expériences & Compétences
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowCvPreview(!showCvPreview)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E5E4DF] dark:border-[#262626] text-xs font-mono uppercase tracking-wider hover:border-[#FF4D00] transition-colors"
                >
                  {showCvPreview ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>
                    {showCvPreview ? 'Masquer l’aperçu PDF' : 'Aperçu du CV intégré'}
                  </span>
                </button>
                <a
                  href={PROFILE.cvUrl}
                  download="CV_Nathan_Chaignon.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF4D00] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <Download size={14} />
                  <span>Télécharger mon CV (PDF)</span>
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0A66C2] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Optional Embedded PDF Viewer */}
            {showCvPreview && (
              <div className="p-4 md:p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                  <span>APERÇU DIRECT — CV_Nathan_Chaignon.pdf</span>
                  <a
                    href={PROFILE.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FF4D00] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ouvrir en plein écran</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <iframe
                  src={PROFILE.cvUrl}
                  title="CV de Nathan Chaignon"
                  className="w-full h-[720px] rounded-xl border border-[#E5E4DF] dark:border-[#262626]"
                />
              </div>
            )}

            {/* Internship Search Highlight Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#FF4D00]/15 via-amber-500/10 to-transparent border border-[#FF4D00]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF4D00] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                  OBJECTIF PROFESSIONNEL 2027
                </span>
                <h3 className="text-2xl font-bold">
                  {CV_DATA.internshipGoal.title} ({CV_DATA.internshipGoal.duration})
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Disponibilité : <strong>{CV_DATA.internshipGoal.startDate}</strong> •{' '}
                  Mobilité : <strong>{CV_DATA.internshipGoal.mobility}</strong>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={`mailto:${PROFILE.email}?subject=Proposition%20de%20stage%20-%20Nathan%20Chaignon`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] dark:hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  <span>Me contacter pour un stage</span>
                </a>
              </div>
            </div>

            {/* 2-Column Split: Education & Professional Experience */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Formations */}
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-6">
                <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
                  <GraduationCap size={16} />
                  <span>FORMATIONS ACADÉMIQUES & CERTIFICATIONS</span>
                </div>

                <div className="space-y-6 divide-y divide-[#E5E4DF] dark:divide-[#262626]">
                  {CV_DATA.education.map((edu, idx) => (
                    <div key={edu.degree} className={idx > 0 ? 'pt-6 space-y-2' : 'space-y-2'}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#F3F2EE] dark:bg-[#1F1F1F] text-[#FF4D00] font-semibold">
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-neutral-500">
                        {edu.institution}
                      </p>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        {edu.specialization}
                      </p>
                      <ul className="space-y-1 pt-1 text-xs text-neutral-600 dark:text-neutral-400 list-disc list-inside">
                        {edu.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expériences & Langues / Intérêts */}
              <div className="space-y-8">
                <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-6">
                  <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
                    <Briefcase size={16} />
                    <span>EXPÉRIENCES PROFESSIONNELLES</span>
                  </div>

                  <div className="space-y-6 divide-y divide-[#E5E4DF] dark:divide-[#262626]">
                    {CV_DATA.experiences.map((exp, idx) => (
                      <div key={exp.role} className={idx > 0 ? 'pt-6 space-y-2.5' : 'space-y-2.5'}>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-bold text-lg">{exp.role}</h4>
                          <span className="font-mono text-xs text-neutral-400">
                            {exp.period}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-[#FF4D00]">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#F3F2EE] dark:bg-[#1F1F1F] text-neutral-600 dark:text-neutral-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Langues & Centres d'intérêt */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
                      <Globe size={15} />
                      <span>LANGUES</span>
                    </div>
                    <div className="space-y-2.5 text-sm">
                      {CV_DATA.languages.map((l) => (
                        <div key={l.lang} className="flex items-center justify-between">
                          <span className="font-semibold">{l.lang}</span>
                          <span className="font-mono text-xs text-neutral-500">
                            {l.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
                      <Heart size={15} />
                      <span>CENTRES D’INTÉRÊT</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CV_DATA.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F3F2EE] dark:bg-[#1F1F1F] text-neutral-700 dark:text-neutral-300"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compétences du CV par catégorie */}
            <div className="grid md:grid-cols-3 gap-6">
              {CV_DATA.skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-4"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
                    {cat.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#F3F2EE] dark:bg-[#1F1F1F] text-neutral-800 dark:text-neutral-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 03 / Other GitHub Repositories */}
          <section id="github-archive" className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E5E4DF] dark:border-[#262626] pb-6">
              <div>
                <span className="font-mono text-xs text-neutral-400">
                  03 / ARCHIVES & AUTRES DÉPÔTS PUBLICS
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">
                  Autres projets disponibles sur mon GitHub
                </h2>
              </div>
              <a
                href={`${PROFILE.githubUrl}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#FF4D00] hover:underline"
              >
                <span>Voir les 11 dépôts sur GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OTHER_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] hover:border-[#FF4D00] transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D00]">
                        <FolderGit2 size={15} />
                        <span>{repo.fullName}</span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-neutral-400 group-hover:text-[#FF4D00] transition-colors"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{repo.name}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#E5E4DF] dark:border-[#262626]">
                    <div className="flex flex-wrap gap-1.5">
                      {repo.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F3F2EE] dark:bg-[#1F1F1F] text-neutral-600 dark:text-neutral-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400">
                      {repo.language}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact & Minimalist Editorial Footer */}
          <footer className="pt-12 border-t border-[#E5E4DF] dark:border-[#262626] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
                04 / CONTACT, CV & RÉSEAUX
              </p>
              <h3 className="text-3xl md:text-4xl font-serif-editorial italic">
                À la recherche d’un stage de 8 à 10 semaines dès le 5 avril 2027.
              </h3>
              <p className="text-sm text-neutral-500 font-mono">
                {PROFILE.email} • Caen & Avranches (Permis B)
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FF4D00] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <FileText size={14} />
                <span>Mon CV (PDF)</span>
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A66C2] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E5E4DF] dark:border-[#262626] text-xs font-mono uppercase tracking-wider hover:border-[#FF4D00] transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E5E4DF] dark:border-[#262626] text-xs font-mono uppercase tracking-wider hover:border-[#FF4D00] transition-colors"
              >
                {copiedEmail ? <Check size={14} /> : <Mail size={14} />}
                <span>{copiedEmail ? 'Adresse copiée !' : 'Copier Email'}</span>
              </button>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
}
