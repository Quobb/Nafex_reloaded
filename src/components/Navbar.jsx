/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsSubDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto border-b">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold">
            THE<span className="text-blue-500">Mosque</span>
          </NavLink>

          {/* Toggle Button */}
          <button
            className="block lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-controls="navbarCollapse"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars text-blue-500"></span>
          </button>

          {/* Navigation Links */}
          <div
            className={`lg:flex items-center bg-white lg:bg-transparent lg:static absolute top-full left-0 w-full lg:w-auto px-6 lg:px-0 transition-all ${
              isCollapsed ? 'hidden' : 'block'
            }`}
            id="navbarCollapse"
          >
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : 'text-gray-700'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/study-abroad"
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : 'text-gray-700'
                  }`
                }
              >
                Study Abroad
              </NavLink>
              <NavLink
                to="/visa-services"
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : 'text-gray-700'
                  }`
                }
              >
                Visa Services
              </NavLink>
              <NavLink
                to="/birth-certification"
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : 'text-gray-700'
                  }`
                }
              >
                Birth Certification
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : 'text-gray-700'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : 'text-gray-700'
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-lg font-medium text-gray-700 hover:text-blue-500"
                >
                  Services
                  <svg className="w-3 h-3 ml-2" viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-md w-48">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Passport
                        </a>
                      </li>
                      <li className="relative">
                        <button
                          onClick={() => setIsSubDropdownOpen(!isSubDropdownOpen)}
                          className="flex justify-between w-full px-4 py-2 hover:bg-gray-100"
                        >
                          Other Services
                          <svg className="w-3 h-3 ml-2" viewBox="0 0 10 6">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {/* Sub Dropdown */}
                        {isSubDropdownOpen && (
                          <div className="absolute left-full top-0 mt-0 ml-2 bg-white rounded-lg shadow-md w-48">
                            <ul className="py-2 text-sm text-gray-700">
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Work & Study Abroad
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Flight Reservation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Visa Procurement
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Birth Certificate
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
