import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from "next/link"
import SectionSubtitle from './SectionSubtitle'
import Image from "next/image"

import img01 from '../../public/images/img01.jpg'
import img02 from '../../public/images/img02.jpg'
import img03 from '../../public/images/img03.jpg'
import img04 from '../../public/images/img04.jpg'
import img05 from '../../public/images/img05.jpg'

import classes from '../../styles/about.module.css'

const About = () => {
  return <section>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <SectionSubtitle subtitle='About me' />
          <h3 className='mt-4'>I&apos;m a Software Engineer at TTN</h3>
          {/* <h3></h3> */}
          <p>Have experience in JavaScript, React JS, Bootstrap, Node js. I joined TTN as a Fresher through Bootcamp February 2022. Worked on Frontend technologies by making personal projects. Besides that, I also have interests in problem solving related to Data Structure Algorithms.</p>

          <div className='d-flex align-items-center gap-5'>
            {/* to maintain rows */}
            <div>
              <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal'>
                <span className={`${classes.about_icon
                  }`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Problem Solving
              </h6>

              <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal'>
                <span className={`${classes.about_icon
                  }`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Teamwork
              </h6>
            </div>

            <div>
              <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal'>
                <span className={`${classes.about_icon
                  }`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Adapability
              </h6>

              <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal'>
                <span className={`${classes.about_icon
                  }`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Positive Attitude
              </h6>
            </div>
          </div>

          <div className='mt-5'>
            <button className='primary_btn'><Link href='#portfolio'>My Portfolio</Link></button>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className='d-flex gap-4 justify-content-end'>

            <div className='d-flex flex-column mb-3'>
              <div className={`${classes.about_image} ${classes.about_image_box}`}>
                <Image src={img01} alt='about-img' />
              </div>
              <div className={`${classes.about_image} ${classes.about_image_box}`}>
                <Image src={img03} alt='about-img' />
              </div>
              <div className={`${classes.about_image} ${classes.about_image_box}`}>
                <Image src={img05} alt='about-img' />
              </div>
            </div>

            <div className='d-flex flex-column mb-3'>
              <div className={`${classes.about_image} ${classes.about_image_box}`}>
                <Image src={img02} alt='about-img' />
              </div>
              <div className={`${classes.about_image} ${classes.about_image_box}`}>
                <Image src={img04} alt='about-img' />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default About
