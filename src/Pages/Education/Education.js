import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import '../../Style/Education.css'

const Education = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div class="education mx-20 my-12" id="education">

            <h1 class="my-12 text-center text-5xl" style={{color:lightMode?" black":" white"}}> My <span>Education</span> </h1>

            <div class="box-container grid lg:grid-cols-3 gap-10 ">
                <div class="box" style={{borderLeft:lightMode?".2rem solid black":".2rem solid white"}} >
                    <i class="fas fa-graduation-cap"></i>
                    <h5 className='year'>2021</h5>
                    <h3 style={{color:lightMode?" #9A1750":" #66FCF1"}}>Computer Science & Engineering</h3>
                    <p style={{color:lightMode?" black":" white"}}> IUBAT - International University of Business Agriculture and Technology</p>
                    <p style={{color:lightMode?" black":" white"}}><span>Duration:</span> 2016 - 2021</p>
                    <p style={{color:lightMode?" black":" white"}}><span>Result:</span> 3.24 out of 4.00</p>
                </div>

                <div class="box" style={{borderLeft:lightMode?".2rem solid black":".2rem solid white"}} >
                    <i class="fas fa-graduation-cap"></i>
                    <h5 className='year'>2014</h5>
                    <h3 style={{color:lightMode?" #9A1750":" #66FCF1"}}> 	Higher Secondary Certificate</h3>
                    <p style={{color:lightMode?" black":" white"}}> Hajigonj Model Government College.</p>
                    <p style={{color:lightMode?" black":" white"}}><span>Board:</span> Comilla</p>
                    <p style={{color:lightMode?" black":" white"}}><span>Result:</span> 5.00 out of 5.00</p>
                </div>

                <div class="box" style={{borderLeft:lightMode?".2rem solid black":".2rem solid white"}} >
                    <i class="fas fa-graduation-cap"></i>
                    <h5 className='year'>2012</h5>
                    <h3 style={{color:lightMode?" #9A1750":" #66FCF1"}}> 	Secondary School Certificate</h3>
                    <p style={{color:lightMode?" black":" white"}}> Ujani Hazi Amiruddin Alekjan High School.</p>
                    <p style={{color:lightMode?" black":" white"}}><span>Board:</span> Comilla</p>
                    <p style={{color:lightMode?" black":" white"}}><span>Result:</span> 4.38 out of 5.00</p>
                </div>

            </div>

        </div>
    );
};

export default Education;