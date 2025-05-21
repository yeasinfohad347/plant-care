import React from 'react';
import { useLoaderData } from 'react-router';

const AllPlants = () => {
    const plants=useLoaderData();
    console.log(plants)
    return (
        <div>
            
        </div>
    );
};

export default AllPlants;