import React from 'react';
import ach1 from '../assets/Ach1.jpeg';
import ach2 from '../assets/Ach2.jpeg';
import ach3 from '../assets/Ach3.jpeg';
import ach4 from '../assets/Ach4.jpeg';

const achievements = [
    {
        description:
            'We are proud to announce that MediFor7 has successfully completed the DST NIDHI EIR Scheme from COEPs Bhau Institute, Pune. This recognition strengthens our mission to revolutionize medication management for the elderly, hospital patients, and busy professionals across India.',
        image: ach1,
    },
    {
        description:
            'We are thrilled to announce that our startup, MediFor7, has successfully secured the prestigious Startup India Seed Fund Grant through COEPs Bhau Institute, Pune. This remarkable milestone reflects our commitment to revolutionizing medication management through our innovative hardware and software solution.',
        image: ach2,
    },
    {
        description:
            'We are thrilled to announce that MediFor7 won 1st prize in the Entrepreneurship sector at the Ignited Innovators of India (i2i) Business Model Competition, COEP Technological University, Pune. Our innovative solution simplifies medication management with smart hardware and software features.',
        image: ach3,
    },
    {
        description:
            'MediFor7 is a revolutionary solution for medication adherence, proudly granted 4 design patents by the Indian government. With 28-dose containers, LED alerts, voice reminders, and a mobile app, it ensures seamless and reliable medication management.',
        image: ach4,
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-gray-100 px-6 md:px-20">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Delivering results that matter to people and healthcare providers.
                </p>
            </div>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <img
                            src={item.image}
                            alt={`Achievement ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700 text-base">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
