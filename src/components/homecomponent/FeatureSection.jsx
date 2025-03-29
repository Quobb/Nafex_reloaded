/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

function FeatureSection() {
  return (
    <motion.div 
      className="container-fluid features overflow-hidden pt-5 w-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div 
          className="section-title text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="sub-style">
            <h5 className="sub-title text-burtBlue px-3">Why Choose Us</h5>
          </div>
          <h1 className="display-5 mb-4">We Provide Customized Services Tailored to Your Needs</h1>
          <p className="mb-0">
            Our solutions are designed to meet your specific requirements, ensuring efficiency, affordability, and reliability.
          </p>
        </motion.div>
        <div className="row g-4 justify-content-center text-center">
          {[
            { title: "Cost-Effective", icon: "fa-dollar-sign", text: "Affordable solutions designed to maximize value without compromising quality." },
            { title: "Visa Assistance", icon: "fab fa-cc-visa", text: "Expert guidance to streamline the visa application and approval process." },
            { title: "Faster Processing", icon: "fa-atlas", text: "Efficient handling to ensure quick and hassle-free service delivery." },
            { title: "Direct Interviews", icon: "fa-users", text: "Get direct access to interviews with top employers in your industry." }
          ].map((item, index) => (
            <motion.div 
              className="col-md-6 col-lg-6 col-xl-3"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="feature-item text-center p-4"
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div 
                  className="feature-icon p-3 mb-4"
                  whileHover={{ rotate: 20 }}
                >
                  <i className={`fas ${item.icon} fa-4x text-burtBlue`}></i>
                </motion.div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="mb-3">{item.text}</p>
                  <motion.a 
                    className="btn btn-secondary rounded-pill" 
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Read More<i className="fas fa-arrow-right ms-2"></i>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
          <motion.div 
            className="col-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.a 
              className="btn btn-primary border-secondary rounded-pill py-3 px-5" 
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              More Features
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeatureSection;
