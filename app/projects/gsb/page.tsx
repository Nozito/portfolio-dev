import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "GSB Frais",
  description: "Webapp et application mobile de gestion des frais professionnels pour GSB.",
};

export default function GSBPage() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            GSB Frais
          </h1>
          <p className="text-zinc-400">
            Webapp de gestion des frais professionnels pour GSB.
          </p>
        </header>

        <section className="space-y-6 text-zinc-300">
          <p>
            GSB Frais est une application développée pour faciliter la gestion des frais professionnels
            des visiteurs médicaux du laboratoire Galaxy Swiss Bourdin.
          </p>
          <p>
            Le projet inclut une interface web sécurisée pour les utilisateurs internes (comptables).
          </p>
          <p>
            Les fonctionnalités principales comprennent : la saisie de frais, la validation par un comptable,
            la gestion des utilisateurs et des rôles, ainsi qu’un tableau de bord permettant de suivre l'état des remboursements.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Technologies utilisées</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Framework Symfony</li>
            <li>Tailwind CSS</li>
            <li>MySQL</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Processus de création de l'application</h2>
          <p className="text-zinc-300">
            La création de l'application GSB Frais s'est déroulée en plusieurs étapes importantes. Voici un aperçu de
            ces étapes, de la conception de la maquette jusqu'à la finalisation du projet.
          </p>
        </section>

        <section className="space-y-6 text-zinc-300">
          <h3 className="text-lg font-semibold text-zinc-100">1. Conception de la maquette</h3>
          <p>
            La phase de conception a débuté par la réalisation de maquettes interactives pour l'interface utilisateur. Ces maquettes ont
            été créées à l'aide de Figma et ont permis de définir les principaux éléments visuels et les flux d'interaction
            dans l'application. Les utilisateurs internes et les visiteurs médicaux ont été impliqués dans la validation de ces
            maquettes pour s'assurer qu'elles répondent aux besoins fonctionnels.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">2. Développement du Backend</h3>
          <p>
            Le backend de l'application a été développé en Node.js avec Express pour assurer la gestion des API et la sécurité des données.
            La base de données MySQL a été utilisée pour stocker toutes les informations liées aux frais, aux utilisateurs et aux remboursements.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">3. Développement du Frontend</h3>
          <p>
            Le frontend a été construit en utilisant React et Next.js pour tirer parti de la génération côté serveur (SSR) et de la génération statique
            (SSG) afin d'assurer des performances optimales. Tailwind CSS a été utilisé pour garantir une interface utilisateur propre et réactive.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">4. Intégration et Tests</h3>
          <p>
            Après le développement, l'intégration des différentes parties du système a été réalisée. Des tests fonctionnels ont été effectués pour valider
            le bon fonctionnement de l'application, y compris des tests de sécurité, de performance et de conformité avec les exigences fonctionnelles.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">5. Déploiement et Mise en Production</h3>
          <p>
            Une fois les tests validés, l'application a été déployée dans l'environnement de production. Un suivi post-lancement a permis de corriger
            rapidement les éventuels bugs et d'ajuster l'interface utilisateur en fonction des retours des utilisateurs.
          </p>
        </section>

        {/* Image Gallery */}
        <section className="px-6 py-12 bg-gray-100">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Illustrations de l'application</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative w-full h-64">
              <Image
                src="/images/gsb-frais-dashboard.jpg"
                alt="Dashboard"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/images/gsb-frais-mobile.jpg"
                alt="Application mobile"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/images/gsb-frais-validation.jpg"
                alt="Validation des frais"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
