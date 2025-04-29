import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from 'next/image';

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
                        Outil de planification de forums et gestion de créneaux horaires de visite pour groupes.
                    </p>
                </header>

                <section className="space-y-6 text-zinc-300">
                    <p>
                        Forum Planner est une application web conçue pour organiser les visites de groupes scolaires ou professionnels
                        sur des événements (forums, salons, journées portes ouvertes).
                    </p>
                    <p>
                        Elle permet de planifier les stands et ateliers disponibles, définir des créneaux de visite, et permettre l’inscription
                        de groupes sur ces créneaux en ligne.
                    </p>
                    <p>
                        L’objectif est de fluidifier l’organisation de ces événements et de garantir un accueil structuré pour les visiteurs.
                    </p>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Technologies utilisées</h2>
                    <ul className="list-disc list-inside text-zinc-400 space-y-1">
                        <li>Html</li>
                        <li>Tailwind CSS</li>
                        <li>Php</li>
                        <li>Sql</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Application Web</h2>
                    <div className="space-y-6 text-zinc-300">
                        <h3 className="text-lg font-semibold text-zinc-100">Fonctionnalités principales</h3>
                        <ul className="list-disc list-inside">
                            <li>Création et gestion d’événements (forums, salons)</li>
                            <li>Définition de créneaux horaires et attribution des stands</li>
                            <li>Inscription de groupes sur des créneaux</li>
                            <li>Vue calendrier de la répartition des groupes</li>
                            <li>Tableau de bord des inscriptions et présences</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-zinc-100">Ergonomie & accessibilité</h3>
                        <p>
                            L’interface a été conçue pour être accessible aux organisateurs comme aux enseignants/chefs de groupe, avec
                            une attention portée à la simplicité de navigation et à la rapidité de la réservation.
                        </p>
                    </div>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">API & Architecture</h2>
                    <div className="space-y-6 text-zinc-300">
                        <h3 className="text-lg font-semibold text-zinc-100">Endpoints REST</h3>
                        <p>
                            L’API REST permet la gestion des entités principales (événements, créneaux, stands, groupes). L’accès est sécurisé
                            avec authentification JWT et gestion des rôles (administrateur, organisateur, invité).
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-100">Base de données & modèle</h3>
                        <p>
                            Une modélisation complète est disponible dans le diagramme de classe, structurant les entités autour de :
                            <ul className="list-disc list-inside mt-2">
                                <li>Événement</li>
                                <li>Stand</li>
                                <li>Créneau horaire</li>
                                <li>Groupe</li>
                                <li>Inscription</li>
                            </ul>
                        </p>
                        <p>
                            Voir le diagramme complet et le backlog sur <a href="https://github.com/users/zet74prof/projects/13/views/1" className="text-blue-400 underline" target="_blank">le GitHub du projet</a>.
                        </p>
                    </div>
                </section>

                <section className="px-6 py-12 bg-gray-100 mt-16">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Aperçu de l'application</h2>
                    <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative w-full h-64">
                            <Image
                                src="/images/forum-planner-dashboard.jpg"
                                alt="Tableau de bord Forum Planner"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="/images/forum-planner-schedule.jpg"
                                alt="Planification des créneaux"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="/images/forum-planner-group.jpg"
                                alt="Fiche groupe"
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
