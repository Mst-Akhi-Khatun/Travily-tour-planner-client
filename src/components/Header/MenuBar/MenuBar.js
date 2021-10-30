import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import images from '../../../images/logo-7.png';
import './MenuBar.css';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="px-3">
                <Navbar.Brand className="d-flex align-items-center">
                    <img src={images} alt="" width="80px" />
                    <h3 className="text-warning text-uppercase">travily tour planner</h3>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <div className="pt-1">
                        <Link className="a" to="/home">Home</Link>
                    </div>
                    {
                        user?.email ? <div>
                            <Link className="a" to="/myOrders">My Orders</Link>
                            <Link className="a" to="/manageOrders">Manage Orders</Link>
                            <Link className="a" to="/addOrders">Add Orders</Link>
                            <span className="text-warning me-1">{user?.displayName}</span>
                            <button onClick={logOut} className="btn btn-danger me-2 py-1">Log Out</button>
                        </div> :
                            <div className="d-flex align-items-center">
                                <Link className="a" to="/login">Login</Link>
                                <Link to="">
                                    <i className="fab fa-facebook text-warning fs-3"></i>
                                </Link>
                                <Link to="">
                                    <i className="fab fa-instagram-square text-warning fs-3 mx-2"></i>
                                </Link>
                                <Link to="">
                                    <i className="fab fa-youtube text-warning fs-3"></i>
                                </Link>
                            </div>
                    }


                </Nav>
            </Navbar>
        </div>
    );
};

export default MenuBar;