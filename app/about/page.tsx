'use client';

import Image from 'next/image';
import { Navigation } from '../components/nav';
import { BiLogoVisualStudio, BiLogoBootstrap, BiLogoMicrosoft } from 'react-icons/bi';
import {
    SiJavascript, SiHtml5, SiCss3, SiGit, SiAndroidstudio, SiFigma,
    SiPostman, SiTrello, SiGithub, SiPhpstorm, SiPhp, SiSymfony, SiMysql,
    SiTailwindcss, SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator,
    SiAdobephotoshop, SiAdobexd,
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
        <div className="bg-dark text-white">
            <Navigation />
            <main className="max-w-screen-xl mx-auto px-4 py-24">
                {/* Hero Section */}
                <header className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                    <div className="flex justify-center w-full lg:w-1/3">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden">
                            <Image
                                src="/noah.jpeg"
                                alt="Mon portrait"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 lg:pl-12 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">Noah DEKEYZER</h1>
                        <p className="text-xl sm:text-2xl text-gray-400 mt-2">2nd year student in BTS SIO SLAM</p>

                        <div className="flex space-x-8 mt-6 justify-center lg:justify-start">
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-600 transition-colors text-lg sm:text-xl"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://github.com"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-500 transition-colors text-lg sm:text-xl"
                            >
                                GitHub
                            </Link>
                        </div>

                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
                            Student in BTS SIO, passionate about web development and project management. I enjoy creating innovative solutions and collaborating with dynamic teams to achieve common goals. I am always looking for new challenges and learning opportunities.
                        </p>
                    </div>
                </header>

                {/* Experience Section */}
                <section className="mt-16 lg:pl-12">
                    <h2 className="text-3xl font-semibold mb-8">Professional Experiences</h2>

                    <div className="space-y-12">
                        <div className="p-6 border border-gray-700 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/logo-lbp.png"
                                            alt="La Banque Postale"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">La Banque Postale</h3>
                                        <p className="text-gray-400">Internship – Project Manager</p>
                                    </div>
                                </div>
                                <p className="text-gray-400">January 2025 – February 2025</p>
                            </div>
                            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                                <li>Managed project planning and technical execution.</li>
                                <li>Created project reporting tools.</li>
                                <li>Tracked KPIs and timelines for project delivery.</li>
                            </ul>
                        </div>

                        <div className="p-6 border border-gray-700 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/logo-gts.png"
                                            alt="Get Stuff"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Get Stuff</h3>
                                        <p className="text-gray-400">Internship – Fullstack Developer</p>
                                    </div>
                                </div>
                                <p className="text-gray-400">June 2024</p>
                            </div>
                            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                                <li>Designed and developed a back-office application for stock management.</li>
                                <li>Created the company's online presence.</li>
                                <li>Participated in stock, customer, marketing, and sales operations.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Studies Section */}
                <section className="mt-16 lg:pl-12">
                    <h2 className="text-3xl font-semibold mb-8">Studies</h2>

                    <div className="space-y-12">
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">BTS SIO – Lycée Gabriel Fauré, Annecy</h3>
                            <p className="text-gray-400 mt-1">2023 – 2025</p>
                            <p className="text-gray-300 mt-4">
                                Specializing in software development, databases, and system architecture.
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">BAC STMG – Lycée Charles Baudelaire, Annecy</h3>
                            <p className="text-gray-400 mt-1">2014 – 2017</p>
                            <p className="text-gray-300 mt-4">
                                Specialized in information systems management and cinema & audiovisual studies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mt-16 lg:pl-12">
                    <h2 className="text-3xl font-semibold text-white mb-6">Languages and Skills</h2>

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold">Languages</h3>
                        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                            <li>French: Native</li>
                            <li>English: Intermediate (B1)</li>
                        </ul>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-4">Languages & Frameworks</h3>
                        <GlassIcons items={languageItems} />
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-4">Tools & Applications</h3>
                        <GlassIcons items={toolsItems} />
                    </div>
                </section>
            </main>
        </div>
    );
}