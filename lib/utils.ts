import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const imageDir="/images/projects"
export const projects=[
  {
    img:`${imageDir}/nativo.png`
  },
  {
    img:`${imageDir}/gpt.png`
  },
  {
    img:`${imageDir}/startup.png`
  },
  {
    img:`${imageDir}/kinakata.png`
  },
  {
    img:`${imageDir}/portfolio.png`
  },
  {
    img:`${imageDir}/xpider.png`
  },
  {
    img:`${imageDir}/ammoride.png`
  }
]