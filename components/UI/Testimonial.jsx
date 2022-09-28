import React from 'react'
import { Container, Row, Col } from "reactstrap"
import Image from 'next/image'
import SectionSubtitle from './SectionSubtitle'
import network from '../../public/images/Connected world.png'
import Slider from 'react-slick'
import classes from '../../styles/testimonial.module.css'

const Testimonial = () => {
  // settings for slider using react slick
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slideToShow: 1,
    slideToScroll: 1,
  }
  return <section>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <Image alt='network-img' src={network} width='400' height='400' />
        </Col>

        <Col lg='6' md='6'>
          <SectionSubtitle subtitle='Testimonials' />
          <h4 className='mt-4 mb-5'>What my client says</h4>

          <Slider {...settings}>
            <div className={`${classes.testimonial_item}`}>
              <div className={`${classes.testimonial_client}`}>
                <Image alt='client-img' src='/images/female employee.jpg' width='50' height='50' className='rounded-1' />

                <div>
                  <h6>Prabhneet Kaur</h6>
                  <h6>Software Engineer</h6>
                </div>
              </div>

              <p>
                Commendable work! You will get the best of what you put in. Had a great experience working with the team. Thanks a lot.
              </p>
            </div>

            <div className={`${classes.testimonial_item}`}>
              <div className={`${classes.testimonial_client}`}>
                <Image alt='client-img' src='/images/male employee.jpg' width='50' height='50' className='rounded-1' />

                <div>
                  <h6>Hemant Kumar</h6>
                  <h6>DevOps Engineer</h6>
                </div>
              </div>

              <p>
                Great work! You deserve a pat on the back for putting in efforts for delivering the product timely. Thank you team for such an outstanding job.
              </p>
            </div>



            <div className={`${classes.testimonial_item}`}>
              <div className={`${classes.testimonial_client}`}>
                <Image alt='client-img' src='/images/female employee image.jpg' width='55' height='50' className='rounded-1' />

                <div>
                  <h6>Sakshi Grover</h6>
                  <h6>Software Consultant</h6>
                </div>
              </div>

              <p>
                You did an amazing job on project. It was a pleasure working with you.
              </p>  
            </div>

          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Testimonial
