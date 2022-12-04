import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SingleCourses.css';
const SingleCourses = ({ course }) => {
    const { name, details, amount, enrolled, title, img, id, review } = course;
    // console.log(course)
    const navigate = useNavigate();

    const handleSendData = (id) => {
        navigate(`/coursemore/${id}`);
    }

    return (
        <div className='singleCourses'>
            <h3>{title}</h3>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <button onClick={()=>handleSendData(id)}>
                <Link to={`/coursemore/${id}`}>See more</Link>
            </button>
        </div>
    );
};

export default SingleCourses;