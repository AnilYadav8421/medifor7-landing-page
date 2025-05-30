import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. Fill Your Medications',
    description: 'Place your weekly pills into the clearly labeled 28 compartments and 4 special ones for emergencies.',
    icon: '💊',
  },
  {
    title: '2. Set Schedules via App',
    description: 'Use the MediFor7 app to easily schedule your medication reminders based on dose timings.',
    icon: '📲',
  },
  {
    title: '3. Get Alerts',
    description: 'Get LED and voice alerts right from the device along with push notifications on your phone.',
    icon: '🔔',
  },
  {
    title: '4. Take Medicine On Time',
    description: 'Open the correct compartment, confirm intake, and track your history effortlessly.',
    icon: '✅',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Simple steps to manage your medication routine smartly and reliably.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg text-center"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
