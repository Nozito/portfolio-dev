'use client';

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Particles from "./components/particles";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigation = [
    { name: "Projets", href: "/projects" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Navigation optimisée mobile */}
      <nav className="my-8 sm:my-16 animate-fade-in px-4">
        <ul className="flex items-center justify-center gap-6 sm:gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="text-base sm:text-sm text-zinc-400 hover:text-zinc-200 duration-500 font-medium active:scale-95 transition-transform"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Ligne lumineuse haute */}
      <div className="w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow animate-fade-left animate-duration-[6s] sm:animate-duration-[8s]" />

      {/* Fond animé - moins de particules sur mobile */}
      <Particles 
        className="absolute inset-0 -z-10 animate-fade-in" 
        quantity={isMobile ? 30 : 100} 
        interactive={!isMobile}
      />

      {/* Nom principal - optimisé mobile */}
      <div className="z-10 py-4 sm:py-3.5 px-4 sm:px-0.5 w-full flex items-center justify-center">
        <h1 className="text-transparent bg-white bg-clip-text font-display cursor-default text-edge-outline animate-title animate-delay-500 duration-1000 text-center leading-tight
          text-5xl 
          xs:text-6xl 
          sm:text-7xl 
          md:text-8xl 
          lg:text-9xl
          max-w-[95vw] sm:max-w-none
          break-words sm:whitespace-nowrap"
        >
          Noah DEKEYZER
        </h1>
      </div>

      {/* Ligne lumineuse basse */}
      <div className="w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow animate-fade-right animate-duration-[6s] sm:animate-duration-[8s]" />

      {/* Texte bas - optimisé mobile */}
      <div className="my-8 sm:my-16 text-center animate-fade-in animate-delay-1000 px-6 sm:px-4">
        <h2 className="text-sm sm:text-sm text-zinc-400 leading-relaxed">
          Il m'arrive d'être aussi{" "}
          <Link
            href="https://photo.dekeyzer.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-zinc-200 duration-500 font-medium active:text-zinc-300 transition-colors"
          >
            photographe
          </Link>{" "}
          et de partager ma passion.
        </h2>
      </div>
    </div>
  );
}
