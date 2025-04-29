import type { FC } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";

type Project = {
  _id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  body: string;
  slug: string;
};

type Props = {
  project: Project;
};

export const Article: FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8 group cursor-pointer">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs text-zinc-200 group-hover:text-white">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(project.date))}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
        </div>
        <h2 className="text-xl font-medium lg:text-3xl text-zinc-200 group-hover:text-white font-display mt-2">
          {project.title}
        </h2>
        <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
      </article>
    </Link>
  );
};
