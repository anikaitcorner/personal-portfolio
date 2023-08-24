import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const imageDir = "/images/projects";
export const projects = [
  {
    img: `${imageDir}/nativo.png`,
    href: "https://www.nativo.com/",
  },
  {
    img: `${imageDir}/gpt.png`,
    href: "https://chat.littlelearner.kids/",
  },
  {
    img: `${imageDir}/startup.png`,
    href: "https://dev.startuptools.ai/",
  },
  {
    img: `${imageDir}/kinakata.png`,
    href: "https://kinakata.vercel.app/",
  },
  {
    img: `${imageDir}/portfolio.png`,
    href: "http://mahadi.dev/",
  },
  {
    img: `${imageDir}/xpider.png`,
    href: "https://xpider.net/",
  },
  {
    img: `${imageDir}/ammoride.png`,
    href: "https://project.mahadi.dev/ammoride",
  },
];
