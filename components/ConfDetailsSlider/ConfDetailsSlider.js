import React, { useState } from 'react';
import './ConfDetailsSlider.scss'

function ConfDetailsSlider() {
    const [checked , setChecked] = React.useState("1");
    const handleClick = (value) => {
        setChecked(value);
    }
    return (
        <section id="slider2">
            <input className='radio' value="1" type="radio" name="slider" id="s12" defaultChecked={checked === "1"} onClick={() => handleClick("1")} />
            <input className='radio' value="2" type="radio" name="slider" id="s22" defaultChecked={checked === "2"} onClick={() => handleClick("2")} />
            <input className='radio' value="3" type="radio" name="slider" id="s32" defaultChecked={checked === "3"} onClick={() => handleClick("3")} />
            <input className='radio' value="4" type="radio" name="slider" id="s42" defaultChecked={checked === "4"} onClick={() => handleClick("4")} />
            <input className='radio' value="5" type="radio" name="slider" id="s52" defaultChecked={checked === "5"} onClick={() => handleClick("5")} />

            <label onClick={(e) => e.preventDefault()} for="s1" id="slide12"><img onClick={(e) => e.preventDefault()} src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s2" id="slide22"><img onClick={(e) => e.preventDefault()} src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s3" id="slide32"><img onClick={(e) => e.preventDefault()} src="https://wallpaperaccess.com/full/1154341.jpg" alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s4" id="slide42"><img onClick={(e) => e.preventDefault()} src="https://wallpapercave.com/wp/wp2634222.jpg" alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s5" id="slide52"><img onClick={(e) => e.preventDefault()} src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt="" /></label>
        </section>
    )
}

export default ConfDetailsSlider;