import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CourseDetails.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseDetails = () => {

    const { id } = useParams();
    const [corses, setCorses] = useState([]);
    const { img, details, title } = corses;
    useEffect(() => {
        fetch(`http://localhost:5000/corses-catagories/${id}`)
            .then(res => res.json())
            .then(data => setCorses(data))
    }, [id])
    // console.log(corses)

    return (
        <div className=''>
            <Card className='w-50 mx-auto remove-text mainCourseDetails'>
                {/* <Card.Img src="holder.js/100px180" /> */}
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    {/* <Button variant="primary"><Link to="/courses"></Link>Back to Courses</Button>
                     */}
                    <Link to="/courses">Go to courses</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;