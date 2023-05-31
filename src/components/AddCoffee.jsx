import React from 'react';
import Swal from 'sweetalert2';



const AddCoffee = () => {

    const handleAddCoffee = event => {
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

        fetch('http://localhost:5000/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully coffee added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div className='container mx-auto bg-[#F4F3F0] p-20'>
            <form onSubmit={handleAddCoffee}>
                <h3 className='text-center text-4xl font-bold my-4'>Add New Coffee</h3>
                <div className='flex gap-4 w-full'>
                    <div className='w-1/2'>
                        <div className='w-full'>
                            <label className='block'>Name</label>
                            <input name='name' type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Supplier</label>
                            <input name='supplier' type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Category</label>
                            <input name='category' type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full'>
                            <label className='block'>Chef</label>
                            <input name='chef' type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Taste</label>
                            <input name='taste' type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='block'>Details</label>
                            <input name='details' type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block'>Photo</label>
                    <input name='photo' type="text" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    <input className='btn btn-warning w-full mt-5' type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;