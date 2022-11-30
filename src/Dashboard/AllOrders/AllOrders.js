import React, { useEffect, useState } from 'react';

const AllOrders = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))



    }, [])




    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image
                            </th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Price</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&

                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-32 rounded">
                                            <img src={booking.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.name}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                {/* <th><button className='btn btn-warning btn-xs px-2'>Pay</button></th> */}

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;