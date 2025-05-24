import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import NewPlantsSection from './NewPlantSection';
import FAQSection from './FAQSection';
import UserStories from './UserStories';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div >
          <Helmet>
        <title>Home</title>
      </Helmet>
           <div className='bg-[#C9D2D7]'>
             <HeroSection/>
           </div>
           <div className="newplant">
            <NewPlantsSection/>
           </div>
           <div>
            <UserStories/>
           </div>
           <div>
            <FAQSection/>
           </div>

        </div>
    );
};

export default Home;