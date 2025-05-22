import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from "next/image";
import Link from "next/link";

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
          <div className="flex items-center gap-4">
            <Image
              src="/forumcyber/logowh.png"
              alt="Logo Forum Cybersécurité"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Forum Cybersécurité</h1>
          </div>
          <p className="text-zinc-400">
            Chef de Projet et Membre Fondateur - 2023-2025
          </p>
        </header>

        <section className="space-y-6 text-zinc-300">
          <p className="text-justify">
            Suite à la montée des cybermenaces et à l'initiative des enseignants du BTS SIO du lycée Gabriel Fauré,
            j'ai été nommé chef de projet pour organiser un forum de sensibilisation à la cybersécurité.
            L'objectif était de sensibiliser les élèves et le personnel éducatif aux enjeux de la cybersécurité,
            en leur fournissant des outils et des connaissances pour se protéger en ligne.
            Créé en 2024 et prolongé en 2025, ce forum a été conçu pour être interactif et ludique,
            avec des ateliers pratiques, des démonstrations et des discussions autour des menaces numériques actuelles.
            <br />Le Forum Cybersécurité, c'est <strong>10 ateliers, plus de 700 participants et plus de 50 étudiants et professeurs impliqués.</strong>
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
            Au sein du lycée Gabriel Fauré, le forum a été organisé sur une journée entière lors de la première édition, puis prolongé à deux jours pour la seconde édition.
            Les élèves, quelle que soit leur section (BTS SIO, STMG, etc.), ont pu participer à des ateliers pratiques et à des conférences animées par des professionnels du secteur.
            Des thèmes variés ont été abordés, tels que la sécurité des données personnelles, la gestion des mots de passe et les bonnes pratiques sur les réseaux sociaux.
            Des enseignants sont également intervenus pour partager leur expertise sur l'IA, permettant aux élèves de mieux comprendre les enjeux actuels de la cybersécurité.
          </p>
          <p className="text-justify">
            Les élèves ont participé à des simulations d’attaques de phishing et bien plus, ainsi qu’à des démonstrations de failles de sécurité classiques.
          </p>
          <Image
            src="/forumcyber/forumFauré.jpeg"
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
            Pour la première édition, le forum a été adapté aux classes de 4e et 3e, puis élargi aux classes de 5e et 4e pour la seconde édition au collège du Parmelan à Groisy. Les contenus ont été repensés pour un public plus jeune, avec une approche ludique et interactive, notamment grâce à l'utilisation de la plateforme Kahoot, qui favorisait la concentration des élèves sur chacun des six ateliers.
          </p>
          <p className="text-justify">
            À travers des quiz en temps réel, des scénarios de protection de comptes et des ateliers de création de mots de passe forts,
            les collégiens ont pu s’initier aux bons réflexes à adopter en ligne. Lors de la seconde édition, le forum a été élargi à d'autres classes de 5e et 4e.
            Les élèves ont ainsi découvert des thématiques variées, allant de la sécurité des données personnelles à la gestion des mots de passe,
            en passant par les enjeux de la vie privée sur les réseaux sociaux.
          </p>
          <p className="text-justify">
            L’événement a permis de susciter une prise de conscience collective et d’engager un dialogue entre élèves, enseignants et intervenants autour de la sécurité numérique.
            Les collégiens se sont montrés très réceptifs aux messages transmis et ont manifesté un réel intérêt pour les activités proposées.
            Le forum a également contribué à renforcer les liens entre les différents acteurs de la communauté éducative, en favorisant les échanges et la collaboration.
          </p>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-8">
          <h2 className="text-xl font-semibold text-zinc-100">Supports de communication</h2>

          <div>
            <p className="text-justify">
              Un site web a été développé pour centraliser toutes les informations relatives à l’événement : programme, intervenants, ressources pédagogiques et formulaire d’inscription.
            </p>
            <Image
              src="/forumcyber/siteweb.jpg"
              alt="Site web du Forum Cybersécurité"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
            <br />
            <div className="mt-4">
              <Link
                href="https://fcb25.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-gradient-to-tr from-zinc-800 via-zinc-600 to-zinc-800 text-white px-5 py-2 rounded-xl border border-zinc-400/30 shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-900"
              >
                Voir le site web
              </Link>
            </div>
          </div>

          <div>
            <p className="text-justify">
              Une banderole grand format a été conçue pour attirer l’attention dès l’entrée de l’établissement. Son design visait à mettre en avant le nom du forum, la thématique, ainsi que les dates clés de l’événement.
            </p>
            <Image
              src="/forumcyber/Bannière.png"
              alt="Banderole du Forum Cybersécurité"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
          </div>

          <div>
            <p className="text-justify">
              Des dépliants explicatifs ont été distribués à l’ensemble des participants. Ils détaillaient le programme des ateliers, les intervenants et les bonnes pratiques à retenir sur la cybersécurité.
            </p>
            <Image
              src="/forumcyber/ext.png"
              alt="Dépliant du Forum Cybersécurité"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
            <Image
              src="/forumcyber/int.png"
              alt="Dépliant du Forum Cybersécurité"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
          </div>

          <div>
            <p className="text-justify">
              Des stickers ont été réalisés pour marquer visuellement l’événement et permettre aux élèves de repartir avec un souvenir personnalisé.
            </p>
            <Image
              src="/forumcyber/stickers.png"
              alt="Stickers Forum Cybersécurité"
              width={300}
              height={300}
              className="rounded-lg shadow-lg mt-4"
            />
          </div>

          <div>
            <p className="text-justify">
              Des affiches ont été placées dans les couloirs de l’établissement pour rappeler les bonnes pratiques en matière de cybersécurité.
            </p>
            <Image
              src="/forumcyber/affiche.png"
              alt="Affiche Forum Cybersécurité"
              width={400}
              height={400}
              className="rounded-lg shadow-lg mt-4"
            />
          </div>

          <div>
            <p className="text-justify">
              Des badges ont été créés pour identifier les intervenants et les organisateurs de l’événement. Ils ont permis de faciliter les échanges entre les participants et de créer un sentiment d’appartenance à l’événement.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <Image
                src="/forumcyber/faceb.png"
                alt="Badges du Forum Cybersécurité Recto"
                width={200}
                height={200}
                className="rounded-lg shadow-lg mt-4"
              />
              <Image
                src="/forumcyber/faceb2.png"
                alt="Badges du Forum Cybersécurité Verso"
                width={200}
                height={200}
                className="rounded-lg shadow-lg mt-4"
              />
            </div>
          </div>

          <div>
            <p className="text-justify">
              Deux kakemonos ont été conçus pour mettre en avant le forum et ses objectifs. Ils ont été placés à l’entrée de l’établissement pour accueillir les participants.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <Image
                src="/forumcyber/FCB25-KK.png"
                alt="Kakemono du Forum Cybersécurité"
                width={300}
                height={300}
                className="rounded-lg shadow-lg mt-4"
              />
              <Image
                src="/forumcyber/FCB25-KKH.png"
                alt="Kakemono n*2 du Forum Cybersécurité"
                width={300}
                height={300}
                className="rounded-lg shadow-lg mt-4"
              />
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Documents</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-100">Cahier des charges</h3>
            <p className="text-justify">
              Dans le cadre de l’organisation du forum, un cahier des charges détaillé a été rédigé en amont afin de définir les objectifs pédagogiques, les moyens matériels et humains nécessaires, ainsi que le planning des activités. Ce document a permis d’assurer une coordination efficace entre les différents intervenants et de structurer l’événement de manière professionnelle.
            </p>
            <br />
            <Link
              href="/forumcyber/cahier-des-charges.pdf"
              target="_blank"
              className="bg-gradient-to-tr from-zinc-800 via-zinc-600 to-zinc-800 text-white px-5 py-2 rounded-xl border border-zinc-400/30 shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-900"
            >
              Télécharger le cahier des charges
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-100">Rapport de la première édition</h3>
            <p className="text-justify">
              Un rapport sur la première édition du forum a également été réalisé, permettant d’analyser les retours des participants et d’identifier les axes d’amélioration pour l’édition suivante. Ce rapport a servi de base pour ajuster l’organisation et enrichir le contenu des ateliers lors des éditions suivantes.
            </p>
            <br />
            <Link
              href="/forumcyber/rapport-forum-24.pdf"
              target="_blank"
              className="bg-gradient-to-tr from-zinc-800 via-zinc-600 to-zinc-800 text-white px-5 py-2 rounded-xl border border-zinc-400/30 shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-900"
            >
              Télécharger le rapport de la première édition
            </Link>
          </div>
        </section>

        <section className="pt-8 border-t border-zinc-800 text-zinc-300 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-100">Évaluation et retours</h2>
          <p className="text-justify">
            À l’issue du forum, une évaluation a été réalisée auprès des participants pour recueillir leurs impressions et suggestions.
            Les retours ont été très positifs, avec une mention spéciale pour la qualité des intervenants et la diversité des ateliers proposés.
            Les élèves ont particulièrement apprécié les activités pratiques et les démonstrations en direct, qui ont permis de rendre les thématiques abordées plus concrètes et accessibles.
            <br />Des questionnaires de satisfaction ont été distribués à l’ensemble des participants, permettant de recueillir leurs impressions sur les différents ateliers et intervenants.
            Les résultats ont été très encourageants, avec un taux de satisfaction global de 83%. Les élèves ont souligné l’intérêt des activités proposées et la qualité des intervenants.
            <br />Des suggestions d’amélioration ont également été formulées, notamment sur l’ajout d’espace supplémentaire entre les ateliers et la possibilité de faire plus de quiz intéractif.
            Ces retours seront pris en compte pour les prochaines éditions du forum, afin de continuer à proposer un contenu adapté aux besoins et aux attentes des élèves.
            <Image
              src="/forumcyber/feedback.png"
              alt="Feedback Forum Cybersécurité"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
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