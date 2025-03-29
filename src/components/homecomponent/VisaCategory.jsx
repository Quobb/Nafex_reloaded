// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

function VisaCategory() {
  const fadeIn = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="container-fluid counter-facts w-screen pt-5">
      <div className="container py-5">
        <div className="row g-4">
          <motion.div className="col-12 col-sm-6 col-md-6 col-xl-3" initial="hidden" animate="visible" variants={fadeIn(0.1)}>
            <div className="counter">
              <div className="counter-icon">
                <i className="fa-solid fa-passport text-burntOrange"></i>
              </div>
              <div className="counter-content">
                <h3>Diverse Visa Options</h3>
                <p>Explore 31+ visa categories tailored to your needs.</p>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value burntOrange" data-toggle="counter-up">31</span>
                  <h4 className="text-burntOrange mb-0" style={{ fontWeight: 600, fontSize: "25px" }}>+</h4>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-12 col-sm-6 col-md-6 col-xl-3" initial="hidden" animate="visible" variants={fadeIn(0.3)}>
            <div className="counter">
              <div className="counter-icon">
                <i className="fa-solid fa-users text-burntOrange"></i>
              </div>
              <div className="counter-content">
                <h3>Expert Team</h3>
                <p>Our 377+ specialists are here to assist you.</p>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value" data-toggle="counter-up">377</span>
                  <h4 className="text-burntOrange mb-0" style={{ fontWeight: 600, fontSize: "25px" }}>+</h4>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-12 col-sm-6 col-md-6 col-xl-3" initial="hidden" animate="visible" variants={fadeIn(0.5)}>
            <div className="counter">
              <div className="counter-icon">
                <i className="fa-solid fa-user-check text-burntOrange"></i>
              </div>
              <div className="counter-content">
                <h3>Successful Processes</h3>
                <p>We've facilitated over 4.9K visa approvals.</p>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value" data-toggle="counter-up">4.9</span>
                  <h4 className="text-burntOrange mb-0" style={{ fontWeight: 600, fontSize: "25px" }}>K</h4>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-12 col-sm-6 col-md-6 col-xl-3" initial="hidden" animate="visible" variants={fadeIn(0.7)}>
            <div className="counter">
              <div className="counter-icon">
                <i className="fa-solid fa-handshake text-burntOrange"></i>
              </div>
              <div className="counter-content">
                <h3>High Success Rate</h3>
                <p>98% of our applicants achieve approval.</p>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value" data-toggle="counter-up">98</span>
                  <h4 className="text-burntOrange mb-0" style={{ fontWeight: 600, fontSize: "25px" }}>%</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default VisaCategory;
