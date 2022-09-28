import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from "next/link"
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/contact.module.css'

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
              <p>jasmeen2000@gmail.com</p>
            </li>
            <li className={`${classes.contact_info_item}`}>
              <span>
              <i className="ri-phone-line"></i>
              </span>
              <p>+919718028724</p>
            </li>
          </ul>

          <div className={`${classes.social_links}`}>
            <Link href='#'><i className="ri-github-fill"></i></Link>
            <Link href='#'><i className="ri-facebook-box-fill"></i></Link>
            <Link href='#'><i className="ri-linkedin-box-fill"></i></Link>
            <Link href='#'><i className="ri-instagram-line"></i></Link>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Contact
