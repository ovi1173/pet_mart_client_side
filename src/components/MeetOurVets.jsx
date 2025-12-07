import React from 'react';

const MeetOurVets = () => {
    const heroData = [
        {
            id: 1,
            name: "Amelia Stone",
            role: "Dedicated Pet Caregiver",
            story: "Has helped foster over 12 pets and advocates for winter pet safety.",
            image: "https://i.postimg.cc/DyBfm2bV/v2.png"
        },
        {
            id: 2,
            name: "Lucas Bennett",
            role: "Animal Welfare Volunteer",
            story: "Passionate about helping abandoned pets find loving homes.",
            image: "https://i.postimg.cc/xTtjq0NW/vet1.jpg"
        },
        {
            id: 3,
            name: "Sofia Rahman",
            role: "Pet Adoption Mentor",
            story: "Guides new pet parents and promotes ethical adoption practices.",
            image: "https://i.postimg.cc/rFQyz8R7/vet3.webp"
        }
    ];

    return (
        <div className="px-4 sm:px-10 lg:px-20 pb-10">
            <h2 className="my-8 text-center text-3xl font-bold text-gray-800">
                🐕 Meet Our Pet Heroes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {heroData.map((hero) => (
                    <div
                        key={hero.id}
                        className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <figure className="overflow-hidden">
                            <img
                                src={hero.image}
                                alt={hero.name}
                                className="h-56 w-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold text-gray-800">
                                {hero.name}
                            </h2>

                            <p className="text-gray-600 mt-1">{hero.role}</p>

                            <p className="text-gray-700 mt-2">{hero.story}</p>

                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary rounded-lg hover:bg-blue-600 transition">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurVets;
