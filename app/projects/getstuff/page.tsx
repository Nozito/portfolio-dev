'use client'

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import { useSwipeable } from "react-swipeable";

export default function GetStuff() {
  const [backofficeIndex, setBackofficeIndex] = useState(0);
  const [ecommerceIndex, setEcommerceIndex] = useState(0);
  const [visualIndex, setVisualIndex] = useState(0);

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

  const handleNext = (images: any[], setIndex: React.Dispatch<React.SetStateAction<number>>) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = (images: any[], setIndex: React.Dispatch<React.SetStateAction<number>>) => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const createSwipeHandlers = (images: any[], setIndex: React.Dispatch<React.SetStateAction<number>>) => 
    useSwipeable({
      onSwipedLeft: () => handleNext(images, setIndex),
      onSwipedRight: () => handlePrevious(images, setIndex),
      preventScrollOnSwipe: true,
      trackMouse: true,
    });

  const renderCarousel = (images: any[], currentIndex: number, setIndex: React.Dispatch<React.SetStateAction<number>>) => {
    const handlers = createSwipeHandlers(images, setIndex);

    return (
      <div {...handlers} className="relative w-full h-auto mt-4">
        <Image
          src={images[currentIndex]?.src || ""}
          alt={images[currentIndex]?.alt || ""}
          width={1200}
          height={800}
          className="object-cover w-full h-auto rounded-xl"
        />
        <button
          onClick={() => handlePrevious(images, setIndex)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={() => handleNext(images, setIndex)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="relative pb-16">
      <Navigation />
      <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
        {/* Présentation */}
        <header className="space-y-4">
        <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Getstuff</h1>
        <Image
          src="/LGT.png"
          alt="Logo Getstuff"
          width={130}
          height={130}
          className="rounded-md"
        />
      </div>
          <p className="text-zinc-400">Stage de 1 Mois - Développeur FullStack</p>
          <section className="space-y-6 text-zinc-300">
            <p className="text-justify">
              Getstuff est un concept-store & magasin de vêtement de seconde main, dirigée vers les années 90-2000.
              J'ai eu l'opportunité de travailler avec eux pour développer leur site web et leurs supports de communication visuelle.
            </p>
            <p className="text-justify">
              L'entreprise venait d'être créée et avait besoin d'une identité visuelle forte pour se démarquer et attirer une clientèle dynamique.
            </p>
            <p className="text-justify">
              Son besoin principal était de pouvoir gérer ses stocks d'une manière plus simplifiée que par papier ou Excel et d'y accéder depuis un téléphone ou PC.
            </p>
            <p className="text-justify">
              J'ai donc conçu un site web de gestion backoffice pour leurs produits, stocks et livre de recettes.
            </p>
          </section>
        </header>

        {/* Backoffice */}
        <section className="pt-2 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-1 text-zinc-100">Site de gestion backoffice</h2>
          <p className="mb-1 text-zinc-300">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1 mb-1">
            <li>Gestion des produits</li>
            <li>Suivi des stocks</li>
            <li>Suivi de livre de recettes</li>
          </ul>
          {renderCarousel(backofficeImages, backofficeIndex, setBackofficeIndex)}
        </section>

        {/* E-commerce */}
        <section className="pt-2 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-1 text-zinc-100">Site E-commerce</h2>
          <p className="mb-1 text-zinc-300">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1 mb-1">
            <li>Page d'Accueil</li>
            <li>Page Produits par section</li>
            <li>Page Panier récapitulatif</li>
            <li>Page de Contact</li>
            <li>Page À propos</li>
            <li>Pages légales</li>
            <li>Lien avec le back-office (stocks / statistiques)</li>
          </ul>
          {renderCarousel(ecommerceImages, ecommerceIndex, setEcommerceIndex)}
        </section>

        {/* Communication visuelle */}
        <section className="pt-2 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-1 text-zinc-100">Communication Visuelle</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-1 mb-1">
            <li>Flyers pour faire connaître l'entreprise</li>
            <li>Cartes de visite professionnelles</li>
            <li>Stories Instagram engageantes</li>
          </ul>
          <p className="mb-1 text-zinc-300">
            Chaque visuel est conçu pour captiver et transmettre un message clair à l'audience cible.
          </p>
          {renderCarousel(visualImages, visualIndex, setVisualIndex)}
        </section>
      </main>
    </div>
  );
}