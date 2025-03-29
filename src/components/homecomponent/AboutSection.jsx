import { FaMapMarkedAlt, FaPassport, FaTicketAlt, FaCheckCircle, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="img/about-2.png" className="w-full" alt="About" />
              <img
                src="img/about-3.jpg"
                className="w-full border-b-4 border-primary rounded-t-[300px]"
                alt="About"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h5 className="text-secondary font-semibold uppercase">About the company</h5>
            <h1 className="text-4xl font-bold my-4">We’re Trusted Immigration Consultant Agency.</h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto consectetur iusto perferendis blanditiis assumenda dignissimos...
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <FaMapMarkedAlt className="text-secondary text-3xl" />
                <h5 className="ml-4">Best Immigration Resources</h5>
              </div>
              <div className="flex items-center">
                <FaPassport className="text-secondary text-3xl" />
                <h5 className="ml-4">Return Visas Available</h5>
              </div>
            </div>

            {/* Experience */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white text-center p-4 rounded-lg shadow-md">
                <FaTicketAlt className="text-burtBlue text-4xl mb-2" />
                <h1 className="text-5xl font-bold">34</h1>
                <p className="text-gray-500">Years of Experience</p>
              </div>

              {/* Benefits */}
              <div className="col-span-2 space-y-3">
                <p className="text-burtBlue flex items-center">
                  <FaCheckCircle className="text-secondary mr-2" /> Offer 100% Genuine Assistance
                </p>
                <p className="text-burtBlue flex items-center">
                  <FaCheckCircle className="text-secondary mr-2" /> It’s Faster & Reliable Execution
                </p>
                <p className="text-burtBlue flex items-center">
                  <FaCheckCircle className="text-secondary mr-2" /> Accurate & Expert Advice
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center mt-6">
              <div className="relative p-4">
                <FaPhoneAlt className="text-burtBlue text-3xl" />
                <div className="absolute top-0 left-6">
                  <FaCommentDots className="text-secondary" />
                </div>
              </div>
              <div>
                <span className="text-burtBlue block">Have any questions?</span>
                <span className="text-secondary font-bold text-xl tracking-widest">
                  Free: +0123 456 7890
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
