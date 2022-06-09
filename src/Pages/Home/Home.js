import React from 'react';
import Contuct from '../Contuct/Contuct';
import Intro from '../Intro/Intro';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Intro/>
            <Project/>
            <Contuct/>
        </div>
    );
};

export default Home;