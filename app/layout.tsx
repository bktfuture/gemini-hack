"use client";
import { useRouter } from "next/navigation";
import LeftMenu from "@/components/LeftMenu";
import { usePathname } from "next/navigation";
import styles from "./globals.module.css";
import NavbarDs from "@/components/NavbarDs";
import ifNotLandingOrSignInPage from "../scripts/ifNotLandingOrSignInPage";
import { GlobalContextProvider } from "../context/globalContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>GeminiDocs</title>
        <meta name="description" content="Your documentation assistant!" />
        <link rel="icon" href="/geminiDocsLogo.png"></link>
      </head>
      <body className={styles.body}>
        <GlobalContextProvider>
          {ifNotLandingOrSignInPage(pathname) && <LeftMenu />}
          {ifNotLandingOrSignInPage(pathname) && <NavbarDs></NavbarDs>}
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
