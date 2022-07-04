import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import about from '../../img/about.png'
import '../../Style/About.css'
import Fade from 'react-reveal/Fade';
const About = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <Fade bottom>
        <div className='lg:flex  flex-row justify-center items-center my-8'>
            <div className='basis-1/4 ml-12'>
                <img src={about} alt="" />
            </div>
            <div className='basis-1/2 mt-16'>
                <h1 className='text-5xl my-3 ml-5' style={{color:lightMode?"#9A1750":"white"}}>ABOUT ME</h1>
                <p className='text-3xl my-2 mx-5' style={{color:lightMode?"black":"#66FCF1"}}>JUNIOR REACT JS <span style={{color:lightMode?"#9A1750":"white"}}>DEVELOPER</span></p>
                <p className='text-justify mx-5' style={{color:lightMode?"black":"white"}}>I am Shuvo Gosh, a  reactjs Developer. I have completed my B.sc in Computer Science and Engineering at International University of Business Agriculture and Technology. I am interested in exploring technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role. I have completed a six-month-long web development Bootcamp course from Programming Hero on the MERN stack. From the outcome, I can develop Single Page Applications with ReactJs, JavaScript, Bootstrap-5, Tailwindcss, HTML5,CSS3 and SASS. I have some skills in Node.js, Express.js, and MongoDB and developing REST API.  I take my work as a Web Developer seriously, which means I always ensure my skills are kept up to date with this rapidly changing new technology.</p>
            </div>
        </div>
        </Fade>
    );
};

export default About;