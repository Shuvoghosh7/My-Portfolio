import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import '../../Style/Skills.css'
const Skills = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div className='lg:flex justify-around items-center my-20'>
            <div className='basis-1/4'>
                <p className='text-7xl' style={{color:lightMode?"#9A1750":"white"}}>My Skills</p>
            </div>
            <div class="skill-bars basis-2/4">
                <div class="bar">
                    <div class="info">
                        <span>ReactJs</span>
                    </div>
                    <div class="progress-line reactjs">
                        <span className='reactjs'></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>javaScript</span>
                    </div>
                    <div class="progress-line javaScript">
                        <span className='javaScript'></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>HTML</span>
                    </div>
                    <div class="progress-line html">
                        <span className='html'></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>CSS</span>
                    </div>
                    <div class="progress-line css">
                        <span className='css'></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>NodeJs</span>
                    </div>
                    <div class="progress-line node">
                        <span className='node'></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>Expressjs</span>
                    </div>
                    <div class="progress-line Expressjs">
                        <span className='Expressjs'></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>MongoDB</span>
                    </div>
                    <div class="progress-line MongoDB">
                        <span className='MongoDB'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;