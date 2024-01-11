import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';


import './authPage.css';

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const handleAuthPageToogle = () => {
        setIsLogin(prev => !prev);
    }
    return (
        <div className='auth-container'>
            {isLogin ? <Login switchAuthHandler={handleAuthPageToogle} /> : <Register switchAuthHandler={handleAuthPageToogle} />}

        </div>
    );
};

