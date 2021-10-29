import React from 'react';
import { useForm } from 'react-hook-form';

const AddOrders = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container py-5">
            <div className="w-50 mx-auto">
                <h1 className="my-3">Add New Orders</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("name")} placeholder="Package Name" />
                    <input className="form-control my-4" {...register("price", { required: true })} placeholder="Price" />
                    <input className="form-control" {...register("description", { required: true })} placeholder="Description" />
                    <input className="form-control my-4" {...register("img", { required: true })} placeholder="Image URL" />

                    <input className="mt-4 btn-warning form-control" type="submit" value="Add Order" />
                </form>
            </div>
        </div>
    );
};

export default AddOrders;