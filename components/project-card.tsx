import { cn } from "@/lib/utils";
import Link from "next/link";
interface IProjectCard{
    className?:string
}

export const ProjectCard:React.FC<IProjectCard> = ({className}) => {
  return (
    <Link
      href="/projects"
      className={cn("group relative z-10 transition duration-300 ease-out hover:-translate-y-12",className)}
    >
      <div className="absolute right-0.5 top-0.5 flex h-9 w-9 origin-top-right scale-75 rounded-sm bg-black/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:rounded-md group-hover:bg-black/20 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="m-auto h-4 w-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </div>
      <img
        className="rounded-md transition duration-500 group-hover:rounded-lg"
        src="/images/projects/project-one.jpg"
        alt="project cover"
        width="1380"
        height="1380"
      />
      <div className="flex items-center justify-between px-2 py-4">
        <h2 className="text-zinc-700 dark:text-white">Project Name</h2>
        <span className="text-xs text-zinc-500 dark:text-zinc-300">
          Web Design
        </span>
      </div>
    </Link>
  );
};
