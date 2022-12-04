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
import { FaUser} from 'react-icons/fa';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
        .catch(error=>console.error(error))
}
  

    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button onClick={handleSignOut}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image style={{ height: '25px' }} roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                            }
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