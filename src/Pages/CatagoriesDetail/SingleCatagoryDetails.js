import React from 'react';
import { Link } from 'react-router-dom';

const SingleCatagoryDetails = ({ card, setModProducts }) => {
    const { name, description, image } = card;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">


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