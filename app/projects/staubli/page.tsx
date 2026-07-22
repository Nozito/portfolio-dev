import { Metadata } from "next";
import { Navigation } from "../../components/nav";

export const metadata: Metadata = {
    title: "Stäubli",
    description: "Alternance en tant qu'Assistant Marketing Manager chez Stäubli.",
};

export default function StaubliPage() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <main className="px-6 pt-20 mx-auto max-w-3xl space-y-12 lg:px-8 md:pt-24 lg:pt-32">
                <header className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                        Stäubli
                    </h1>
                    <p className="text-zinc-400">
                        Alternance en tant qu'Assistant Marketing Manager, depuis septembre 2025.
                    </p>
                </header>

                <section className="space-y-5 text-zinc-300 pt-4 text-justify">
                    <p>
                        Au sein de Stäubli, j'occupe le poste d'Assistant Marketing Manager en alternance. Cette mission
                        me permet de découvrir la gestion marketing à l'international dans un groupe industriel,
                        tout en poursuivant en parallèle un <strong>PGE Master International Business à l'INSEEC Paris</strong>.
                    </p>
                </section>

                <section className="pt-8 border-t border-zinc-800">
                    <h2 className="text-xl font-semibold text-zinc-100 mb-4">Missions principales</h2>
                    <ul className="list-disc list-inside text-zinc-400 space-y-1">
                        <li>Gestion de contrats et Accords de Confidentialité</li>
                        <li>Co-organisation d'événements internes et externes</li>
                        <li>Traduction de contenus marché/produit (anglais → 5 langues)</li>
                        <li>Traitement des Demandes d'Achat via SAP</li>
                        <li>Application des conditions commerciales aux filiales</li>
                        <li>Amélioration de la qualité des données (CRM, ERP)</li>
                        <li>Gestion des cash-backs via Excel</li>
                    </ul>
                </section>

            </main>
        </div>
    );
}
