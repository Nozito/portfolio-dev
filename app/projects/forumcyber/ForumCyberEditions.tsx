'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type EditionKey = "2023-2024" | "2024-2025" | "2025-2026";
type OnImageClick = (src: string, alt: string) => void;

const editions = [
  {
    id: "2023-2024" as EditionKey,
    year: "2023 — 2024",
    num: "01",
    sublabel: "1ère édition",
    tagline: "Naissance du projet",
    dot: "bg-emerald-400",
  },
  {
    id: "2024-2025" as EditionKey,
    year: "2024 — 2025",
    num: "02",
    sublabel: "2ème édition",
    tagline: "Consolidation & expansion",
    dot: "bg-blue-400",
  },
  {
    id: "2025-2026" as EditionKey,
    year: "2025 — 2026",
    num: "03",
    sublabel: "3ème édition",
    tagline: "En préparation",
    dot: "bg-violet-400",
  },
];

/* ─── Lightbox ────────────────────────────────────────────── */

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-black/92 backdrop-blur-md cursor-zoom-out"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="relative cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-8 h-8 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 rounded-full text-zinc-300 hover:text-white text-xs transition-all shadow-xl"
          aria-label="Fermer"
        >
          ✕
        </button>

        {/* Image plein format */}
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={2400}
          className="rounded-xl shadow-2xl object-contain"
          style={{ maxWidth: "90vw", maxHeight: "84vh", width: "auto", height: "auto" }}
          unoptimized
        />

        {/* Légende */}
        {alt && (
          <p className="mt-3 text-center text-xs text-zinc-500">{alt}</p>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─── Image cliquable ─────────────────────────────────────── */

function Img({
  src, alt, width, height, className, onImageClick,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onImageClick: OnImageClick;
}) {
  return (
    <button
      onClick={() => onImageClick(src, alt)}
      className="group relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-xl"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
      {/* Overlay zoom */}
      <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 group-hover:bg-black/30 transition-colors duration-200">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 border border-white/10 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </span>
      </span>
    </button>
  );
}

/* ─── Composants partagés ─────────────────────────────────── */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 sm:p-4 text-center">
      <div className="text-xl sm:text-2xl font-bold text-zinc-100">{value}</div>
      <div className="text-xs text-zinc-500 mt-1 leading-tight">{label}</div>
    </div>
  );
}

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-6 border-t border-zinc-800/60 space-y-4">
      <h4 className="text-base font-semibold text-zinc-100">{title}</h4>
      {children}
    </div>
  );
}

function MediaLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{children}</p>
  );
}

function DocButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 px-4 py-2.5 rounded-xl border border-zinc-700 hover:border-zinc-600 text-sm transition-all duration-200"
    >
      <span className="text-zinc-500">↗</span>
      {children}
    </Link>
  );
}

/* ─── Édition 2023-2024 ───────────────────────────────────── */

function Edition2324({ onImageClick }: { onImageClick: OnImageClick }) {
  return (
    <div className="space-y-0 text-zinc-300">
      <div className="space-y-3 pb-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          1ère édition · 2023-2024
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">Naissance du projet</h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed text-zinc-400">
          Tout part d&apos;un constat : la montée des cybermenaces et le manque de sensibilisation dans les établissements scolaires.
          Sur l&apos;initiative des enseignants du BTS SIO du lycée Gabriel Fauré, je suis désigné chef de projet pour concevoir
          et organiser le premier Forum Cybersécurité — avec une idée simple : rendre la cybersécurité accessible et ludique pour tous.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-6 border-y border-zinc-800/60">
        <StatCard value="2" label="Établissements" />
        <StatCard value="6" label="Ateliers" />
        <StatCard value="1 jour" label="au lycée Fauré" />
        <StatCard value="4e / 3e" label="au collège" />
      </div>

      <SectionBlock title="Lycée Gabriel Fauré — Annecy">
        <p className="text-sm text-justify leading-relaxed text-zinc-400">
          La première édition s&apos;est déroulée sur une journée entière. Les élèves de toutes sections
          (BTS SIO, STMG…) ont participé à des ateliers pratiques et à des conférences animées par des professionnels du secteur.
          Sécurité des données personnelles, gestion des mots de passe, bonnes pratiques sur les réseaux sociaux et IA
          ont été au programme. Des simulations d&apos;attaques de phishing et des démonstrations de failles de sécurité classiques
          ont particulièrement captivé le public.
        </p>
        <Img
          src="/forumcyber/forumFauré.jpeg"
          alt="Forum cybersécurité au lycée Gabriel Fauré"
          width={800}
          height={450}
          className="rounded-xl w-full object-cover"
          onImageClick={onImageClick}
        />
      </SectionBlock>

      <SectionBlock title="Collège du Parmelan — Groisy">
        <p className="text-sm text-justify leading-relaxed text-zinc-400">
          Pour les collégiens de 4e et 3e, le contenu a été entièrement repensé avec une approche ludique et interactive.
          La plateforme Kahoot a favorisé l&apos;engagement des élèves à travers des quiz en temps réel,
          des scénarios de protection de comptes et des ateliers de création de mots de passe forts.
          L&apos;événement a suscité une prise de conscience collective et un dialogue entre élèves,
          enseignants et intervenants.
        </p>
      </SectionBlock>

      <SectionBlock title="Documents">
        <p className="text-sm text-zinc-400 leading-relaxed">
          Un cahier des charges détaillé a été rédigé en amont, suivi d&apos;un rapport de bilan
          pour analyser les retours et préparer les éditions suivantes.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <DocButton href="/forumcyber/cahier-des-charges.pdf">Cahier des charges</DocButton>
          <DocButton href="/forumcyber/rapport-forum-24.pdf">Rapport de l&apos;édition</DocButton>
        </div>
      </SectionBlock>
    </div>
  );
}

