import React from "react";
import { Social } from "@/components";
const Details = () => {
  return (
    <>
      <div className="my-12 grid gap-12 border-t py-12 text-base text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 sm:grid-cols-2">
        <div className="space-y-6">
          <p>
            I believe in quality and performance. I have started coding at 12 at
            a time coding become passion.
          </p>
          <p>
            Introducing a highly skilled and passionate programmer, proficient
            in multiple coding languages and frameworks. Equipped with strong
            problem-solving abilities and a meticulous attention to detail, they
            excel at developing innovative and efficient software solutions.
          </p>
        </div>
        <div className="space-y-6">
          <p>
            For any programming inquiries or collaborations, feel free to reach
            out to this talented programmer. Contact me today to discuss your
            programming needs and explore the possibilities of collaboration in
            the world of coding.
          </p>
          <Social />
        </div>
      </div>
    </>
  );
};

export default Details;
