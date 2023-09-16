import React from 'react'
import '../styles/routes/delegate.scss'
import { createGuessOp } from '../operations/payment.fetch';
import BlurredSpinner from '../components/BlurredSpinner/BlurredSpinner';

export default function Delegate() {
    const [loading, setLoading] = React.useState(false);
    const [guess1, setGuess1] = React.useState('');
    const [guess2, setGuess2] = React.useState('');
    const [guess3, setGuess3] = React.useState('');
    const [guess4, setGuess4] = React.useState('');
    const [guess5, setGuess5] = React.useState('');
    const [guess6, setGuess6] = React.useState('');
    const [guess7, setGuess7] = React.useState('');
    const [guess8, setGuess8] = React.useState('');
    const [guess9, setGuess9] = React.useState('');
    const [guess10, setGuess10] = React.useState('');
    const [guess11, setGuess11] = React.useState('');
    const [guess12, setGuess12] = React.useState('');
    const [guess13, setGuess13] = React.useState('');
    const [guess14, setGuess14] = React.useState('');
    const [guess15, setGuess15] = React.useState('');
    const [guess16, setGuess16] = React.useState('');
    const [guess17, setGuess17] = React.useState('');
    const [guess18, setGuess18] = React.useState('');
    const [guess19, setGuess19] = React.useState('');
    const [guess20, setGuess20] = React.useState('');
    const [snuId, setSnuId] = React.useState('');
    const [number, setNumber] = React.useState('');
    const handleClick = async () => {
        if (guess1 === '' || snuId === '' || number === '') {
            alert('Please fill all the fields');
            return;
        }
        else {
            setLoading(true);
            try {
                const data = {
                    'snuId': snuId,
                    'number': number,
                    'guess1': guess1,
                    'guess2': guess2,
                    'guess3': guess3,
                    'guess4': guess4,
                    'guess5': guess5,
                    'guess6': guess6,
                    'guess7': guess7,
                    'guess8': guess8,
                    'guess9': guess9,
                    'guess10': guess10,
                    'guess11': guess11,
                    'guess12': guess12,
                    'guess13': guess13,
                    'guess14': guess14,
                    'guess15': guess15,
                    'guess16': guess16,
                    'guess17': guess17,
                    'guess18': guess18,
                    'guess19': guess19,
                    'guess20': guess20,
                }
                const response = await createGuessOp(data);
                if (response.status === 200) {
                    alert('Your Guess has been saved');
                    window.location.reload();
                } else {
                    alert('INTERNAL SERVER ERROR');

                }
            } catch (e) {
                console.log(e);
            }
            setLoading(false)
        }
    }
    return (
        <>
            {loading ? <BlurredSpinner /> : <></>}
            <div className="DelegateSection">
                <p className="DelegateSection__title">What do you feel could be the delegate items ?</p>
                <div className='DelegateSection__guesses'>
                    <input onChange={(e) => setGuess1(e.target.value)} type="text" placeholder='Type Your Guess 1' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess2(e.target.value)} type="text" placeholder='Type Your Guess 2' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess3(e.target.value)} type="text" placeholder='Type Your Guess 3' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess4(e.target.value)} type="text" placeholder='Type Your Guess 4' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess5(e.target.value)} type="text" placeholder='Type Your Guess 5' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess6(e.target.value)} type="text" placeholder='Type Your Guess 6' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess7(e.target.value)} type="text" placeholder='Type Your Guess 7' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess8(e.target.value)} type="text" placeholder='Type Your Guess 8' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess9(e.target.value)} type="text" placeholder='Type Your Guess 9' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess10(e.target.value)} type="text" placeholder='Type Your Guess 10' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess11(e.target.value)} type="text" placeholder='Type Your Guess 11' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess12(e.target.value)} type="text" placeholder='Type Your Guess 12' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess13(e.target.value)} type="text" placeholder='Type Your Guess 13' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess14(e.target.value)} type="text" placeholder='Type Your Guess 14' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess15(e.target.value)} type="text" placeholder='Type Your Guess 15' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess16(e.target.value)} type="text" placeholder='Type Your Guess 16' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess17(e.target.value)} type="text" placeholder='Type Your Guess 17' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess18(e.target.value)} type="text" placeholder='Type Your Guess 18' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess19(e.target.value)} type="text" placeholder='Type Your Guess 19' className="DelegateSection__guesses__guessinput" />
                    <input onChange={(e) => setGuess20(e.target.value)} type="text" placeholder='Type Your Guess 20' className="DelegateSection__guesses__guessinput" />

                </div>
                <input onChange={(e) => setSnuId(e.target.value)} type="text" placeholder='Type Your SNU ID' className="DelegateSection__input" />
                <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Type Your WhatsApp Number' className="DelegateSection__input" />
                <button onClick={() => handleClick()} className='DelegateSection__submit'>Submit</button>
            </div>
        </>
    )
}