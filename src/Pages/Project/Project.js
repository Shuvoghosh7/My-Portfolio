import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../Style/Project.css'
import project1 from '../../img/project/New Project(1).png'
import project2 from '../../img/project/project2.PNG'
import project3 from '../../img/project/project3.PNG'
import { Link } from 'react-router-dom';
const Project = () => {
    return (
        <div>
            <p className='text-5xl text-white text-center'>Recent Project</p>
            <div className='grid lg:grid-cols-3 gap-4 mt-6 mx-6 my-6'>
                <div>
                    <div>
                        <img src={project1} alt="" />
                        <div>
                            <p className='text-white text-center text-2xl'>Computer Parts Manufacturer</p>
                            <p className='text-center text-blue-600 text-xl flex justify-around'>
                                <a href='https://computer-parts-manufactu-ed97b.web.app/' target="blank"><button className='btn bg-transparent mt-5 rounded-3xl text-white'>Live side Link</button></a>
                                <button className='btn bg-transparent mt-5 rounded-3xl text-white'>See Details</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={project2} alt="" />
                        <div>
                            <p className='text-white text-center text-2xl'>SMARTPHONE
                                WAREHOUSE</p>
                            <p className='text-center text-blue-600 text-xl flex justify-around'>
                                <a href='https://smartphone-warehouse-ebc90.web.app/' target="blank"><button className='btn bg-transparent mt-5 rounded-3xl text-white'>Live side Link</button></a>
                                <button className='btn bg-transparent mt-5 rounded-3xl text-white'>See Details</button>
                            </p>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <img src={project3} alt="" />
                        <div>
                            <p className='text-white text-center text-2xl'>Computer Parts Manufacturer</p>
                            <p className='text-center text-blue-600 text-xl flex justify-around'>
                                <a href='https://computer-parts-manufactu-ed97b.web.app/' target="blank"><button className='btn bg-transparent mt-5 rounded-3xl text-white'>Live side Link</button></a>
                                <button className='btn bg-transparent mt-5 rounded-3xl text-white'>See Details</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;