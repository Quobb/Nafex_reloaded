/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import brandLogo from "../assets/logo.png"; // Adjust path if needed

const NavbarWithHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Track Scroll for Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="bg-burntOrange px-5 hidden lg:block">
        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <span>consultancynafex@gmail.com</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500" />
              <span>+233 0553 831 241</span>
            </a>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-300"><FaTwitter /></a>
            <a href="#" className="text-gray-300"><FaFacebookF /></a>
            <a href="#" className="text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-gray-300"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`bg-white shadow-md px-5 py-3 transition-all ${isScrolled ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={brandLogo} alt="Brand Logo" className="w-[120px]" />
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-burntOrange" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links (Mobile + Desktop) */}
          <div className={`lg:flex items-center space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
            <Link to="/" className="block lg:inline-block text-burntOrange hover:text-burtBlue">Home</Link>
            <Link to="/about" className="block lg:inline-block text-burntOrange hover:text-burtBlue ">About</Link>

            {/* Service Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="block lg:inline-block text-burntOrange hover:text-burtBlue focus:outline-none "
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services
              </button>
              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg z-10">
                  <Link to="/passport" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Passport</Link>
                  <Link to="/birth-certificate" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Birth Certificate</Link>
                  <Link to="/study-abroad" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Study Abroad</Link>
                  <Link to="/tourist-visa" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Tourist Visa</Link>
                  <Link to="/bank-statement" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Bank Statement</Link>
                  <Link to="/work-study-abroad" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Work & Study Abroad</Link>
                  <Link to="/visa-procurement" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Visa Procurement</Link>
                  <Link to="/company-registration" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Company Registration</Link>
                  <Link to="/conference-abroad" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Conference Abroad</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="block lg:inline-block text-burntOrange hover:text-burtBlue ">Contact</Link>

            {/* Search Bar */}
            <div className="relative mx-auto lg:mx-0 mt-3 lg:mt-0 w-full lg:w-auto px-4 bottom-2 ">
              <input
                className="w-full lg:w-auto form-control border border-burtBlue rounded-full py-1 px-2"
                type="text"
                placeholder="Search..."
              />
              <button
                type="button"
                className="absolute right-9 top-2 text-burntOrange"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarWithHero;
