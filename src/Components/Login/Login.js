import React, { createContext, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import RightSideNav from '../RightSideNav/RightSideNav';
import './Login.css'
import swal from 'sweetalert';

import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)


const Login = () => {
    const [theme, setTheme] = useState("light");
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home'


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    swal("Sorry Email Not Verified", "Please Check email and Verified there", "error");
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
        })

    }

    const toogleTheme = () => {
        setTheme((curr)=>(curr==="light"?"dark":"light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            <Form id={theme} onSubmit={handleSubmit} className='form-container mx-auto main'>
                <div className='form-body text-start form-main-body  mx-auto'>
                    <ReactSwitch onChange={toogleTheme} checked={theme === "dark"} /> <h5>Toggole</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                    <div id='switch'>
                        
                    </div>
                </div>
                <div>
                    <div className='d-none d-lg-block'>
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </Form>
        </ThemeContext.Provider>
    );
};

export default Login;