import React from "react";
import { Avatar } from "@/components";
import Link from "next/link";

interface ISocial {
  externalLink?: {
    label: string;
    href: string;
  };
}

const Intro: React.FC<ISocial> = ({ externalLink }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        <Avatar />
        <div>
          <h1 className="text-center md:text-start text-3xl font-semibold text-zinc-950 dark:text-white">
            Mahadi Hasan
          </h1>
          <p className="text-center md:text-start text-sm tracking-wide text-zinc-700 dark:text-zinc-300">
            Fullstack Web Developer
          </p>

          <p className="text-center md:text-start mt-6 text-sm text-zinc-700 dark:text-zinc-300 w-full max-w-[400px]">
            Full Stack Web Developer ( ReactJS - NextJS - PHP &amp; Laravel -
            Nodejs, MySQL, WordPress, MongoDB, ExpressJS, Firebase ) | AI
            Solution ( Python &amp; AI )
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start  gap-4 divide-x divide-zinc-200 dark:divide-zinc-800">
            <Link
              href="mailto:mahadi.dev.pm@gmail.com"
              className="group inline-flex h-8 items-center gap-2.5 rounded-md bg-zinc-950 px-3 transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <span className="text-sm tracking-wide text-white">
                Let's talk
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3 text-white/60 transition duration-300 group-hover:rotate-45 group-hover:text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href={externalLink ? externalLink.href : "/about"}
              className="pl-4 text-sm tracking-wide text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {externalLink ? externalLink.label : <>About me</>}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
