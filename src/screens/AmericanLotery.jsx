/* eslint-disable no-unused-vars */
import React from 'react'
import './input.css';
import '../style.css'
import Footer from '../components/homecomponent/Footer'
import Testimonials from '../components/homecomponent/Testimonials';
import CountriesWeOffer from '../components/homecomponent/CountriesWeOffer';
import FeatureSection from '../components/homecomponent/FeatureSection';
function AmericanLotery() {
  return (
    <>
      
    
      <FeatureSection />
      <CountriesWeOffer />
      <Testimonials />

      <Footer />
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>   
    </>
  )
}

export default AmericanLotery
