/* eslint-disable no-unused-vars */
import React from 'react'
import MainPage from '../components/homecomponent/MainPage'
import AboutPage from '../components/aboutComponentt/AboutPage'
import Footer from '../components/homecomponent/Footer'
import Carousel from '../components/homecomponent/Carousel'
import CountriesWeOffer from '../components/homecomponent/CountriesWeOffer'
function About() {
  return (
    <>
      <Carousel />
      <AboutPage />
      <CountriesWeOffer />
      <Footer />

    </>
  )
}

export default About
