import React from 'react';
import project3 from '../../img/project/project3.PNG'
const ProjectDetails3 = () => {
    return (
        <div className='mt-16'>
            <div className='flex justify-center'>
                <img className='w-[600px]' src={project3} alt="" />
            </div>
            <div className='mx-6 mt-6 text-white'>
                <p><span className='p-title'>Project Name:</span> Green-bangla-tours</p>
                <p className='p-title'> <a href="https://github.com/Shuvoghosh7/green-bangla-tours" target="blank">Github  Link</a></p>
                <h1>Project Details:</h1>
                <div>
                    <ol>
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