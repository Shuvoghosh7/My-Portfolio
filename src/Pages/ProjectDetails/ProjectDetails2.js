import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import project2 from '../../img/project/project2.PNG'
const ProjectDetails2 = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div className='mt-16'>
            <div className='flex justify-center'>
                <img className='w-[600px]' src={project2} alt="" />
            </div>
            <div className='mx-6 mt-6 'style={{color:lightMode?"black":"white"}}>
                <p><span className='p-title'style={{color:lightMode?"#9A1750":"white"}}>Project Name:</span> Warehouse-management</p>
                <p className='p-title'> <a href="https://github.com/Shuvoghosh7/Warehouse-management" target="blank">Github Client Link</a></p>
               <p className='p-title'><a href="https://github.com/Shuvoghosh7/warehouse-management-server-side-" target="blank">Github Server Link</a></p>
                <h1>Project Details:</h1>
                <div>
                    <ol>
                        <li>1. This project is smartphone warehouse.This project have simple navbar, banner, Brands section,some product in home page,Upcoming Products section and a footer.</li>
                        <li>2. User can add product quentity and decrease product quentity.user can delete product item when user are login.</li>
                        <li>3. Users can delete product items when they user is login.</li>
                        <li>4. This system have firebase Email and password login system & also have Google Login System.</li>
                        <li>5. This system use mongodb database</li>
                        <li>6. Technology Used: React.js,Node.js,Express.js,Mongodb,Firebase,HTML,CSS,Tailwindcss</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails2;