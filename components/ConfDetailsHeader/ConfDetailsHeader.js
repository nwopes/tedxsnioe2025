import ConfDetailsSlider from '../ConfDetailsSlider/ConfDetailsSlider';
import './ConfDetailsHeader.scss'
import Link from "next/link";

function ConfHeader({title,year,desc, images, url}) {
    return (
        <div className='ConfHeader'>
            <div className='ConfHeader__heading'>
                <p><span>{title}</span><br /> {year}</p>
            </div>
            <div className='ConfHeader__details'>
                <div className='ConfHeader__details--slider'>
                    <ConfDetailsSlider images={images} />
                </div>
                {/* <img className='ConfHeader__details--divider' src='/Images/divider.svg' /> */}
                <div className='ConfHeader__details--content'>
                    <p className='ConfHeader__details--content__title'>{title}</p>
                    <p className='ConfHeader__details--content__desc'>
                        {desc}
                    </p>
                    {url && ( // Render the link only if 'url' is truthy
                        <p className='ConfHeader__details--content__aftermovie'>
                            <Link style={{ color: "white" }} href={`${url}`}>
                                Watch AfterMovie
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ConfHeader;