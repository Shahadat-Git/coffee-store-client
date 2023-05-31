import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coffee = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    // console.log(coffee)
    return (
        <div className='container mx-auto'>
            <div className='bg-[#F4F3F0] flex items-center m-20 rounded-lg p-10'>
                <div className='w-5/12 flex justify-center'>
                    <img className='h-[455px] w-[350px]' src={photo} alt="" />
                </div>
                <div className='w-7/12'>
                    <p className='text-xl mb-2'><span className='font-semibold'>Name:</span> {name}</p>
                    <p className='text-xl mb-2'><span className='font-semibold'>Chef:</span> {chef}</p>
                    <p className='text-xl mb-2'><span className='font-semibold'>Suppplier:</span> {supplier}</p>
                    <p className='text-xl mb-2'><span className='font-semibold'>Taste:</span> {taste}</p>
                    <p className='text-xl mb-2'><span className='font-semibold'>Category:</span> {category}</p>
                    <p className='text-xl mb-2'><span className='font-semibold'>Details:</span> {details}</p>
                </div>
            </div>
        </div>
    );
};

export default Coffee;