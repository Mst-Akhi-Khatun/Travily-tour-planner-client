import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../images/logo-7.png';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div>
            <Navbar className="px-3">
                <Navbar.Brand className="d-flex align-items-center">
                    <img src={images} alt="" width="80px" />
                    <h3 className="text-warning text-uppercase">travily tour planner</h3>
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
                            <i className="fab fa-facebook text-warning fs-3"></i>
                        </Link>
                        <Link to="#pricing">
                            <i className="fab fa-instagram-square text-warning fs-3 mx-2"></i>
                        </Link>
                        <Link to="#pricing">
                            <i className="fab fa-youtube text-warning fs-3"></i>
                        </Link>
                    </div>
                </Nav>
            </Navbar>
        </div>
    );
};

export default MenuBar;