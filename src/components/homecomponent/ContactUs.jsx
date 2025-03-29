import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.');
            return;
        }

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
            .then(() => {
                setIsSubmitted(true);
                setError('');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => setError('Failed to send message. Try again.'));
    };

    return (
        <div className="container-fluid contact overflow-hidden py-5">
            <div className="container py-5 w-[80%]">
                <div className="row g-5 mb-5">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary pe-3">Quick Contact</h5>
                        </div>
                        <h1 className="display-5 mb-4">Get in Touch with Us</h1>
                        <p className="mb-5">We are here to help! If you have any questions, feel free to reach out to us. Our team is ready to assist you.</p>
                        <div className="d-flex border-bottom mb-4 pb-4">
                            <i className="fas fa-map-marked-alt fa-4x text-primary bg-light p-3 rounded"></i>
                            <div className="ps-3">
                                <h5>Location</h5>
                                <p>123, First Floor, 123 St Roots Terrace, Los Angeles 90010 USA</p>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-xl-6">
                                <div className="d-flex">
                                    <i className="fas fa-tty fa-3x text-primary"></i>
                                    <div className="ps-3">
                                        <h5 className="mb-3">Quick Contact</h5>
                                        <div className="mb-3">
                                            <h6 className="mb-0">Phone:</h6>
                                            <a href="#" className="fs-5 text-primary">+233 0553 831 241</a>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="mb-0">Email:</h6>
                                            <a href="#" className="fs-5 text-primary">consultancynafex@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="d-flex">
                                    <i className="fas fa-clone fa-3x text-primary"></i>
                                    <div className="ps-3">
                                        <h5 className="mb-3">Opening Hours</h5>
                                        <div className="mb-3">
                                            <h6 className="mb-0">Monday - Friday:</h6>
                                            <a href="#" className="fs-5 text-primary">09:00 AM to 07:00 PM</a>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary pe-3">Let’s Connect</h5>
                        </div>
                        <h1 className="display-5 mb-4">Send Us a Message</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" id="message" name="message" placeholder="Leave a message here" style={{ height: '160px' }} value={formData.message} onChange={handleChange}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                                {isSubmitted && <p className="text-success">Message sent successfully!</p>}
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
