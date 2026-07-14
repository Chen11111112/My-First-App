import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className={`${figtree.variable} ${syne.variable}`}>
      <body>
        <h1>我是Layout</h1>
        <h2>你也可以叫我NavBar、SideBar</h2>

        {children}

        <footer>@HyC 版權所有</footer>
      </body>
    </html>
  );
}
