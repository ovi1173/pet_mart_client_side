import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
const ServiceDetails = () => {
    const [service, setService] = useState([]);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://backend-paws.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.log(err));
    }, [id]);

    // const findResult = services.find(service => service.serviceId == id);

    // const handleBookNow = (e) => {
    //     e.preventDefault();
    //     toast.success('Service booked successfully!');
    //     setName('');
    //     setEmail('');
    // };
    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const price = parseInt(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const address = form.address.value;
        const additionalNote = form.additionalNote.value;
        const phone = form.phone.value;

        const formData = {
            productId: id,
            productName,
            buyerName,
            price,
            quantity,
            buyerEmail,
            address,
            additionalNote,
            phone,
            date: new Date()
        }
        axios.post('https://backend-paws.vercel.app/orders', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="flex flex-col items-center px-4 sm:px-10 lg:px-20 py-10 space-y-10">
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Service Image */}
            <img
                className="w-full max-w-4xl rounded-2xl shadow-lg object-cover"
                src={service?.image}
                alt={service?.name}
            />

            {/* Service Details */}
            <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{service?.name}</h2>
                <p className="text-gray-700">{service?.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    <p><strong>Provider:</strong> {service?.category}</p>
                    <p><strong>Provider Email:</strong> {service?.email}</p>
                    <p><strong>Price:</strong> ${service?.price}</p>
                    <p><strong>Date:</strong> {service?.date} </p>
                    {/* <p><strong>Slots Available:</strong> {service?.slotsAvailable}</p>
                    <p><strong>Category:</strong> {service?.category}</p> */}
                </div>
            </div>
            {/* modals */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn btn-primary"
                onClick={() => document.getElementById('my_modal_2').showModal()}
            >
                Order/Adapt
            </button>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box relative">

                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById('my_modal_2').close()}
                    >
                        ✕
                    </button>

                    <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-4">
                        <legend className="fieldset-legend">Order details</legend>

                        <label className="label">Product Name</label>
                        <input readOnly name='productName' defaultValue={service?.name} type="text" className="input" placeholder="Product Name" />

                        <label className="label">Buyer Name</label>
                        <input type="text" name='buyerName' defaultValue={user?.displayName} className="input" placeholder="Buyer Name" />

                        <label className="label">Buyer Email</label>
                        <input readOnly name='buyerEmail' defaultValue={user?.email} type="email" className="input" placeholder="Email" />

                        <label className="label">Quantity</label>
                        <input required type="number" name='quantity' className="input" placeholder="Quantity" />

                        <label className="label">Price</label>
                        <input readOnly name='price' defaultValue={service?.price} type="number" className="input" placeholder="Number" />

                        <label className="label">Address</label>
                        <input type="text" required name='address' className="input" placeholder="address" />

                        <label className="label">Phone</label>
                        <input required type="text" required name='phone' className="input" placeholder="Phone" />

                        <label className="label">Additional Notes</label>
                        <textarea type="text" name='additionalNote' className="textarea textarea-bordered h-32"
                            placeholder="Write additional notes here..." />

                        <button type='submit' className='btn btn-primary'>Order</button>






                    </form>
                </div>

                {/* Clicking outside closes modal */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


            {/* Book Service Form */}
            {/* <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book This Service</h3>
                <form onSubmit={handleBookNow} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="label font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="label font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button className="btn btn-primary w-full mt-2 hover:bg-blue-600 transition">Book Now</button>
                </form>
            </div> */}
            {/* copied form daisy */}

        </div>
    );
};

export default ServiceDetails;
