import { Container } from "@/components/container";
import { Intro } from "@/components/intro";
import { Social } from "./components/social";
import { Metadata } from "next";

export const metaData:Metadata={
  title:"About"
}

export default function About() {
  return (
    <>
    
   
    <main className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-40 xl:pt-32">
      <section>
        <Container className="mb-16">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Intro />

              <p className="my-12 text-sm text-zinc-700 dark:text-zinc-300 sm:w-2/3 xl:w-1/2">
                Full Stack Software Engineer (JavaScript technologies &amp;
                java) | I believe in Jésus-Christ | I am Link sports
                enthusiast...
              </p>

              <div className="my-12 grid gap-12 border-y py-12 text-base text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 sm:grid-cols-2">
                <div className="space-y-6">
                  <p>
                    Full Stack Software Engineer (JavaScript technologies &amp;
                    java) | I believe in Jésus-Christ | I am a sports
                    enthusiast...
                  </p>
                  <p>
                    Deleniti quaerat sequi, itaque magni cumque quisquam vero
                    dolores asperiores sed explicabo voluptatibus eum? Odit
                    explicabo deserunt dignissimos adipisci, cupiditate dolor
                    tempore.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero sapiente possimus magnam id. Quibusdam, necessitatibus
                    culpa placeat quisquam iure, accusamus, molestias aperiam
                    dicta cumque fugiat itaque eos libero impedit quod!
                  </p>
                  <Social/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
                <div data-rellax-speed="-3" className="rellax mb-96 overflow-hidden px-1" style={{
                    transform:"translate3d(0px, 156px, 0px)"
                }}>
                    <div className="flex items-center justify-center gap-1">
                        
                        <div className="h-80 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="1380" height="1380"/>
                        </div>
                        <div className="h-72 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="826" height="1239"/>
                        </div>
                        <div className="h-64 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="826" height="1239"/>
                        </div>
                        <div className="hidden h-60 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="826" height="1239"/>
                        </div>
                        <div className="hidden h-56 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="2000" height="1335"/>
                        </div>
                        <div className="hidden h-52 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="900" height="1261"/>
                        </div>
                        <div className="hidden h-52 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="2000" height="1330"/>
                        </div>
                        <div className="hidden h-56 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="996" height="1245"/>
                        </div>
                        <div className="hidden h-60 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="2000" height="1333"/>
                        </div>
                        <div className="h-64 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg"alt="lifestyle" width="826" height="1239"/>
                        </div>
                        <div className="h-72 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg"alt="lifestyle" width="1380" height="1380"/>
                        </div>
                        <div className="h-80 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg"alt="lifestyle" width="1380" height="1380"/>
                        </div>
                        <div className="h-96 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                            <img className="h-full w-full object-cover" src="/images/projects/project-one.jpg" alt="lifestyle" width="740" height="1110"/>
                        </div>
                    </div>
                </div>
            </section>
    </main>

    <footer className="relative border-t py-6 dark:border-zinc-900">
            <div className="mx-auto max-w-4xl px-6 md:px-12">
                <div className="flex flex-wrap justify-between gap-4">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">© Anika IT Corner 2023 - Present</span>
                    <a href="#" target="_top" className="text-sm text-gray-700 dark:text-white">_top</a>
                </div>
            </div>
        </footer>
    </>
  );
}
