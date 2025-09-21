import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PaymentSuccess() {
    const router = useRouter();
    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        // Get payment info from URL query parameters
        const { receiptNumber, transactionId, amount, participants } = router.query;
        
        if (receiptNumber && transactionId && amount) {
            setPaymentInfo({
                receiptNumber,
                transactionId,
                amount,
                participantCount: participants || '1'
            });
        } else {
            // If no payment info, redirect to register page
            setTimeout(() => {
                router.push('/register');
            }, 3000);
        }
    }, [router.query, router]);

    if (!paymentInfo) {
        return (
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.loadingIcon}>⏳</div>
                    <h2>Loading payment details...</h2>
                    <p>If you&apos;re seeing this page without making a payment, you&apos;ll be redirected shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.successIcon}>✅</div>
                
                <h1 style={styles.title}>Payment Submitted Successfully!</h1>
                
                <div style={styles.infoSection}>
                    <h3 style={styles.sectionTitle}>Payment Details</h3>
                    
                    <div style={styles.detailRow}>
                        <span style={styles.label}>Receipt Number:</span>
                        <span style={styles.value}>{paymentInfo.receiptNumber}</span>
                    </div>
                    
                    <div style={styles.detailRow}>
                        <span style={styles.label}>Transaction ID:</span>
                        <span style={styles.value}>{paymentInfo.transactionId}</span>
                    </div>
                    
                    <div style={styles.detailRow}>
                        <span style={styles.label}>Amount Paid:</span>
                        <span style={styles.value}>₹{paymentInfo.amount}</span>
                    </div>
                    
                    <div style={styles.detailRow}>
                        <span style={styles.label}>Participants:</span>
                        <span style={styles.value}>{paymentInfo.participantCount} {paymentInfo.participantCount === '1' ? 'person' : 'people'}</span>
                    </div>
                </div>

                <div style={styles.statusSection}>
                    <h3 style={styles.sectionTitle}>What&apos;s Next?</h3>
                    <div style={styles.statusCard}>
                        <div style={styles.statusIcon}>⏳</div>
                        <div>
                            <h4 style={styles.statusTitle}>Pending Admin Review</h4>
                            <p style={styles.statusText}>
                                Your payment is being reviewed by our admin team. 
                                You will receive an email confirmation once approved.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={styles.actionSection}>
                    <Link href="/" style={styles.primaryButton}>
                        Return to Home
                    </Link>
                    <Link href="/register" style={styles.secondaryButton}>
                        Register Another
                    </Link>
                </div>

                <div style={styles.noteSection}>
                    <p style={styles.note}>
                        <strong>Important:</strong> Please save your receipt number for future reference. 
                        If you have any questions, contact us with your receipt number.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center'
    },
    successIcon: {
        fontSize: '64px',
        marginBottom: '20px'
    },
    loadingIcon: {
        fontSize: '48px',
        marginBottom: '20px'
    },
    title: {
        color: '#1a1a1a',
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '30px',
        lineHeight: '1.2'
    },
    infoSection: {
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '30px',
        textAlign: 'left'
    },
    sectionTitle: {
        color: '#1a1a1a',
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px',
        textAlign: 'center'
    },
    detailRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #e9ecef'
    },
    label: {
        color: '#6c757d',
        fontSize: '14px',
        fontWeight: '500'
    },
    value: {
        color: '#1a1a1a',
        fontSize: '14px',
        fontWeight: '600'
    },
    statusSection: {
        marginBottom: '30px'
    },
    statusCard: {
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        textAlign: 'left'
    },
    statusIcon: {
        fontSize: '24px'
    },
    statusTitle: {
        color: '#856404',
        fontSize: '16px',
        fontWeight: '600',
        margin: '0 0 8px 0'
    },
    statusText: {
        color: '#856404',
        fontSize: '14px',
        margin: '0',
        lineHeight: '1.4'
    },
    actionSection: {
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        marginBottom: '30px',
        flexWrap: 'wrap'
    },
    primaryButton: {
        backgroundColor: '#667eea',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        display: 'inline-block'
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        color: '#667eea',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
        border: '2px solid #667eea',
        transition: 'all 0.3s ease',
        display: 'inline-block'
    },
    noteSection: {
        backgroundColor: '#e7f3ff',
        border: '1px solid #b3d9ff',
        borderRadius: '8px',
        padding: '16px'
    },
    note: {
        color: '#0056b3',
        fontSize: '13px',
        margin: '0',
        lineHeight: '1.4'
    }
};