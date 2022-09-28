import React from 'react'
import { Container, Row, Col } from "reactstrap"
import classes from './footer.module.css'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
  return <footer>
    <Container>
      <Row>
        {/* --------- footer  ----------- */}
        <Col lg='6'>
          <div className={`${classes.footer_creator}`}>
            <h6> Copyright &copy; {year} - Developed by Jasmeen Kaur. &nbsp;
             All right reserved. </h6>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
