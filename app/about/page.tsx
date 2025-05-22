'use client';

import Image from 'next/image';
import { Navigation } from '../components/nav';
import { BiLogoVisualStudio, BiLogoBootstrap, BiLogoMicrosoft } from 'react-icons/bi';
import {
    SiJavascript, SiHtml5, SiCss3, SiGit, SiAndroidstudio, SiFigma,
    SiPostman, SiTrello, SiGithub, SiPhpstorm, SiPhp, SiSymfony, SiMysql,
    SiTailwindcss, SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator,
    SiAdobephotoshop, SiAdobexd,
    SiLinkedin,
} from 'react-icons/si';
import GlassIcons from '../components/GlassIcons';
import Link from 'next/link';

const languageItems = [
    { icon: <SiHtml5 />, color: 'grey', label: 'HTML' },
    { icon: <SiCss3 />, color: 'grey', label: 'CSS' },
    { icon: <SiJavascript />, color: 'grey', label: 'JavaScript' },
    { icon: <SiGit />, color: 'grey', label: 'Git' },
    { icon: <BiLogoBootstrap />, color: 'grey', label: 'Bootstrap' },
    { icon: <SiTailwindcss />, color: 'grey', label: 'Tailwind CSS' },
    { icon: <SiPhp />, color: 'grey', label: 'PHP' },
    { icon: <SiSymfony />, color: 'grey', label: 'Symfony' },
    { icon: <SiMysql />, color: 'gray', label: 'MySQL' },
];

