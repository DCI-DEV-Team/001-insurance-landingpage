const Button = ({ children, variant, size, ...props }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secundary':
        return 'bg-[#0D4A31] text-white'
      case 'submit':
        return 'bg-[#6C74F4] hover:bg-[#5B63D3] text-white'

      default:
        return 'bg-[#F8C140] hover:bg-[#F8B040] text-[#2B2B31]'
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'lg':
        return 'text-lg px-8'
      case 'xl':
        return 'text-md font-medium py-6 px-10'
      default:
        return 'text-md'
    }
  }

  const buttonStyles = `rounded-md py-2 px-4 transition ${getVariantStyles()} ${getSizeStyles()}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

export default Button
