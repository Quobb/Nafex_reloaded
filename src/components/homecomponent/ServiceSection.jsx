/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

function ServiceSection() {
  return (
    <motion.div 
      className="container-fluid service overflow-hidden pt-5 w-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container py-5">
        <motion.div 
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sub-style">
            <h5 className="sub-title text-burtBlue px-3">Visa Categories</h5>
          </div>
          <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
          <p className="mb-0">We provide expert guidance for various immigration services, ensuring a smooth and hassle-free process for you.</p>
        </motion.div>
        
        <motion.div 
          className="row g-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="service-item">
                <div className="service-inner">
                  <motion.div 
                    className="service-img"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={service.img} className="img-fluid w-100 rounded h-[40vh]" alt={service.title} />
                  </motion.div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <motion.div 
                        // className="bg-burntOrange text-center rounded p-3 mx-5 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <a href="#" className="h4 text-white mb-0">{service.title}</a>
                      </motion.div>
                      <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                    </div>
                    <motion.div 
                      className="service-content bg-burntOrange pb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                      <a href="#"><h4 className="text-white mb-4 py-3">{service.title}</h4></a>
                      <div className="px-4">
                        <p className="mb-4">{service.description}</p>
                        <a className="btn bg-burtBlue border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ServiceSection;
