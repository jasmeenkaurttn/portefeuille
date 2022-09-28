import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import PortfolioItem from './PortfolioItem'
import portfolioData from '../data/portfolio'

const Portfolio = () => {
  return <section id='portfolio'>
    <Container>
      <Row>
        <Col lg='6' md='6' className='mb-5'>
            <SectionSubtitle subtitle='My Portfolio'/>
            <h4 className='mt-4'>Some of my distinguished works</h4>
        </Col>
        <Row></Row>
        {
          portfolioData.map((item, index) => (
            <Col lg='4' md='4' key={item.id}>
              <PortfolioItem item={item}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  </section>
}

export default Portfolio
