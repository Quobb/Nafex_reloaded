// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';


const TrainingSection = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  const services = [
    {name:'Passport',image: "/img/passort.jpg"},
    {name:'Birthcert',image: "/img/training-1.jpg"},
    {name:'Study Abroad with Scholarship',image: "/img/country-3.jpg"},
    {name:'Tourist Visa',image: "/img/austrial-visa-2.jpg"},
    {name:'Bank Statement',image: "/img/banksatment.jpg"},
    {name:'Block Account Assistance',image: "/img/training-3.jpg"},
    {name:'Tourist Visa Assistance',image: "/img/block.jpg"}, 
    {name:'Work & Study Abroad',image: "/img/work.jpg"},
    {name:'Flight Reservation',image: "/img/training-4.jpg"},
    {name:'Visa Procurement',image: "/img/canada-visa.jpg"},
    {name:'Company Registration',image: "/img/register.jpg"}, 
    {name:'Invitation Letter',image: "/img/banksatment.jpg"},
    
  ];

  const itemsPerPage = 4;  // Adjust based on the number of items to display per page
  const pages = Math.ceil(services.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  // Auto Page Change with Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prevPage => (prevPage + 1) % pages);
    }, 5000); // Change the page every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [pages]);

  // Slice the services array based on the current page and items per page
  const currentServices = services.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="container-fluid training overflow-hidden bg-light">
      <div className="container py-5">
        <div className="section-title text-center mb-5" style={fadeIn}>
          <h5 className="sub-title text-burtBlue px-3">CHECK OUR TRAINING</h5>
          <h1 className="display-5 mb-4">Get the Best Coaching Service Training with Our nafex</h1>
          <p className="mb-0">Lorem ipsum dolor sit amet...</p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="row g-4">
          <div className="col-12">
            <div style={{ overflowX: 'auto', padding: '20px 0' }}>
              <div className="d-flex">
                {/* Service Items with Transition and Animation */}
                {currentServices.map((service, index) => (
                  <animated.div
                    key={index}
                    style={{
                      minWidth: '300px', 
                      marginRight: '20px', 
                      opacity: fadeIn.opacity, 
                      transform: fadeIn.transform
                    }}
                  >
                    <div className="training-item">
                      <div className="training-inner">
                        <img
                          src={service.image} 
                          className="img-fluid w-[60vh] h-[40vh] rounded" 
                          alt="Image"
                        />
                        <div className="training-title-name">
                          <a href="#" className="h4 text-white mb-0">{service.name}</a>
                        </div>
                      </div>
                      <div className="training-content bg-secondary rounded-bottom p-4">
                        <a href="#">
                        <h4 className="text-white">{service.name} Coaching</h4>
                        </a>
                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right"></i></a>
                      </div>
                    </div>
                  </animated.div>
                ))}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default TrainingSection;
