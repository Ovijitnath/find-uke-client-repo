import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>
        // {
        //     const res = await fetch(url, {
        //         headers: {
        //             authorization: `bearer ${localStorage.getItem('accessToken')}`
        //         }
        //     });
        //     const data = await res.json();
        //     return data;
        // }
        {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image
                                {/* <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div> */}
                            </th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Price</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.img}</td>
                                <td>{booking.name}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.resalePrice}</td>
                                <th><button>Pay</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;