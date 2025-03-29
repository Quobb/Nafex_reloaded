/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarWithHero from '../components/NavbarWithHero';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import BirthCert from '../screens/BirthCert';
import VisaServices from '../screens/VisaServices';
import StudyAbrod from '../screens/StudyAbrod';

import BankStatement from '../screens/BankStatement';
import BirthCertificate from '../screens/BirthCertificate';
import BlockAccount from '../screens/BlockAccount';
import ConferenceAbroad from '../screens/ConferenceAbroad';
import FlightReservation from '../screens/FlightReservation';
import InivitationLetter from '../screens/InivitationLetter';
import TouristVisa from '../screens/TouristVisa';
import VisaProcument from '../screens/VisaProcument';
import WorkStudy from '../screens/WorkStudy';
import Passport from '../screens/Passport';
import CompanyRegistration from '../screens/CompanyRegistration';
import AmericanLotery from '../screens/AmericanLotery';
import Services from '../screens/Services';


const AppRouter = () => {
  return (
    <Router>
      <NavbarWithHero />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/study-abroad" element={<StudyAbrod />} />
        <Route path="/visa-services" element={<VisaServices />} />
        <Route path="/birth-certification" element={<BirthCert />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/american-lottery" element={<AmericanLotery />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/bank-statement" element={<BankStatement />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/service" element={<Services />} />
        <Route path="/birth-certificate" element={<BirthCertificate />} />
        <Route path="/block-account" element={<BlockAccount />} />
        <Route path="/conference-abroad" element={<ConferenceAbroad />} />
        <Route path="/flight-reservation" element={<FlightReservation />} />
        <Route path="/invitation-letter" element={<InivitationLetter />} />
        <Route path="/tourist-visa" element={<VisaServices />} />
        <Route path="/visa-procurement" element={<VisaProcument />} />
        <Route path="/work-study-abroad" element={<WorkStudy />} />
        {/* Fallback route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
