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
                    <ul>
                        <li>1. This project have navbar, banner, Parts section,Business Summary,Most order countries are section,Upcoming Products section,Reviews and a footer.</li>
                        <li>2. Parts section have product image,price,description,quintity and a order button.</li>
                        <li>3. When click order button go purchase page and hear see product details and a from for add order</li>
                        <li>4. This system have firebase Email and password login system & also have Google Login System.</li>
                        <li>5. When user logi then see Dashboard route.inside dashboard normal use see user order, give user review and user profile</li>
                        <li>6. System have card payment system.</li>
                        <li>7. When admin login then admin can make admin,admin can add new product,admin can manage all product and also see profile.</li>
                        <li>8. This system use mongodb database</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails1;