/* ─── Édition 2024-2025 ───────────────────────────────────── */

function Edition2425({ onImageClick }: { onImageClick: OnImageClick }) {
  return (
    <div className="space-y-0 text-zinc-300">
      <div className="space-y-3 pb-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
          2ème édition · 2024-2025
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">Consolidation &amp; expansion</h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed text-zinc-400">
          Fort du succès de la première édition, la seconde monte en puissance. Le forum s&apos;étale désormais
          sur deux jours au lycée Fauré, le collège accueille de nouvelles classes, et les supports de communication
          sont pleinement professionnalisés : site web dédié, bannière, kakémonos, badges, dépliants et stickers.
          Le bilan de satisfaction atteint <strong className="text-zinc-300">83%</strong>.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-6 border-y border-zinc-800/60">
        <StatCard value="+700" label="Participants" />
        <StatCard value="10" label="Ateliers" />
        <StatCard value="2 jours" label="au lycée Fauré" />
        <StatCard value="83%" label="Satisfaction" />
      </div>

      <SectionBlock title="Lycée Gabriel Fauré — Annecy">
        <p className="text-sm text-justify leading-relaxed text-zinc-400">
          La deuxième édition s&apos;est tenue sur deux jours, permettant d&apos;accueillir davantage d&apos;élèves
          et d&apos;étoffer le programme. Simulations d&apos;attaques de phishing, démonstrations de failles de sécurité
          classiques et conférences sur l&apos;IA ont enrichi le contenu. Les retours ont été très positifs.
        </p>
      </SectionBlock>

      <SectionBlock title="Collège du Parmelan — Groisy">
        <p className="text-sm text-justify leading-relaxed text-zinc-400">
          Le forum s&apos;est élargi aux classes de 5e et 4e. Les élèves ont exploré des thématiques variées :
          sécurité des données personnelles, gestion des mots de passe, vie privée sur les réseaux sociaux.
          L&apos;approche par quiz interactifs a été maintenue et renforcée.
        </p>
      </SectionBlock>

      <SectionBlock title="Supports de communication">
        <div className="space-y-6">

          <div className="space-y-2">
            <MediaLabel>Site web</MediaLabel>
            <Img
              src="/forumcyber/siteweb.jpg"
              alt="Site web du Forum Cybersécurité"
              width={800}
              height={450}
              className="rounded-xl w-full"
              onImageClick={onImageClick}
            />
            <div className="pt-1">
              <DocButton href="https://fcb25.vercel.app/">Voir le site web</DocButton>
            </div>
          </div>

          <div className="space-y-2">
            <MediaLabel>Bannière grand format</MediaLabel>
            <Img
              src="/forumcyber/Bannière.png"
              alt="Bannière Forum Cybersécurité"
              width={800}
              height={250}
              className="rounded-xl w-full object-cover"
              onImageClick={onImageClick}
            />
          </div>

          <div className="space-y-2">
            <MediaLabel>Dépliants (recto / verso)</MediaLabel>
            <div className="grid grid-cols-2 gap-3">
              <Img src="/forumcyber/ext.png" alt="Dépliant recto" width={400} height={400} className="rounded-xl w-full" onImageClick={onImageClick} />
              <Img src="/forumcyber/int.png" alt="Dépliant verso" width={400} height={400} className="rounded-xl w-full" onImageClick={onImageClick} />
            </div>
          </div>

          <div className="space-y-2">
            <MediaLabel>Affiche · Stickers · Lanière</MediaLabel>
            <div className="grid grid-cols-3 gap-3">
              <Img src="/forumcyber/affiche.png" alt="Affiche" width={300} height={400} className="rounded-xl w-full object-contain bg-zinc-900" onImageClick={onImageClick} />
              <Img src="/forumcyber/stickers.png" alt="Stickers" width={300} height={300} className="rounded-xl w-full object-contain bg-zinc-900" onImageClick={onImageClick} />
              <Img src="/forumcyber/Lanière.png" alt="Lanière" width={300} height={300} className="rounded-xl w-full object-contain bg-zinc-900" onImageClick={onImageClick} />
            </div>
          </div>

          <div className="space-y-2">
            <MediaLabel>Badges (recto / verso)</MediaLabel>
            <div className="grid grid-cols-2 gap-3 max-w-xs">
              <Img src="/forumcyber/faceb.png" alt="Badge recto" width={200} height={200} className="rounded-xl w-full" onImageClick={onImageClick} />
              <Img src="/forumcyber/faceb2.png" alt="Badge verso" width={200} height={200} className="rounded-xl w-full" onImageClick={onImageClick} />
            </div>
          </div>

          <div className="space-y-2">
            <MediaLabel>Kakémonos</MediaLabel>
            <div className="grid grid-cols-2 gap-3 max-w-xs">
              <Img src="/forumcyber/FCB25-KK.png" alt="Kakemono 1" width={300} height={600} className="rounded-xl w-full" onImageClick={onImageClick} />
              <Img src="/forumcyber/FCB25-KKH.png" alt="Kakemono 2" width={300} height={600} className="rounded-xl w-full" onImageClick={onImageClick} />
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Évaluation & retours">
        <p className="text-sm text-justify leading-relaxed text-zinc-400">
          À l&apos;issue du forum, une évaluation a été réalisée auprès des participants.
          Les retours ont été très positifs, avec une mention spéciale pour la qualité des intervenants
          et la diversité des ateliers. Le taux de satisfaction global s&apos;établit à{" "}
          <strong className="text-zinc-300">83%</strong>.
          Les suggestions recueillies — plus d&apos;espace entre les ateliers, davantage de quiz interactifs —
          serviront de base pour les prochaines éditions.
        </p>
        <Img
          src="/forumcyber/feedback.png"
          alt="Résultats de satisfaction"
          width={800}
          height={400}
          className="rounded-xl w-full"
          onImageClick={onImageClick}
        />
      </SectionBlock>
    </div>
  );
}

