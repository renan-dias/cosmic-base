import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16 animate-slide-down">
        <h1 className="main-cosmic-title text-4xl md:text-6xl font-bold mb-6 text-white-600 dark:text-white-600 bg-clip-text text-transparent">
          COSMIC
        </h1>
        <p className="text-xl text-white dark:text-white-900 max-w-3xl mx-auto">
          Um jogo educativo sobre cosmologia que explora a história e o desenvolvimento da ciência
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card animation="slide-up">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Sobre o Projeto</h2>
          <p className="text-gray-600 dark:text-black-300 mb-4">
            COSMIC é um jogo educativo desenvolvido pelo TeHCo (Grupo de Teoria e História do Conhecimento Científico e Escolar), 
            liderado pelo prof. Dr. Ivã Gurgel, no Instituto de Física da Universidade de São Paulo.
          </p>
          <p className="text-gray-600 dark:text-black-300">
            Criado em 2011, o grupo é composto por pesquisadores em ensino de ciências e professores de física de escolas públicas 
            do Estado de São Paulo.
          </p>
        </Card>

        <Card animation="slide-up">
          <h2 className="text-2xl font-bold mb-4 text-black-900 dark:text-white">Objetivo</h2>
          <p className="text-gray-600 dark:text-black-300">
            O jogo foi desenvolvido para investigar a criação de sequências didáticas e as visões sobre a ciência dos alunos 
            do ensino médio de escolas públicas paulistas.
          </p>
        </Card>
      </section>

      <section className="text-center mb-16">
        <Card animation="slide-up">
          <h2 className="text-2xl font-bold mb-6 text-black-900 dark:text-white">Comece a Jogar</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/jogo">
              <Button size="lg">
                Iniciar Jogo
              </Button>
            </Link>
            <Link href="/sobre">
              <Button variant="outline" size="lg">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card animation="slide-up">
          <h3 className="text-xl font-bold mb-4 text-black-900 dark:text-white">Aprendizado</h3>
          <p className="text-gray-600 dark:text-black-300">
            Explore conceitos fundamentais de cosmologia de forma interativa e envolvente.
          </p>
        </Card>

        <Card animation="slide-up">
          <h3 className="text-xl font-bold mb-4 text-black-900 dark:text-white">História</h3>
          <p className="text-gray-600 dark:text-black-300">
            Conheça a evolução do pensamento científico sobre o universo.
          </p>
        </Card>

        <Card animation="slide-up">
          <h3 className="text-xl font-bold mb-4 text-black-900 dark:text-white">Interatividade</h3>
          <p className="text-gray-600 dark:text-black-300">
            Experiência gamificada que torna o aprendizado mais dinâmico e divertido.
          </p>
        </Card>
      </section>
    </div>
  )
}
