import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../../styles/routes/confirm.scss';

export default function Confirm() {

    const router = useRouter();

    const [receiptData, setReceiptData] = useState(null);

    useEffect(() => {

        const receiptNumber = 'TXR' + Date.now().toString().slice(-8);

        setReceiptData({

            receiptNumber,export default function Confirm() {export default function Confirm() {

            timestamp: new Date().toLocaleString(),

            status: 'Payment Submitted - Pending Review'    const router = useRouter();    const router = useRouter();

        });

    }, []);    const [receiptData, setReceiptData] = useState(null);    const [receiptData, setReceiptData] = useState(null);



    return (

        <div style={{ 

            minHeight: '100vh',     useEffect(() => {    useEffect(() => {

            display: 'flex', 

            alignItems: 'center',         // Generate a receipt number for display        // Generate a receipt number for display

            justifyContent: 'center',

            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',        const receiptNumber = 'TXR' + Date.now().toString().slice(-8);        const receiptNumber = 'TXR' + Date.now().toString().slice(-8);

            padding: '20px'

        }}>        setReceiptData({        setReceiptData({

            <div style={{

                background: 'white',            receiptNumber,            receiptNumber,

                padding: '40px',

                borderRadius: '15px',            timestamp: new Date().toLocaleString(),            timestamp: new Date().toLocaleString(),

                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',

                maxWidth: '600px',            status: 'Payment Submitted - Pending Review'            status: 'Payment Submitted - Pending Review'

                width: '100%',

                textAlign: 'center'        });        });

            }}>

                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>    }, []);    }, []);

                

                <h1 style={{ color: '#333', marginBottom: '20px' }}>

                    Payment Submitted Successfully!

                </h1>    return (    return (

                

                {receiptData && (        <div className="confirm-container">        <div className="confirm-container">

                    <div style={{ 

                        background: '#f8f9fa',             <div className="confirm-content">            <div className="confirm-content">

                        padding: '20px', 

                        borderRadius: '8px',                 <div className="success-icon">                <div className="success-icon">

                        marginBottom: '20px',

                        textAlign: 'left'                    ✅                    ✅

                    }}>

                        <h3 style={{ marginBottom: '15px', color: '#333' }}>Receipt Details</h3>                </div>                </div>

                        <p><strong>Receipt Number:</strong> {receiptData.receiptNumber}</p>

                        <p><strong>Submitted At:</strong> {receiptData.timestamp}</p>                                

                        <p><strong>Status:</strong> {receiptData.status}</p>

                    </div>                <h1>Payment Submitted Successfully!</h1>                <h1>Payment Submitted Successfully!</h1>

                )}

                                

                <div style={{ marginBottom: '30px', textAlign: 'left' }}>

                    <p>Your payment has been submitted and is now pending admin review.</p>                {receiptData && (                {receiptData && (

                    <p>You will receive an email confirmation once your payment is approved.</p>

                </div>                    <div className="receipt-info">                    <div className="receipt-info">



                <div style={{ marginBottom: '30px', textAlign: 'left' }}>                        <h3>Receipt Details</h3>                        <h3>Receipt Details</h3>

                    <h3 style={{ marginBottom: '15px' }}>What happens next?</h3>

                    <ul style={{ listStyle: 'none', padding: 0 }}>                        <p><strong>Receipt Number:</strong> {receiptData.receiptNumber}</p>                        <p><strong>Receipt Number:</strong> {receiptData.receiptNumber}</p>

                        <li style={{ marginBottom: '8px' }}>✓ Your payment details have been recorded</li>

                        <li style={{ marginBottom: '8px' }}>⏳ Admin will review your transaction screenshot</li>                        <p><strong>Submitted At:</strong> {receiptData.timestamp}</p>                        <p><strong>Submitted At:</strong> {receiptData.timestamp}</p>

                        <li style={{ marginBottom: '8px' }}>📧 You'll receive email confirmation upon approval</li>

                        <li style={{ marginBottom: '8px' }}>🎫 Your tickets will be valid after approval</li>                        <p><strong>Status:</strong> {receiptData.status}</p>                        <p><strong>Status:</strong> {receiptData.status}</p>

                    </ul>

                </div>                    </div>                    </div>



                <div style={{                 )}                )}

                    background: '#fff3cd', 

                    border: '1px solid #ffeaa7', 

                    padding: '15px', 

                    borderRadius: '5px',                 <div className="success-message">                <div className="success-message">

                    marginBottom: '30px',

                    textAlign: 'left'                    <p>Your payment has been submitted and is now pending admin review.</p>                    <p>Your payment has been submitted and is now pending admin review.</p>

                }}>

                    <h4 style={{ margin: '0 0 10px 0', color: '#856404' }}>Important:</h4>                    <p>You will receive an email confirmation once your payment is approved.</p>                    <p>You will receive an email confirmation once your payment is approved.</p>

                    <p style={{ margin: 0, color: '#856404' }}>

                        Please keep your transaction ID safe for future reference.                 </div>                </div>

                        Contact us if you don't receive confirmation within 24-48 hours.

                    </p>

                </div>

                <div className="next-steps">                <div className="next-steps">

                <div style={{ 

                    display: 'flex',                     <h3>What happens next?</h3>                    <h3>What happens next?</h3>

                    gap: '15px', 

                    justifyContent: 'center',                    <ul>                    <ul>

                    marginBottom: '20px',

                    flexWrap: 'wrap'                        <li>✓ Your payment details have been recorded</li>                        <li>✓ Your payment details have been recorded</li>

                }}>

                    <button                         <li>⏳ Admin will review your transaction screenshot</li>                        <li>⏳ Admin will review your transaction screenshot</li>

                        onClick={() => router.push('/')}

                        style={{                        <li>📧 You'll receive email confirmation upon approval</li>                        <li>📧 You'll receive email confirmation upon approval</li>

                            padding: '12px 24px',

                            background: '#667eea',                        <li>🎫 Your tickets will be valid after approval</li>                        <li>🎫 Your tickets will be valid after approval</li>

                            color: 'white',

                            border: 'none',                    </ul>                    </ul>

                            borderRadius: '5px',

                            cursor: 'pointer',                </div>                </div>

                            fontSize: '16px'

                        }}

                    >

                        Back to Home                <div className="important-note">                <div className="important-note">

                    </button>

                                        <h4>Important:</h4>                    <h4>Important:</h4>

                    <button 

                        onClick={() => router.push('/register')}                    <p>Please keep your transaction ID safe for future reference. Contact us if you don't receive confirmation within 24-48 hours.</p>                    <p>Please keep your transaction ID safe for future reference. Contact us if you don't receive confirmation within 24-48 hours.</p>

                        style={{

                            padding: '12px 24px',                </div>                </div>

                            background: '#6c757d',

                            color: 'white',

                            border: 'none',

                            borderRadius: '5px',                <div className="action-buttons">                <div className="action-buttons">

                            cursor: 'pointer',

                            fontSize: '16px'                    <button                     <button 

                        }}

                    >                        onClick={() => router.push('/')}                        onClick={() => router.push('/')}

                        Register Another Person

                    </button>                        className="btn-primary"                        className="btn-primary"

                </div>

                    >                    >

                <div style={{ fontSize: '14px', color: '#666' }}>

                    <p>                        Back to Home                        Back to Home

                        <strong>Need help?</strong> Contact us at{' '}

                        <a href="mailto:admin@tedxsnioe.com" style={{ color: '#667eea' }}>                    </button>                    </button>

                            admin@tedxsnioe.com

                        </a>                                        

                    </p>

                </div>                    <button                     <button 

            </div>

        </div>                        onClick={() => router.push('/register')}                        onClick={() => router.push('/register')}

    );

}                        className="btn-secondary"                        className="btn-secondary"

                    >                    >

                        Register Another Person                        Register Another Person

                    </button>                    </button>

                </div>                </div>



                <div className="contact-info">                <div className="contact-info">

                    <p>                    <p>

                        <strong>Need help?</strong> Contact us at{' '}                        <strong>Need help?</strong> Contact us at{' '}

                        <a href="mailto:admin@tedxsnioe.com">admin@tedxsnioe.com</a>                        <a href="mailto:admin@tedxsnioe.com">admin@tedxsnioe.com</a>

                    </p>                    </p>

                </div>                </div>

            </div>            </div>

        </div>        </div>

    );        <div className="Confirm">

}            <div className='ConfirmSection'>
                <div className="confirm-icon">
                    <svg 
                        width="80" 
                        height="80" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="12" fill="#4CAF50"/>
                        <path 
                            d="M9 12l2 2 4-4" 
                            stroke="white" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                
                <p className="ConfirmSection__thank">Payment Receipt</p>
                <p className="ConfirmSection__email">Your payment has been submitted successfully!</p>
                
                {receiptData && (
                    <div className="receipt-details">
                        <div className="receipt-header">
                            <h3>TEDx SNIOE 2025</h3>
                            <p>Payment Receipt</p>
                        </div>
                        
                        <div className="receipt-info">
                            <div className="receipt-row">
                                <span>Receipt No:</span>
                                <span>{receiptData.receiptNumber}</span>
                            </div>
                            <div className="receipt-row">
                                <span>Date & Time:</span>
                                <span>{receiptData.timestamp}</span>
                            </div>
                            <div className="receipt-row">
                                <span>Status:</span>
                                <span className="status-submitted">{receiptData.status}</span>
                            </div>
                        </div>

                        <div className="receipt-note">
                            <h4>Important Information:</h4>
                            <ul>
                                <li>Your payment has been successfully recorded</li>
                                <li>This serves as your payment receipt</li>
                                <li>We will contact you via email only if there are any issues with your payment</li>
                                <li>If you don't hear from us within 48 hours, your payment is confirmed</li>
                                <li>Keep this receipt for your records</li>
                            </ul>
                        </div>
                    </div>
                )}

                <div className="confirm-actions">
                    <Link href='/'>
                        <p className='ConfirmSection__home'>Back to Home</p>
                    </Link>
                    <Link href='/contact'>
                        <p className='ConfirmSection__contact'>Contact Us</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}