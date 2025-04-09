import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Desenvolvido por</h3>
            <div className="space-y-2">
              <Link 
                href="https://github.com/GabrielPaliari" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Gabriel Paliari
              </Link>
              <Link 
                href="https://dfm.ufla.br/equipe/corpo-docente/97-alexandre-bagdonas" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Alexandre Bagdonas
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sobre o Projeto</h3>
            <p className="text-gray-600 dark:text-gray-300">
              COSMIC é um jogo educativo desenvolvido pelo TeHCo (Grupo de Teoria e História do Conhecimento Científico e Escolar).
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} COSMIC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 