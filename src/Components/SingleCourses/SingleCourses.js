import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SingleCourses.css';
import { FaEye, FaStar } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import RightSideNav from '../RightSideNav/RightSideNav';
const SingleCourses = ({ course }) => {
    const { name, details, amount, enrolled, title, img, id, review } = course;
    // console.log(course)
    const navigate = useNavigate();

    const handleSendData = (id) => {
        navigate(`/coursemore/${id}`);
    }

    return (
        <div className='singleCourses'>
            <Card >
                <Card.Title>{name}</Card.Title>
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>`
                    <h5>Price : {amount}</h5>`
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <button className="primary-btn" onClick={() => handleSendData(id)}>
                                <Link to={`/coursemore/${id}`}>See more</Link>
                            </button>
                        </div>
                        <div className='d-flex justify-content-between align-items-center icons-main'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>  {review}
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <FaEye></FaEye>  {enrolled}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourses;