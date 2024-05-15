import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jogo COSMIC",
  description: `Jogo para ensinar cosmologia com enfoque histórico, e aprender sobre a ciência e seu contexto social, cultural e político, na primeira metade do século XX.
    Palavras chave: cosmologia,  natureza da ciência, Big Bang, universo estático, universo em expansão, Einstein, Friedmann, Lemaître, Hubble 
    `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
