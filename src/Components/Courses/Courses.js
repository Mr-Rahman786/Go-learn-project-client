import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import SingleCourses from '../SingleCourses/SingleCourses';
import './Courses.css';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/corses-catagories')
            .then(res => res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className='corseContainer-main'>
            <div className='coourseContainer'>
                {
                    courses.map(course => <SingleCourses
                        course={course}
                        key={course.id}
                    >
                    </SingleCourses>)
                }
            </div>
            <div className='d-none d-lg-block'>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Courses;