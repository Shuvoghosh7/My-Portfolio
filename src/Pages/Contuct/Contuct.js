import React, { useContext, useRef, useState } from 'react';
import '../../Style/Contuct.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
const Contuct = () => {
    const form = useRef();
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_vs3wawh', 'template_22q0k04', form.current, 'h8c9-PO5q7X9zDh7g')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
               
                form.reset();
            });
    }
    return (
        <div>
            <p className='text-5xl my-16 text-center font-bold 'style={{color:lightMode?"#9A1750":"white"}}>CONTUCT</p>
            <div className=' lg:flex justify-around items-center'style={{color:lightMode?"#9A1750":"#116466"}}>

                <div>
                    <h1 className='text-6xl'>CONTUCT ME</h1>
                   

                </div>
                <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5'>
                    <div class="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                        <div class="form-control my-5">
                            <input type="text" 
                            name='form_name'
                            placeholder="Name" class="input input-bordered text-black" />
                    </div>
                        <div class="form-control">
                            <input type="email" 
                            name='form_email'
                            placeholder="email" class="input input-bordered text-black" />
                    </div>
                    <div class="form-control mt-5">
                       
                        <textarea name="message" type="text" placeholder="message" class="input input-bordered text-black" />
                        
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn ">SEND</button>
                    </div>
                    

                </form>
            </div>


        </div>
            </div >
        </div >
    );
};

export default Contuct;