import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myPackages, setMyPackages] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/myPackages/${email}`)
            .then(res => res.json())
            .then(data => setMyPackages(data))
    }, [email])

    return (
        <div className="container-fluid my-5">
            <h1>My All <span className="text-warning">Orders</span> Are Here</h1>
            <Row xs={1} md={4} className="g-4 mx-auto my-5">
                {
                    myPackages.map(pk => <Col>
                        <Card>
                            <Card.Img variant="top" className="w-50 mx-auto pt-3" height="180px" src={pk?.img} />
                            <Card.Body className="text-center">
                                <Card.Title>{pk?.package}</Card.Title>
                                <Card.Text>
                                    {pk?.status}
                                </Card.Text>
                                <h5>Price: ${pk?.price}</h5>
                            </Card.Body>
                            <Link to={`/detail/${pk?.id}`} className="mx-auto mb-3">
                                <Button variant="danger" className="rounded-pill px-4 text-white">Remove</Button>
                            </Link>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;