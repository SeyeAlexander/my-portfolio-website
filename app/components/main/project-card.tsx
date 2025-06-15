import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link }) => {
  return (
    <div className='group relative grid gap-4 py-1.5 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-4xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#D1C5A7]/30 lg:group-hover:backdrop-blur-sm dark:lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-sm dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:lg:group-hover:drop-shadow-lg'></div>
      <div className='z-10 sm:col-span-8'>
        <h3 className='font-medium leading-snug text-slate-200'>
          <div>
            <a
              href={link}
              target='_blank'
              rel='noreferrer noopener'
              className='inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus-visible:text-indigo-600 dark:focus-visible:text-indigo-400 group/link text-base'
            >
              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
              <span>
                {title}{" "}
                <ArrowUpRight className='inline-block h-4 w-4 shrink-0 ease-in-out duration-200 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
              </span>
            </a>
          </div>
        </h3>
        <p className='mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400 transition-colors group-hover:text-slate-700 dark:group-hover:text-slate-300'>
          {description}
        </p>
        <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
          {tags.map((tag) => (
            <li key={tag} className='mr-1.5 mt-2'>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
