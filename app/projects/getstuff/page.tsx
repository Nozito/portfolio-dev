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
        <header className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/LGT.png"
              alt="Logo Get Stuff"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Get Stuff</h1>
          </div>
          <p className="text-zinc-400">Stage de 1 Mois - Développeur FullStack</p>
          <section className="space-y-6 text-zinc-300">
            <p className="text-justify">
              Getstuff est un concept-store et magasin de vêtements de seconde main, ancré dans l'esprit des années 90 et 2000.
              Lors de mon stage, j'ai eu la chance de travailler directement avec l'équipe pour concevoir et développer leur site web, ainsi que leurs supports de communication visuelle.
            </p>
            <p className="text-justify">
              L'entreprise venait de se lancer sur le marché, avec l'ambition de se créer une identité forte pour se distinguer dans un secteur compétitif et attirer une clientèle jeune et dynamique.
            </p>
            <p className="text-justify">
              L’un des défis principaux consistait à développer un outil de gestion back-office simple et accessible, permettant à l’équipe de gérer facilement les stocks, les produits et les recettes, tant sur PC que sur mobile.
            </p>
            <p className="text-justify">
              En plus de la gestion du back-office, j’ai été impliqué dans la création de supports de communication visuelle, incluant des flyers, cartes de visite et des visuels pour les réseaux sociaux afin de promouvoir l'image de l'entreprise.
            </p>
          </section>
        </header>

        {/* Backoffice */}
        <section className="pt-6 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-2 text-zinc-100">Site de gestion backoffice</h2>
          <p className="mb-2 text-zinc-300">Fonctionnalités principales :</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
            <li>Gestion des produits (ajout, modification, suppression)</li>
            <li>Suivi des stocks en temps réel</li>
            <li>Gestion du livre de recettes pour suivre les ventes et les transactions</li>
          </ul>
          <p className="text-zinc-300">
            Dans ce projet, j’ai développé un backoffice simple mais fonctionnel permettant de gérer les produits et les stocks. L’interface est intuitive et accessible depuis un navigateur, avec un design épuré pour maximiser l’efficacité de l’utilisateur.
            Les fonctionnalités incluent le suivi des stocks, des produits et la gestion des ventes réalisées, ce qui permet à l’équipe de garder une vue d'ensemble sur les opérations quotidiennes.
          </p>
          {renderCarousel(backofficeImages, backofficeIndex, setBackofficeIndex)}
        </section>

        {/* E-commerce */}
        <section className="pt-6 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-2 text-zinc-100">Site E-commerce</h2>
          <p className="mb-2 text-zinc-300">Fonctionnalités clés du site :</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
            <li>Page d'accueil dynamique</li>
            <li>Pages produits par section (vêtements, accessoires, etc.)</li>
            <li>Page panier récapitulatif et processus de commande</li>
            <li>Page de contact et page à propos</li>
            <li>Pages légales (CGV, politique de confidentialité)</li>
            <li>Intégration avec le back-office pour la gestion des stocks et des ventes</li>
          </ul>
          <p className="text-zinc-300">
            Le site e-commerce a été conçu pour offrir une expérience fluide et moderne aux utilisateurs. L’interface permet de naviguer facilement entre les différentes sections, d’ajouter des articles au panier, et de finaliser les achats en quelques clics.
            Chaque page a été pensée pour être intuitive et agréable à utiliser, avec un design qui reflète l'identité de Getstuff.
          </p>
          {renderCarousel(ecommerceImages, ecommerceIndex, setEcommerceIndex)}
        </section>

        {/* Communication visuelle */}
        <section className="pt-6 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-2 text-zinc-100">Communication Visuelle</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
            <li>Création de flyers pour promouvoir l'entreprise</li>
            <li>Conception de cartes de visite professionnelles</li>
            <li>Création de visuels pour les stories Instagram et autres réseaux sociaux</li>
          </ul>
          <p className="mb-2 text-zinc-300">
            En plus du développement web, j'ai été responsable de la création des visuels nécessaires à la communication de l'entreprise. J’ai créé des flyers accrocheurs et des cartes de visite professionnelles, ainsi que des visuels pour les réseaux sociaux, notamment pour les stories Instagram.
            Chaque visuel a été conçu pour capter l'attention et transmettre clairement l'image jeune et dynamique de Getstuff.
          </p>
          {renderCarousel(visualImages, visualIndex, setVisualIndex)}
        </section>
      </main>
    </div>
  );
}
