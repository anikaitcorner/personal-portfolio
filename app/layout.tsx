"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Layout, ThemeToggler } from "@/components";
import { ContextProvider } from "@/context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <Layout>{children}</Layout>
    </ContextProvider>
  );
}
