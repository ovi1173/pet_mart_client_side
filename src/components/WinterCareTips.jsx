import React from 'react';

const WinterCareTips = () => {
    const points = [
        {
            id: 1,
            title: "Every Adoption Saves a Life",
            desc: "Millions of pets are abandoned every year. Adopting from PawMart gives them a second chance at a loving home.",
        },
        {
            id: 2,
            title: "Companionship That Changes Lives",
            desc: "Adopted pets develop deep emotional bonds with their new families, bringing joy, loyalty, and unconditional love.",
        },
        {
            id: 3,
            title: "Support Ethical Pet Care",
            desc: "Choosing adoption means standing against unethical breeding and supporting responsible pet care practices.",
        },
    ];

    return (
        <div className="px-4 sm:px-10 lg:px-20 py-12 bg-white">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
                🐾 Why Adopt from PawMart?
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                At PawMart, we believe every pet deserves a warm home and a loving family.  
                Adopting a pet doesn’t just change their life—it transforms yours too.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {points.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WinterCareTips;
