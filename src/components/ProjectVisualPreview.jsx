import React, { useState } from 'react';
import { Terminal, Compass, Cpu, Layers, Database, ShieldCheck } from 'lucide-react';

export function ProjectCardGraphic({ type }) {
  if (type === 'viking-php') {
    return (
      <div className="my-auto w-full rounded-xl bg-white/85 dark:bg-[#111111]/90 border border-black/10 dark:border-white/10 p-3.5 shadow-sm backdrop-blur-md text-xs font-mono">
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-2 mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D00]" />
            <span className="font-bold text-[11px] tracking-tight">VIKING_TRANSPORT.PHP</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300">
            Normandie • Réseau Live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 rounded bg-[#FAF9F6] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5">
            <p className="text-neutral-400">TRAJET</p>
            <p className="font-semibold mt-0.5">Caen → Rouen</p>
          </div>
          <div className="p-2 rounded bg-[#FAF9F6] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5">
            <p className="text-neutral-400">MODULES</p>
            <p className="font-semibold mt-0.5">Carte & Horaires</p>
          </div>
          <div className="p-2 rounded bg-[#FAF9F6] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5">
            <p className="text-neutral-400">ADMIN</p>
            <p className="font-semibold text-[#FF4D00] mt-0.5">Stats & CRUD</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'raycaster') {
    const slices = [32, 46, 64, 88, 96, 88, 72, 54, 42, 58, 78, 92, 74, 52, 36, 28];
    return (
      <div className="my-auto w-full rounded-xl bg-[#0F0F12] text-white border border-white/10 p-3.5 shadow-sm font-mono text-[10px]">
        <div className="flex items-center justify-between text-neutral-400 pb-2 mb-2 border-b border-white/10">
          <span>./test — raycaster-raylib-c (DDA)</span>
          <span className="text-red-400">60 FPS</span>
        </div>
        <div className="h-20 flex items-center justify-between gap-1 px-2 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-800 rounded-lg overflow-hidden">
          {slices.map((h, idx) => (
            <div
              key={idx}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-sm transition-all duration-300 ${
                idx % 2 === 0 ? 'bg-red-500/85' : 'bg-orange-600/65'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'yinsh') {
    const rings = [
      { x: 24, y: 36, c: 'border-indigo-500 bg-indigo-500/20' },
      { x: 46, y: 24, c: 'border-white bg-white/20' },
      { x: 52, y: 55, c: 'border-[#FF4D00] bg-[#FF4D00]/30' },
      { x: 72, y: 38, c: 'border-indigo-400 bg-indigo-400/20' },
    ];
    return (
      <div className="my-auto w-full rounded-xl bg-white/85 dark:bg-[#111111]/90 border border-black/10 dark:border-white/10 p-3.5 shadow-sm backdrop-blur-md font-mono text-[10px]">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/10 dark:border-white/10">
          <span className="font-bold">YINSH • HexagonalCoordinates</span>
          <span className="text-indigo-600 dark:text-indigo-400">Java 21 + JavaFX</span>
        </div>
        <div className="relative h-20 rounded-lg bg-[#FAF9F6] dark:bg-[#18181C] border border-black/5 dark:border-white/5 overflow-hidden flex items-center justify-center">
          <div className="flex items-center gap-3">
            {rings.map((r, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full border-4 ${r.c} flex items-center justify-center shadow-sm`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-current opacity-60" />
              </div>
            ))}
          </div>
          <span className="absolute bottom-1.5 right-2 text-[9px] text-neutral-400">
            5 alignés → Retrait anneau
          </span>
        </div>
      </div>
    );
  }

  if (type === 'dotfiles') {
    return (
      <div className="my-auto w-full rounded-xl bg-[#0D1117] text-emerald-300 border border-emerald-500/25 p-3 shadow-sm font-mono text-[10px]">
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-[9px] text-neutral-400">
          <span>hyprland • quickshell • wezterm.lua</span>
          <span className="text-emerald-400">Workspace 1/5</span>
        </div>
        <div className="grid grid-cols-12 gap-1.5 h-20">
          <div className="col-span-7 rounded bg-white/5 border border-emerald-500/30 p-2 flex flex-col justify-between">
            <span className="text-[9px] text-emerald-400">nvim ~/.config/hypr/</span>
            <span className="text-[9px] text-neutral-300">exec-once = quickshell</span>
            <span className="text-[9px] text-neutral-400">theme = DankMaterial</span>
          </div>
          <div className="col-span-5 flex flex-col gap-1.5">
            <div className="flex-1 rounded bg-white/5 border border-white/10 p-1.5 text-[9px] text-neutral-300">
              fish • yazi • lazygit
            </div>
            <div className="flex-1 rounded bg-emerald-500/15 border border-emerald-500/30 p-1.5 text-[9px] text-emerald-200">
              btop • hyprlock
            </div>
          </div>
        </div>
      </div>
    );
  }

  // malloc
  return (
    <div className="my-auto w-full rounded-xl bg-white/85 dark:bg-[#111111]/90 border border-black/10 dark:border-white/10 p-3.5 shadow-sm backdrop-blur-md font-mono text-[10px]">
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-black/10 dark:border-white/10">
        <span className="font-bold">HEAP BLOCKS — my_malloc.c</span>
        <span className="text-violet-600 dark:text-violet-400">Aligned 16B</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        <div className="p-2 rounded bg-violet-500/20 border border-violet-500/40 text-center">
          <p className="font-bold text-violet-700 dark:text-violet-300">64B</p>
          <p className="text-[9px] opacity-75">USED</p>
        </div>
        <div className="p-2 rounded bg-emerald-500/15 border border-emerald-500/40 text-center">
          <p className="font-bold text-emerald-700 dark:text-emerald-300">128B</p>
          <p className="text-[9px] opacity-75">FREE</p>
        </div>
        <div className="p-2 rounded bg-violet-500/20 border border-violet-500/40 text-center">
          <p className="font-bold text-violet-700 dark:text-violet-300">32B</p>
          <p className="text-[9px] opacity-75">USED</p>
        </div>
        <div className="p-2 rounded bg-neutral-500/10 border border-neutral-500/30 text-center">
          <p className="font-bold">SPLIT</p>
          <p className="text-[9px] opacity-75">HEAP</p>
        </div>
      </div>
    </div>
  );
}

export function InteractiveCaseStudyWidget({ type }) {
  const [fov, setFov] = useState(66);
  const [heapBlocks, setHeapBlocks] = useState([
    { id: 1, size: 64, status: 'USED', addr: '0x1000' },
    { id: 2, size: 128, status: 'FREE', addr: '0x1040' },
    { id: 3, size: 96, status: 'USED', addr: '0x10C0' },
    { id: 4, size: 64, status: 'FREE', addr: '0x1120' },
  ]);
  const [activeTab, setActiveTab] = useState('voyageur');
  const [flippedMarkers, setFlippedMarkers] = useState([false, true, true, false, true]);

  if (type === 'raycaster') {
    const columns = 24;
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-[#111113] text-white border border-[#262626] space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
              SIMULATEUR DE PROJECTION DDA (src/raycaster.c)
            </span>
            <h4 className="text-lg font-bold mt-1">
              Calcul de la hauteur des colonnes selon la distance perpendiculaire
            </h4>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <label htmlFor="fov-slider" className="text-neutral-400">
              Distance Caméra / FOV ({fov}°)
            </label>
            <input
              id="fov-slider"
              type="range"
              min="45"
              max="95"
              value={fov}
              onChange={(e) => setFov(Number(e.target.value))}
              className="accent-[#FF4D00] cursor-pointer"
            />
          </div>
        </div>

        <div className="h-44 rounded-xl bg-gradient-to-b from-[#1A1A22] via-[#0B0B0E] to-[#1F1B18] border border-white/10 px-4 flex items-center justify-between gap-1.5 overflow-hidden">
          {Array.from({ length: columns }).map((_, i) => {
            const distFactor = Math.abs(i - columns / 2) / (columns / 2);
            const rawHeight = Math.max(18, Math.min(94, Math.round((1 - distFactor * (fov / 110)) * 90)));
            const isSideWall = i % 3 === 0;
            return (
              <div
                key={i}
                style={{ height: `${rawHeight}%` }}
                className={`flex-1 rounded-sm transition-all duration-150 ${
                  isSideWall ? 'bg-[#FF4D00]/70' : 'bg-[#FF4D00]'
                }`}
                title={`Rayon #${i + 1} — Hauteur projetée: ${rawHeight}%`}
              />
            );
          })}
        </div>
        <p className="text-xs font-mono text-neutral-400">
          Ajustez le curseur pour observer comment `raycaster.c` recalcule la hauteur des tranches verticales sans distorsion fisheye.
        </p>
      </div>
    );
  }

  if (type === 'malloc') {
    const toggleBlock = (id) => {
      setHeapBlocks((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: b.status === 'USED' ? 'FREE' : 'USED' } : b))
      );
    };
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
              INSPECTEUR DE TAS INTERACTIF (src/my_malloc.c)
            </span>
            <h4 className="text-lg font-bold mt-1">
              Simulation des blocs mémoire alignés (Cliquez sur un bloc pour alterner `my_malloc` / `free`)
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
          {heapBlocks.map((b) => (
            <button
              key={b.id}
              onClick={() => toggleBlock(b.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                b.status === 'USED'
                  ? 'bg-violet-500/10 border-violet-500/40 text-violet-900 dark:text-violet-200'
                  : 'bg-emerald-500/10 border-emerald-500/40 text-emerald-900 dark:text-emerald-200'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] opacity-70">
                <span>ADDR {b.addr}</span>
                <span>HEADER + DATA</span>
              </div>
              <p className="text-xl font-bold mt-2">{b.size} Bytes</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/10 dark:bg-white/10">
                STATUS : {b.status}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'yinsh') {
    const flipMarker = (idx) => {
      setFlippedMarkers((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    };
    const alignedCount = flippedMarkers.filter(Boolean).length;
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
              DÉTECTION D’ALIGNEMENT HEXAGONAL (YINSH_java & YINSH_UI)
            </span>
            <h4 className="text-lg font-bold mt-1">
              Testez le retournement de marqueurs : alignez 5 pions oranges pour retirer un anneau
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full font-mono text-xs bg-[#F3F2EE] dark:bg-[#1F1F1F]">
            Alignement : {alignedCount}/5 {alignedCount === 5 ? '— ANNEAU RETIRÉ !' : ''}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
          {flippedMarkers.map((isOrange, idx) => (
            <button
              key={idx}
              onClick={() => flipMarker(idx)}
              className={`w-14 h-14 rounded-full border-4 transition-all flex flex-col items-center justify-center font-mono text-[10px] ${
                isOrange
                  ? 'bg-[#FF4D00] border-[#FF4D00] text-white scale-105 shadow-md'
                  : 'bg-neutral-200 dark:bg-neutral-800 border-neutral-400 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              <span>HEX</span>
              <span className="font-bold">0,{idx + 1}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'viking-php') {
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E4DF] dark:border-[#262626] space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00]">
              EXPLORATEUR D’ARCHITECTURE PHP (site_viking_transport)
            </span>
            <h4 className="text-lg font-bold mt-1">
              Découpage des contrôleurs livrés en 3 jours par l’équipe Devik
            </h4>
          </div>
          <div className="flex gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('voyageur')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'voyageur'
                  ? 'bg-[#FF4D00] text-white'
                  : 'bg-[#F3F2EE] dark:bg-[#1F1F1F]'
              }`}
            >
              Portail Voyageur
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'admin'
                  ? 'bg-[#FF4D00] text-white'
                  : 'bg-[#F3F2EE] dark:bg-[#1F1F1F]'
              }`}
            >
              Back-Office Admin
            </button>
          </div>
        </div>
        {activeTab === 'voyageur' ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1F1F1F]">
              <p className="font-bold text-[#FF4D00]">lignes.php & carte.php</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Visualisation des lignes régionales normandes et tracé du réseau.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1F1F1F]">
              <p className="font-bold text-[#FF4D00]">horaires.php & trajet.php</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Recherche dynamique de correspondances et grilles horaires.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1F1F1F]">
              <p className="font-bold text-[#FF4D00]">reserver.php & profil.php</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Réservation de billets authentifiée et historique client.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1F1F1F]">
              <p className="font-bold text-[#FF4D00]">admin_dashboard.php</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Vue centrale de supervision du réseau Viking Transport.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1F1F1F]">
              <p className="font-bold text-[#FF4D00]">admin_modif_ligne.php</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Mise à jour des lignes, arrêts et perturbations en base SQL.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1F1F1F]">
              <p className="font-bold text-[#FF4D00]">admin_stats.php & client</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Indicateurs de fréquentation et modération des comptes clients.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // dotfiles
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-[#0D1117] text-white border border-[#262626] space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between text-emerald-400">
        <span>DOTFILES STACK — ~/.config/ (nathch-17/dotfiles2)</span>
        <span>Wayland / Hyprland</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { k: 'Compositeur', v: 'Hyprland + Hyprlock' },
          { k: 'Shell UI', v: 'Quickshell + DankMaterial' },
          { k: 'Terminaux', v: 'WezTerm (Lua) + Kitty' },
          { k: 'Workflow CLI', v: 'Neovim + Yazi + Lazygit + Fish' },
        ].map((item) => (
          <div key={item.k} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] text-neutral-400 uppercase">{item.k}</p>
            <p className="font-semibold text-emerald-300 mt-1">{item.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
