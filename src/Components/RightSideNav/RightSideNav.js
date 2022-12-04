import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RightSideNav.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub,FaFacebook,FaYoutube,FaTwitter,FaTwitch,FaInstagram,FaLinkedin } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    console.log(providerLogin)
    const googleProvider= new GoogleAuthProvider()
    // google sign in 

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className=' '>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-dark"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='mb-2' variant="outline-dark"> <FaGithub></FaGithub>Login With Github</Button>
                <Button className='mb-2' variant="outline-dark"><FaFacebook></FaFacebook>  Login With Facebook</Button>
            </ButtonGroup>
            <div>
                <h4>Follow with us</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaYoutube/>Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram/>Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaLinkedin/>Linkdin</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;