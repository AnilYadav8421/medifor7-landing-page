import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-purple-100 to-pink-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-4">
            Have questions or want to learn more about MediFor7? Fill out the form, and we’ll get back to you shortly.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Email:</strong> contact@medifor7.com</li>
            <li><strong>Phone:</strong> +91 7219785868</li>
            <li><strong>Location:</strong> COEP's Bhau Institute, Near Boat Club, Shivajinager, COEP Pune-411005 MH</li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-8 rounded-xl shadow-md space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            required
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold"
            style={{
              backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
            }}
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
