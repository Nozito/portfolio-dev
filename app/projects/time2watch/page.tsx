import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Time2Watch",
  description: "Application Android combinant la météo en temps réel et les recommandations de films/séries via API.",
};

export default function Time2WatchPage() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Time2Watch
          </h1>
          <p className="text-zinc-400">
            Une application Android qui associe météo et recommandations de films ou séries selon le temps qu’il fait.
          </p>
        </header>

        <section className="space-y-6 text-zinc-300">
          <p className="text-justify">
            Time2Watch est une application Android innovante qui croise les données météorologiques en temps réel avec les
            catalogues de films et de séries disponibles. Le but ? Proposer à l'utilisateur une sélection personnalisée de contenus à regarder
            en fonction de la météo actuelle dans sa ville.
          </p>
          <p className="text-justify">
            Ce projet représente mon tout premier travail intégrant des <strong>API externes</strong> dans un environnement mobile Android.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Objectifs de l'application</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Découvrir l'utilisation d'API REST avec Android (Java/Kotlin)</li>
            <li>Créer une interface fluide et responsive pour mobile</li>
            <li>Utiliser la météo comme déclencheur de recommandation de contenus</li>
            <li>Proposer une expérience utilisateur intuitive et agréable</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800 space-y-6 text-zinc-300">
          <h2 className="text-xl font-semibold text-zinc-100">Fonctionnalités principales</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>Choix de la ville :</strong> l'utilisateur peut entrer le nom de sa ville pour obtenir la météo locale.
            </li>
            <li className="text-justify">
              <strong>Affichage de la météo :</strong> récupération des conditions météorologiques en temps réel via l’API <strong>OpenWeather</strong>.
            </li>
            <li className="text-justify">
              <strong>Suggestions intelligentes de films/séries :</strong> selon la météo (pluie, soleil, neige...), l’appli utilise l’API <strong>TMDB</strong> pour proposer une sélection adaptée.
            </li>
            <li className="text-justify">
              <strong>Interface utilisateur épurée :</strong> UI construite avec <strong>XML</strong> et composants <strong>Material Design</strong> pour un rendu agréable.
            </li>
            <li className="text-justify">
              <strong>Navigation simple :</strong> via fragments et `BottomNavigationView` pour basculer entre météo, suggestions et favoris.
            </li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Utilisation des API</h2>
          <p className="text-justify">
            Ce projet a été l’occasion de manipuler deux API majeures :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>OpenWeather API :</strong> pour obtenir les données météorologiques en temps réel en fonction de la géolocalisation de l'utilisateur.
            </li>
            <li className="text-justify">
              <strong>TMDB (The Movie Database) API :</strong> pour accéder à une large base de données de films et séries, classés par popularité, genre ou tendance.
            </li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Maquette de l'application</h2>
          <p className="text-justify">
            La maquette de l'application a été réalisée avec <strong>Figma</strong>, permettant de visualiser l'interface utilisateur et le parcours utilisateur.
            Elle a été conçue pour être intuitive et agréable à utiliser, avec une attention particulière portée sur l'expérience utilisateur.
          </p>
          <Image
            src="/maquette-time2watch.jpeg"
            alt="Maquette de l'application Time2Watch"
            width={800}
            height={800}
            className="rounded-lg shadow-lg mt-4"
          />
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Exemple de correspondances météo & films</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🌧️ <strong>Pluie :</strong> Films dramatiques, introspectifs, ambiance cosy</li>
            <li>☀️ <strong>Soleil :</strong> Comédies, aventures, films feel-good</li>
            <li>🌨️ <strong>Neige :</strong> Thrillers, huis-clos, films fantastiques</li>
            <li>🌫️ <strong>Brouillard :</strong> Films de mystère ou science-fiction</li>
          </ul>
        </section>

        
      </main>
    </div>
  );
}
