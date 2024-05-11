import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from '../data/Passchar';

export default function PasswordContainer() {
    let [uppercase, setUppercase] = useState(false);
    let [lowercase, setLowercase] = useState(false);
    let [numbercase, setNumbercase] = useState(false);
    let [symbolcase, setSymbolcase] = useState(false);
    let [passLength, setPassLength] = useState(8);
    let [password, setPassword] = useState('');

    let createPassword = () => {
        let charSet = '';
        let finalPassword = '';
        if (uppercase || lowercase || numbercase || symbolcase) {
            if (uppercase) charSet += UC;
            if (lowercase) charSet += LC;
            if (numbercase) charSet += NC;
            if (symbolcase) charSet += SC;
            for (let i = 0; i < passLength; i++) {
                finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }
            setPassword(finalPassword);
        }
        else {
            toast('Select atleast one case!');
        }
    }

    let copyPass = () => {
        try {
            navigator.clipboard.writeText(password);
            toast.success('Password Copied!')
        } catch (err) {
            toast.error('Error copying password!');
        }
    }

    return (
        <section className='container'>
            <ToastContainer />
            <div className="outerDiv">
                <h2>Password Generator</h2>
                <div className="inputSection">
                    <input type="text" id='password-input' value={password} readOnly />
                    <button onClick={copyPass}>Copy</button>
                </div>
                <div className="checkbox-container">
                    <label htmlFor="passlength">Length</label>
                    <input type="number" name='passlength' value={passLength} onChange={(e) => setPassLength(e.target.value)} min={8} max={20} required />
                </div>
                <div className="checkbox-container">
                    <label htmlFor="uc">Include uppercase</label>
                    <input type="checkbox" name='uc' checked={uppercase} onChange={() => setUppercase(!uppercase)} required />
                </div>
                <div className="checkbox-container">
                    <label htmlFor="lc">Include lowercase</label>
                    <input type="checkbox" name='lc' checked={lowercase} onChange={() => setLowercase(!lowercase)} required />
                </div>
                <div className="checkbox-container">
                    <label htmlFor="numbers">Include numbers</label>
                    <input type="checkbox" name='numbers' checked={numbercase} onChange={() => setNumbercase(!numbercase)} required />
                </div>
                <div className="checkbox-container">
                    <label htmlFor="symbols">Include symbols</label>
                    <input type="checkbox" name='symbols' checked={symbolcase} onChange={() => setSymbolcase(!symbolcase)} required />
                </div>
                <button type='button' onClick={createPassword} className='generate-pass'>Generate</button>
            </div>
        </section>
    )
}
