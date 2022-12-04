import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const details = useLoaderData();
    console.log(details)
    const { price, thumbnail, student } = details;
    return (
        <div>
            <img src={thumbnail} alt="" />
            <h5>{price}</h5>
            <h4>{ student}</h4>
        </div>
    );
};

export default Premium;