import React, { useContext, useRef } from 'react';
import '../../Style/Contuct.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { GoHome } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

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
        <div className='my-20'>
            <div className=' lg:flex md:flex justify-around items-center' style={{ color: lightMode ? "#9A1750" : "white" }}>

                <div>
                    <h1 className='text-6xl'>CONTUCT ME</h1>
                    <div className='mt-5' style={{ color: lightMode ? "black" : "white" }}>
                        <p class="flex items-center justify-center md:justify-start mb-4">

                            <GoHome className='mr-4' /> Sector-11,Road-12,House-02,uttara
                        </p>
                        <p class="flex items-center justify-center md:justify-start mb-4">
                            <AiOutlineMail className='mr-4' /> shuvogosh111@gmail.com
                        </p>
                        <p class="flex items-center justify-center md:justify-start mb-4">
                            <FiPhoneCall className='mr-4' />01772385111
                        </p>
                        <p class="flex items-center justify-center md:justify-start">
                            <FiPhoneCall className='mr-4' /> 01623795232
                        </p>
                    </div>
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