/* ─── Édition 2025-2026 ───────────────────────────────────── */

function Edition2526() {
  return (
    <div className="space-y-0 text-zinc-300">
      <div className="space-y-3 pb-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 animate-pulse" />
          3ème édition · 2025-2026
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">En préparation</h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed text-zinc-400">
          La troisième édition du Forum Cybersécurité est en cours de préparation.
          Forts des deux premières expériences et des retours recueillis, l&apos;équipe travaille
          à enrichir le programme, élargir les partenariats et proposer de nouveaux ateliers
          adaptés aux évolutions des menaces numériques.
        </p>
      </div>

      <div className="border border-dashed border-zinc-700 rounded-xl p-8 sm:p-12 text-center space-y-4">
        <div className="w-10 h-10 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto">
          <span className="text-violet-400 text-base">✦</span>
        </div>
        <p className="text-sm text-zinc-500">
          Les réalisations de cette édition seront documentées et ajoutées ici prochainement.
        </p>
      </div>
    </div>
  );
}

/* ─── Composant principal ─────────────────────────────────── */

export function ForumCyberEditions() {
  const [active, setActive] = useState<EditionKey>("2024-2025");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const activeIdx = editions.findIndex((e) => e.id === active);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <div className="space-y-6">

        {/* Titre + tabs */}
        <div className="pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-5">Les éditions</h2>

          <div className="flex gap-2 overflow-x-auto pb-0.5 snap-x">
            {editions.map((e, i) => {
              const isActive = active === e.id;
              return (
                <button
                  key={e.id}
                  onClick={() => setActive(e.id)}
                  className={`
                    snap-start shrink-0 sm:flex-1 min-w-[140px] sm:min-w-0
                    relative p-4 rounded-xl border text-left
                    transition-all duration-200
                    ${isActive
                      ? "border-zinc-600 bg-zinc-800"
                      : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${e.dot}`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className={`text-xs font-mono mb-2 ${isActive ? "text-zinc-500" : "text-zinc-700"}`}>
                    {e.num}
                  </div>
                  <div className={`font-semibold text-sm leading-tight ${isActive ? "text-zinc-100" : "text-zinc-500"}`}>
                    {e.year}
                  </div>
                  <div className={`flex items-center gap-1.5 mt-1.5 text-xs ${isActive ? "text-zinc-400" : "text-zinc-600"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${e.dot} ${isActive ? "opacity-100" : "opacity-30"} ${isActive && e.id === "2025-2026" ? "animate-pulse" : ""}`} />
                    {e.sublabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            {active === "2023-2024" && <Edition2324 onImageClick={openLightbox} />}
            {active === "2024-2025" && <Edition2425 onImageClick={openLightbox} />}
            {active === "2025-2026" && <Edition2526 />}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </>
  );
}
