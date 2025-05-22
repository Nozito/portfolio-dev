import { Metadata } from "next";
import { Navigation } from "../../components/nav";

export const metadata: Metadata = {
    title: "Forum Planner",
    description: "Outil de planification de forums et gestion de créneaux horaires pour groupes.",
};

export default function ForumPlannerPage() {
    return (
        <div className="relative pb-16">
            <Navigation />

            <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
                <header className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                        Forum Planner
                    </h1>
                    <p className="text-zinc-400">
                        Révolutionnez l’organisation de vos forums avec une solution intuitive de gestion des réservations de stands.
                    </p>
                </header>

                <section className="space-y-6 text-zinc-300">
                    <p>
                        ForumPlanner est une application web conçue pour simplifier la gestion des événements tels que les forums, salons ou journées portes ouvertes.
                        Elle permet aux organisateurs de planifier les stands disponibles, de définir des créneaux de visite, et d’offrir aux groupes une interface claire pour réserver et modifier leurs inscriptions.
                    </p>
                    <p>
                        Contrairement aux outils classiques comme Google Forms, ForumPlanner offre une gestion centralisée, une visualisation claire des disponibilités et une gestion fine des rôles utilisateurs.
                    </p>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Fonctionnalités principales</h2>
                    <ul className="list-disc list-inside text-zinc-400 space-y-2">
                        <li>Réservation rapide des stands via une interface fluide et responsive.</li>
                        <li>Gestion des créneaux horaires, intervenants et salles.</li>
                        <li>Authentification et gestion des rôles (organisateurs, responsables de groupes, participants).</li>
                        <li>Vue d’ensemble de tous les stands et leur statut (disponible, réservé).</li>
                        <li>Modification/annulation des réservations en temps réel.</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Rôles utilisateurs</h2>
                    <div className="space-y-4 text-zinc-300">
                        <p><strong>Organisateurs :</strong> Création des stands, consultation des réservations, gestion globale des événements.</p>
                        <p><strong>Responsables de groupes :</strong> Réservation et modification de créneaux pour leur groupe. Interface dédiée et simplifiée.</p>
                        <p><strong>Participants :</strong> Consultation des stands disponibles et des réservations du groupe.</p>
                    </div>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Technologies utilisées</h2>
                    <ul className="list-disc list-inside text-zinc-400 space-y-1">
                        <li>HTML</li>
                        <li>Tailwind CSS</li>
                        <li>PHP</li>
                        <li>SQL</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Conception & Réalisation</h2>
                    <ul className="list-disc list-inside space-y-4 text-zinc-300">
                        <li><strong>Phase de conception :</strong> Réalisation de maquettes UI/UX avec un focus sur la clarté et la fluidité d’utilisation.</li>
                        <li><strong>Structuration technique :</strong> Mise en place d’une architecture claire et modulaire, choix des outils adaptés au cahier des charges.</li>
                        <li><strong>Développement :</strong> Implémentation itérative des fonctionnalités définies dans le backlog, tests et ajustements continus.</li>
                        <li><strong>Finalisation :</strong> Responsive design, tests utilisateurs, validation fonctionnelle complète, déploiement de l’application.</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Apprentissages et bilan</h2>
                    <p className="text-zinc-300">
                        Ce projet m’a permis de conduire un développement de bout en bout, en appliquant des pratiques de gestion de projet concrètes.
                        Il m’a donné l’occasion de développer mes compétences en conception d’interface, structuration d’un produit complet, et compréhension des attentes utilisateurs dans un cadre réaliste.
                    </p>
                </section>
                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Vidéos</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-xl border border-zinc-700">
                            <video
                                controls
                                preload="metadata"
                                poster="/forumplanner/homepage.png"
                                className="w-full h-auto object-cover"
                            >
                                <source src="/forumplanner/homepage.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-zinc-700">
                            <video
                                controls
                                preload="metadata"
                                poster="/forumplanner/profil.png"
                                className="w-full h-auto object-cover"
                            >
                                <source src="/forumplanner/profil.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}