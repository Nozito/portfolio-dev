import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from "next/image";
import { ForumCyberEditions } from "./ForumCyberEditions";

export const metadata: Metadata = {
  title: "Forum Cybersécurité",
  description: "Événement pédagogique autour de la cybersécurité organisé au lycée Gabriel Fauré et au collège de Groisy.",
};

export default function ForumCyberPage() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-3xl space-y-10 lg:px-8 md:pt-24 lg:pt-32">

        {/* En-tête */}
        <header className="space-y-3">
          <div className="flex items-center gap-4">
            <Image
              src="/forumcyber/logowh.png"
              alt="Logo Forum Cybersécurité"
              width={56}
              height={56}
              className="rounded-lg shrink-0"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
                Forum Cybersécurité
              </h1>
              <p className="text-sm text-zinc-500 mt-1">
                Chef de Projet et Membre Fondateur · 2023 — 2026
              </p>
            </div>
          </div>
        </header>

        {/* Description + stats globales */}
        <section className="space-y-5">
          <p className="text-sm sm:text-base text-zinc-400 text-justify leading-relaxed">
            Suite à la montée des cybermenaces et à l&apos;initiative des enseignants du BTS SIO du lycée Gabriel Fauré,
            j&apos;ai été nommé chef de projet pour organiser un forum de sensibilisation à la cybersécurité.
            Créé en 2023-2024 et reconduit chaque année, ce forum interactif réunit ateliers pratiques,
            démonstrations et discussions autour des menaces numériques actuelles.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { value: "3", label: "Éditions" },
              { value: "+700", label: "Participants" },
              { value: "+50", label: "Impliqués" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-zinc-100">{s.value}</div>
                <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Objectifs pédagogiques */}
        <section className="pt-8 border-t border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-100 mb-4">Objectifs pédagogiques</h2>
          <ul className="space-y-2">
            {[
              "Informer sur les menaces numériques actuelles",
              "Apprendre à se protéger sur Internet (mots de passe, phishing, réseaux sociaux…)",
              "Stimuler la curiosité autour des métiers de la cybersécurité",
              "Favoriser une culture numérique responsable et citoyenne",
              "Proposer des activités ludiques et interactives pour capter l'attention des jeunes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                <span className="text-zinc-600 mt-0.5 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Éditions interactives */}
        <ForumCyberEditions />

        {/* Partenariats */}
        <section className="pt-8 border-t border-zinc-800 space-y-3">
          <h2 className="text-lg font-semibold text-zinc-100">Partenariats et intervenants</h2>
          <p className="text-sm text-zinc-400 text-justify leading-relaxed">
            Le forum a été soutenu par des enseignants volontaires de BTS SIO, STMG et SAM,
            ainsi que des étudiants intervenants. Le Lycée Gabriel Fauré, l&apos;Association des Parents d&apos;Élèves (APE)
            et le collège du Parmelan ont apporté un soutien logistique et financier déterminant.
          </p>
        </section>

        {/* Bilan */}
        <section className="pt-8 border-t border-zinc-800 space-y-3">
          <h2 className="text-lg font-semibold text-zinc-100">Bilan et perspectives</h2>
          <p className="text-sm text-zinc-400 text-justify leading-relaxed">
            Le succès de ces éditions démontre l&apos;importance de l&apos;éducation au numérique dans les parcours scolaires.
            L&apos;objectif est de renouveler ces initiatives et de les élargir à d&apos;autres établissements de la région,
            en intégrant des thématiques variées et des activités ludiques pour préparer les jeunes
            aux défis numériques de demain.
          </p>
        </section>

      </main>
    </div>
  );
}
