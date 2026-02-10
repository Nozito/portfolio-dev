'use client';

import Image from 'next/image';
import { Navigation } from '../components/nav';
import { BiLogoVisualStudio, BiLogoBootstrap, BiLogoMicrosoft } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import {
    SiJavascript, SiHtml5, SiCss3, SiGit, SiAndroidstudio, SiFigma,
    SiPostman, SiTrello, SiGithub, SiPhpstorm, SiPhp, SiSymfony, SiMysql,
    SiTailwindcss, SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator,
    SiAdobephotoshop, SiAdobexd, SiApple,
    SiNotion,
    SiCanva,
} from 'react-icons/si';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        company: 'Stäubli',
        logo: '/logo-stäubli.png',
        role: 'Assistant Marketing Manager',
        type: 'Alternance',
        period: 'Septembre 2025 – Actuellement',
        url: 'https://www.staubli.com',
        tasks: [
            'Gestion de contrat et Accords de Confidentialité',
            'Co-organisation d\'événements internes et externes',
            'Traduction de contenus marché/produit (anglais → 5 langues)',
            'Traitement des Demandes d\'Achat via SAP',
            'Application des conditions commerciales aux filiales',
            'Amélioration qualité de données (CRM, ERP)',
            'Gestion des cash-backs via Excel',
        ],
        special: false,
    },
    {
        company: 'Blyss',
        logo: '/logo-blyss.png',
        role: 'Fondateur & Développeur',
        type: 'Startup',
        period: 'Novembre 2025 – Actuellement',
        url: 'https://www.blyssapp.fr',
        tasks: [
            'Gestion de projet, planification et suivi des tâches',
            'Création d\'un site vitrine',
            'Conception et développement de l\'application mobile Blyss',
            'Stratégie de communication et gestion des réseaux sociaux',
        ],
        special: true,
    },
    {
        company: 'La Banque Postale',
        logo: '/logo-lbp.png',
        role: 'Chef de projet / MOE',
        type: 'Stage',
        period: 'Janvier 2025 – Février 2025',
        url: 'https://www.labanquepostale.fr',
        tasks: [
            'Gestion de projet et suivi des exécutions',
            'Création de reportings',
            'Collaboration avec équipes de développement',
            'Rédaction documentation technique et fonctionnelle',
            'Tests des nouvelles fonctionnalités mobiles',
        ],
        special: false,
    },
    {
        company: 'Get Stuff',
        logo: '/logo-gts.png',
        role: 'Développeur Fullstack',
        type: 'Stage',
        period: 'Juin 2024',
        url: null,
        tasks: [
            'Application back-office de gestion de stocks',
            'Missions communication, marketing et vente',
            'Développement site e-commerce',
        ],
        special: false,
    },
];

const studies = [
    {
        title: 'BAC STMG',
        school: 'Lycée Charles Baudelaire, Annecy',
        period: '2020 – 2023',
        description: 'Système d\'Information de Gestion (SIG) + Cinéma-Audiovisuel',
    },
    {
        title: 'BTS SIO',
        school: 'Lycée Gabriel Fauré, Annecy',
        period: '2023 – 2025',
        description: 'Solutions Logicielles et Applications Métiers (SLAM)',
    },
    {
        title: 'BUT GEA GEMA',
        school: 'IUT Annecy, Annecy',
        period: '2025 – 2026',
        description: 'Gestion Entrepreneuriat et Management des Activités (GEMA)',
    },
];

