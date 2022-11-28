import React from 'react';
import { Link } from 'react-router-dom';

const SingleCatagoryDetails = ({ card }) => {
    const { name, description, image } = card;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to=""><button className="btn btn-primary">Book</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCatagoryDetails;