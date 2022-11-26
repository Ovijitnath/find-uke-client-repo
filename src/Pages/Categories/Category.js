import React from 'react';

const Category = ({ card }) => {
    const { name, description, image, location } = card;
    return (

        <div className="card card-compact w-96  shadow-xl bg-base-100">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;