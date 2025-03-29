/* eslint-disable no-unused-vars */
import React from 'react';
import '../Navbar.css';

function AboutPage() {
  return (
    <div className="bg-gray-100 h-full min-h-screen w-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Travel Agency</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your trusted partner for hassle-free passport applications, visa processing, travel letters, and more.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Passport Assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/img/passort.jpg" alt="Passport" className="w-full h-56 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passport Assistance</h3>
            <p className="text-gray-600">We help you obtain new passports, renewals, and handle lost passport issues efficiently.</p>
          </div>

          {/* Visa Processing */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/img/passport-4.jpg" alt="Visa" className="w-full h-56 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
            <p className="text-gray-600">From tourist visas to work permits, we streamline the process to get you approved faster.</p>
          </div>

          {/* Travel Letters */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/img/Visaletter.jpg" alt="Travel Letter" className="w-full h-56 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Travel Letters</h3>
            <p className="text-gray-600">We provide official travel letters to support your visa or travel applications.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            We offer a fast, reliable, and customer-focused service to ensure a stress-free travel experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our team has years of experience handling travel documents.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">We ensure quick turnaround times to meet your travel deadlines.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">We’re available around the clock to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Ready to start your journey? Contact us today and let’s make your travel plans a reality.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default AboutPage;
