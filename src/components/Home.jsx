import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    // console.log(coffees)
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-3'>
                <h2 className='text-center text-4xl font-bold text-[#331A15]'>Out Popular Products</h2>
                <Link to='/add-coffee' className='btn btn-ghost bg-[#E3B577]'>Add Coffee</Link>
            </div>
            <div className='lg:grid grid-cols-2 gap-5 mt-5'>
                {
                    coffees.map(coffee => <CoffeeCard
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}
                        key={coffee._id}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;