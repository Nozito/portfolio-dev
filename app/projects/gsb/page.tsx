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
          <p className="text-justify">
            GSB Frais est une application développée pour faciliter la gestion des frais professionnels
            des visiteurs médicaux du laboratoire Galaxy Swiss Bourdin.
          </p>
          <p className="text-justify">
            Le projet inclut une interface web sécurisée pour les utilisateurs internes (comptables).
          </p>
          <p className="text-justify">
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
            <li>PHP 8.1</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Processus de création de l'application</h2>
          <p className="text-zinc-300 text-justify">
            La création de l'application GSB Frais s'est déroulée en plusieurs étapes importantes. Voici un aperçu de
            ces étapes, de la conception de la maquette jusqu'à la finalisation du projet.
          </p>
        </section>

        <section className="space-y-6 text-zinc-300">
          <h3 className="text-lg font-semibold text-zinc-100">1. Conception de la maquette</h3>
          <p className="text-justify">
            La phase de conception a débuté par la réalisation de maquettes interactives pour l'interface utilisateur. Ces maquettes ont
            été créées à l'aide de <strong>Figma</strong> et <strong>Adobe XD</strong> et ont permis de définir les principaux éléments visuels et les flux d'interaction
            dans l'application. Les utilisateurs internes et les visiteurs médicaux ont été impliqués dans la validation de ces
            maquettes pour s'assurer qu'elles répondent aux besoins fonctionnels.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">2. Développement de la Webapp</h3>
          <p className="text-justify">
            Le développement de la webapp a été réalisé en utilisant le framework <strong>Symfony</strong>. L'application a été conçue pour être
            responsive, permettant ainsi une utilisation optimale sur différents appareils. La gestion des utilisateurs et des rôles a été
            mise en place pour garantir la sécurité des données et l'accès aux fonctionnalités appropriées.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">3. Travail en mode projet avec Github</h3>
          <p className="text-justify">La réalisation de GSB Frais a été menée selon une logique de travail itératif, inspirée de la méthode agile. L’outil GitHub Projects a été utilisé pour organiser les différentes étapes du développement :</p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>Découpage des tâches</strong> sous forme de tickets (issues), classés selon leur priorité (fonctionnelle ou technique).
            </li>
            <li className="text-justify">
              <strong>Suivi de l’avancement</strong> avec des colonnes To Do, In Progress, Code Review et Done permettant de visualiser le cycle de vie de chaque fonctionnalité.
            </li>
            <li className="text-justify">
              <strong>Organisation par sprints</strong> de développement hebdomadaires avec des objectifs clairs (mise en place de la saisie des frais, backoffice comptable, sécurisation, etc.).
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-zinc-100">4. Fonctionnalités communes</h3>
          <p className="text-justify">
            L'application GSB Frais est accessible via un navigateur web et est optimisée pour une utilisation sur mobile. Elle
            offre une interface utilisateur intuitive et conviviale, permettant aux visiteurs médicaux de gérer facilement leurs frais.
            Les principales fonctionnalités communes aux deux interfaces (visiteur et comptable) comprennent :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>Page d'accueil :</strong> la page de bienvenue affiche un message de bienvenue personnalisé et un accès rapide aux fonctionnalités principales.
            </li>
            <li className="text-justify">
              <strong>Page Profil :</strong> chaque utilisateur peut consulter et modifier ses informations personnelles, y compris son mot de passe et il peut choisir ou non d'activer l'A2F.
            </li>
            <li className="text-justify">
              <strong>Authentification sécurisée :</strong> chaque utilisateur doit se connecter avec ses identifiants pour accéder à l'application et peut si il veut activer <strong>l'A2F</strong> pour plus de sécurité.
            </li>
          </ul>
        </section>
        <section className="space-y-6 text-zinc-300">

          <h3 className="text-lg font-semibold text-zinc-100">5. Fonctionnalités principales vue Visiteur</h3>
          <p className="text-justify">
            L’espace dédié au visiteur médical permet une gestion fluide et intuitive de ses frais mensuels. Voici les principales fonctionnalités développées :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>Saisie des frais forfaitisés :</strong> le visiteur peut enregistrer pour chaque mois les quantités liées aux frais standardisés (kilométrage, repas, nuitées, etc.). Ces frais sont initialisés automatiquement à chaque nouvelle fiche mensuelle.
            </li>
            <Image
              src="/SaisieFrais.jpeg"
              alt="Saisie des frais"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
            <li className="text-justify">
              <strong>Ajout de frais hors forfait :</strong> chaque ligne inclut une date, un libellé explicite, un montant, et nécessite l’envoi d’un justificatif au service comptable.
            </li>
            <li className="text-justify">
              <strong>Visualiation des fiches passées :</strong> l’utilisateur peut consulter toutes ses fiches des 12 derniers mois (et jusqu’à un an en arrière).
            </li>
            <Image
              src="/FicheFrais.jpeg"
              alt="Fiche de frais"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
            <li className="text-justify">
              <strong>Suivre l'état de traitement :</strong> chaque fiche affiche un badge visuel représentant l’état actuel de traitement (créée, clôturée, validée, mise en paiement, remboursée).
            </li>
            <li className="text-justify">
              <strong>Clôture automatique :</strong> la fiche du mois précédent est clôturée dès qu’une nouvelle fiche est saisie, garantissant le respect du calendrier de traitement.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-zinc-100">6. Fonctionnalités principales vue Comptable</h3>
          <p className="text-justify"> L’espace comptable centralise toutes les actions de gestion, de validation et de traitement des fiches. Les fonctionnalités suivantes ont été mises en œuvre :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-justify">
              <strong>Tableau de bord synthétique :</strong> affichage des statistiques globales (total de fiches, fiches validées, montant total), avec un graphique dynamique par mois.
            </li>
            <Image
              src="/DashboardComptable.jpeg"
              alt="Dashboard comptable"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
            <li className="text-justify">
              <strong>Filtrage avancé :</strong> les fiches peuvent être filtrées par utilisateur, mois ou état. La sélection du mois s’adapte dynamiquement aux données disponibles pour l’utilisateur choisi.
            </li>
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
              <Image
                src="/FiltrageFiches.jpeg"
                alt="Filtrage des fiches"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
              </div>
              <div className="w-1/2">
              <Image
                src="/FiltrageFichesVL.jpeg"
                alt="Filtrage des fiches VL"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
              </div>
            </div>
            <li className="text-justify">
              <strong>Visualisation détaillée d’une fiche :</strong> chaque fiche permet la modification des frais forfaitisés, le refus d’un frais hors forfait avec ajout du libellé “REFUSÉ :”, ou le report vers une fiche du mois suivant.
            </li>
            <Image
              src={"/DetailFicheFrais.jpeg"}
              alt="Détail de la fiche de frais"
              width={800}
              height={800}
              className="rounded-lg shadow-lg mt-4"
            />
            <li className="text-justify">
              <strong>Validation :</strong> le comptable peut valider une fiche une fois tous les frais vérifiés, ce qui met automatiquement à jour son état.
            </li>
            <li className="text-justify">
              <strong>Mise en paiement et remboursement :</strong> la fiche passe successivement dans les états “Validée”, “Mise en paiement”, puis “Remboursée”, selon l’action du comptable.
            </li>
            <li className="text-justify">
              <strong>Gestion des exceptions :</strong>
              <ul className="ml-6 list-disc list-inside space-y-2">
                <li className="text-justify">
                  Un frais sans justificatif dans les délais peut être reporté automatiquement.
                </li>
                <li className="text-justify">
                  La création automatique d’une fiche du mois suivant est déclenchée si elle n’existe pas.
                </li>
                <li className="text-justify">
                  Le libellé est tronqué proprement en cas de dépassement de la taille maximale autorisée.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-zinc-100">7. Intégration et Tests</h3>
          <p className="text-justify">
            Après le développement, l'intégration des différentes parties du système a été réalisée. Des tests fonctionnels ont été effectués pour valider
            le bon fonctionnement de l'application, y compris des tests de sécurité, de performance et de conformité avec les exigences fonctionnelles.
          </p>
        </section>
      </main>
    </div>
  );
}
