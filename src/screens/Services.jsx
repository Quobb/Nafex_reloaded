/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/homecomponent/Footer'
import Testimonials from '../components/homecomponent/Testimonials';
import CountriesWeOffer from '../components/homecomponent/CountriesWeOffer';
import ServiceSection from '../components/homecomponent/ServiceSection';
import TrainingSection from '../components/homecomponent/TrainingSection';
import ContactSection from '../components/homecomponent/ContactSection';
function Services() {
  return (
    <div className="w-[100%] bg-white ">
         <ServiceSection />
        <TrainingSection />
         <CountriesWeOffer />
        <Testimonials />
        <ContactSection />
        <Footer />
        <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>   
    </div>
  )
}

export default Services
