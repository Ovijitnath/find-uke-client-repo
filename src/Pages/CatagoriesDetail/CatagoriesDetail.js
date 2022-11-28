import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCatagoryDetails from './SingleCatagoryDetails';

const CatagoriesDetail = () => {

    // const { data: products = [] } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/products');
    //         const data = await res.json();
    //         return data
    //     }
    // });

    const products = useLoaderData();
    console.log(products)

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
            {
                products.map(card => <SingleCatagoryDetails
                    key={card._id}
                    card={card}
                ></SingleCatagoryDetails>)
            }
        </div>
    );
};

export default CatagoriesDetail;