import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
// import logo from '../Media/logo.svg'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
        .catch(error=>console.error(error))
}

    return (
        <Navbar collapseOnSelect expand="lg" bg="bg-none" variant="light">
            <Container className='navbar-container'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="home">Home</Link>
                        <Link to="courses">Courses</Link>
                        <Link to="faq">FAQ</Link>
                        <Link to="blog">Blog</Link>

                    </Nav>
                    <Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <span className='displayname'>{user?.displayName}</span>
                                        <button className='logout' onClick={handleSignOut}>Log out</button>
                                        
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                        </Nav>
                        <Nav to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '25px' }}
                                    roundedCircle
                                    src={user?.photoURL}></Image>
                                :
                                <FaUser className='mt-4 size'></FaUser>
                            }
                        </Nav>
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