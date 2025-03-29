import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { motion } from 'framer-motion';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };

  return (
    <motion.div 
      className="container-fluid testimonial overflow-hidden pb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container py-5">
        <motion.div 
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="sub-style">
            <h5 className="sub-title text-burtBlue px-3">OUR CLIENTS REVIEWS</h5>
          </div>
          <h1 className="display-5 mb-4">What Our Clients Say</h1>
          <p className="mb-0">
            Our clients appreciate our commitment to excellence and personalized service. Here's what they have to say about us.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
            <div className="testimonial-item">
              <div className="testimonial-content p-4 mb-5">
                <p className="fs-5 mb-0">
                  "The team exceeded my expectations with their professionalism and attention to detail. Highly recommended!"
                </p>
                <div className="d-flex justify-content-end">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-secondary"></i>
                  ))}
                </div>
              </div>
              <div className="d-flex">
                <div className="rounded-circle me-4" style={{ width: '100px', height: '100px' }}>
                  <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="client" />
                </div>
                <div className="my-auto">
                  <h5>John Doe</h5>
                  <p className="mb-0">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content p-4 mb-5">
                <p className="fs-5 mb-0">
                  "Exceptional service! They made the entire process seamless and stress-free. I couldn't be happier."
                </p>
                <div className="d-flex justify-content-end">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-secondary"></i>
                  ))}
                </div>
              </div>
              <div className="d-flex">
                <div className="rounded-circle me-4" style={{ width: '100px', height: '100px' }}>
                  <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="client" />
                </div>
                <div className="my-auto">
                  <h5>Jane Smith</h5>
                  <p className="mb-0">Marketing Specialist</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
