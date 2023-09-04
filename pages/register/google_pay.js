import '../../styles/routes/google_pay.scss';
import useTicket from '../../hooks/useTicket'
import Link from 'next/link';
import { useState } from 'react';
import { payment } from '../../operations/payment.fetch';
import { useRouter } from 'next/router';
import BlurredSpinner from '../../components/BlurredSpinner/BlurredSpinner';

export default function GooglePay() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { noOfPeople, setNoOfPeople, ticketPrice, setTicketPrice, snu, setSnu, nameOne, nameTwo, emailOne, emailTwo, phoneOne, phoneTwo, modeOfPayment } = useTicket();
    const calculatePrice = () => {
        if (snu && noOfPeople) {
            return '750';
        } else if (snu && !noOfPeople) {
            return '1200';
        } else if (!snu && noOfPeople) {
            return '750';
        } else {
            return '1200';
        }
    }
    const [tid, setTid] = useState('');
    const handleClick = async () => {
        if (tid === '') {
            alert('Please enter a vaid transaction id');
            return;
        } else {
            if (noOfPeople) {
                // if (nameOne === '' || emailOne === '' || phoneOne === '' || modeOfPayment === '') {
                //     alert('There is a problem from our side. Please refill the form without reloading the screen');
                //     return;
                // }
            } else {
                // if (nameOne === '' || nameTwo === '' || emailOne === '' || emailTwo === '' || phoneOne === '' || phoneTwo === '' || modeOfPayment === '') {
                //     alert('There is a problem from our side. Please refill the form without reloading the screen');
                //     return;
                // }
            }
            setLoading(true);
            try {
                const data = {
                    'name1': localStorage.getItem('name1'),
                    'name2': localStorage.getItem('name2'),
                    'email1': localStorage.getItem('email1'),
                    'email2': localStorage.getItem('email2'),
                    'phone1': localStorage.getItem('phone1'),
                    'phone2': localStorage.getItem('phone2'),
                    'modeOfPayment': localStorage.getItem('modeOfPayment'),
                    'noOfPeople': parseInt(localStorage.getItem('noOfPeople')),
                    'amountPaid': localStorage.getItem('noOfPeople') == '1' ? 750 : 1200,
                    'snu': localStorage.getItem('snu') === 'true' ? true : false,
                    'tid': tid,
                    'paymentVerified': false,
                    'emailSent': false,
                }
                const response = await payment(data);
                if (response.status === 200) {
                    localStorage.clear();
                    router.push('/register/confirm');
                } else {
                    alert('INTERNAL SERVER ERROR');
                    return;
                }
                setLoading(false);
            } catch (e) {
                console.log(e);
                alert('INTERNAL SERVER ERROR');
                setLoading(false);
            }
        }
    }
    return (
        <>
            {loading ? <BlurredSpinner /> : <></>}
            <div className='GooglePay'>
                <div className='GooglePay__qr'>
                    <p className='GooglePay__qr--text'>Scan the QR to Pay</p>
                    <p style={{ fontSize: "1rem", marginTop: "0", marginBottom: ".5rem" }} className='GooglePay__qr--text'>Aditi Mohapatra</p>
                    <img className='GooglePay__qr--image' src='/Images/Assets/google_pay.png' />
                    <div className='GooglePay__qr--TID'>
                        <input onChange={(e) => setTid(e.target.value)} type='text' placeholder='Transaction ID' required />
                    </div>
                    <p onClick={() => handleClick()} className='GooglePay__qr--bottom'>Proceed</p>
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
                        <div className='GooglePay__details--priceDetails__ticket'>
                            <p>Early Bird Discount</p>
                            <p>{noOfPeople ? '-50' : '-200'}</p>
                        </div>
                        <hr />
                        <div className='GooglePay__details--priceDetails__total'>
                            <p>Total Amount</p>
                            <p>{calculatePrice()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}