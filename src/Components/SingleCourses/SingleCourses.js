import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SingleCourses.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SingleCourses = ({ course }) => {
    const { name, details, amount, enrolled, title, img, id, review } = course;
    // console.log(course)
    const navigate = useNavigate();

    const handleSendData = (id) => {
        navigate(`/coursemore/${id}`);
    }

    return (
        <div className='singleCourses'>
            {/* <h4>{name}</h4>
            <img src={img} alt="" />
            <h5>{title}</h5>
            <br />
            <button onClick={()=>handleSendData(id)}>
                <Link to={`/coursemore/${id}`}>See more</Link>
            </button> */}
            <Card>
                <Card.Title>{name}</Card.Title>
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{ title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <button className="primary-btn" onClick={() => handleSendData(id)}>
                        <Link to={`/coursemore/${id}`}>See more</Link>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourses;