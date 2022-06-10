import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import about from '../../img/about.png'
import '../../Style/About.css'
const About = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div className='lg:flex md:flex flex-row justify-center items-center my-6'>
            <div className='basis-1/4 ml-12'>
                <img src={about} alt="" />
            </div>
            <div className='basis-1/2'>
                <h1 className='text-5xl my-3' style={{color:lightMode?"#9A1750":"white"}}>ABOUT ME</h1>
                <p className='text-3xl my-2' style={{color:lightMode?"black":"#66FCF1"}}>Web Developer <span style={{color:lightMode?"#9A1750":"white"}}>& Designer</span></p>
                <p className='text-justify' style={{color:lightMode?"black":"white"}}>I am a Front-end web developer.Being interested to explore  technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role. While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment.I can try to provide clean code & pixel perfect design.</p>
            </div>
        </div>
    );
};

export default About;