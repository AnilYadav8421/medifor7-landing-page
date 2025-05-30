import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm(!showForm);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const buttonHover = {
        scale: 1.05,
        boxShadow: '0 0 8px rgb(203, 33, 142)',
        transition: { duration: 0.3 },
    };

    const modalBackdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center px-6 md:px-20 relative"
            style={{
                background: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

            <motion.div
                className="text-center max-w-3xl text-white relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    style={{
                        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Your Personal Medication Manager
                </motion.h1>
                <motion.p className="text-lg mb-6">
                    Our Mission Is To Improve The Lives Of Individuals And Families By Providing A Smart, Reliable, And Affordable Solution For Medication Management.
                </motion.p>
                <motion.button
                    onClick={toggleForm}
                    className="font-semibold px-6 py-3 rounded-xl shadow-md"
                    style={{
                        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
                    }}
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                >
                    Free Trial
                </motion.button>
            </motion.div>

            {/* Modal Form */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        variants={modalBackdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.div
                            className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg relative"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <button
                                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                                onClick={toggleForm}
                                aria-label="Close form"
                            >
                                &times;
                            </button>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Request Free Trial</h3>
                            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone No."
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Age"
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    rows="3"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full text-white py-2 rounded-md font-semibold"
                                    style={{
                                        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroSection;
