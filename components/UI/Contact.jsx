import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from "next/link"
import SectionSubtitle from './SectionSubtitle'
import Image from "next/image"
import classes from '../../styles/contact.module.css'
import contactImg from '../../public/images/contact.png'

const Contact = () => {
  return <section id="contact" className={`${classes.contact}`}>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <SectionSubtitle subtitlle="Conatct me" />
          <h3 className='mt-4 mb-4'>Contact with me</h3>

          <h2>
            We&apos;d Love To Hear From You
          </h2>

          <p>Whether you&apos;are curious about features, or even more &mdash; ready to answer all your questions.</p>
          <ul className={`${classes.contact_info_list}`}>
            <li className={`${classes.contact_info_item}`}>
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <p>Jasmeen Kaur - New Delhi</p>
            </li>
            <li className={`${classes.contact_info_item}`}>
              <span>
                <i className="ri-mail-line"></i>
              </span>
              <p>jasmeen7202@gmail.com</p>
            </li>
            <li className={`${classes.contact_info_item}`}>
              <span>
                <i className="ri-phone-line"></i>
              </span>
              <p>+919718028724</p>
            </li>
          </ul>

          <div className={`${classes.social_links}`}>
            <Link href='https://github.com/jasmeenkaurttn' passHref>
              <a target="_blank">
                <i className="ri-github-fill"></i>
              </a>
            </Link>

            <Link href='https://leetcode.com/jasmeen7202/' passHref>
              <a target="_blank">
                <i className="ri-code-fill"></i>
              </a>
            </Link>

            <Link href='https://www.linkedin.com/in/jasmeen-kaur-1b0b57201' passHref>
              <a target="_blank">
              <i className="ri-linkedin-box-fill"></i>
              </a>
              </Link>
          </div>
        </Col>

        <Col lg='6' md='6' className={`${classes.contact_img}`}>
          <Image alt="contact-me" src={contactImg} />
        </Col>
      </Row>
    </Container>
  </section>
}

export default Contact
