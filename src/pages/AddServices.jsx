import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const AddServices = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
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
        }

        // console.log(formDate);
        axios.post('http://localhost:3000/services',formData)
        .then(res=>{
            console.log(res);
        })
    }
    return (
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5 text-center">
                Add Product / Pet
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                    <label className="block font-semibold mb-1">Product / Pet Name</label>
                    <input
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
                        className="w-full border p-2 rounded-lg"
                        name='description'
                        placeholder="Write about the product or pet..."
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-semibold mb-1">Image URL</label>
                    <input
                        type="text"
                        name='imgURL'
                        className="w-full border p-2 rounded-lg"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Pick-up Date */}
                <div>
                    <label className="block font-semibold mb-1">Pick-up Date</label>
                    <input type="date" name='date' className="w-full border p-2 rounded-lg" />
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
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddServices;