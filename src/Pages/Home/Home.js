import React from 'react';
import About from '../About/About';
import Contuct from '../Contuct/Contuct';
import Education from '../Education/Education';
import Intro from '../Intro/Intro';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <Education/>
            <Project/>
            <Contuct/>
        </div>
    );
};

export default Home;