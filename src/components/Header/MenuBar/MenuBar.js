import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../images/logo-5.png';
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
                        <Link className="a" href="#home">Home</Link>
                        <Link className="a" href="#features">Features</Link>
                        <Link className="a" href="#pricing">Pricing</Link>
                        <div>
                            <Link href="#pricing">
                                <i class="fab fa-facebook"></i>
                            </Link>
                            <Link href="#pricing">
                                <i class="fab fa-instagram"></i>
                            </Link>
                            <Link href="#pricing">
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