import '../../styles/routes/google_pay.scss';
import useTicket from '../../hooks/useTicket'
import Link from 'next/link';

export default function Cash() {
    const { noOfPeople, setNoOfPeople, ticketPrice, setTicketPrice, snu, setSnu } = useTicket();
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
        <div className='GooglePay'>
            <div className='GooglePay__qr'>
                <p className='GooglePay__qr--text'>Contact this number for further details</p>
                <p className='GooglePay__qr--text'>Dwiti - +91 12345 67890</p>
                <Link href='/register/confirm'>
                <p className='GooglePay__qr--bottom'>Proceed</p>
                </Link>
            </div>
            <div className='GooglePay__details'>
                <img className='GooglePay__details--image' src='/Images/Assets/payment.png' />
                <div className='GooglePay__details--priceDetails'>
                    <p>Price Details</p>
                    <div className='GooglePay__details--priceDetails__snu'>
                        <p>Type Of Person</p>
                        <p>{snu ? 'SNU' : 'NON-SNU'}</p>
                    </div>
                    <div className='GooglePay__details--priceDetails__people'>
                        <p>No. Of People</p>
                        <p>{noOfPeople ? '1' : '2'}</p>
                    </div>
                    <div className='GooglePay__details--priceDetails__ticket'>
                        <p>Ticket Price (per person)</p>
                        <p>{snu ? '800' : '1000'}</p>
                    </div>
                    <hr />
                    <div className='GooglePay__details--priceDetails__total'>
                        <p>Total Amount</p>
                        <p>{calculatePrice()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}