/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (

    <div className="container-fluid  overflow-hidden  training w-full">
      <div className="container py-5 w-[80%]">
        <div className="office pt-5">
          <motion.div
            className="section-title text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="sub-style">
              <h5 className="sub-title text-burtBlue px-3">Worldwide Offices</h5>
            </div>
            <h1 className="display-5 mb-4">Find Us Across The Globe</h1>
            <p className="mb-0">
              We are present in key locations worldwide, offering exceptional services to our clients. Connect with us at any of our offices.
            </p>
          </motion.div>

          <div className="row g-4 justify-content-center">
            {[
              { city: "Seattle, US", phone: "+1 (206) 308-9851", img: "img/office-1.jpg", address: "123 St Roots Terrace, Seattle, WA 98101, USA" },
              { city: "Memphis, US", phone: "+1 (556) 484-814", img: "img/office-2.jpg", address: "456 St Elmwood Road, Memphis, TN 38104, USA" },
              { city: "Accra, Ghana", phone: "+233 55 648 4814", img: "img/office-3.jpg", address: "789 St Independence Avenue, Accra, Ghana" },
              { city: "Ho, Ghana", phone: "+233 55 383 1241", img: "img/office-4.jpg", address: "101 St Peace Street, Ho, Ghana" },
            ].map((office, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-6 col-xl-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="office-item p-4 shadow rounded-lg bg-white">
                  <div className="office-img mb-4">
                    <img src={office.img} className="img-fluid w-100 rounded" alt={office.city} />
                  </div>
                  <div className="office-content d-flex flex-column">
                    <h4 className="mb-2">{office.city}</h4>
                    <a href={`tel:${office.phone}`} className="text-secondary fs-5 mb-2">{office.phone}</a>
                    <a href="mailto:contact@example.com" className="text-muted fs-5 mb-2">contact@example.com</a>
                    <p className="mb-0">{office.address}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default ContactSection;
