import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyServices = () => {
    const [myServices, setMyServices] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://backend-paws.vercel.app/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyServices(data))
            .catch(err => console.log(err));
    }, [user?.email]);
    console.log(myServices);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://backend-paws.vercel.app/delete/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount) {
                            const filterData = myServices.filter(service => service?._id != id)
                            setMyServices(filterData);
                        }
                    })
                    .catch(err => console.log(err))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myServices?.map(service => (
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={service?.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{service?.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <p>{service?.description}</p>
                                </td>

                                <td>{service?.price}</td>
                                <td className='flex justify-center items-center gap-2'>
                                    <button onClick={() => handleDelete(service?._id)} className="btn btn-error btn-xs">Delete</button>
                                    <Link to={`/update-services/${service?._id}`}><button className="btn btn-info btn-xs">Edit</button></Link>
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyServices;