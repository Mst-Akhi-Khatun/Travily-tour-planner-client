import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [remove, setRemove] = useState(false);
    const [booking, setBooking] = useState({})
    const [updateStatus, setUpdateStatus] = useState(false);

    useEffect(() => {
        fetch('https://travily-tour-planner.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [remove, updateStatus])

    const handleRemovePackage = id => {
        const proceed = window.confirm("Sure want to remove?");
        if (proceed) {
            fetch(`https://travily-tour-planner.herokuapp.com/myPackages/${id}`, {
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
        fetch(`https://travily-tour-planner.herokuapp.com/allBookings/${id}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
        setBooking(booking.status = "Approved");

        fetch(`https://travily-tour-planner.herokuapp.com/allBookings/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Successfully Approved!");
                    setUpdateStatus(!updateStatus)
                }
            });
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