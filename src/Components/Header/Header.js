import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
const Header = () => {
    return (
        
            <Navbar className='navbar'  collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand ><Link to='courses'>Go Learn</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link to="home">Home</Nav.Link> */}
                            <Link to="home">Home</Link>
                            <Link to="courses">Courses</Link>
                            <Link to="faq">FAQ</Link>
                            <Link to="blog">Blog</Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <RightSideNav></RightSideNav>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;