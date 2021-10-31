import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myPackages, setMyPackages] = useState([]);
    const [remove, setRemove] = useState(false);
    const { user } = useAuth();
    const email = user?.email;
    useEffect(() => {
        fetch(`https://travily-tour-planner.herokuapp.com/myPackages/${email}`)
            .then(res => res.json())
            .then(data => setMyPackages(data))
    }, [remove, email])

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

    return (
        <div className="container-fluid my-5">
            <h1>My Booked <span className="text-warning">Packages</span> Are Here</h1>
            <Row xs={1} md={4} className="g-4 mx-auto my-5">
                {
                    myPackages.map(pk => <Col>
                        <Card>
                            <Card.Img variant="top" className="w-50 mx-auto pt-3" height="180px" src={pk?.img} />
                            <Card.Body className="text-center">
                                <Card.Title>{pk?.package}</Card.Title>
                                <Card.Text>
                                    Status: {pk?.status}
                                </Card.Text>
                                <h5>Price: ${pk?.price}</h5>
                            </Card.Body>
                            <Button onClick={() => handleRemovePackage(pk?._id)} variant="danger" className="rounded-pill px-4 text-white w-50 mx-auto">Remove</Button>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;