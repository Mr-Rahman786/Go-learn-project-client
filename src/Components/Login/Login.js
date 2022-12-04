import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RightSideNav from '../RightSideNav/RightSideNav';
import './Login.css'
const Login = () => {

    return (
        <Form className='form-container mx-auto'>
            <div className='form-body text-start w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <Form.Text className='text-danger'>
                    <small>error massage</small>
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

export default Login;