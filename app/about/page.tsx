import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { BiLogoVisualStudio, BiLogoBootstrap, BiLogoMicrosoft } from "react-icons/bi";
import {
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss3,
    SiGit,
    SiAndroidstudio,
    SiFigma,
    SiPostman,
    SiTrello,
    SiGithub,
    SiPhpstorm,
    SiPhp,
    SiSymfony,
    SiMysql,
    SiTailwindcss,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobexd,
} from "react-icons/si";
import GlassIcons from "../components/GlassIcons";


export const metadata: Metadata = {
    title: "À propos de moi",
    description: "Découvrez mon parcours, mes expériences et mes passions.",
};

const languageItems = [
    { icon: <SiHtml5 />, color: "grey", label: "HTML" },
    { icon: <SiCss3 />, color: "grey", label: "CSS" },
    { icon: <SiJavascript />, color: "grey", label: "JavaScript" },
    { icon: <SiGit />, color: "grey", label: "Git" },
    { icon: <BiLogoBootstrap />, color: "grey", label: "Bootstrap" },
    { icon: <SiTailwindcss />, color: "grey", label: "Tailwind CSS" },
    { icon: <SiPhp />, color: "grey", label: "PHP" },
    { icon: <SiSymfony />, color: "grey", label: "Symfony" },
    { icon: <SiMysql />, color: "gray", label: "MySQL" },
    
];

const toolsItems = [
    { icon: <BiLogoVisualStudio />, color: "grey", label: "Visual Studio" },
    { icon: <SiPhpstorm />, color: "grey", label: "PhpStorm" },
    { icon: <SiGithub />, color: "grey", label: "GitHub" },
    { icon: <SiAndroidstudio />, color: "grey", label: "Android Studio" },
    { icon: <SiFigma />, color: "grey", label: "Figma" },
    { icon: <SiPostman />, color: "grey", label: "Postman" },
    { icon: <SiTrello />, color: "grey", label: "Trello" },
    { icon: <SiAdobeaftereffects />, color: "grey", label: "After Effects" },
    { icon: <SiAdobepremierepro />, color: "grey", label: "Premiere Pro" },
    { icon: <SiAdobeillustrator />, color: "grey", label: "Illustrator" },
    { icon: <SiAdobephotoshop />, color: "grey", label: "Photoshop" },
    { icon: <SiAdobexd />, color: "grey", label: "Adobe XD" },
    { icon: <BiLogoMicrosoft />, color: "grey", label: "Suite Microsoft" },
    
];


export default function AboutPage() {
    return (
        <div className="bg-dark text-white">
            <Navigation />
            <main className="max-w-screen-xl mx-auto px-8 py-24">
                {/* Hero Section */}
                <header className="flex items-center justify-between space-y-8 lg:space-y-0">
                    <div className="flex justify-center w-full lg:w-1/3">
                        {/* Profile Image */}
                        <div className="relative w-40 h-40 rounded-full overflow-hidden ">
                            <img
                                src="/noah.jpeg"
                                alt="Mon portrait"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 lg:pl-12 text-center lg:text-left">
                        {/* Name and Title */}
                        <h1 className="text-5xl font-bold text-white">Noah DEKEYZER</h1>
                        <p className="text-2xl text-gray-400 mt-2">2nd year student of BTS SIO SLAM</p>
                        {/* Social Media Links */}
                        <div className="flex space-x-8 mt-6 justify-center lg:justify-start">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-grey-400 transition-colors text-xl"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-grey-600 transition-colors text-xl"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-500 transition-colors text-xl"
                            >
                                GitHub
                            </a>
                        </div>

                        {/* Short description */}
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
                            Student in BTS SIO, passionate about web development and project management. I enjoy creating innovative solutions and collaborating with dynamic teams to achieve common goals.
                            I am always looking for new challenges and learning opportunities.
                        </p>
                    </div>
                </header>

                {/* Work Experience Section */}
                <section className="mt-16 flex lg:w-full lg:pl-12 lg:text-left">
                    <div className="space-y-8 w-full lg:w-2/3">
                        <h2 className="text-3xl font-semibold text-white">Profesionnel Experiences</h2>

                        {/* Expérience 1 */}
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img
                                            src="/logo-lbp.png"
                                            alt="La Banque Postale"
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">La Banque Postale</h3>
                                        <p className="text-grey-400">Internship - Project Manager</p>
                                    </div>
                                </div>
                                <p className="text-gray-400">January 2025 - February 2025</p>
                            </div>
                            <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
                                <li>Management of planning and execution of technical projects.</li>
                                <li>Reporting creation.</li>
                                <li>Monitoring performance indicators and deadlines to ensure timely delivery.</li>
                            </ul>
                        </div>

                        {/* Expérience 2 */}
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img
                                            src="logo-gts.png"
                                            alt="Logo GET STUFF"
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Get Stuff</h3>
                                        <p className="text-grey-400"> Internship - Fullstack Devlopper</p>
                                    </div>
                                </div>
                                <p className="text-gray-400">June 2024</p>
                            </div>
                            <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
                                <li>Design and development of a BackOffice application for stock management.</li>
                                <li>Creation of the company's online presence.</li>
                                <li>Stock management, customer relations, marketing, and sales.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Studies Section */}
                <section className="mt-16 flex lg:w-full lg:pl-12 lg:text-left">
                    <div className="space-y-8 w-full lg:w-2/3">
                        <h2 className="text-3xl font-semibold text-white">Studies</h2>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-white">BTS SIO - Lycée Général et Technologique Gabriel Fauré, Annecy</h3>
                            <p className="text-gray-400 mt-1">2023 - 2025</p>
                            <p className="text-gray-300 mt-4">
                                Specialization in software development, database management, and system architecture.
                            </p>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-white">BAC STMG - Lycée Général et Technologique Charles Baudelaire, Annecy</h3>
                            <p className="text-gray-400 mt-1">2014 - 2017</p>
                            <p className="text-gray-300 mt-4">
                                Baccalaureate in Sciences and Technologies of Management and Management, specializing in Information System Management as well as
                                the Cinema Audiovisual option.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-16 flex  lg:w-full lg:pl-12 lg:text-left">
                    <div className="space-y-8 w-full lg:w-2/3">
                        <h2 className="text-3xl font-semibold text-white">Languages and Skills</h2>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-white">Languages</h3>
                            <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
                                <li>French: Native language</li>
                                <li>English: Intermediate (B1)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-semibold text-white mb-6">Languages et Frameworks</h2>
                            <GlassIcons items={languageItems} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-white mb-6">Tools and Applications</h2>
                            <GlassIcons items={toolsItems} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
