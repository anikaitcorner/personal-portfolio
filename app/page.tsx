import { Intro, Project, Container } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden pt-12 max-h-screen overflow-y-hidden">
      <section>
        <Container className="mb-16">
          <Intro />
        </Container>
      </section>
      <section className="relative z-10 lg:pt-20 xl:pt-30">
        <div className="animate-marquee w-full">
          <div className="grid h-full w-[500vw] grid-cols-8 place-items-center gap-4 px-6 sm:w-[300vw] xl:w-[200vw]">
            {Array.from({ length: 8 }).map((_, i) => {
              if ((i + 1) % 2 === 0) {
                return <Project className="-mb-40" key={i} />;
              } else {
                return <Project key={i} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
