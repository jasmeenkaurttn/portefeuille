import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return <section id='portfolio'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
            <SectionSubtitle subtitle='My Portfolio'/>
            <h4 className='mt-4'>Some of my distinguished works</h4>
        </Col>

        <Col lg='6' md='6'>
          <div>
            
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Portfolio
