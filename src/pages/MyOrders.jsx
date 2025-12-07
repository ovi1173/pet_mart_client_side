import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        axios.get('https://backend-paws.vercel.app/orders')
            .then(res => {
                setMyOrders(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    // console.log(myOrders);

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((order, idx) => (
                            <tr>
                                <th>{idx + 1}</th>
                                <td>{order?.productName}</td>
                                <td>{order?.price}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.address}</td>
                                <td>{order?.quantity}</td>
                                <td>{order?.date}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;