import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import style from "./rootStyles.module.css";
import "./global.css";

export const metadata: Metadata = {
  title: "Hello World",
  description: "Hello world app",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <header className={style.header}>
          <div>
            <Link href="/home" className={style.homeLink}>
              Home
            </Link>
          </div>
          <div>
            <Link href="/blog" className={style.menuBarLink}>
              Blog
            </Link>
          </div>
          <div>
            <Link href="/conference" className={style.menuBarLink}>
              Conference
            </Link>
          </div>
          <div>
            <Link href="/settings" className={style.menuBarLink}>
              Settings
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
