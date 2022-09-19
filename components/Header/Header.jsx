import React from 'react'
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
  return <header className={`${classes.header}`}>
    <Container>
      <div className={`${classes.nav_wrapper}`}>

        {/* ======== navigation logo ==============m*/}
        <div className={`${classes.logo}`}>
          {/* <h1><span>J</span>asmeen <span>K</span>aur</h1> */}
          <h1><span>Jasmeen</span> <span></span>Kaur</h1>
        </div>


        {/* ====== nav menu ============ */}
        <div className={`${classes.naigation}`}>
          <div className={`${classes.nav_menu}`}>
            {NAV__LINK.map((item, index) => (
              <Link href={item.path} key={index}>{item.display}</Link>
            ))}

            <div className={`${classes.nav_right}`}>
              <p className='d-flex align-items-center gap-2 mb-0'>
                {" "}
                <i className="ri-phone-line"></i> +9718028724 {" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </header>
}

export default Header
