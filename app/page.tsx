import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container">
        <Button>
          Let's Talk{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-3 h-3 text-white/60 transition duration-300 group-hover:rotate-45 group-hover:text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Button>
      </div>
    </main>
  );
}
