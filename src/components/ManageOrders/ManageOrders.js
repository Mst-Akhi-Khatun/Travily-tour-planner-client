import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="my-5">Manage All Orders</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Package</th>
                        <th>Status</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBookings.map((bookings, index) => <tr key={bookings?._id}>
                            <td>{index + 1}</td>
                            <td>{bookings?.username}</td>
                            <td>{bookings?.email}</td>
                            <td>{bookings?.package}</td>
                            <td>{bookings?.status}</td>
                            <td>
                                <button className="btn btn-warning me-2">Approve</button>
                                <button className="btn btn-danger">Remove</button>

                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;