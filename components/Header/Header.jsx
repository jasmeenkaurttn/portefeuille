import React, { useRef, useEffect } from 'react'
import { Container } from "reactstrap"
import classes from './header.module.css'
import Link from "next/link"

const NAV__LINK = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '#about',
    display: 'About'
  },
  {
    path: '#services',
    display: 'Services'
  },
  {
    path: '#portfolio',
    display: 'Portfolio'
  },
  {
    path: '#contact',
    display: 'Contact'
  },
]

const Header = () => {

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    // sticky navigation
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add(`${classes.header_shrink}`)
    } else {
      headerRef.current.classList.remove(`${classes.header_shrink}`)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])

  const toggleMenu = () => menuRef.current.classList.toggle(`${classes.menu_active}`)
  return <header className={`${classes.header}`} ref={headerRef}>
    <Container>
      <div className={`${classes.nav_wrapper}`}>

        {/* ======== navigation logo ==============m*/}
        <div className={`${classes.logo}`}>
          {/* <h1><span>J</span>asmeen <span>K</span>aur</h1> */}
          <h1><span>P</span>ortefeuille</h1>
        </div>


        {/* ====== nav menu ============ */}
        <div
          className={`${classes.navigation}`}
          ref={menuRef}
          onClick={toggleMenu}
        >
          <div className={`${classes.nav_menu}`}>
            {NAV__LINK.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.display}
              </Link>
            ))}

            <div className={`${classes.nav_right}`}>
              <p className='d-flex align-items-center gap-2 mb-0'>
                {" "}
                <i className="ri-phone-line"></i> +919718028724 {" "}
              </p>
            </div>
          </div>
        </div>

        <span className={`${classes.mobile_menu}`}>
          <i className="ri-menu-line" onClick={toggleMenu}></i>
        </span>
      </div>
    </Container>
  </header>
}

export default Header
