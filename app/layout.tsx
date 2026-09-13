import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "日本秋日旅程 · 2026",
  description: "东京、北阿尔卑斯、北陆、京都与箱根的 11 天互动行程。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
