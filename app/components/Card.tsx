import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  animation?: 'slide-up' | 'slide-down' | 'fade-in'
}

export default function Card({ children, className = '', animation = 'fade-in' }: CardProps) {
  return (
    <div 
      className={`
        relative
        p-6
        rounded-xl
        bg-white/80
        backdrop-blur-sm
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300
        border border-gray-100
        ${className}
        animate-${animation}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 