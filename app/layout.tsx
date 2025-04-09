'use client';

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let deferredPrompt: any;
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      // Mostrar notificação ou botão para instalar
    });

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    }
  }, []);

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="description" content="Jogo educativo sobre cosmologia desenvolvido pelo TeHCo" />
        <meta property="og:title" content="COSMIC - Jogo Educativo" />
        <meta property="og:description" content="Jogo educativo sobre cosmologia desenvolvido pelo TeHCo" />
        <meta property="og:image" content="/nasa01_S 1.png" />
        <meta property="og:url" content="https://seusite.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#003E52" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r18ouo620n");
            `,
          }}
        />
      </head>
      <body className={`font-sans ${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow animate-fade-in">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
