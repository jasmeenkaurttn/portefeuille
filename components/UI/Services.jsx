import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/services.module.css'
import ServicesItem from './ServicesItem'

const Services = () => {
  return <section id="services">
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className={`${classes.services_container}`}>
            <div>
              <ServicesItem title='Web Developemnt' icon='ri-computer-line' />
              <ServicesItem title='Database Management' icon='ri-database-2-fill' />
            </div>
            <ServicesItem title='Full Stack Developemnt' icon='ri-code-s-slash-line' />
          </div>
        </Col>
        <Col lg='6' md='6'>
          <SectionSubtitle subtitle='What I do'/>
          <h3 className='mb-0 mt-4'>Better Design</h3>
          <h3 className='mb-0'>Better Experience</h3>
          <h3 className='mb-4'>Making people's live simple.</h3>
          <p className='mt-2'>
            Design is not what it looks like and feels like. Design is how it works. Design is creativity with strategy. Serving our clients better with good quality work. Building websites that makes a good first impression...
          </p>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Services
