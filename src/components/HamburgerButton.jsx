
export const HamburgerButton = ({toggleMobileMenu, isOpen}) => {
  return (
    <button
    onClick={toggleMobileMenu}
    className={`z-30 block md:hidden focus:outline-none hamburger ${isOpen ? 'open' : ''}`}
>
    <span className='hamburger-top'></span>
    <span className='hamburger-middle'></span>
    <span className='hamburger-bottom'></span>
</button>
  )
}
