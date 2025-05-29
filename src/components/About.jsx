import React from 'react';
import aboutImg from '../assets/aboutImg.png'

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        MediFor7 is a healthcare platform designed to simplify and streamline the way individuals manage their daily medications and health routines. With a user-first approach, MediFor7 provides timely reminders, smart tracking, and insightful health data.
                    </p>
                    <p className="text-lg text-gray-700">
                        Our mission is to empower users with the tools they need to stay consistent, informed, and confident about their health journey. Whether you're managing multiple prescriptions or just starting a wellness routine — MediFor7 makes it easier.
                    </p>
                </div>

                {/* Optional Image or Illustration */}
                <div className="flex justify-center">
                    <img
                        src={aboutImg}
                        alt="About MediFor7"
                        className="rounded-xl shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
