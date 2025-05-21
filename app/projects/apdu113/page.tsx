import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Site Vitrine – APdu113",
  description: "Présentation du site vitrine du rappeur APdu113, en développement sous Next.js.",
};

export default function APdu113Page() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            APdu113 – Site Vitrine
          </h1>
          <p className="text-zinc-400">
            Création d’un site vitrine en Next.js pour le rappeur APdu113, regroupant ses sons, ses plateformes, et son merchandising.
          </p>
        </header>

        <section className="space-y-6 text-zinc-300">
          <p className="text-justify">
            Ce projet personnel vise à concevoir un <strong>site vitrine complet pour l’artiste APdu113</strong> à sa demande, permettant de centraliser son univers musical,
            ses dernières sorties, et ses produits dérivés. Il s’agit d’un projet à la fois artistique et technique, actuellement en phase de conception.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Objectifs du site</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Créer un site ou tout les fans de l'artiste, pouvait retrouver toutes ses informations.</li>
            <li>Rediriger les fans vers les plateformes de streaming (Spotify, Apple Music, YouTube, etc.)</li>
            <li>Mettre en valeur l’image de marque de l’artiste</li>
            <li>Redirigé vers le partenaire, qui vends le merchandising</li>
            <li>Utiliser Next.js pour des performances optimales et une bonne SEO</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Maquettes du projet</h2>
          <p className="text-justify">
            Plusieurs maquettes ont été réalisées avec <strong>Adobe XD</strong> pour poser les bases visuelles du site. Ces prototypes permettent
            de définir l’identité graphique, le parcours utilisateur, et les composants principaux.
          </p>
          <Image
            src="/maquette-apdu113-home.jpeg"
            alt="Maquette de la page d'accueil APdu113"
            width={800}
            height={800}
            className="rounded-lg shadow-lg mt-4"
          />
          <p className="text-justify">
            La direction artistique s’inspire de l’univers d’APdu113, avec des tons sombres, un style brut et des visuels percutants.
            Chaque section est pensée pour offrir une expérience fluide et engageante, que ce soit sur desktop ou mobile.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800 space-y-6 text-zinc-300">
          <h2 className="text-xl font-semibold text-zinc-100">Sections prévues du site</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>Discographie :</strong> catalogue des sons et albums classés chronologiquement.
            </li>
            <li className="text-justify">
              <strong>Merch :</strong> boutique en ligne avec système de panier (intégration Stripe en prévision).
            </li>
            <li className="text-justify">
              <strong>À propos :</strong> une page pour présenter l’artiste, ses influences, son parcours.
            </li>
            <li className="text-justify">
              <strong>Liens externes :</strong> redirection vers ses plateformes musicales et réseaux sociaux.
            </li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Technologies utilisées</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Framework : Next.js</li>
            <li>Langage : TypeScript</li>
            <li>Styling : Tailwind CSS</li>
            <li>Déploiement : mon VPS OVH (prévu)</li>
            <li>Outils de design : Adobe XD, Figma</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Prochaine étape</h2>
          <p className="text-justify">
            Le site est actuellement en phase de prototypage. Les prochaines étapes incluent :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>Développement :</strong> mise en place de la structure du site, intégration des maquettes et développement des fonctionnalités.
            </li>
            <li className="text-justify">
              <strong>Tests utilisateurs :</strong> recueillir des retours sur l’ergonomie et l’expérience utilisateur.
            </li>
            <li className="text-justify">
              <strong>Déploiement :</strong> mise en ligne du site sur le VPS OVH, suivi des performances et optimisation SEO.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
