/* eslint-disable no-unused-vars */
import React from 'react';
import './input.css';
import '../style.css'
import CardScreen from '../components/homecomponent/CardScreen';
// import MainPage from '../components/homecomponent/MainPage';
import Footer from '../components/homecomponent/Footer';
import OurProject from '../components/homecomponent/OurProject';
import Carousel from '../components/homecomponent/Carousel';
import AboutSection from '../components/homecomponent/AboutSection';
import Testimonials from '../components/homecomponent/Testimonials';
import TrainingSection from '../components/homecomponent/TrainingSection';
import ContactSection from '../components/homecomponent/ContactSection';
import VisaCategory from '../components/homecomponent/VisaCategory';
import ServiceSection from '../components/homecomponent/ServiceSection';
import FeatureSection from '../components/homecomponent/FeatureSection';
import CountriesWeOffer from '../components/homecomponent/CountriesWeOffer';
function Home() {
  return (
    <>
    {/* <MainPage /> */}
    <Carousel />
    <VisaCategory />
    <ServiceSection />
    <FeatureSection />
    <CountriesWeOffer />
    <Testimonials />
    <TrainingSection />
    <ContactSection />
    <Footer />
    <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>   
    </>
  );
}

export default Home;
