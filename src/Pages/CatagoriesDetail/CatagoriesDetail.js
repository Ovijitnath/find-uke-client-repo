import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import SingleCatagoryDetails from './SingleCatagoryDetails';

const CatagoriesDetail = () => {

    const products = useLoaderData();
    const [modproducts, setModProducts] = useState(null);



    return (
        <div>

            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                {
                    products.map(card => <SingleCatagoryDetails
                        key={card._id}
                        card={card}
                        setModProducts={setModProducts}
                    ></SingleCatagoryDetails>)
                }
            </div>
            {
                modproducts &&
                <BookingModal
                    modproducts={modproducts}
                    setModProducts={setModProducts}
                ></BookingModal>
            }
        </div>

    );
};

export default CatagoriesDetail;