import React from 'react';
import { useForm } from 'react-hook-form';

const AddOrders = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addPackage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New package successfully added!');
                    reset();
                }
            })
    };


    return (
        <div className="container py-5">
            <div className="w-50 mx-auto">
                <h1 className="my-3">Add New Package</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("name")} placeholder="Package Name" />
                    <input className="form-control my-4" {...register("price", { required: true })} placeholder="Price" />
                    <input className="form-control" {...register("description", { required: true })} placeholder="Description" />
                    <input className="form-control my-4" {...register("img", { required: true })} placeholder="Image URL" />

                    <input className="mt-4 btn-warning form-control" type="submit" value="Add Package" />
                </form>
            </div>
        </div>
    );
};

export default AddOrders;