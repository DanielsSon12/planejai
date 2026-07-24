import type { LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost'
  icon?: LucideIcon
  // O LucideIcon é uma biblioteca de icones que temos no react, podemos instalar ela a partir de npm add install lucide-react
}

// Estilos compartilhados por todas as variantes de botão.
const baseClasses =
  'flex cursor-pointer items-center justify-center font-medium text-sm gap-2 px-4 py-3 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-80'

// Classes específicas para cada aparência disponível.
const variantClasses = {
  primary: 'bg-primary text-primary-foreground font-semibold rounded-xl',
  secondary: 'bg-secondary-button border border-border rounded-3xl',
  ghost: 'rounded-lg text-foreground',
}

export function Button({
  variant, // Define qual estilo de botão será usado.
  icon: Icon, // Renomeado para renderizar o ícone como componente.
  children, // Conteúdo exibido dentro do botão.
  className, // Classes extras passadas por quem usa o componente.
  ...props // Demais atributos nativos, como onClick e disabled.
}: ButtonProps) {
  return (
    <button
      {...props}
      // Combina estilos comuns, da variante e classes adicionais.
      className={[baseClasses, variantClasses[variant], className].join(' ')}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  )
}