const skillsData = {
    'Langages & Frameworks': [
        { name: 'HTML5', icon: <SiHtml5 />, level: 'Expert' },
        { name: 'CSS3', icon: <SiCss3 />, level: 'Intermédiaire' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 'Avancé' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Avancé' },
        { name: 'Bootstrap', icon: <BiLogoBootstrap />, level: 'Avancé' },
        { name: 'PHP', icon: <SiPhp />, level: 'Avancé' },
        { name: 'Symfony', icon: <SiSymfony />, level: 'Intermédiaire' },
        { name: 'MySQL', icon: <SiMysql />, level: 'Avancé' },
        { name: 'React', icon: <SiJavascript />, level: 'Intermédiaire' },
        { name: 'Next.js', icon: <SiJavascript />, level: 'Intermédiaire' },
        { name: 'Flutter', icon: <SiAndroidstudio />, level: 'Intermédiaire' },
            { name: 'Swift', icon: <SiApple />, level: 'Intermédiaire' },
    ],
    'Outils & Workflow': [
        { name: 'Git', icon: <SiGit />, level: 'Avancé' },
        { name: 'GitHub', icon: <SiGithub />, level: 'Avancé' },
        { name: 'Visual Studio Code', icon: <BiLogoVisualStudio />, level: 'Expert' },
        { name: 'PhpStorm', icon: <SiPhpstorm />, level: 'Avancé' },
        { name: 'Android Studio', icon: <SiAndroidstudio />, level: 'Intermédiaire' },
        { name: 'Postman', icon: <SiPostman />, level: 'Avancé' },
        { name: 'Trello', icon: <SiTrello />, level: 'Avancé' },
        { name: 'Notion', icon: <SiNotion />, level: 'Avancé' },
    ],
    'Design & Création': [
        { name: 'Figma', icon: <SiFigma />, level: 'Avancé' },
        { name: 'Photoshop', icon: <SiAdobephotoshop />, level: 'Intermédiaire' },
        { name: 'Illustrator', icon: <SiAdobeillustrator />, level: 'Intermédiaire' },
        { name: 'After Effects', icon: <SiAdobeaftereffects />, level: 'Intermédiaire' },
        { name: 'Premiere Pro', icon: <SiAdobepremierepro />, level: 'Intermédiaire' },
        { name: 'Adobe XD', icon: <SiAdobexd />, level: 'Intermédiaire' },
        { name: 'Suite Microsoft', icon: <BiLogoMicrosoft />, level: 'Avancé' },
        { name: 'Canva', icon: <SiCanva />, level: 'Avancé' },
    ],
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.83, 0, 0.17, 1],
        },
    },
};

const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const textSparkleVariants = {
    initial: { scale: 0, opacity: 0, rotate: 0 },
    animate: (i: number) => ({
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180, 360],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
        },
    }),
};

const highlights = [
    { label: '4', sublabel: 'Expériences pro', icon: '💼' },
    { label: '1', sublabel: 'Startup fondée', icon: '🚀' },
    { label: '15+', sublabel: 'Projets réalisés', icon: '⚡' },
];

