import React from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffee = {
            name,
            supplier,
            category,
            chef,
            taste,
            details,
            photo
        }

        fetch(`http://localhost:5000/coffees/update/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div className='container mx-auto bg-[#F4F3F0] p-20'>
            <form onSubmit={handleUpdateCoffee}>
                <h3 className='text-center text-4xl font-bold my-4'>Update Coffee</h3>
                <div className='flex gap-4 w-full'>
                    <div className='w-1/2'>
                        <div className='w-full'>
                            <label className='block'>Name</label>
                            <input defaultValue={name} name='name' type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Supplier</label>
                            <input defaultValue={supplier} name='supplier' type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Category</label>
                            <input defaultValue={category} name='category' type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full'>
                            <label className='block'>Chef</label>
                            <input defaultValue={chef} name='chef' type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Taste</label>
                            <input defaultValue={taste} name='taste' type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Details</label>
                            <input defaultValue={details} name='details' type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block'>Photo</label>
                    <input defaultValue={photo} name='photo' type="text" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    <input className='btn btn-warning w-full mt-5' type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default Update;