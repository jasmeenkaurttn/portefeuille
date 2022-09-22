import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import Image from "next/image"
import Link from "next/link"
import MyPhoto from '../../public/images/myPhoto.jpg'
import classes from '../../styles/hero.module.css'

const Hero = () => {
  return <section className={`${classes.mySelf}`}>
    <Container>
      <Row>

        {/* ------- myPhoto content */}
        <Col lg='6' md='6'>
          <div className={`${classes.myIntro}`}>
            <SectionSubtitle subtitle="Hello" />
            <h2 className='mt-3 mb-3'>I&apos;m Jasmeen Kaur</h2>
            <h5 className='mb-4'>Software Engineer</h5>
            <p>
              Working as a React JS Developer at To The New from last 7months. Experience in JavaScript, React JS, Jquery - Learning Next.js
            </p>

            <div className='mt-5'>
              <button className='primary_btn'><Link href='#'>Hire me</Link></button>
              <button className='secondary_btn'><Link href='#'>Download CV</Link></button>
            </div>
          </div>
        </Col>

        {/* ------- myPhoto image */}
        <Col lg='6' md='6'>
          <div className={`${classes.myImage} text-end`}>
            <Image alt='my-image' src={MyPhoto} width='300' height='300' />

            <div className={`${classes.mySkills}`}>
              <h6>Skills</h6>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
            </div>

            <div className={`${classes.myExperience} d-flex align-items-center gap-3`}>
              <span><i className="ri-lightbulb-flash-line"></i></span>
              <div className='bg-transparent'>
                <h6>Experience</h6>
                <h5 className='mb-0'>1 Year</h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Hero