export default function AboutPage() {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start center', 'end center'],
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white min-h-screen">
            <Navigation />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
                {/* Hero Section Épuré */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                    className="mb-20 sm:mb-24 lg:mb-32"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-8 sm:gap-10 lg:gap-16 items-start">
                        {/* Colonne Photo */}
                        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
                            >
                                {/* Photo */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-zinc-800 shadow-2xl shadow-black/50"
                                >
                                    <Image
                                        src="/noah.jpg"
                                        alt="Noah DEKEYZER"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-2xl"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 360px, 400px"
                                        priority
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Colonne Contenu */}
                        <div className="w-full text-center lg:text-left space-y-6 sm:space-y-8">
                            {/* En-tête */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.83, 0, 0.17, 1] }}
                                className="space-y-3 sm:space-y-4"
                            >
                                <div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                                        Noah DEKEYZER
                                    </h1>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400 justify-center lg:justify-start mb-3">
                                        <HiLocationMarker className="text-base" />
                                        <span>Annecy, France</span>
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-tight">
                                        Étudiant BUT GEA · Fondateur de Blyss
                                    </p>
                                </div>
                            </motion.div>

                            {/* Langues */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: [0.83, 0, 0.17, 1] }}
                                className="flex flex-wrap gap-2.5 justify-center lg:justify-start"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                    className="px-4 py-2 rounded-xl bg-zinc-800/60 border border-zinc-700/70 text-sm font-medium text-zinc-300 flex items-center gap-2 hover:bg-zinc-800 hover:border-zinc-600 transition-all"
                                >
                                    <span className="text-base">🇫🇷</span>
                                    Français
                                </motion.span>
                                <motion.span
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                    className="px-4 py-2 rounded-xl bg-zinc-800/60 border border-zinc-700/70 text-sm font-medium text-zinc-300 flex items-center gap-2 hover:bg-zinc-800 hover:border-zinc-600 transition-all"
                                >
                                    <span className="text-base">🇬🇧</span>
                                    English (B1)
                                </motion.span>
                                <Link
                                    href="/cv.pdf"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg shadow-white/10 whitespace-nowrap"
                                >
                                    📄 CV
                                </Link>
                            </motion.div>

                            {/* Bio */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: [0.83, 0, 0.17, 1] }}
                                className="space-y-4 max-w-2xl mx-auto lg:mx-0"
                            >
                                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                                    Passionné par l'<span className="text-white font-semibold">innovation technologique</span> et
                                    l'<span className="text-white font-semibold">entrepreneuriat</span>. Je combine développement
                                    web/mobile, design UX/UI et gestion de projet pour créer des solutions qui ont un impact.
                                </p>
                                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                                    En alternance chez <span className="text-zinc-200 font-medium">Stäubli</span> comme Assistant
                                    Marketing Manager, et fondateur de{' '}
                                    <span className="font-semibold bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text text-transparent">
                                        Blyss
                                    </span>
                                    , une application mobile innovante de bien-être lancée sur iOS et Android.
                                </p>
                            </motion.div>

                            {/* Highlights professionnels */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7, ease: [0.83, 0, 0.17, 1] }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                            >
                                <div className="group p-5 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all">
                                    <div className="flex items-start gap-3">
                                        <div className="text-2xl group-hover:scale-110 transition-transform">🎓</div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                                                Double compétence
                                            </h3>
                                            <p className="text-xs sm:text-sm text-zinc-400 leading-snug">
                                                IT (BTS SIO) + Management (BUT GEA)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group p-5 rounded-xl bg-gradient-to-br from-pink-900/20 via-pink-800/20 to-pink-900/20 border border-pink-400/30 backdrop-blur-sm hover:border-pink-300/50 transition-all relative overflow-hidden">
                                    {/* Effet gloss Blyss */}
                                    <motion.div
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className="absolute inset-0 w-full h-full"
                                        style={{
                                            background:
                                                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
                                        }}
                                    />
                                    <div className="relative flex items-start gap-3">
                                        <div className="text-2xl group-hover:scale-110 transition-transform">🚀</div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                                                Entrepreneur
                                            </h3>
                                            <p className="text-xs sm:text-sm text-zinc-400 leading-snug">
                                                Création et lancement d'une app mobile
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Expériences avec Timeline */}
                <section ref={timelineRef} className="mb-24 sm:mb-32 relative">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
                        className="text-2xl sm:text-3xl font-bold text-white mb-12 sm:mb-16"
                    >
                        Expériences Professionnelles
                    </motion.h2>

                    <div className="relative">
                        {/* Timeline SVG */}
                        <div className="absolute left-8 top-0 w-0.5 h-full hidden sm:block">
                            <svg className="absolute left-0 top-0 w-full h-full">
                                <line x1="1" y1="0" x2="1" y2="100%" stroke="rgb(63 63 70)" strokeWidth="2" />
                                <motion.line
                                    x1="1"
                                    y1="0"
                                    x2="1"
                                    y2="100%"
                                    stroke="rgb(161 161 170)"
                                    strokeWidth="2"
                                    style={{ pathLength }}
                                />
                            </svg>
                        </div>

                        <div className="space-y-12 sm:space-y-16">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -40 }}
                                    viewport={{ amount: 0.3 }}
                                    transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
                                    className="relative pl-0 sm:pl-16 lg:pl-20"
                                >
                                    <motion.div
                                        whileHover={{ x: 8, scale: 1.01 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className={`relative p-5 sm:p-6 lg:p-8 rounded-xl border transition-all overflow-hidden ${exp.special
                                            ? 'border-pink-500/30 bg-gradient-to-br from-pink-900/20 via-zinc-900/50 to-purple-900/20 hover:border-pink-400/50'
                                            : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900/80'
                                            }`}
                                    >
                                        {/* Effet gloss rose pour Blyss */}
                                        {exp.special && (
                                            <>
                                                {/* Shimmer effect */}
                                                <motion.div
                                                    animate={{
                                                        x: ['-100%', '100%'],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                    }}
                                                    className="absolute inset-0 w-full h-full"
                                                    style={{
                                                        background:
                                                            'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.1), transparent)',
                                                    }}
                                                />

                                                {/* Sparkles sur la card */}
                                                <motion.div
                                                    variants={sparkleVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    transition={{ delay: 0 }}
                                                    className="absolute top-4 right-8 w-2 h-2 rounded-full bg-pink-400"
                                                    style={{ filter: 'blur(1px)' }}
                                                />
                                                <motion.div
                                                    variants={sparkleVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    transition={{ delay: 0.5 }}
                                                    className="absolute top-12 right-16 w-1.5 h-1.5 rounded-full bg-pink-300"
                                                    style={{ filter: 'blur(1px)' }}
                                                />
                                                <motion.div
                                                    variants={sparkleVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    transition={{ delay: 1 }}
                                                    className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-purple-400"
                                                    style={{ filter: 'blur(1px)' }}
                                                />
                                                <motion.div
                                                    variants={sparkleVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    transition={{ delay: 1.5 }}
                                                    className="absolute top-1/2 right-4 w-1 h-1 rounded-full bg-pink-500"
                                                    style={{ filter: 'blur(0.5px)' }}
                                                />
                                            </>
                                        )}

                                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 sm:mb-6">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ amount: 0.5 }}
                                                transition={{ delay: 0.1, duration: 0.5 }}
                                                className="flex items-start gap-3 sm:gap-4"
                                            >
                                                <motion.div
                                                    whileHover={{ rotate: 8, scale: 1.1 }}
                                                    transition={{ type: 'spring', stiffness: 400 }}
                                                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 relative rounded-lg overflow-hidden bg-white/5 flex-shrink-0"
                                                >
                                                    <Image
                                                        src={exp.logo}
                                                        alt={exp.company}
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                </motion.div>
                                                <div>
                                                    <h3 className={`text-xl sm:text-2xl font-bold relative inline-block ${exp.special ? '' : 'text-white'
                                                        }`}>
                                                        {exp.special ? (
                                                            <span className="relative inline-block">
                                                                {exp.url ? (
                                                                    <Link
                                                                        href={exp.url}
                                                                        target="_blank"
                                                                        className="relative"
                                                                    >
                                                                        <motion.span
                                                                            animate={{
                                                                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                                                            }}
                                                                            transition={{
                                                                                duration: 3,
                                                                                repeat: Infinity,
                                                                                ease: 'linear',
                                                                            }}
                                                                            className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 bg-clip-text text-transparent font-bold"
                                                                            style={{
                                                                                backgroundSize: '200% 100%',
                                                                            }}
                                                                        >
                                                                            {exp.company}
                                                                        </motion.span>

                                                                        {/* Sparkles autour du texte Blyss */}
                                                                        <motion.span
                                                                            custom={0}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute -top-1 -right-2 text-pink-400 text-xs"
                                                                        >
                                                                            ✨
                                                                        </motion.span>
                                                                        <motion.span
                                                                            custom={1}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute -top-2 left-0 text-pink-300 text-xs"
                                                                        >
                                                                            ✦
                                                                        </motion.span>
                                                                        <motion.span
                                                                            custom={2}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute -bottom-1 left-1/4 text-purple-400 text-xs"
                                                                        >
                                                                            ✨
                                                                        </motion.span>
                                                                        <motion.span
                                                                            custom={3}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute top-0 right-0 text-pink-500 text-[10px]"
                                                                        >
                                                                            ★
                                                                        </motion.span>
                                                                    </Link>
                                                                ) : (
                                                                    <span className="relative">
                                                                        <motion.span
                                                                            animate={{
                                                                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                                                            }}
                                                                            transition={{
                                                                                duration: 3,
                                                                                repeat: Infinity,
                                                                                ease: 'linear',
                                                                            }}
                                                                            className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 bg-clip-text text-transparent font-bold"
                                                                            style={{
                                                                                backgroundSize: '200% 100%',
                                                                            }}
                                                                        >
                                                                            {exp.company}
                                                                        </motion.span>

                                                                        <motion.span
                                                                            custom={0}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute -top-1 -right-2 text-pink-400 text-xs"
                                                                        >
                                                                            ✨
                                                                        </motion.span>
                                                                        <motion.span
                                                                            custom={1}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute -top-2 left-0 text-pink-300 text-xs"
                                                                        >
                                                                            ✦
                                                                        </motion.span>
                                                                        <motion.span
                                                                            custom={2}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute -bottom-1 left-1/4 text-purple-400 text-xs"
                                                                        >
                                                                            ✨
                                                                        </motion.span>
                                                                        <motion.span
                                                                            custom={3}
                                                                            variants={textSparkleVariants}
                                                                            initial="initial"
                                                                            animate="animate"
                                                                            className="absolute top-0 right-0 text-pink-500 text-[10px]"
                                                                        >
                                                                            ★
                                                                        </motion.span>
                                                                    </span>
                                                                )}
                                                            </span>
                                                        ) : exp.url ? (
                                                            <Link
                                                                href={exp.url}
                                                                target="_blank"
                                                                className="hover:text-zinc-300 transition-colors"
                                                            >
                                                                {exp.company}
                                                            </Link>
                                                        ) : (
                                                            exp.company
                                                        )}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-zinc-400">
                                                        {exp.type} – {exp.role}
                                                    </p>
                                                </div>
                                            </motion.div>
                                            <motion.span
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ amount: 0.5 }}
                                                transition={{ delay: 0.15, duration: 0.5 }}
                                                className="text-xs sm:text-sm text-zinc-500 whitespace-nowrap"
                                            >
                                                {exp.period}
                                            </motion.span>
                                        </div>

                                        <ul className="relative z-10 space-y-2">
                                            {exp.tasks.map((task, j) => (
                                                <motion.li
                                                    key={j}
                                                    initial={{ opacity: 0, x: -15 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -15 }}
                                                    viewport={{ amount: 0.5 }}
                                                    transition={{
                                                        delay: j * 0.06,
                                                        duration: 0.5,
                                                        ease: [0.83, 0, 0.17, 1],
                                                    }}
                                                    className="flex items-start gap-2 sm:gap-3 text-zinc-300"
                                                >
                                                    <span className="text-zinc-600 mt-1.5 text-xs">▸</span>
                                                    <span className="text-xs sm:text-sm leading-relaxed">{task}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Parcours */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 sm:mb-32"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
                        className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12"
                    >
                        Parcours Scolaire
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {studies.map((study, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.83, 0, 0.17, 1] }}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="p-5 sm:p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all"
                            >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 sm:mb-4">
                                    <h3 className="text-lg sm:text-xl font-bold text-white">{study.title}</h3>
                                    <span className="text-xs text-zinc-500 whitespace-nowrap">{study.period}</span>
                                </div>
                                <p className="text-zinc-400 text-xs sm:text-sm mb-2 sm:mb-3">{study.school}</p>
                                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{study.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Compétences */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-12 sm:space-y-16">
                        {Object.entries(skillsData).map(([category, skills], catIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: catIndex * 0.15, duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
                            >
                                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-300 mb-6 sm:mb-8">
                                    {category}
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                                    {skills.map((skill, i) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: '-50px' }}
                                            transition={{
                                                delay: i * 0.04,
                                                duration: 0.5,
                                                ease: [0.83, 0, 0.17, 1],
                                            }}
                                            whileHover={{ y: -8, scale: 1.08 }}
                                            className="p-4 sm:p-5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all group"
                                        >
                                            <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                                                <motion.div
                                                    whileHover={{ rotate: 10, scale: 1.15 }}
                                                    transition={{ type: 'spring', stiffness: 400 }}
                                                    className="text-3xl sm:text-4xl text-zinc-400 group-hover:text-zinc-200 transition-colors"
                                                >
                                                    {skill.icon}
                                                </motion.div>
                                                <div>
                                                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                                                        {skill.name}
                                                    </div>
                                                    <div className="text-xs text-zinc-500">{skill.level}</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </main>
        </div>
    );
}
