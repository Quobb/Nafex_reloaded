/* eslint-disable no-unused-vars */
import React from 'react';

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Were here to help and answer any question you might have. Reach out to us!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <i className="fas fa-phone-alt text-blue-600 text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
          {/* Email */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <i className="fas fa-envelope text-blue-600 text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-700">info@ngo.org</p>
          </div>
          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <i className="fas fa-map-marker-alt text-blue-600 text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-700">123 NGO Street, City, Country</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Subject"
              />
            </div>
            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Find Us</h2>
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="NGO Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0853258519854!2d144.9648732158689!3d-37.8080633797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5e9f57a9df%3A0xe9e3bde79c340e57!2sNGO%20Street!5e0!3m2!1sen!2sus!4v1619408280073!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
