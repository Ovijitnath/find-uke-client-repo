import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ card }) => {
    const { Catagories_id, name, description, image } = card;
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/catagories/${Catagories_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;