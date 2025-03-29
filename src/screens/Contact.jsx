/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/homecomponent/Footer'
import MainPage from '../components/homecomponent/MainPage'
import ContactUs from '../components/homecomponent/ContactUs'
import Carousel from '../components/homecomponent/Carousel'
import CountriesWeOffer from '../components/homecomponent/CountriesWeOffer'
export default function Contact() {
  return (
    <>
      <Carousel />
      <ContactUs />
      <CountriesWeOffer />
      <Footer />
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>   
    </>
  )
}
