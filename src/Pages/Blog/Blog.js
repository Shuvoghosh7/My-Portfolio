import React, { useContext } from 'react';
import { themeContext } from '../../Context';

const Blog = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div>
            <h1 className='text-5xl text-center mt-20' style={{color:lightMode?"#9A1750":"#66FCF1"}}>Comming Soon</h1>
        </div>
    );
};

export default Blog;