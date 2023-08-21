import { Container } from "@/components/container";
import { Intro } from "@/components/intro";

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
                  <div className="flex items-center gap-4 divide-x divide-zinc-200 dark:divide-zinc-800">
                    <div className="flex gap-2">
                      <a
                        href="#"
                        target="_blank"
                        className="group rounded-md p-2 transition duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-4 w-4 text-zinc-600 group-hover:text-sky-600 dark:text-zinc-300 dark:group-hover:text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="group rounded-md p-2 transition duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      >
                        <span className="sr-only">Github</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-4 w-4 text-zinc-600 group-hover:text-sky-600 dark:text-zinc-300 dark:group-hover:text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="group rounded-md p-2 transition duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-4 w-4 text-zinc-600 group-hover:text-sky-600 dark:text-zinc-300 dark:group-hover:text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                      </a>
                    </div>
                    <a
                      href="mailto:hello@tailus.io"
                      className="pl-4 text-base tracking-wide text-zinc-600 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-white"
                    >
                      theo.b@tailus.io
                    </a>
                  </div>
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