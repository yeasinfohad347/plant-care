import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import NewPlantsSection from './NewPlantSection';

const Home = () => {
    return (
        <div >
           <div className='bg-[#C9D2D7]'>
             <HeroSection/>
           </div>
           <div className="newplant">
            <NewPlantsSection/>
           </div>
        </div>
    );
};

export default Home;