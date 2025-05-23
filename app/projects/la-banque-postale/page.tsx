'use client'

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import { useSwipeable } from "react-swipeable";

export default function BanquePostale() {
    const [toolsIndex, setToolsIndex] = useState(0);
    const [projectIndex, setProjectIndex] = useState(0);
    const [reportingIndex, setReportingIndex] = useState(0);

    const toolsImages = [
        { src: "/lbp/ihm-gdo.png", alt: "Interface GDO - Découverte" },
        { src: "/lbp/cheque.png", alt: "Exemple de chèque rempli (fictif)" },
        { src: "/lbp/oaq.png", alt: "Création Outil d’Aide à la Qualification (OAQ)" },
    ];

    const projectImages = [
        { src: "/lbp/cahier-de-recettes.png", alt: "Cahier de recette présenté" },
        { src: "/lbp/faq.png", alt: "Extrait FAQ projet validée" },
        { src: "/lbp/passeport-risque.png", alt: "Exemple Passeport Risque" },
    ];

    const handleNext = (images: any[], setIndex: React.Dispatch<React.SetStateAction<number>>) => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = (images: any[], setIndex: React.Dispatch<React.SetStateAction<number>>) => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const createSwipeHandlers = (images: any[], setIndex: React.Dispatch<React.SetStateAction<number>>) =>
        useSwipeable({
            onSwipedLeft: () => handleNext(images, setIndex),
            onSwipedRight: () => handlePrevious(images, setIndex),
            preventScrollOnSwipe: true,
            trackMouse: true,
        });

    const renderCarousel = (images: any[], currentIndex: number, setIndex: React.Dispatch<React.SetStateAction<number>>) => {
        const handlers = createSwipeHandlers(images, setIndex);

        return (
            <div {...handlers} className="relative w-full h-auto mt-6 mb-8">
                <Image
                    src={images[currentIndex]?.src || ""}
                    alt={images[currentIndex]?.alt || ""}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-auto rounded-xl"
                />
                <button
                    onClick={() => handlePrevious(images, setIndex)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 text-lg rounded-full"
                >
                    &lt;
                </button>
                <button
                    onClick={() => handleNext(images, setIndex)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 text-lg rounded-full"
                >
                    &gt;
                </button>
            </div>
        );
    };

    return (
        <div className="relative pb-16">
            <Navigation />
            <main className="px-6 pt-20 mx-auto max-w-4xl space-y-20 lg:px-8 md:pt-24 lg:pt-32">
                {/* Présentation */}
                <header className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo-lbp.png"
                            alt="Logo La Banque Postale"
                            width={100}
                            height={100}
                            className="rounded-md"
                        />
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">La Banque Postale</h1>
                    </div>
                    <p className="text-zinc-400">Stage de 2 mois – Chef de Projet / MOA</p>
                    <section className="space-y-6 text-zinc-300">
                        <p className="text-justify leading-relaxed">
                            Durant ce stage, j’ai intégré une équipe projet dans le pole bancaire de la banque postale.
                            Mon rôle était centré autour de la coordination projet, de la rédaction de documentation fonctionnelle, et de la contribution aux outils internes.
                        </p>
                        <p className="text-justify leading-relaxed">
                            J’ai également participé à plusieurs travaux transverses incluant du reporting stratégique, la mise à jour de documentation,
                            et le suivi d’incidents métiers liés aux moyens de paiement comme les LCR ou les chèques de banque.
                        </p>
                    </section>
                </header>

                {/* Outils & Environnement */}
                <section className="pt-12 border-t border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4 text-zinc-100">Découverte de l’environnement bancaire & outils métier</h2>
                    <p className="mb-6 text-zinc-300 leading-relaxed">
                        Lors de mon stage, on m'a présenté l’écosystème technique et fonctionnel interne de La Banque Postale.
                        Cette immersion m’a permis de comprendre le fonctionnement des outils liés aux traitements de données et aux opérations bancaires de base.
                    </p>
                    <ul className="list-disc list-inside text-zinc-400 space-y-4 mb-6 leading-relaxed">
                        <li><strong>Présentation de l’IHM GDO :</strong> application permettant d’accéder aux données bancaires et de traiter des cas clients. J’ai testé la navigation et les filtres pour la gestion de réclamations.</li>
                        <li><strong>Remplissage de chèques & bordereaux :</strong> apprentissage du remplissage de chèques, et chèques clients dans le cadre de tests pour de nouveaux automates.</li>
                        <li><strong>Création d’un OAQ :</strong> outil interne pour qualifier les demandes selon leur nature et urgence. J’ai participé à la structure logique et à sa mise en test.</li>
                    </ul>
                    {renderCarousel(toolsImages, toolsIndex, setToolsIndex)}
                </section>

                {/* Projets & Coordination MOA */}
                <section className="pt-12 border-t border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4 text-zinc-100">Contribution Projet & MOA</h2>
                    <p className="mb-6 text-zinc-300 leading-relaxed">
                        En tant que stagiaire chef de projet / MOA, j’ai accompagné plusieurs chantiers internes.
                        J’ai produit de la documentation fonctionnelle, participé à des ateliers, et contribué à la préparation de phases de test utilisateur.
                    </p>
                    <ul className="list-disc list-inside text-zinc-400 space-y-4 mb-6 leading-relaxed">
                        <li>
                            <strong>Rédaction de cahiers de recette :</strong>
                            {"\u00A0"}Dans le cadre d’un projet en développement, j’ai participé à la rédaction de cahiers de recette, essentiels pour valider la conformité d’un outil avec les besoins utilisateurs. Ces documents contiennent des scénarios de tests détaillés, permettant de simuler des cas d’usage réels.

                            <br /><br />
                            Par exemple, j’ai rédigé un scénario visant à tester le rejet automatique d’un chèque doublon. Cela a impliqué la définition des prérequis, des étapes à suivre, des résultats attendus et des résultats obtenus. Cette expérience m’a permis de mieux comprendre la logique des tests fonctionnels ainsi que le cycle de validation avant mise en production.
                        </li>

                        <li>
                            <strong>FAQ Projet :</strong>
                            {"\u00A0"}Lors du déploiement d’un nouvel outil métier, j’ai conçu une FAQ (Foire Aux Questions) pour les utilisateurs finaux. L'objectif était de répondre de manière claire et synthétique aux interrogations courantes concernant l’outil, ses cas limites et ses bonnes pratiques d’utilisation.

                            <br /><br />
                            La FAQ a été élaborée à partir des retours utilisateurs et enrichie en collaboration avec la maîtrise d’ouvrage. Elle a été validée en réunion projet, puis intégrée aux supports de communication interne. Ce livrable a contribué à faciliter l’adoption de l’outil et à améliorer l’expérience utilisateur.
                        </li>

                        <li>
                            <strong>Passeport Risque :</strong>
                            {"\u00A0"}J’ai contribué à l’élaboration d’un passeport risque pour l’expérimentation d’un nouveau service en environnement pilote. Ce document permet d’identifier en amont les risques liés à un projet : techniques, opérationnels, réglementaires ou liés à l’usage.

                            <br /><br />
                            J'ai participé à la documentation des points sensibles identifiés lors de l’analyse fonctionnelle, comme la sécurité des données ou les impacts en cas d’indisponibilité. Ce passeport a été utilisé pour valider le cadrage du test auprès des instances internes, notamment dans le cadre de l’expérimentation au sein de l’espace d’innovation <em>LeSpot</em> de La Banque Postale.
                        </li>
                    </ul>

                    {renderCarousel(projectImages, projectIndex, setProjectIndex)}
                </section>

                {/* Reporting */}
                <section className="pt-12 border-t border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4 text-zinc-100">Reporting & Analyse</h2>
                    <p className="mb-6 text-zinc-300 leading-relaxed">
                        J’ai réalisé des synthèses visuelles de données pour les équipes projet et les partenaires réglementaires. Les chiffres affichés dans les visuels ci-dessous sont fictifs, et ont pour but de représenter les tendances et les anomalies observées au sein des processus bancaires.
                    </p>
                    <ul className="list-disc list-inside text-zinc-400 space-y-4 mb-6 leading-relaxed">
                        <li>
                            <strong>Réclamations sur chèques :</strong>
                            {"\u00A0"}J’ai conçu un graphique retraçant l’évolution des incidents liés aux chèques sur une période de 12 mois.

                            <br /><br />
                            L’objectif était de visualiser les pics d'incidents, afin de cibler les points sensibles à discuter lors des réunions hebdomadaires de suivi. Ce reporting a permis de prioriser les actions correctives en fonction des périodes de forte activité.
                        </li>
                        <li>
                            <strong>Volumétrie LCR :</strong>
                            {"\u00A0"}J’ai créé une analyse graphique sur l’évolution des flux de paiements interentreprises via les Lettres de Change Relevées (LCR).

                            <br /><br />
                            L’objectif principal était d’anticiper les variations des volumes de paiements, afin d'ajuster les ressources humaines et les infrastructures nécessaires au bon déroulement des opérations, ainsi que de prévoir les périodes de maintenance ou de surcharge.
                        </li>
                        <li>
                            <strong>Rapport BDF Fraude :</strong>
                            {"\u00A0"}Dans le cadre de la conformité réglementaire, j’ai contribué à la réalisation d’une synthèse des incidents suspects de fraude, envoyée semestriellement à la Banque de France (BDF).

                            <br /><br />
                            Ce reporting visait à garantir la conformité avec les obligations légales et à anticiper les évolutions possibles du cadre réglementaire en matière de fraude bancaire.
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="w-full max-w-xl mx-auto">
                            <Image
                                src="/lbp/volumetrie-lcr.png"
                                alt="Exemple de reporting sur les réclamations"
                                width={800}
                                height={450}
                                className="object-contain w-full h-auto rounded-xl"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
