import { Fragment } from 'react'
import Hero from '../components/UI/Hero'
import Services from '../components/UI/Services'
import About from '../components/UI/About'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
    </Fragment>
  )
}
