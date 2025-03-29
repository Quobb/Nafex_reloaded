/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

function ServiceSection() {
  return (
    <div className="container-fluid service overflow-hidden pt-5 w-screen">
      <div className="container py-5 w-[90%]">
        <motion.div 
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sub-style">
            <h5 className="sub-title text-burtBlue px-3">Visa Categories</h5>
          </div>
          <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
          <p className="mb-0">We provide expert guidance for various immigration services, ensuring a smooth and hassle-free process for you.</p>
        </motion.div>
        
        <div className="row g-4">
          {[
            { img: 'img/passort.jpg', title: 'Passport', description: 'Get assistance in obtaining your passport quickly and efficiently.' },
            { img: 'img/service-2.jpg', title: 'Birth Certificate', description: 'Secure your birth certificate hassle-free with our professional services.' },
            { img: 'img/study-3.jpg', title: 'Study Abroad with Scholarship', description: 'Explore opportunities to study overseas with scholarship assistance.' },
            { img: 'img/service-1.jpg', title: 'Tourist Visa', description: 'Plan your dream trip with our seamless tourist visa application process.' },
            { img: 'img/banksatment.jpg', title: 'Bank Statement', description: 'We help you prepare the necessary bank statements for visa applications.' },
            { img: 'img/service-3.jpg', title: 'Block Account Assistance', description: 'Get support in setting up a blocked account for international studies.' },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="col-lg-6 col-xl-4" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img src={service.img} className="img-fluid w-[60vh] h-[50vh] rounded" alt={service.title} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-burntOrange text-center rounded p-3 mx-5 mb-4">
                        <a href="#" className="h4 text-white mb-0">{service.title}</a>
                      </div>
                      <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                    </div>
                    <div className="service-content bg-burntOrange pb-4">
                      <a href="#"><h4 className="text-white mb-4 py-3">{service.title}</h4></a>
                      <div className="px-4">
                        <p className="mb-4">{service.description}</p>
                        <a className="btn bg-burtBlue border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;