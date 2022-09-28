import { Fragment } from 'react'
import Hero from '../components/UI/Hero'
import Services from '../components/UI/Services'
import About from '../components/UI/About'
import Portfolio from '../components/UI/Portfolio'
import Testimonial from '../components/UI/Testimonial'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
    </Fragment>
  )
}
