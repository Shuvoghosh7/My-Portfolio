import React, { useContext } from 'react';
import '../../Style/Intro.css'
import myProfile from '../../img/myProfile.png'
import { HiDownload } from 'react-icons/hi';
import Resume from '../../Pages/Intro/Resume.pdf';
import { themeContext } from '../../Context';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion"
import Fade from 'react-reveal/Fade';
const Intro = () => {
    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (

        <div class="hero  lg:mt-28">

            <div class="hero-content flex-col lg:flex-row-reverse gap-x-10">

                <div className='lg:mt-[-100px]'>
                    <img className='w-[300px]' src={myProfile} alt="" />
                    
                </div>


                <div>
                    <div className=' i-name' style={{ color: lightMode ? "black" : "white" }}>
                        <Fade left>
                            <p className='text-3xl'>Hello! I’m</p>
                        </Fade>
                        <Fade top>
                            <p className='text-6xl'>Shuvo Gosh</p>
                        </Fade>
                        <Fade bottom>
                            <h1 className='text-xl mt-3' style={{ color: lightMode ? "#9A1750" : "#66FCF1" }}>JUNIOR REACT JS DEVELOPER</h1>
                        </Fade>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href={Resume} download="Resume">
                                <button class="btn bg-transparent mt-5 rounded-3xl" style={{ color: lightMode ? "black" : "white" }}>Get Resume <span className='ml-2'><HiDownload /></span></button>
                            </a>

                        </motion.button>

                        <div className="i-icons">
                            <a href="https://github.com/Shuvoghosh7" target="blank"><BsGithub className='icons git' /></a>
                            <a href="https://www.linkedin.com/in/shuvogosh/" target="blank"> <FaLinkedinIn className='icons li' /></a>
                            <a href="https://www.facebook.com/shuvo.gosh.5" target="blank"> <FaFacebookF className='icons fb' /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Intro;