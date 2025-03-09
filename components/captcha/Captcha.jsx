// components/Captcha.js
'use client';

import { useState, useEffect } from 'react';

const Captcha = ({ onVerify }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  // Generate random string for CAPTCHA
  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setError('');
      onVerify(true); // Callback to parent component
    } else {
      setError('Incorrect CAPTCHA. Please try again.');
      setUserInput('');
      generateCaptcha();
    }
  };

  return (
    <div className="captcha-container">
      <div className="captcha-text" style={{ 
        background: '#f0f0f0',
        padding: '10px',
        fontFamily: 'monospace',
        letterSpacing: '2px',
        marginBottom: '10px'
      }}>
        {captchaText}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter CAPTCHA text"
          style={{ marginBottom: '10px' }}
        />
        <button type="submit">Verify</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button 
        onClick={generateCaptcha}
        style={{ marginTop: '10px' }}
      >
        Refresh CAPTCHA
      </button>
    </div>
  );
};

export default Captcha;