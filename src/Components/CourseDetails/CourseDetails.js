import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {

    const { id } = useParams();
    const [corses, setCorses] = useState([]);
    const { img, details, title } = corses;
    useEffect(() => {
        fetch(`http://localhost:5000/corses-catagories/${id}`)
            .then(res => res.json())
            .then(data => setCorses(data))
    }, [id])
    console.log(corses)

    return (
        <div>
            <img src={corses.img} alt="" />
        </div>
    );
};

export default CourseDetails;