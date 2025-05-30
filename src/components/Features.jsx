import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: '28 Weekly Medicine Containers',
        description: 'Allows daily 4 doses for a week, helping you organize your full medication schedule.',
        icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        ),
    },
    {
        title: '4 Special Purpose Containers',
        description: 'Extra compartments for emergency or additional medications.',
        icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.5 0-3 1-3 3s1.5 3 3 3 3-1 3-3-1.5-3-3-3zm0 0V5m0 6v6" />
            </svg>
        ),
    },
    {
        title: 'LED Alerts For Liquid Medications',
        description: 'Visual reminders for patients who rely on liquid prescriptions.',
        icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4" />
            </svg>
        ),
    },
    {
        title: 'LED Alerts For Insulin',
        description: 'Perfect for diabetes patients to maintain timely insulin usage.',
        icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m6-10H6" />
            </svg>
        ),
    },
    {
        title: 'Voice Alerts With LED Indicators',
        description: 'Clear audio guidance and visual cues for every dose.',
        icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5h2m-1 0v14m6-7a6 6 0 01-12 0 6 6 0 0112 0z" />
            </svg>
        ),
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white px-6 md:px-20">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Features Of Our Device</h2>
                <p className="mt-4 text-gray-600 text-lg">Designed to simplify your health management with innovative solutions.</p>
            </div>

            <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gradient-to-br from-white to-purple-50"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">{feature.title}</h3>
                        <p className="text-gray-600 text-center">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
