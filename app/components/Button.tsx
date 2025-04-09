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
  `

  const variantStyles = {
    primary: `
      bg-white
      text-[#003E52]
      border-2 border-[#003E52]
      hover:bg-[#003E52] hover:text-white
      focus:ring-[#003E52]
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-gray-100
      text-gray-800
      hover:bg-gray-200
      focus:ring-gray-500
    `,
    outline: `
      bg-[#003E52]
      text-white
      border-2 border-[#003E52]
      hover:bg-[#005f73]
      focus:ring-[#003E52]
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