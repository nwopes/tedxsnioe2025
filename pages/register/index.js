import '../../styles/routes/register.scss'
import useTicket from '../../hooks/useTicket'
export default function Register() {
    const { noOfPeople, setNoOfPeople, ticketPrice, setTicketPrice, snu, setSnu } = useTicket();
    const handleClick = (isSnu) => {
        if (isSnu == 'snu') {
            setSnu(true);
        }
        else {
            setSnu(false);
        }
        console.log(snu);
    }

    const calculatePrice = () => {
        if (snu && noOfPeople) {
            return '800';
        } else if (snu && !noOfPeople) {
            return '1600';
        } else if (!snu && noOfPeople) {
            return '1000';
        } else {
            return '2000';
        }
    }
    return (
        <div className='RegisterSection'>
            <div className='RegisterSection__details'>
                <div className='RegisterSection__details--snu'>
                    <p>Enter Details</p>
                    <div className='RegisterSection__details--snu__options'>
                        <p className={snu ? 'RegisterSection__details--snu__options--red' : 'RegisterSection__details--snu__options--white'} onClick={() => handleClick('snu')}>SNU Student</p>
                        <p className={snu ? 'RegisterSection__details--snu__options--white' : 'RegisterSection__details--snu__options--red'} onClick={() => handleClick('nosnu')}>Non - SNU Student</p>
                    </div>
                </div>
                <div className='RegisterSection__details--people'>
                    <p>No. Of People</p>
                    <div className='RegisterSection__details--people__options'>
                        <p className={noOfPeople ? 'RegisterSection__details--snu__options--red' : 'RegisterSection__details--snu__options--white'} onClick={() => setNoOfPeople(true)}>1</p>
                        <p className={noOfPeople ? 'RegisterSection__details--snu__options--white' : 'RegisterSection__details--snu__options--red'} onClick={() => setNoOfPeople(false)}>2</p>
                    </div>
                </div>
                {noOfPeople ?
                    <div className='RegisterSection__details--value'>
                        <p>Details Student 1</p>
                        <div className='RegisterSection__details--value__name'>
                            <p>Full Name</p>
                            <input type='text' placeholder='Full Name' required />
                        </div>
                        <div className='RegisterSection__details--value__email'>
                            <p>Email</p>
                            <input type="email" placeholder="Email Id" required />
                        </div>
                        <div className='RegisterSection__details--value__phone'>
                            <p>Mobile Number</p>
                            <input type="number" placeholder="Mobile Number" required />
                        </div>
                    </div> :
                    <div className='RegisterSection__details--value'>
                        <p>Details Student 1</p>
                        <div className='RegisterSection__details--value__name'>
                            <p>Full Name</p>
                            <input type='text' placeholder='Full Name' required />
                        </div>
                        <div className='RegisterSection__details--value__email'>
                            <p>Email</p>
                            <input type="email" placeholder="Email Id" required />
                        </div>
                        <div className='RegisterSection__details--value__phone'>
                            <p>Mobile Number</p>
                            <input type="number" placeholder="Mobile Number" required />
                        </div>
                        <p>Details Student 2</p>
                        <div className='RegisterSection__details--value__name'>
                            <p>Full Name</p>
                            <input type='text' placeholder='Full Name' required />
                        </div>
                        <div className='RegisterSection__details--value__email'>
                            <p>Email</p>
                            <input type="email" placeholder="Email Id" required />
                        </div>
                        <div className='RegisterSection__details--value__phone'>
                            <p>Mobile Number</p>
                            <input type="number" placeholder="Mobile Number" required />
                        </div>
                    </div>
                }

                <div className='RegisterSection__details--submit'>Submit</div>
            </div>
            <div className='RegisterSection__amount'>
                <img className='RegisterSection__amount--image' src='/Images/Assets/payment.png' />
                <div className='RegisterSection__amount--priceDetails'>
                    <p>Price Details</p>
                    <div className='RegisterSection__amount--priceDetails__snu'>
                        <p>Type Of Person</p>
                        <p>{snu ? 'SNU' : 'NON-SNU'}</p>
                    </div>
                    <div className='RegisterSection__amount--priceDetails__people'>
                        <p>No. Of People</p>
                        <p>{noOfPeople ? '1' : '2'}</p>
                    </div>
                    <div className='RegisterSection__amount--priceDetails__ticket'>
                        <p>Ticket Price (per person)</p>
                        <p>{snu ? '800' : '1000'}</p>
                    </div>
                    <hr />
                    <div className='RegisterSection__amount--priceDetails__total'>
                        <p>Total Amount</p>
                        <p>{calculatePrice()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}