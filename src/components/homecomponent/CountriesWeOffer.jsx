/* eslint-disable no-unused-vars */
import React from 'react';

const CountriesWeOffer = () => {
  return (
    <div className="container-fluid country overflow-hidden py-5">
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: '70px' }}>
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
          </div>
          <h1 className="display-5 mb-4">Visa Services for the Following Countries</h1>
          <p className="mb-0">
            We provide expert visa assistance for various countries worldwide. Whether you're traveling for tourism, study, work, or immigration, our experienced consultants will guide you through the application process and ensure a smooth experience. Explore our services for the countries listed below.
          </p>
        </div>
        <div className="row g-4 text-center">
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src="img/country-1.jpg" className="img-fluid w-100 rounded" alt="Brazil" />
              </div>
              <div className="country-flag">
                <img src="img/brazil.jpg" className="img-fluid rounded-circle" alt="Brazil Flag" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">
                  Brazil
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src="img/country-2.jpg" className="img-fluid w-100 rounded" alt="India" />
              </div>
              <div className="country-flag">
                <img src="img/india.jpg" className="img-fluid rounded-circle" alt="India Flag" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">
                  India
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src="img/country-3.jpg" className="img-fluid w-100 rounded" alt="New York" />
              </div>
              <div className="country-flag">
                <img src="img/usa.jpg" className="img-fluid rounded-circle" alt="USA Flag" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">
                  USA
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src="img/country-4.jpg" className="img-fluid w-100 rounded" alt="Italy" />
              </div>
              <div className="country-flag">
                <img src="img/italy.jpg" className="img-fluid rounded-circle" alt="Italy Flag" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">
                  Italy
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">
              More Countries
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesWeOffer;
