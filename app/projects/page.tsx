import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

type Project = {
  _id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  body: string;
  slug: string;
};

const projects: Project[] = [
  {
    _id: "1",
    title: "GSB Frais",
    description: "Webapp and mobile application for GSB.",
    date: "2025-04-27",
    type: "project",
    body: "Body content of the project",
    slug: "gsb",
  },
  {
    _id: "2",
    title: "GSB Mobile",
    description: "Mobile application for GSB.",
    date: "2025-04-27",
    type: "project",
    body: "Body content of the project",
    slug: "gsb-mobile",
  },
  {
    _id: "3",
    title: "Forum Planner",
    description: "In building...",
    date: "2024-09-01",
    type: "project",
    body: "Body content of the project",
    slug: "",
  },
//   {
//     _id: "4",
//     title: "Projet A",
//     description: "Un projet génial à découvrir.",
//     date: "2025-04-01",
//     type: "project",
//     body: "Body content of the project",
//     slug: "projet-a",
//   },
//   {
//     _id: "5",
//     title: "Projet B",
//     description: "Un autre projet cool.",
//     date: "2025-05-01",
//     type: "project",
//     body: "Body content of the project",
//     slug: "projet-b",
//   },
//   {
//     _id: "6",
//     title: "Projet C",
//     description: "Ce projet est en développement.",
//     date: "2025-06-01",
//     type: "project",
//     body: "Body content of the project",
//     slug: "projet-c",
//   },
];

const internships = [
  {
    _id: "7",
    title: "GetStuff",
    description: "Created a back-office application for stock management, communication/marketing, sales, and inventory management.",
    date: "2023-06-01",
    type: "internship",
    body: "Body content of the internship",
    slug: "getstuff",
  },
  {
    _id: "8",
    title: "La Banque Postale",
    description: "Work on it...",
    date: "2025-02-28",
    type: "internship",
    body: "Body content of the internship",
    slug: "",
  },
];

export default function ProjectsPage() {
  const [featured, ...rest] = projects;
  const topProjects = rest.slice(0, 2);
  const remainingProjects = rest.slice(2);

  const columns = [[], [], []] as Project[][];
  remainingProjects.forEach((project, i) => {
    columns[i % 3].push(project);
  });

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <header className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h2>
          <p className="mt-4 text-zinc-400">Some of the projects are from school and some are on my own time.</p>
        </header>

        <div className="w-full h-px bg-zinc-800" />

        <section className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/projects/${featured.slug}`} passHref>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between text-xs text-zinc-100">
                  <time dateTime={new Date(featured.date).toISOString()}>
                    {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(featured.date))}
                  </time>
                </div>
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display">{featured.title}</h2>
                <p className="mt-4 leading-8 text-zinc-400">{featured.description}</p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block cursor-pointer">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 border-t border-gray-900/10 lg:border-t-0">
            {topProjects.map((project) => (
              <Card key={project._id}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </section>

        {/* <div className="hidden w-full h-px md:block bg-zinc-800" />

        <section className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3">
          {columns.map((column, idx) => (
            <div key={idx} className="grid grid-cols-1 gap-4">
              {column.map((project) => (
                <Link key={project._id} href={`/projects/${project.slug}`} passHref>
                  <Card>
                    <Article project={project} />
                  </Card>
                </Link>
              ))}
            </div>
          ))}
        </section> */}

        <div className="w-full h-px bg-zinc-800" />

        <section>
          <header className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Internships</h2>
            <p className="mt-4 text-zinc-400">Here are some internships I have completed.</p>
          </header>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {internships.map((internship) => (
              <Card key={internship._id}>
                <Link href={`/projects/${internship.slug}`} passHref>
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between text-xs text-zinc-100">
                      <time dateTime={new Date(internship.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(internship.date))}
                      </time>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-zinc-100 sm:text-3xl font-display">{internship.title}</h2>
                    <p className="mt-4 leading-8 text-zinc-400">{internship.description}</p>
                  </article>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