const toolsItems = [
    { icon: <BiLogoVisualStudio />, color: 'grey', label: 'Visual Studio' },
    { icon: <SiPhpstorm />, color: 'grey', label: 'PhpStorm' },
    { icon: <SiGithub />, color: 'grey', label: 'GitHub' },
    { icon: <SiAndroidstudio />, color: 'grey', label: 'Android Studio' },
    { icon: <SiFigma />, color: 'grey', label: 'Figma' },
    { icon: <SiPostman />, color: 'grey', label: 'Postman' },
    { icon: <SiTrello />, color: 'grey', label: 'Trello' },
    { icon: <SiAdobeaftereffects />, color: 'grey', label: 'After Effects' },
    { icon: <SiAdobepremierepro />, color: 'grey', label: 'Premiere Pro' },
    { icon: <SiAdobeillustrator />, color: 'grey', label: 'Illustrator' },
    { icon: <SiAdobephotoshop />, color: 'grey', label: 'Photoshop' },
    { icon: <SiAdobexd />, color: 'grey', label: 'Adobe XD' },
    { icon: <BiLogoMicrosoft />, color: 'grey', label: 'Suite Microsoft' },
];

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white">
            <Navigation />
            <main className="max-w-screen-xl mx-auto px-4 py-24">
                {/* Hero Section */}
                <header className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                    <div className="flex justify-center w-full lg:w-1/3">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden">
                            <Image
                                src="/noah.jpg"
                                alt="Mon portrait"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 lg:pl-12 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">Noah DEKEYZER</h1>
                        <p className="text-xl sm:text-2xl text-gray-400 mt-2">Etudiant en 2ème année de BTS SIO SLAM</p>

                        <div className="flex space-x-8 mt-6 justify-center lg:justify-start">
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-600 transition-colors text-lg sm:text-xl flex items-center space-x-2"
                            >
                                <SiLinkedin className="text-gray-400 hover:text-gray-600 text-2xl" />
                                <span>LinkedIn</span>
                            </Link>
                            <Link
                                href="https://github.com"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-500 transition-colors text-lg sm:text-xl flex items-center space-x-2"
                            >
                                <SiGithub className="text-gray-400 hover:text-gray-500 text-2xl" />
                                <span>GitHub</span>
                            </Link>
                        </div>

                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto sm:text-left text-justify sm:text-justify-auto">
                            Etudiant en 2ème année de BTS SIO, j'ai acquis des compétences solides en programmation, gestion de projets et design d'interface utilisateur. Je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences et contribuer à des projets innovants.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link
                                href="/cv.pdf"
                                target="_blank"
                                className="bg-gradient-to-tr from-zinc-800 via-zinc-600 to-zinc-800 text-white px-5 py-2 rounded-xl border border-zinc-400/30 shadow-lg animate-pulse hover:brightness-110 hover:shadow-xl transition-all duration-900"
                            >
                                Mon CV
                            </Link>
                            <Link
                                href="/Tabsynth.pdf"
                                target="_blank"
                                className="bg-gradient-to-tr from-zinc-800 via-zinc-600 to-zinc-800 text-white px-5 py-2 rounded-xl border border-zinc-400/30 shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-900"
                            >
                                Mon Tableau de Synthèse
                            </Link>
                            <Link
                                href="/veille-info.pdf"
                                target="_blank"
                                className="bg-gradient-to-tr from-zinc-800 via-zinc-600 to-zinc-800 text-white px-5 py-2 rounded-xl border border-zinc-400/30 shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-900"
                            >
                                Ma Veille Informationnelle
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Experience Section */}
                <section className="mt-16 lg:pl-12">
                    <h2 className="text-3xl font-semibold mb-8">Expériences Professionnelles</h2>

                    <div className="space-y-12">
                        <div className="p-6 border border-gray-700 rounded-lg">
                            <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between space-y-4 lg:space-y-0">
                                <div className="flex items-center space-x-6 ml-0">
                                    <div className="w-16 h-16 sm:w-16 sm:h-16 relative rounded-full overflow-hidden">
                                        <Image
                                            src="/logo-lbp.png"
                                            alt="La Banque Postale"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            <Link
                                                href="https://www.labanquepostale.fr"
                                                target="_blank"
                                                className="text-white hover:underline"
                                            >
                                                La Banque Postale
                                            </Link>
                                        </h3>
                                        <p className="text-gray-400 text-base">Stage – Chef de projet / MOE</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm lg:text-base">Janvier 2025 – Février 2025</p>
                            </div>
                            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                                <li>Gestion de projet et suivi de leurs exécutions.</li>
                                <li>Création de reportings.</li>
                                <li>Collaboration avec les équipes de développement pour assurer la qualité des livrables.</li>
                                <li>Participation à la rédaction de la documentation technique et fonctionnelle.</li>
                                <li>Participation aux tests des nouvelles fonctionnalités sur les applications mobiles</li>
                            </ul>
                        </div>

                        <div className="p-6 border border-gray-700 rounded-lg">
                            <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between space-y-4 lg:space-y-0">
                                <div className="flex items-center space-x-6 ml-0">
                                    <div className="w-24 h-24 sm:w-20 sm:h-20 relative rounded-full overflow-hidden">
                                        <Image
                                            src="/logo-gts.png"
                                            alt="Get Stuff"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Get Stuff</h3>
                                        <p className="text-gray-400 text-base">Stage – Developpeur Fullstack</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm lg:text-base">Juin 2024</p>
                            </div>
                            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                                <li>Création d'une application back-office pour la gestion des stocks.</li>
                                <li>Missions de communication / marketing, vente et gestion des stocks physiques.</li>
                                <li>Développement d'un site e-commerce pour l'entreprise.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Studies Section */}
                <section className="mt-16 lg:pl-12">
                    <h2 className="text-3xl font-semibold mb-8">Parcours Scolaire</h2>

                    <div className="space-y-12">
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">BTS SIO – Lycée Gabriel Fauré, Annecy</h3>
                            <p className="text-gray-400 mt-1">2023 – 2025</p>
                            <p className="text-gray-300 mt-4">
                                Spécialisation en Solutions Logicielles et Applications Métiers (SLAM).
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">BAC STMG – Lycée Charles Baudelaire, Annecy</h3>
                            <p className="text-gray-400 mt-1">2020 – 2023</p>
                            <p className="text-gray-300 mt-4">
                                Spécialiser en Système d'Information de Gestion (SIG) et en Cinéma-Audiovisuel (CI-AV).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mt-16 lg:pl-12">
                    <h2 className="text-3xl font-semibold text-white mb-6">Langages and Compétences</h2>

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold">Langages</h3>
                        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                            <li>Français: Natif</li>
                            <li>Anglais: Intérmédiaire (B1)</li>
                        </ul>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-4">Langages & Frameworks</h3>
                        <GlassIcons items={languageItems} />
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-4">Outils & Applications</h3>
                        <GlassIcons items={toolsItems} />
                    </div>
                </section>
            </main>
        </div>
    );
}