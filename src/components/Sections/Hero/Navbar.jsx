import Button from '../../Utilities/Button'

const Navbar = () => {
  const hoverStyles = 'transition hover:text-[#F8C140] hover:underline'

  const redStyle = 'text-red-500'

  return (
    <>
      <nav className="w-full py-12 flex justify-between items-center bg-[#0D4A31]">
        <img className="w-[148px] h-[22px]" src="/images/logo.png" />
        <ul className="flex items-center gap-12 text-white">
          <a className={hoverStyles} href="/">
            Home
          </a>
          <a className={hoverStyles} href="/">
            Service
          </a>
          <a className={hoverStyles} href="/">
            Insurance Services
          </a>
          <Button size="lg">Sign in</Button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
