import React from 'react'
import classes from '../../styles/portfolio-item.module.css'
import Image from "next/image"
import Link from "next/link"

const PortfolioItem = (props) => {
  const { title, img, githubUrl, keyword } = props.item
  return (
    <div className={`${classes.portfolio_item}`}>
      <div className='bg-transparent'>
        <h6>{title}</h6>
        {
          keyword.map((item, index) => (
            <span className={`${classes.portfolio_keyword}`} key={index}>
              {item}
            </span>
          ))
        }
      </div>

      <div className={`${classes.portfolio_img}`}>
        <Image alt="portfolio-img" src={img} width='380' height='250' />
      </div>

      <div className={`${classes.portfolio_url} bg-transparent`}>
        <button className={`${classes.portfolio_btn} primary_btn`}>
          {/* we can use passHref (which just passes the href to the immediate child) */}

          <Link href={githubUrl} passHref>
            <a target="_blank">
              <i className="ri-link-m ri-lg"></i>
            </a>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PortfolioItem
