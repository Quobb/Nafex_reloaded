import React from 'react'

function Topbar() {
  return (
    <div className="hidden lg:block w-full bg-primary px-5 py-2">
    <div className="flex flex-wrap items-center">
      {/* Contact Info */}
      <div className="w-full lg:w-5/12 text-center lg:text-left mb-4 lg:mb-0">
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a 
            href="mailto:Example@gmail.com" 
            className="text-gray-500 hover:text-gray-300 flex items-center transition-colors "
          >
            <i className="fas fa-envelope text-secondary mr-2"></i>
            Example@gmail.com
          </a>
          <a 
            href="tel:+01234567890" 
            className="text-gray-500 hover:text-gray-300 flex items-center transition-colors"
          >
            <i className="fas fa-phone-alt text-secondary mr-2"></i>
            +01234567890
          </a>
        </div>
      </div>
      
      {/* Social Icons */}
      <div className="w-full lg:w-3/12 text-center mb-4 lg:mb-0">
        <div className="flex items-center justify-center h-[45px] gap-2">
          {[
            { icon: 'twitter', url: '#' },
            { icon: 'facebook-f', url: '#' },
            { icon: 'linkedin-in', url: '#' },
            { icon: 'instagram', url: '#' },
            { icon: 'youtube', url: '#' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition-colors"
              aria-label={`${social.icon} social link`}
            >
              <i className={`fab fa-${social.icon} text-secondary`}></i>
            </a>
          ))}
        </div>
      </div>
      
      {/* Help Links */}
      <div className="w-full lg:w-4/12 text-center lg:text-right">
        <div className="flex items-center justify-center lg:justify-end h-[45px]">
          {['Help', 'Support', 'Contact'].map((link, index) => (
            <div key={link} className="flex items-center">
              {index > 0 && <span className="mx-1">/</span>}
              <a 
                href="#" 
                className="text-gray-500 hover:text-gray-300 px-1 transition-colors"
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Topbar
