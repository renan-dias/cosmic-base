// 'use client';

import React from 'react';
import Link from 'next/link';
import { etapasCosmic } from '../cosmic/mocks/cosmic.mock';
import Image from 'next/image';

export default function Jogo() {
  return (
    <div className="flex bg-white">
      <aside className="jogo-sidebar w-1/4 bg-cover bg-center" style={{ backgroundImage: "url('/nasa01_S 1.png')" }}>
        <nav className="space-y-4 p-4">
          {etapasCosmic.map((etapa, index) => (
            <details key={index} className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
              <summary className="cursor-pointer hover:text-red-600">
                {etapa.nome}
              </summary>
              <ul className="pl-4">
                {etapa.atividades.map((atividade, idx) => (
                  <li key={idx} className="mt-2">
                    <Link href={`/${atividade.arquivos.professor}`} target="_blank" className="">
                      {atividade.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>
      </aside>
      <main className="jogo-main flex-grow p-8 relative">
        <Image src="/vector.png" alt="Mapa" width={250} height={250} className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-20 pointer-events-none" />
        {etapasCosmic.map((etapa, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{etapa.nome}</h2>
            <p className="mb-4">
              {etapa.descricao}
            </p>
            <Link href={`/${etapa.fichas}`} target="_blank" className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
              Baixar {etapa.nome}
            </Link>
          </section>
        ))}
      </main>
    </div>
  );
} 