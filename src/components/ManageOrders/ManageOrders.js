import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [remove, setRemove] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [remove])

    const handleRemovePackage = id => {
        const proceed = window.confirm("Sure want to remove?");
        if (proceed) {
            fetch(`http://localhost:5000/myPackages/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Package successfully removed!")
                        setRemove(!remove)
                    };
                })
        }
    }

    const handleStatus = id => {

    }
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
                                <button onClick={() => handleStatus(bookings?._id)} className="btn btn-warning me-2">Approve</button>
                                <button onClick={() => handleRemovePackage(bookings?._id)} className="btn btn-danger">Remove</button>

                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;