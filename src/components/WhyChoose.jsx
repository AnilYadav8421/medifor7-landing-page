import React from 'react';
import whyChooseImg from '../assets/whyChoose.png'; // Replace with your actual image

const WhyChoose = () => {
    return (
        <section className="py-20 bg-gray-50 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MediFor7?</h2>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">Elderly Care Made Easy</h4>
                            <p className="text-gray-700">
                                Reliable assistance for managing complex medication schedules with reminders and organized compartments.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">Hospital Efficiency</h4>
                            <p className="text-gray-700">
                                Nurses can seamlessly manage multiple patient medication timings with visual and voice alerts.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">For Busy Professionals</h4>
                            <p className="text-gray-700">
                                No more forgetting your daily medications, even on the most hectic days — stay on track easily.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={whyChooseImg}
                        alt="Why Choose MediFor7"
                        className="rounded-xl shadow-md max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
