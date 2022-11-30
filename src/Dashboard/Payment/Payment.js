import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Loading from '../../Pages/Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData();

    const { name, email, price, productName, location } = booking;


    return (
        <div>
            <h3 className="text-3xl">Payment for {name}
            </h3>
            <h5>E-mail: {email}</h5>
            <h5>Location: {location}</h5>
            <p className="text-xl">Please pay <strong>${price}</strong> for your booking on <strong>{productName}</strong> </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;