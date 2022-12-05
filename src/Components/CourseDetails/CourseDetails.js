import React, { createRef, useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CourseDetails.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import ReactToPdf from "react-to-pdf";






const CourseDetails = () => {
    const ref = createRef();
    // const options = {
    //     orientation: 'landscape',
    // };
    const { id } = useParams();
    const [corses, setCorses] = useState([]);
    const { img, details, title } = corses;
    useEffect(() => {
        fetch(`http://localhost:5000/corses-catagories/${id}`)
            .then(res => res.json())
            .then(data => setCorses(data))
    }, [id])


    return (
        <div ref={ref}>
            
            <Card className='mx-auto remove-text mainCourseDetails'>
                
                <img src={img} alt="" />
                <ReactToPdf x={-25} y={.5} scale={0.8} targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button className='bg-dark text-light w-50 py-3 rounded' onClick={toPdf}> <FaDownload className='text-warning' /> Download The Bouchar</button>
                    )}
                </ReactToPdf>
                <Card.Body>
                    
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-between link-behavior'>
                        <div className='bg-primary p-2 rounded'>
                            <Link className='text-light' to="/courses">Go to courses</Link>
                        </div>
                        <div className='bg-dark p-2 rounded text-light'>
                            <Link to={`/premium/${id}`}>Access Premium</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;