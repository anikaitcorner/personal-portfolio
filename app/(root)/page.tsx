
import { Container } from "@/components/container";
import { Intro } from "@/components/intro";
import { ProjectCard } from "@/components/project-card";
import { Metadata } from "next";
import Link from "next/link";

export const metaData:Metadata={
  title:"Home "
}

export default function Home() {
  return (
    <main className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-40 xl:pt-32 max-h-screen overflow-y-hidden">
      <section>
        <Container className="mb-16">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Intro />

              <p className="my-12 text-sm text-zinc-700 dark:text-zinc-300 sm:w-2/3 xl:w-1/2">
                Full Stack Software Engineer (JavaScript technologies &amp;
                java) | I believe in Jésus-Christ | I am Link sports enthusiast...
              </p>
              <div className="flex items-center gap-4 divide-x divide-zinc-200 dark:divide-zinc-800">
                <Link
                  href="mailto:hello@tailus.io"
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
                  href="/about"
                  className="pl-4 text-sm tracking-wide text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  About me
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative z-10 lg:pt-20 xl:pt-30">
        <div className="animate-marquee w-full">
          <div className="grid h-full w-[500vw] grid-cols-8 place-items-center gap-4 px-6 sm:w-[300vw] xl:w-[200vw]">
            {
                Array.from({length:8}).map((_,i)=>{

                    if((i+1)%2===0){
                        return(
                            <ProjectCard className="-mb-40" key={i}/>
                        )
                    }else{
                        return(
                            <ProjectCard key={i}/>
                        )
                    }
                    
                })
            }
          </div>
        </div>
      </section>
      
    </main>

  );
}
