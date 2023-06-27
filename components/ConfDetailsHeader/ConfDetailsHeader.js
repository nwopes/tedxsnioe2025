import ConfDetailsSlider from '../ConfDetailsSlider/ConfDetailsSlider';
import './ConfDetailsHeader.scss'

function ConfHeader() {
    return (
        <div className='ConfHeader'>
            <div className='ConfHeader__heading'>
                <p><span>MISFITS</span> 2022</p>
            </div>
            <div className='ConfHeader__details'>
                <div className='ConfHeader__details--slider'>
                    <ConfDetailsSlider />
                </div>
                <img className='ConfHeader__details--divider' src='/Images/divider.svg' />
                <div className='ConfHeader__details--content'>
                    <p className='ConfHeader__details--content__title'>Misfits</p>
                    <p className='ConfHeader__details--content__desc'>Lorem ipsum dolor si
                        amet, consectetur adipiscing
                        elit, sed do eiusmod tempor
                        incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.</p>
                    <p className='ConfHeader__details--content__aftermovie'>Watch AfterMovie</p>
                </div>
            </div>
        </div>
    )
}

export default ConfHeader;