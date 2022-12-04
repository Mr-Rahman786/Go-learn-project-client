import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
            <h4>All courses{courses.length}</h4>
            {
                courses.map(course => <SingleCourses
                    course={course}
                    key={course.id}
                >
                </SingleCourses>)
            }
        </div>
    );
};

export default Courses;