import Head from "next/head";
import Link from "next/link";
import Particles from "./components/particles";


export default function Home() {
  const navigation = [
    { name: "Projets", href: "/projects" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-zinc-500 hover:text-zinc-300 duration-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Ligne lumineuse haute */}
      <div className="w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow animate-fade-left animate-duration-[8s]" />

      {/* Fond animé */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} interactive={true} />

      {/* Nom principal */}
      <h1 className="z-10 py-3.5 px-0.5 text-4xl text-transparent bg-white bg-clip-text font-display cursor-default whitespace-nowrap text-edge-outline animate-title animate-delay-500 duration-1000 sm:text-6xl md:text-9xl">
        Noah DEKEYZER
      </h1>

      {/* Ligne lumineuse basse */}
      <div className="w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow animate-fade-right animate-duration-[8s]" />

      {/* Texte bas */}
      <div className="my-16 text-center animate-fade-in animate-delay-1000">
        <h2 className="px-4 text-sm text-zinc-500 sm:px-0">
          Il m'arrive d'être aussi{" "}
          <Link
            href="https://photo.dekeyzer.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-300 duration-500"
          >
            photographe
          </Link>{" "}
          et de partager ma passion.
        </h2>
      </div>
    </div>
  );
}
