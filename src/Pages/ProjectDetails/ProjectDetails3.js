import React, { useContext } from 'react';
import { themeContext } from '../../Context';

import banner from '../../img/project/project3/banner.png'
import services from '../../img/project/project3/service.png'
import review from '../../img/project/project3/review.png'
const ProjectDetails3 = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div className='m-12'>
            <div className='grid lg:grid-cols-3 gap-10 m-12'>
                <img src={banner} alt="" />
                <img src={services} alt="" />
                <img src={review} alt="" />
            </div>
            <div className='mx-6 mt-6 '>
                <p style={{color:lightMode?"black":"white"}}><span className='p-title'>Project Name:</span> Green-bangla-tours</p>
                <p className='p-title'style={{color:lightMode?"blue":"#66FCF1"}}> <a href="https://green-bangla-tours-37d8b.web.app/" target="blank">Live  Link</a></p>
                <p className='p-title'style={{color:lightMode?"blue":"#66FCF1"}}> <a href="https://github.com/Shuvoghosh7/green-bangla-tours" target="blank">Github  Link</a></p>
                <h1 style={{color:lightMode?"black":"white"}}>Project Details:</h1>
                <div >
                    <ol style={{color:lightMode?"black":"white"}} className="list-item">
                        <li>1. This project is a personal Tours Guide.</li>
                        <li>2. This project has a simple navbar, banner, services, Client Review section, and a footer.</li>
                        <li>3. This system has an Email and password login system. And also have Google Login System.</li>
                        <li>4. Have a Checkout component for complete booking and this component is a protected route.</li>
                        
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails3;