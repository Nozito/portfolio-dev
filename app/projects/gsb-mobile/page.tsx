import { Metadata } from "next";
import { Navigation } from "../../components/nav";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "GSB Mobile",
    description: "Application mobile de gestion des vistes pour GSB.",
};

export default function GSBMobilePage() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
                <header className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                        GSB Mobile
                    </h1>
                    <p className="text-zinc-400">
                        Application mobile de gestion des visites pour GSB.
                    </p>
                </header>

                <section className="space-y-5 text-zinc-300 pt-4">
                    <p>
                        Le laboratoire Galaxy Swiss Bourdin souhaitait doter ses visiteurs médicaux d’une <strong>application mobile</strong> leur permettant de centraliser les
                        comptes-rendus de visites réalisées auprès des praticiens. Cette base d’informations vise à améliorer la communication interne, le
                        suivi de l'activité terrain, ainsi que l’élaboration stratégique des campagnes médicales.
                    </p>
                    <p>
                        L’application permet de consulter les coordonnées des praticiens, les fiches détaillées des produits du laboratoire.
                    </p>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Fonctionnalités principales</h2>
                    <ul className="list-disc list-inside text-zinc-400 space-y-1">
                        <li>Saisie des rapports de visites (motif, date, bilan, produits présentés, échantillons donnés)</li>
                        <li>Fiches produits détaillées (effets, posologie, contre-indications, interactions, famille…)</li>
                        <li>Fiches praticiens enrichies avec données d’influence et coordonnées</li>
                        <li>Consultation des visites précédentes (jusqu’à 3 ans d’historique)</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Contraintes techniques et environnementales</h2>
                    <ul className="list-disc list-inside text-zinc-400 space-y-1">
                        <li>Application Android (ciblant les appareils fournis aux visiteurs)</li>
                        <li>Respect des principes de la programmation orientée objet</li>
                        <li>Design épuré, sans surcharge graphique, favorisant l’ergonomie et l’efficience</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Technologie utilisées</h2>
                    <ul className="list-disc list-inside text-zinc-400 space-y-1">
                        <li><strong>Java</strong> pour Android</li>
                        <li><strong>Retrofit</strong> pour la communication réseau</li>
                        <li><strong>JUnit</strong> pour les tests unitaires</li>
                        <li><strong>Espresso</strong> pour les tests d’interface utilisateur</li>
                        <li><strong>Git</strong> pour le contrôle de version</li>
                        <li><strong>Adobe XD</strong> pour la conception de l’interface utilisateur</li>
                        <li><strong>Android Studio</strong> pour l'IDE de l'application Android</li>
                        <li><strong>Gradle</strong> pour la gestion des dépendances</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Processus de conception</h2>
                    <div className="space-y-6 text-zinc-300">
                        <h3 className="text-lg font-semibold text-zinc-100">1. Analyse des besoins</h3>
                        <p>
                            L’analyse a permis d’identifier les différents rôles utilisateurs, les types de données à manipuler, les contraintes d’usage sur le terrain
                            (mode hors ligne, simplicité, performance), ainsi que la structure hiérarchique de l’entreprise à refléter dans l’application.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-100">2. Architecture & Sécurité</h3>
                        <p>
                            L’architecture repose sur un backend REST sécurisé avec gestion des rôles et droits d'accès. L’application mobile est connectée
                            à ce backend via des API REST, avec cache local pour le fonctionnement offline.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-100">3. Développement Mobile</h3>
                        <p>
                            L'application a été développée en <strong>Java pour Android</strong> avec Room pour la gestion locale des données, Retrofit pour la communication
                            réseau, et un système de synchronisation automatique. L’interface a été pensée pour une utilisation rapide et intuitive sur le terrain.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-100">4. Documentation & Livraison</h3>
                        <p>
                            Une documentation fonctionnelle et technique a été remise au laboratoire. L’application a été testée en condition réelle avant
                            le déploiement officiel.
                        </p>
                    </div>
                </section>

                {/* Image Gallery */}
                <section className="px-6 py-12 bg-gray-100 mt-16">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Aperçu de l'application</h2>
                    <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative w-full h-64">
                            <Image
                                src="/images/gsb-visite-home.jpg"
                                alt="Accueil Application"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="/images/gsb-visite-saisie.jpg"
                                alt="Saisie d’un compte-rendu"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="/images/gsb-visite-profil.jpg"
                                alt="Profil d’un praticien"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* API REST - Backend */}
                <section className="pt-32 border-t border-zinc-800">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-6">Architecture & API</h2>

                    <div className="space-y-6 text-zinc-300">
                        <p>
                            L’infrastructure backend repose sur une API REST sécurisée permettant la gestion des comptes-rendus de visite,
                            la hiérarchisation des utilisateurs et la synchronisation des données de l’application mobile.
                        </p>

                        <h3 className="text-xl font-semibold text-zinc-100">Technologies</h3>
                        <ul className="list-disc list-inside text-zinc-400 space-y-1">
                            <li>Backend développé en Node.js (ExpressJs)</li>
                            <li>Base de données : Mongo DB</li>
                            <li>Gestion des rôles : visiteur, délégué, responsable</li>
                            <li>API REST sécurisée avec JWT</li>
                            <li>Tests unitaires et fonctionnels avec Postman</li>
                            <li>Contrôle de version avec GIT</li>
                            <li>IDE : Visual Studio Code</li>
                            <li>Gestion des dépendances : NPM</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-zinc-100">Ressources exposées par l’API</h3>
                        <ul className="list-disc list-inside text-zinc-400 space-y-1">
                            <li><code>/auth</code> : inscription, connexion sécurisée (JWT)</li>
                            <li><code>/visites</code> : création, mise à jour, récupération des rapports</li>
                            <li><code>/praticiens</code> : consultation, recherche filtrée</li>
                            <li><code>/medicaments</code> : liste des médicaments, détails</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-zinc-100">Sécurité & Accès</h3>
                        <p>
                            Les appels sont protégés par JWT, avec une politique d’autorisation basée sur les rôles utilisateurs. Les données sont validées
                            à l’entrée et l’API est conforme aux normes REST (statuts HTTP explicites, structuration cohérente).
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
