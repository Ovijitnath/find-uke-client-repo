import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ card }) => {
    const { _id, name, description, image } = card;
    return (

        <div className="card  bg-base-100 shadow-xl">
            <Link to={`/catagory/${_id}`}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className="card-actions justify-end">
                        <Link to={`/catagory/${_id}`}><button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold  bg-cyan-300 text-gray-900 rounded-full">Buy Now
                            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">New</span>
                        </button></Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Category;