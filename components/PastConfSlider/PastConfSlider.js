import React, { useState } from 'react';
import './PastConfSlider.scss'

function PastConfSlider() {
    const [checked , setChecked] = React.useState("1");
    const handleClick = (value) => {
        setChecked(value);
    }
    return (
        <section id="slider">
            <input className='radio_pastConf' value="1" type="radio" name="slider" id="s1" defaultChecked={checked === "1"} onClick={() => handleClick("1")} />
            <input className='radio_pastConf' value="2" type="radio" name="slider" id="s2" defaultChecked={checked === "2"} onClick={() => handleClick("2")} />
            <input className='radio_pastConf' value="3" type="radio" name="slider" id="s3" defaultChecked={checked === "3"} onClick={() => handleClick("3")} />
            <input className='radio_pastConf' value="4" type="radio" name="slider" id="s4" defaultChecked={checked === "4"} onClick={() => handleClick("4")} />
            <input className='radio_pastConf' value="5" type="radio" name="slider" id="s5" defaultChecked={checked === "5"} onClick={() => handleClick("5")} />

            <label for="s1" id="slide1"><img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt="" /></label>
            <label for="s2" id="slide2"><img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt="" /></label>
            <label for="s3" id="slide3"><img src="https://wallpaperaccess.com/full/1154341.jpg" alt="" /></label>
            <label for="s4" id="slide4"><img src="https://wallpapercave.com/wp/wp2634222.jpg" alt="" /></label>
            <label for="s5" id="slide5"><img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt="" /></label>
        </section>
    )
}

export default PastConfSlider;