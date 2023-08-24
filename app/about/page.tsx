import { Details, Intro, Container } from "@/components";
import { projects } from "@/lib/utils";


export default function About() {
  return (
    <>
      <main className="relative overflow-hidden pt-12">
        <section>
          <Container>
            <Intro
              externalLink={{
                label: "Home",
                href: "/",
              }}
            />

            <Details />
          </Container>
        </section>
        <section>
          <div
            data-rellax-speed="-3"
            className="rellax mb-80 overflow-hidden px-1"
            style={{
              transform: "translate3d(0px, 156px, 0px)",
            }}
          >
            <div className="flex items-center justify-center gap-1">
              <div className="h-80 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={projects[0].img}
                  alt="lifestyle"
                  width="1380"
                  height="1380"
                />
              </div>
              <div className="h-72 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={projects[6].img}
                  alt="lifestyle"
                  width="826"
                  height="1239"
                />
              </div>
              <div className="h-64 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={projects[4].img}
                  alt="lifestyle"
                  width="826"
                  height="1239"
                />
              </div>
              <div className="hidden h-60 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                <img
                  className="h-full w-full object-cover"
                  src={projects[3].img}
                  alt="lifestyle"
                  width="826"
                  height="1239"
                />
              </div>
              <div className="hidden h-56 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                <img
                  className="h-full w-full object-cover"
                  src={projects[2].img}
                  alt="lifestyle"
                  width="2000"
                  height="1335"
                />
              </div>
              <div className="hidden h-52 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                <img
                  className="h-full w-full object-cover border border-slate-600"
                  src={projects[1].img}
                  alt="lifestyle"
                  width="900"
                  height="1261"
                />
              </div>
              <div className="hidden h-52 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                <img
                  className="h-full w-full object-cover"
                  src={projects[5]?.img}
                  alt="lifestyle"
                  width="2000"
                  height="1330"
                />
              </div>
              <div className="h-56 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={projects[2].img}
                  alt="lifestyle"
                  width="1380"
                  height="1380"
                />
              </div>
              <div className="h-60 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={projects[3].img}
                  alt="lifestyle"
                  width="826"
                  height="1239"
                />
              </div>
              <div className="h-64 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={projects[4].img}
                  alt="lifestyle"
                  width="826"
                  height="1239"
                />
              </div>
              <div className="hidden h-72 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                <img
                  className="h-full w-full object-cover"
                  src={projects[6].img}
                  alt="lifestyle"
                  width="826"
                  height="1239"
                />
              </div>
              <div className="hidden h-80 w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96 sm:block">
                <img
                  className="h-full w-full object-cover"
                  src={projects[0].img}
                  alt="lifestyle"
                  width="2000"
                  height="1335"
                />
              </div>
             

              
              
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t py-6 dark:border-zinc-900">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="flex flex-wrap justify-between gap-4">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              © 2023 MAHADI DEV - All rights reserved
            </span>
            <a
              href="#"
              target="_top"
              className="text-sm text-gray-700 dark:text-white"
            >
              _top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
