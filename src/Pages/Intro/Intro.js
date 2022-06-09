import React from 'react';
import '../../Style/Intro.css'
import myProfile from '../../img/shuvo1.png'
import facebook from '../../img/icon/Facebook.png'
import LinkedIn from '../../img/icon/linkedin.png'
import Github from '../../img/icon/github.png'
import { HiDownload } from 'react-icons/hi';
import Resume from '../../Pages/Intro/Resume.pdf';

const Intro = () => {
    
    return (
        <div className='mt-28'>
            <div className='lg:flex justify-around items-center'>
                <div className='text-white i-name'>
                    <p className='text-6xl'>Hello! I’m</p>
                    <p className='text-6xl'>Shuvo Gosh</p>
                    <h1 className='text-xl mt-3'> Frontend Developer with high level of experience in web designing and <br /> development, producting the Quality work</h1>
                    <a href={Resume} download>
                        <button class="btn bg-transparent mt-5 rounded-3xl text-white">Get Resume <span className='ml-2'><HiDownload /></span></button>
                    </a>
                    <div className="i-icons">
                        <img src={Github} alt="" />
                        <img src={LinkedIn} alt="" />
                        <img className='fb' src={facebook} alt="" />
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