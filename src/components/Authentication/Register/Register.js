import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container py-5">
            <div className="w-50 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("username")} placeholder="Full Name" />
                    <input className="form-control my-4" {...register("email", { required: true })} placeholder="Email" />
                    <input className="form-control" {...register("address", { required: true })} placeholder="Address" />
                    <input className="form-control my-4" {...register("date", { required: true })} type="date" />
                    <input className="form-control" {...register("package", { required: true })} placeholder="Package Name" />

                    <input className="mt-4 btn-warning form-control" type="submit" value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default Register;