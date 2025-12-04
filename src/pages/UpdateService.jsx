import React from 'react';

const UpdateService = () => {
    return (
        <div>

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

export default UpdateService;