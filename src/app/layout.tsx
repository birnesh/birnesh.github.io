
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/layout/navbar";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Birnesh Eswaramoorthy',
  description: 'Bilingual full stack web developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className}  bg-gray  text-gray-600 antialiased`}
      >
        <Providers>
          <NavigationBar />
          <main className="flex w-full min-h-screen flex-col">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
