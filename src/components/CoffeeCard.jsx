import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { IoMdTrash } from "react-icons/io";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;


    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining)
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <div className='bg-[#F5F4F1] rounded-xl'>
            <div className='flex items-center p-10  '>
                <div className='w-[239px] h-[239px]'>
                    <img className='w-full h-full' src={photo} alt="" />
                </div>
                <div className='flex justify-between items-center flex-1'>
                    <div>
                        <h2 className='text-xl mb-4'><span className='font-semibold'>Name:</span> {name}</h2>
                        <h2 className='text-xl mb-4'><span className='font-semibold'>Chef:</span> {chef}</h2>
                        <h2 className='text-xl mb-4'><span className='font-semibold'>Taste:</span> {taste}</h2>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link to={`/view/${_id}`} className='hover:bg-[#e2caaa] h-10 w-10 bg-[#D2B48C] flex justify-center items-center rounded-lg'><AiFillEye className='text-white text-xl'></AiFillEye></Link>
                        <Link to={`/update/${_id}`} className='hover:bg-[#645f63] h-10 w-10 bg-[#3C393B] flex justify-center items-center rounded-lg'><BsFillPencilFill className='text-white text-xl'></BsFillPencilFill></Link>
                        <button onClick={() => handleDelete(_id)} className='hover:bg-[#fa6562] h-10 w-10 bg-[#EA4744] flex justify-center items-center rounded-lg'><IoMdTrash className='text-white text-xl'></IoMdTrash></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;