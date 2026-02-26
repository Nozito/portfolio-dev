'use client'

import * as React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import { useSwipeable } from "react-swipeable";

/* ─── Intersection Observer ──────────────────────────────────── */
function useVisible(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useVisible();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      {children}
    </div>
  );
}

/* ─── Carousel ───────────────────────────────────────────────── */
interface CarouselImage { src: string; alt: string; }

function Carousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const navigate = useCallback((dir: "prev" | "next") => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setIndex((i) => dir === "next" ? (i + 1) % images.length : (i - 1 + images.length) % images.length);
      setFading(false);
    }, 180);
  }, [fading, images.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate("next"),
    onSwipedRight: () => navigate("prev"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="mt-4 space-y-2.5">
      <div
        {...handlers}
        className="relative w-full overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
      >
        <div className={`transition-opacity duration-180 ${fading ? "opacity-0" : "opacity-100"}`}>
          <Image
            src={images[index]?.src || ""}
            alt={images[index]?.alt || ""}
            width={1200}
            height={800}
            className="object-cover w-full h-auto"
            priority={index === 0}
          />
        </div>

        {/* Caption + counter */}
        <div className="absolute bottom-0 inset-x-0 bg-black/50 px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-zinc-400">{images[index]?.alt}</span>
          <span className="text-xs text-zinc-600 font-mono tabular-nums">{index + 1}/{images.length}</span>
        </div>

        {/* Arrows */}
        <button
          onClick={() => navigate("prev")}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
            bg-black/60 border border-zinc-700 text-zinc-300 hover:text-white
            hover:border-zinc-500 flex items-center justify-center transition-all text-base leading-none"
          aria-label="Précédent"
        >‹</button>
        <button
          onClick={() => navigate("next")}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
            bg-black/60 border border-zinc-700 text-zinc-300 hover:text-white
            hover:border-zinc-500 flex items-center justify-center transition-all text-base leading-none"
          aria-label="Suivant"
        >›</button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300
              ${i === index ? "bg-zinc-300 w-4 h-1.5" : "bg-zinc-700 hover:bg-zinc-500 w-1.5 h-1.5"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function GetStuff() {
  const backofficeImages = [
    { src: "/getstuff/homepage-backoff.png", alt: "Aperçu gestion backoffice" },
    { src: "/getstuff/stock.png", alt: "Suivi des stocks" },
    { src: "/getstuff/gestionnaire.png", alt: "Menu Gestion" },
    { src: "/getstuff/list-prod.png", alt: "Liste des produits" },
  ];

  const ecommerceImages = [
    { src: "/getstuff/homepage.png", alt: "Page d'accueil" },
    { src: "/getstuff/doc.png", alt: "Page articles Doc Martens" },
    { src: "/getstuff/panier.png", alt: "Affichage du panier" },
    { src: "/getstuff/profile.png", alt: "Page Profil" },
    { src: "/getstuff/contact-us.png", alt: "Page de contact" },
  ];

  const visualImages = [
    { src: "/getstuff/design-flyers.jpg", alt: "Flyers" },
    { src: "/getstuff/design-cdv.jpg", alt: "Carte de visite" },
    { src: "/getstuff/coup-de-coeurs.jpg", alt: "Story Instagram - Coup de cœur" },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">

        {/* ── Présentation ──────────────────────────────────────── */}
        <FadeSection>
          <header className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/LGT.png"
                alt="Logo Get Stuff"
                width={100}
                height={100}
                className="rounded-md"
              />
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Get Stuff</h1>
                <p className="text-zinc-500 text-sm mt-1">Stage de 1 mois · Développeur FullStack</p>
              </div>
            </div>

            <section className="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>
                Getstuff est un concept-store et magasin de vêtements de seconde main, ancré dans l'esprit des années 90 et 2000.
                Lors de mon stage, j'ai travaillé directement avec l'équipe pour concevoir et développer leur site web, ainsi que leurs supports de communication visuelle.
              </p>
              <p>
                L'entreprise venait de se lancer sur le marché, avec l'ambition de se créer une identité forte pour se distinguer dans un secteur compétitif et attirer une clientèle jeune et dynamique.
              </p>
              <p>
                Le défi principal : développer un outil back-office simple et accessible permettant à l'équipe de gérer facilement les stocks, les produits et les recettes, tant sur PC que sur mobile.
              </p>
              <p>
                J'ai également été impliqué dans la création de supports de communication visuelle — flyers, cartes de visite et visuels pour les réseaux sociaux.
              </p>
            </section>
          </header>
        </FadeSection>

        {/* ── Backoffice ────────────────────────────────────────── */}
        <FadeSection delay={60}>
          <section className="pt-6 border-t border-zinc-800">
            <h2 className="text-xl font-bold mb-1 text-zinc-100 tracking-tight">Site de gestion backoffice</h2>
            <p className="mb-3 text-xs text-zinc-500 uppercase tracking-widest">Fonctionnalités principales</p>
            <ul className="space-y-1.5 mb-4">
              {[
                "Gestion des produits (ajout, modification, suppression)",
                "Suivi des stocks en temps réel",
                "Gestion du livre de recettes pour suivre les ventes et les transactions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Un backoffice fonctionnel avec une interface intuitive et accessible depuis n'importe quel navigateur.
              L'équipe dispose d'une vue d'ensemble claire sur les stocks, les produits et les ventes quotidiennes.
            </p>
            <Carousel images={backofficeImages} />
          </section>
        </FadeSection>

        {/* ── E-commerce ────────────────────────────────────────── */}
        <FadeSection delay={120}>
          <section className="pt-6 border-t border-zinc-800">
            <h2 className="text-xl font-bold mb-1 text-zinc-100 tracking-tight">Site E-commerce</h2>
            <p className="mb-3 text-xs text-zinc-500 uppercase tracking-widest">Fonctionnalités clés</p>
            <ul className="space-y-1.5 mb-4">
              {[
                "Page d'accueil dynamique",
                "Pages produits par section (vêtements, accessoires, etc.)",
                "Page panier récapitulatif et processus de commande",
                "Page de contact et page à propos",
                "Pages légales (CGV, politique de confidentialité)",
                "Intégration avec le back-office pour la gestion des stocks et des ventes",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Interface fluide et moderne pour naviguer entre les sections, ajouter des articles au panier et finaliser les achats en quelques clics.
              Chaque page reflète l'identité visuelle de Getstuff.
            </p>
            <Carousel images={ecommerceImages} />
          </section>
        </FadeSection>

        {/* ── Communication visuelle ────────────────────────────── */}
        <FadeSection delay={180}>
          <section className="pt-6 border-t border-zinc-800">
            <h2 className="text-xl font-bold mb-1 text-zinc-100 tracking-tight">Communication Visuelle</h2>
            <p className="mb-3 text-xs text-zinc-500 uppercase tracking-widest">Supports créés</p>
            <ul className="space-y-1.5 mb-4">
              {[
                "Création de flyers pour promouvoir l'entreprise",
                "Conception de cartes de visite professionnelles",
                "Création de visuels pour les stories Instagram et autres réseaux sociaux",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Des visuels conçus pour capter l'attention et transmettre l'image jeune et dynamique de Getstuff — cohérence de marque sur tous les supports de communication.
            </p>
            <Carousel images={visualImages} />
          </section>
        </FadeSection>

      </main>
    </div>
  );
}
