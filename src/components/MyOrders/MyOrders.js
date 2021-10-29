import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import usePackage from '../../hooks/usePackage';

const MyOrders = () => {
    const [packages, setPackages] = usePackage();
    return (
        <div className="container-fluid my-5">
            <h1>My All Orders Are Here</h1>
            <Row xs={1} md={4} className="g-4 mx-auto my-5">
                {
                    packages.map(pk => <Col>
                        <Card>
                            <Card.Img variant="top" className="w-50 mx-auto pt-3" height="180px" src={pk?.img} />
                            <Card.Body className="text-center">
                                <Card.Title>{pk?.name}</Card.Title>
                                <Card.Text>
                                    {pk?.description}
                                </Card.Text>
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