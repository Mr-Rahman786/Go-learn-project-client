import React, { createContext, useState } from 'react';
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
import ReactSwitch from 'react-switch';
// import logo from '../Media/logo.svg'


export const ThemeContext = createContext(null)

const Header = () => {
    const [theme, setTheme] = useState("light");
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
        .catch(error=>console.error(error))
}

    const toggoleThemeChanged = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggoleThemeChanged }}>
            <Navbar id={theme} className="theme" collapseOnSelect expand="lg" bg="bg-none" variant="light">
                <Container fluid className='navbar-container'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar-items">
                            <Link to="home">Home</Link>
                            <Link to="courses">Courses</Link>
                            <Link to="faq">FAQ</Link>
                            <Link to="blog">Blog</Link>

                        </Nav>
                        <Nav>
                            <ReactSwitch onChange={toggoleThemeChanged} checked={theme === "dark"}/>
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
       </ThemeContext.Provider>
    );
};

export default Header;