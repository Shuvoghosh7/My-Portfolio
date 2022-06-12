import React, { useContext } from 'react';
import { themeContext } from '../../Context';

import order from '../../img/project/project1/order2.png'
import product from '../../img/project/project1/product.png'
import review from '../../img/project/project1/review.png'
import '../../Style/ProjectDetails.css'
const ProjectDetails1 = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div className=' m-12'>
            <div className='grid lg:grid-cols-3 gap-10 m-12'>
                <img src={product} alt="" />
                <img src={order} alt="" />
                <img src={review} alt="" />
            </div>
            <div className='mx-6 mt-6 'style={{color:lightMode?"black":"white"}}>
                <p><span className='p-title 'style={{color:lightMode?"#9A1750":"white"}}>Project Name:</span > Computer Parts Manufacturer</p>
               <p className='p-title' style={{color:lightMode?"blue":"#66FCF1"}}> <a href="https://computer-parts-manufactu-ed97b.web.app/" target="blank">Live Side Link</a></p>
               <p className='p-title' style={{color:lightMode?"blue":"#66FCF1"}}> <a href="https://github.com/Shuvoghosh7/-manufacturer-website-client-side" target="blank">Github Client Link</a></p>
               <p className='p-title' style={{color:lightMode?"blue":"#66FCF1"}}><a href="https://github.com/Shuvoghosh7/-manufacturer-website-server-side" target="blank">Github Server Link</a></p>
                <h1>Project Details:</h1>
                <div>
                    <ul className='list-item'>
                        <li>1. This is a full-stack project. This project home page has six sections. The products section shows six products. and has a button to see more when click then see all products.</li>
                        <li>2. Every product has an order now button. When clicking this button user can see product details and can complete the order but the user can not order less than the minimum quantity or more than the Available Quantity.</li>
                        <li>3. This  project has a user panel and an admin panel.</li>
                        <li>4.When the user login the user can see the user's order, and user profile. Users all add user profile information and update information and the user can add a review Whish is shown on the home page. </li>
                        <li>5.When Admin Login, Admin can see profile,add product, delete the product and manage all products. Admin can make admin another user.</li>
                        <li>6. System have card payment system</li>
                        <li>7. When admin login then admin can make admin,admin can add new product,admin can manage all product and also see profile.</li>
                        <li>8.For front end part I use reactjs, javaScript, HTML, CSS, and tailwindcss and back end use Nodejs, Expressjs, REST API</li>
                        <li>8. This system use mongodb database</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails1;