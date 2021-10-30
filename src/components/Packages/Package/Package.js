import React from 'react';
import { Card, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import usePackage from '../../../hooks/usePackage';

const Package = () => {
    const [packages, setPackages] = usePackage();
    console.log(packages);
    return (
        <div className="py-5 text-center bg-light">
            <h1>Our<span className="text-warning"> Tour Packages</span></h1>
            <p>THE BEST RECOMMENDATION</p>
            <Row xs={1} md={3} className="g-4 container mx-auto my-5">
                {
                    packages.map(pk => <Col>
                        <Card>
                            <Card.Img variant="top" className="w-50 mx-auto pt-3" height="200px" src={pk?.img} />
                            <Card.Body className="text-center">
                                <Card.Title>{pk?.name}</Card.Title>
                                <Card.Text>
                                    {pk?.description}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/detail/${pk?.id}`} className="mx-auto mb-3">
                                <Button variant="warning" className="rounded-pill px-4 text-white">Booking Now</Button>
                            </Link>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Package;