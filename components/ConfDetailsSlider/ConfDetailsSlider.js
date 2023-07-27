import React, { useState } from 'react';
import './ConfDetailsSlider.scss'
import ted_2022_1 from '../../public/Images/2022/IMG_0743.JPG'
import ted_2022_2 from '../../public/Images/2022/IMG_0804.JPG'
import ted_2022_3 from '../../public/Images/2022/IMG_0667.JPG'
import ted_2022_4 from '../../public/Images/2022/IMG_0879.JPG'
import ted_2022_5 from '../../public/Images/2022/IMG_0930.JPG'

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

            <label onClick={(e) => e.preventDefault()} for="s1" id="slide12"><img onClick={(e) => e.preventDefault()} src={ted_2022_1.src} alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s2" id="slide22"><img onClick={(e) => e.preventDefault()} src={ted_2022_2.src} alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s3" id="slide32"><img onClick={(e) => e.preventDefault()} src={ted_2022_3.src} alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s4" id="slide42"><img onClick={(e) => e.preventDefault()} src={ted_2022_4.src} alt="" /></label>
            <label onClick={(e) => e.preventDefault()} for="s5" id="slide52"><img onClick={(e) => e.preventDefault()} src={ted_2022_5.src} alt="" /></label>
        </section>
    )
}

export default ConfDetailsSlider;