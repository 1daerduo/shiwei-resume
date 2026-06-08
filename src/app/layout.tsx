import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "石伟 | 嵌入式 Linux 软件工程师",
  description:
    "石伟 - 7 年嵌入式 Linux 开发经验，专注智能安防与行车记录仪。熟练掌握 C/Shell，在 Anker Eufy 安防项目中负责基站端核心业务开发。",
  keywords: [
    "石伟",
    "嵌入式 Linux",
    "软件工程师",
    "Anker",
    "Eufy",
    "智能安防",
    "行车记录仪",
    "C 语言",
  ],
  authors: [{ name: "石伟" }],
  openGraph: {
    title: "石伟 | 嵌入式 Linux 软件工程师",
    description:
      "7 年嵌入式开发经验，专注智能安防与行车记录仪，熟练掌握 C/Shell/Linux 开发。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="dark" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
