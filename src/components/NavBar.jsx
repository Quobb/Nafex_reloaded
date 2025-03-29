import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Track Scroll and Make Navbar Sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full bg-white shadow-sm transition-all ${isScrolled ? "fixed top-0 left-0 w-full shadow-md z-50" : ""}`}>
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/img/brand-logo.png" className="h-10 mr-2" alt="Travisa Logo" />
            <h1 className="text-2xl font-bold text-secondary">Travisa</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-500 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          <i className="fas fa-bars text-xl"></i>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-primary font-medium hover:text-secondary transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-secondary transition-colors">About</Link>
            <Link to="/study-abroad" className="text-gray-700 hover:text-secondary transition-colors">Study Abroad</Link>
            <Link to="/visa-services" className="text-gray-700 hover:text-secondary transition-colors">Visa Services</Link>
            <Link to="/birth-certification" className="text-gray-700 hover:text-secondary transition-colors">Birth Certification</Link>
            <Link to="/contact" className="text-gray-700 hover:text-secondary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4 ml-6">
            <button className="p-2 rounded-md bg-primary text-white hover:bg-secondary transition-colors" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
            <Link to="/quote" className="bg-primary text-white px-4 py-2 rounded-full border border-secondary hover:bg-secondary transition-colors">
              Get A Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-primary font-medium py-2">Home</Link>
            <Link to="/about" className="text-gray-700 py-2">About</Link>
            <Link to="/study-abroad" className="text-gray-700 py-2">Study Abroad</Link>
            <Link to="/visa-services" className="text-gray-700 py-2">Visa Services</Link>
            <Link to="/birth-certification" className="text-gray-700 py-2">Birth Certification</Link>
            <Link to="/contact" className="text-gray-700 py-2">Contact</Link>
          </div>
          <div className="flex space-x-4 mt-6">
            <button className="p-2 rounded-md bg-primary text-white" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
            <Link to="/quote" className="flex-1 bg-primary text-white px-4 py-2 rounded-full border border-secondary text-center">
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
