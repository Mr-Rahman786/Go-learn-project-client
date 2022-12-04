import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import RightSideNav from '../RightSideNav/RightSideNav';
const Register = () => {
    const [error, setError] = useState('');
    const { creatUser, updateUserProfile, varifyEmail } = useContext(AuthContext);
    const [accepted,setAccepted]=useState(false)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                handleEmailVarification()
                swal("Registration Successfull", "Your registration was successfull please log in now", "success");
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
        .catch(error=>console.error(error))
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleEmailVarification = () => {
        varifyEmail()
            .then(() => { })
        .catch(error=>console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit} className='form-container mx-auto'>
            <div className='form-body text-start w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    
                    <Form.Control name="name" type="text" placeholder="enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>
                        Accept <Link to="/terms">Terams and conditions</Link>
                        </>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </div>
            <div>
                <div className='d-none d-lg-block'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </Form>
    );
};

export default Register;