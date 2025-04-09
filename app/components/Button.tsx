import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  ...props 
}: ButtonProps) {
  const baseStyles = `
    rounded-lg
    font-medium
    transition-all
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    animate-fade-in
    text-white
  `

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      hover:from-blue-600 hover:to-purple-600
      focus:ring-blue-500
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-gray-100
      text-gray-800
      hover:bg-gray-200
      focus:ring-gray-500
    `,
    outline: `
      border-2
      border-gray-200
      text-white
      hover:border-gray-300
      focus:ring-gray-500
    `
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
} 