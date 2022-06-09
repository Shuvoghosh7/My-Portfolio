import React, { useContext } from 'react';
import '../../Style/Intro.css'
import myProfile from '../../img/shuvo1.png'
import facebook from '../../img/icon/Facebook.png'
import LinkedIn from '../../img/icon/linkedin.png'
import Github from '../../img/icon/github.png'
import { HiDownload } from 'react-icons/hi';
import Resume from '../../Pages/Intro/Resume.pdf';
import { themeContext } from '../../Context';

const Intro = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div className='mt-28'>
            <div className='lg:flex justify-around items-center'>
                <div className=' i-name' style={{color:lightMode?"black":"white"}}>
                    <p className='text-6xl'>Hello! I’m</p>
                    <p className='text-6xl'>Shuvo Gosh</p>
                    <h1 className='text-xl mt-3'> Frontend Developer with mid level of experience in <br /> web development  and  designing</h1>
                    <a href={Resume} download>
                        <button class="btn bg-transparent mt-5 rounded-3xl" style={{color:lightMode?"black":"white"}}>Get Resume <span className='ml-2'><HiDownload /></span></button>
                    </a>
                    <div className="i-icons">
                        <a href="https://github.com/Shuvoghosh7" target="blank"><img src={Github} alt="" /></a>
                       <a href="https://www.linkedin.com/in/shuvogosh/" target="blank"> <img src={LinkedIn} alt="" /></a>
                       <a href="https://www.facebook.com/shuvo.gosh.5" target="blank"> <img className='fb' src={facebook} alt="" /></a>
                    </div>
                </div>
                <div className='lg:mt-[-100px]'>
                    <img src={myProfile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;