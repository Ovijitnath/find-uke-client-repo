import React from 'react';
import { Link } from 'react-router-dom';

const SingleCatagoryDetails = ({ card, setModProducts }) => {
    const { name, description, image, resalePrice, location, originalPrice, yearOfUse,
        sellerName, postedTime } = card;
    return (

        <div className="card  bg-base-100 shadow-xl">
            <h1 className="text-5xl font-bold text-center text-gray-500 pt-3 pb-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">{name}!</h1>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-center mx-auto">{name}</h2>
                <p>{description}</p>
                <div className="card-actions font-bold">
                    {/* <div className='flex justify-evenly'> */}
                    <h5>Resale Price : ${resalePrice}</h5>
                    <br />
                    <h5>Original Price : ${originalPrice}</h5>
                    <h5>Location : {location}</h5>
                    <br />
                    <h5>Year of use : {yearOfUse} years</h5>
                    <h5>Seller Name : {sellerName}</h5>
                    <br />
                    <h5>posted Time : {postedTime} pm</h5>
                    {/* </div> */}

                    <label htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setModProducts(card)}
                    >Book this item</label>
                </div>
            </div>
        </div>
    );
};

export default SingleCatagoryDetails;