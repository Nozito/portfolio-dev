import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Forum Cybersécurité",
  description: "Événement pédagogique autour de la cybersécurité organisé au lycée Gabriel Fauré et au collège de Groisy.",
};

export default function ForumCyberPage() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Forum Cybersécurité
          </h1>
          <p className="text-zinc-400">
            Chef de Projet et Membre Fondateur - 2023-2025
          </p>
        </header>

        <section className="space-y-6 text-zinc-300">
          <p className="text-justify">
            Suite à la montée des cybermennaces et à l'initiative des enseignants du BTS SIO du lycée Gabriel Fauré,
            j'ai été nommé chef de projet pour organiser un forum de sensibilisation à la cybersécurité.
            L'objectif était de sensibiliser les élèves et le personnel éducatif aux enjeux de la cybersécurité,
            en leur fournissant des outils et des connaissances pour se protéger en ligne.
            Créer en 2024, et prolongé en 2025, ce forum a été conçu pour être interactif et ludique,
            avec des ateliers pratiques, des démonstrations et des discussions autour des menaces numériques actuelles.
            <br/>Le Forum cybersécurité, c'est <strong>10 ateliers, + de 700 participants avec un effectif de + de 50 étudiants et professeurs.</strong>
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Objectifs pédagogiques</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Informer sur les menaces numériques actuelles</li>
            <li>Apprendre à se protéger sur Internet (mots de passe, phishing, réseaux sociaux, etc.)</li>
            <li>Stimuler la curiosité autour des métiers de la cybersécurité</li>
            <li>Favoriser une culture numérique responsable et citoyenne</li>
            <li>Proposer des activités ludiques et interactives pour capter l'attention des jeunes</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800 space-y-6 text-zinc-300">
          <h2 className="text-xl font-semibold text-zinc-100">Forum au lycée Gabriel Fauré – Annecy</h2>
          <p className="text-justify">
            Au sein du lycée Gabriel Fauré, le forum a été intégré durant 1 journée complète pour sa première édition, puis prolongé sur 2 jours pour la seconde édition.
            Les élèves peut importe leurs sections (BTS SIO, STMG, etc.) ont pu participer à des ateliers pratiques et des conférences animées par des professionnels du secteur.
            Des thèmes variés ont été abordés, tels que la sécurité des données personnelles, la gestion des mots de passe, et les bonnes pratiques sur les réseaux sociaux.
            Des intervenants professeurs ont partagé leur expertise sur l'IA, permettant aux élèves de découvrir les enjeux réels de la cybersécurité.
          </p>
          <p className="text-justify">
            Les élèves ont participé à des simulations d’attaques de phishing et bien plus, ainsi qu’à des démonstrations de failles de sécurité classiques.
          </p>
          <Image
            src="/forumFauré.jpeg"
            alt="Forum cybersécurité au lycée Gabriel Fauré"
            width={800}
            height={800}
            className="rounded-lg shadow-lg mt-4"
          />
          <p className="text-justify">
            Les retours ont été très positifs, avec des élèves particulièrement intéressés par les démonstrations pratiques
            et les discussions autour des métiers liés à la cybersécurité. C'est un domaine en pleine expansion, et il est essentiel de préparer les jeunes à ces enjeux.
            Le forum a permis de créer un espace d'échange et de réflexion sur la sécurité numérique, tout en renforçant les liens entre élèves et enseignants.
            La diversité des activités proposées a permis de capter l’attention des élèves et de les impliquer activement dans leur apprentissage.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800 space-y-6 text-zinc-300">
          <h2 className="text-xl font-semibold text-zinc-100">Forum au Collège du Parmelan, Groisy</h2>
          <p className="text-justify">
            Le forum s’est également décliné pour des classes de 4ème et 3ème pour la première édition, et des classes de 5ème et 4ème pour la seconde édition au collège du parmelan à Groisy. Les contenus ont été adaptés
            pour un public plus jeune, avec une approche ludique et interactive notamment, avec l'utilisation de la plateforme Kahoot qui permettait d'augementer leurs concentrations sur chacun des 6 ateliers.
          </p>
          <p className="text-justify">
            À travers des quiz en temps réel, des scénarios de protection de comptes, et des ateliers de création de mots de passe forts,
            les collégiens ont pu s’initier aux bons réflexes à adopter en ligne. Pour sa seconde édition, le forum a été élargi à d'autres classes de 5ème et 4ème.
            Les élèves ont pu découvrir des thématiques variées, allant de la sécurité des données personnelles à la gestion des mots de passe,
            en passant par les enjeux de la vie privée sur les réseaux sociaux.
          </p>
          <Image
            src="/forumGroisy.jpeg"
            alt="Forum cybersécurité au collège de Groisy"
            width={800}
            height={800}
            className="rounded-lg shadow-lg mt-4"
          />
          <p className="text-justify">
            L’événement a permis de susciter une prise de conscience collective et d’engager un dialogue entre élèves, enseignants
            et intervenants autour de la sécurité numérique. Les collégiens ont été très réceptifs aux messages
            véhiculés, et ont montré un réel intérêt pour les activités proposées. Le forum a également permis de renforcer les liens entre les différents acteurs de la communauté éducative,
            en favorisant les échanges entre élèves, enseignants et intervenants.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Partenariats et intervenants</h2>
          <p className="text-justify">
            Le forum a été soutenu par des enseignants volontaires de BTS SIO, STMG ainsi que SAM. Certaines interventions
            ont été animées par des étudiants en BTS SIO ainsi que des professeurs.
            Je souhaite remercier particulièrement les enseignants qui ont contribué à la réussite de cet événement.
            Leur expertise et leur engagement ont été essentiels pour la mise en place des ateliers et des activités proposées.
            Ils ont su adapter les contenus aux différents niveaux des élèves, en veillant à ce que chacun puisse tirer profit de cette expérience.
        </p>
          <p className="text-justify">
            Il est important de souligner la participation active des élèves, qui ont été impliqués dans la conception et l'animation des ateliers.
            Leur enthousiasme et leur curiosité ont été des moteurs précieux pour la réussite de cet événement.
            Ils ont su partager leurs connaissances et leur passion pour la cybersécurité, en suscitant l'intérêt de leurs camarades.
        </p>
          <p className="text-justify">
            Le Lycée Gabriel Fauré et l'Association des Parents d'Elèves (APE) ont également été des partenaires précieux dans l'organisation de cet événement.
            Leur soutien logistique et financier a permis de garantir le bon déroulement du forum, en offrant un cadre propice aux échanges et aux apprentissages.
        </p>
          <p className="text-justify">
            Enfin, le collège du Parmelan a également été un partenaire clé dans la mise en place de cet événement.
            Leur engagement en faveur de l'éducation au numérique a été déterminant pour la réussite du forum.
          </p>
          <p className="text-justify">
            Ce travail collaboratif a permis de proposer un contenu de qualité et adapté aux publics visés.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Bilan et perspectives</h2>
          <p className="text-justify">
            Le succès de ces deux éditions du forum cybersécurité démontre l’importance de l’éducation au numérique
            dans les parcours scolaires. L’objectif pour les prochaines années est de renouveler ces initiatives et de les élargir
            à d’autres établissements de la région.
            </p>
          <p className="text-justify">
            En intégrant des thématiques variées et en proposant des activités ludiques, nous espérons continuer à sensibiliser les jeunes
            aux enjeux de la cybersécurité et à les préparer aux défis numériques de demain.
            Le forum cybersécurité a été une expérience enrichissante pour tous les participants, et nous sommes impatients de poursuivre cette aventure.
          </p>
        </section>
      </main>
    </div>
  );
}
