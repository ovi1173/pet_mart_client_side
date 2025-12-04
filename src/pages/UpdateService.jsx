import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useParams } from 'react-router';
import axios, { Axios } from 'axios';

const UpdateService = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [service, setService] = useState();
    const [category, setCategory] = useState(service?.category)
    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(res => {
                setService(res.data);
                setCategory(service?.category);
            })

    }, [id, service?.category])


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.imgURL.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
            createdAt:service?.createdAt
        }

   axios.put(`http://localhost:3000/update/${id}`,formData)
   .then(res=>{
    console.log(res.data);
   })
   .catch(err=>console.log(err))
    }
    return (
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5 text-center">
                Update Listing
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">

                {/* Name */}
                <div>
                    <label className="block font-semibold mb-1">Product / Pet Name</label>
                    <input
                        defaultValue={service?.name}
                        type="text"
                        className="w-full border p-2 rounded-lg"
                        placeholder="Enter name"
                        name='name'
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <select
                        className="w-full border p-2 rounded-lg"
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="pet">Pet</option>
                        <option value="food">Food</option>
                        <option value="accesories">Accessories</option>
                        <option value="care products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="block font-semibold mb-1">Price</label>
                    <input
                        defaultValue={service?.price}
                        type="number"
                        name='price'
                        min='0'
                        required
                        className={`w-full border p-2 rounded-lg px-3 py-2`}
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block font-semibold mb-1">Location</label>
                    <input
                        defaultValue={service?.location}
                        type="text"
                        className="w-full border p-2 rounded-lg"
                        placeholder="Enter location"
                        name='location'
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-semibold mb-1">Description</label>
                    <textarea
                        defaultValue={service?.description}
                        className="w-full border p-2 rounded-lg"
                        name='description'
                        placeholder="Write about the product or pet..."
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-semibold mb-1">Image URL</label>
                    <input
                        defaultValue={service?.image}
                        type="text"
                        name='imgURL'
                        className="w-full border p-2 rounded-lg"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Pick-up Date */}
                <div>
                    <label className="block font-semibold mb-1">Pick-up Date</label>
                    <input type="date" defaultValue={service?.date} name='date' className="w-full border p-2 rounded-lg" />
                </div>

                {/* User Email */}
                <div>
                    <label className="block font-semibold mb-1">Email (current user)</label>
                    <input
                        type="email"
                        value={user?.email}
                        name='email'
                        readOnly
                        className="w-full border p-2 rounded-lg bg-gray-200"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateService;