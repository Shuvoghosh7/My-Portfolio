import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../Style/Project.css'
import project1 from '../../img/project/New Project(1).png'
import project2 from '../../img/project/project2.PNG'
import project3 from '../../img/project/project3.PNG'
import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
const Project = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div className='mt-16 lg:mx-24'>
            <p className='text-5xl  text-center font-bold' style={{color:lightMode?"#9A1750":"white"}}>RECENT PROJECT</p>
            <div className='grid lg:grid-cols-3 gap-4 mt-6 mx-6 my-6'>
                <div>
                    <div className='card shadow-2xl pb-5'style={{background:lightMode?"#D4D9E3":"#8391AD"}}>
                        <img src={project1} alt="" />
                        <div>
                            <p className=' text-2xl text-center' style={{color:lightMode?"black":"white"}} >Computer Parts Manufacturer</p>
                            <p className='text-center  text-xl flex justify-around'>
                                <a href='https://computer-parts-manufactu-ed97b.web.app/' target="blank"><button className='btn bg-transparent mt-5 rounded-3xl 'style={{color:lightMode?"blue":"white"}}>Live side Link</button></a>
                                <Link to="/project1" className='btn bg-transparent mt-5 rounded-3xl ' style={{color:lightMode?"blue":"white"}}>See Details</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card shadow-2xl pb-5'style={{background:lightMode?"#D4D9E3":"#8391AD"}}>
                        <img src={project2} alt="" />
                        <div>
                            <p className='text-center text-2xl' style={{color:lightMode?"black":"white"}}>SMARTPHONE
                                WAREHOUSE</p>
                            <p className='text-center  text-xl flex justify-around'>
                                <a href='https://smartphone-warehouse-ebc90.web.app/' target="blank"><button className='btn bg-transparent mt-5 rounded-3xl 'style={{color:lightMode?"blue":"white"}}>Live side Link</button></a>
                                <Link to="/project2" className='btn bg-transparent mt-5 rounded-3xl 'style={{color:lightMode?"blue":"white"}}>See Details</Link>
                            </p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='card shadow-2xl pb-5'style={{background:lightMode?"#D4D9E3":"#8391AD"}}>
                        <img src={project3} alt="" />
                        <div>
                            <p className='text-center text-2xl' style={{color:lightMode?"black":"white"}}>Computer Parts Manufacturer</p>
                            <p className='text-center text-xl flex justify-around'>
                                <a href='https://green-bangla-tours-37d8b.web.app/' target="blank"><button className='btn bg-transparent mt-5 rounded-3xl'style={{color:lightMode?"blue":"white"}}>Live side Link</button></a>
                                <Link to="/project3" className='btn bg-transparent mt-5 rounded-3xl ' style={{color:lightMode?"blue":"white"}}>See Details</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;