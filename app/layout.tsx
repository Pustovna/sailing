import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Питерский яхтинг",
  description: "Всё что мы ждали в одном месте",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="main_container">
        <video className="video_background" autoPlay muted loop>
          <source
            src="https://media2.zenrus.ru/media/video/ocean.mp4"
            type="video/mp4"
          />
        </video>
   
       <header className="header_container">
          <Header />
       </header>
   
        {children}
      </body>
    </html>
  );
}
