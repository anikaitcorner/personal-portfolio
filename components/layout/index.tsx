import React from "react";
import { ThemeToggler } from "..";
import { Inter, Work_Sans } from "next/font/google";
import { useStateContext } from "@/context";

const primaryFont = Work_Sans({ subsets: ["latin"] });
interface ILayout {
  children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  // context
  const { isDarkMode } = useStateContext();

  return (
    <>
      <html lang="en" className={isDarkMode ? "dark" : ""}>
        <body
          className={
            primaryFont.className +
            "overflow-hidden bg-white dark:bg-zinc-800 scrollbar-hide relative"
          }
        >
          <div className="fixed top-12 right-12 z-30">
            <ThemeToggler />
          </div>
          <div
            aria-hidden="true"
            className="fixed inset-0 h-[200vh] origin-top scale-y-0 bg-gradient-to-b from-gray-100 from-80% to-transparent transition-transform duration-700 dark:scale-y-100 dark:from-zinc-950"
          ></div>
          {children}
        </body>
      </html>
    </>
  );
};

export default Layout;
