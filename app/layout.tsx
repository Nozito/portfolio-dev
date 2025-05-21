import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio de Noah",
    template: "%s | dekeyzer.fr",
  },
  description: "Portfolio de Noah - Etudiant en developpement web",
  openGraph: {
    title: "Portfolio de Noah - dekeyzer.fr",
    description: "Portfolio de Noah DEKEYZER, étudiant en developpement web.",
    url: "https://dekeyzer.fr",
    siteName: "dekeyzer.fr",
    images: [
      {
        url: "https://dekeyzer.fr/ban-n.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Noah - dekeyzer.fr",
    description: "Portfolio de Noah DEKEYZER, étudiant en developpement web.",
    images: ["https://dekeyzer.fr/ban-n.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        {/* Métadonnées SEO globales */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Portfolio de Noah - dekeyzer.fr" />
        <meta property="og:description" content="Portfolio de Noah DEKEYZER, étudiant en developpement web." />
        <meta property="og:url" content="https://dekeyzer.fr" />
        <meta property="og:image" content="https://dekeyzer.fr/ban-n.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio de Noah - dekeyzer.fr" />
        <meta name="twitter:description" content="Portfolio de Noah DEKEYZER, étudiant en developpement web." />
        <meta name="twitter:image" content="https://dekeyzer.fr/ban-n.png" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        {children}
      </body>
    </html>
  );
}