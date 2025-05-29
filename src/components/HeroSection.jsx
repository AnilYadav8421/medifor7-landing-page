import React from 'react';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-20">
            <div className="text-center max-w-3xl">
                <h1
                    className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
                    style={{
                        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
                    }}
                >
                    Your Personal Medication Manager
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Never miss a dose again. MediFor7 helps you manage your meds with smart alerts and app reminders.
                </p>
                <button
                    className="text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
                    style={{
                        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
                    }}
                >
                    Free Trial
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
