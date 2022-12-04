import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;