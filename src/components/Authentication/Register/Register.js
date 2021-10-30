import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [booking, setBooking] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        data.img = booking.img;
        fetch('http://localhost:5000/bookPackage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package successfully booked!');
                    reset();
                }
            })

    };
    return (
        <div className="container py-5">
            <div className="w-50 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("username", { required: true })} defaultValue={user?.displayName} />
                    <input className="form-control my-4" {...register("email", { required: true })} defaultValue={user?.email} />
                    <input className="form-control" {...register("address", { required: true })} placeholder="Address" />
                    <input className="form-control my-4" {...register("date", { required: true })} type="date" />
                    <input className="form-control" {...register("package", { required: true })} defaultValue={booking?.name} />
                    <input className="form-control my-4" {...register("price", { required: true })} defaultValue={booking?.price} />


                    <input className="mt-4 btn-warning form-control" type="submit" value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default Register;