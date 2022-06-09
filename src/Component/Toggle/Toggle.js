import React, { useContext } from 'react';
import '../../Style/Toggle.css'
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { themeContext } from '../../Context';
;
const Toggle = () => {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    const handleClick = () => {
        // debugger
        theme.dispatch({ type: "toggle" });
      };
    return (
        <div className='toggle' onClick={handleClick}>
            <BsMoon />
            <BsSun />
            <div className="t-button"
            style={lightMode ? { left: "2px" } : { right: "2px" }}
            >

            </div>
        </div>
    );
};

export default Toggle;