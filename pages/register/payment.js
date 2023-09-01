import '../../styles/routes/payments.scss';
import useTicket from '../../hooks/useTicket'
import Link from 'next/link';

export default function Payment() {
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
    const { noOfPeople, setNoOfPeople, ticketPrice, setTicketPrice, snu, setSnu } = useTicket();
    return (
        <div className='PaymentContainer'>
            <div className='PaymentContainer__option'>
                <p className='PaymentContainer__option--title'>Choose your payment option</p>
                <Link href='/register/google_pay'>
                    <div className='PaymentContainer__option--mode'>Google Pay</div>
                </Link>
                <Link href='/register/paytm'>
                    <div className='PaymentContainer__option--mode'>PayTM</div>
                </Link>
                <Link href='/register/cash'>
                    <div className='PaymentContainer__option--mode'>Cash</div>
                </Link>
            </div>
            <div className='PaymentContainer__details'>
                <img className='PaymentContainer__details--image' src='/Images/Assets/payment.png' />
                <div className='PaymentContainer__details--priceDetails'>
                    <p>Price Details</p>
                    <div className='PaymentContainer__details--priceDetails__snu'>
                        <p>Type Of Person</p>
                        <p>{snu ? 'SNU' : 'NON-SNU'}</p>
                    </div>
                    <div className='PaymentContainer__details--priceDetails__people'>
                        <p>No. Of People</p>
                        <p>{noOfPeople ? '1' : '2'}</p>
                    </div>
                    <div className='PaymentContainer__details--priceDetails__ticket'>
                        <p>Ticket Price (per person)</p>
                        <p>{snu ? '800' : '1000'}</p>
                    </div>
                    <hr />
                    <div className='PaymentContainer__details--priceDetails__total'>
                        <p>Total Amount</p>
                        <p>{calculatePrice()}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}