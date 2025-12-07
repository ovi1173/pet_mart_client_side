import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Services = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('')

    useEffect(() => {
        fetch(`https://backend-paws.vercel.app/services?category=${category}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));


    }, [category]);
    // console.log(category);


    return (
        <div className="px-6 md:px-20 mt-12">

            {/* Title */}
            <h2 className="text-4xl font-bold text-center text-gray-800">
                Our Premium Services
            </h2>
            <div className='flex justify-end mb-8'>
                <select onChange={(e) => setCategory(e.target.value)} defaultValue="Choose a category" className="select ">
                    <option disabled={true}>Choose Category</option>
                    <option value="">All</option>
                    <option value="Pet">Pet</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="care products">Care Products</option>
                </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                    <motion.div
                        key={service.serviceId}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 0.9 } }}
                        className="card bg-base-100 shadow-lg rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2"
                    >
                        <figure className="overflow-hidden rounded-t-2xl">
                            <img
                                className='object-cover h-60 w-full'
                                src={service?.image}
                                alt={service?.name}
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold">{service?.name}</h2>

                            <div className='flex justify-between mt-2'>
                                <p className='font-medium text-gray-700'>Price: ${service?.price}</p>
                                <p className='font-medium text-gray-700'>Category: {service?.category}</p>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <Link to={`/details/${service?._id}`}>
                                    <button className="btn btn-primary rounded-lg hover:bg-blue-600 transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
