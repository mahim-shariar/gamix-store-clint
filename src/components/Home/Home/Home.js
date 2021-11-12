import React from 'react';
import AllReview from '../../AllReview/AllReview';
import Games from '../Games/Games';
import Company from '../GamesCompany/Company';
import Sliders from '../slider/Sliders';

const Home = () => {
    return (
        <div style={{backgroundColor:'#002650'}}>
            <Sliders></Sliders>
            <Company></Company>
            <Games></Games>
            <AllReview></AllReview>
        </div>
    );
};

export default Home;