import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../images/logo-6.png';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={images} alt="" width="100" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link className="a" to="/home">Home</Link>
                        <Link className="a" to="/myOrders">My Orders</Link>
                        <Link className="a" to="/manageOrders">Manage Orders</Link>
                        <Link className="a" to="/addOrders">Add Orders</Link>
                        <Link className="a" to="/login">Login</Link>
                        <Link className="a" to="/register">Register</Link>
                        <div>
                            <Link to="#pricing">
                                <i class="fab fa-facebook"></i>
                            </Link>
                            <Link to="#pricing">
                                <i class="fab fa-instagram"></i>
                            </Link>
                            <Link to="#pricing">
                                <i class="fab fa-youtube"></i>
                            </Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;