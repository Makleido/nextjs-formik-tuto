import type { Metadata } from "next";
import "./css/globals.css";
import ThemeProvider from "./components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "NextJS Formik Tutorial",
  description:
    "This is a tutorial for Formik usage in NextJS with use cases, and some harder to understand concepts and object structures. It's only for personal (learning) and teaching purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full min-h-screen dark:bg-primary-dark-100 bg-primary-light-100 dark:text-primary-light-100 text-primary-dark-100`}
      >
        {children}
        <ThemeProvider />
      </body>
    </html>
  );
}
