import Link from "next/link";
import { Container } from "./container";
import ThemeToggler from "./themeToggler";

export const Header = () => {
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <header className="absolute inset-x-0 top-8 z-10 sm:top-12 lg:top-20 xl:top-16 dark:text-zinc-300">
      {/**
       * Navbar
       */}
      <Container>
      <div className="flex items-center justify-between">
        {/**Avatar & Link */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full object-cover overflow-hidden bg-transparent">
          <img className="w-full" src="https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png" />
          </div>

          <ul className="flex flex-col gap-1 divide-y divide-zinc-100 dark:divide-zinc-900">
            {navLinks.map((nav) => {
              return (
                <li key={nav.href}>
                  <Link href={nav.href}>{nav.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
      </Container>
    </header>
  );
};
