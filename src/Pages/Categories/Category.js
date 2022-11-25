import React from 'react';

const Category = ({ card }) => {
    const { name, description, image, location } = card;
    return (
        <div className="card p-2 md:card-side shadow-xl bg-gray-300">

            <div className="card-body">
                <img src={image} alt="Movie" />
                <h2 className="card-title">{name}</h2>
                <h3>Location: {location}</h3>
                <p>{description.slice(0, 100) + `...`}</p>
            </div>
        </div>
    );
};

export default Category;