import React from 'react';
import { Logo } from './Logo';
import { AuthInput } from './AuthInput';

export const Login = ({ switchAuthHandler }) => {

    return (
        <div className='login-container'>
            <Logo text={' Login And Start To Become Streamer'} />
            <form className='auth-form'>

                <AuthInput field='email' label='Email' />
                <AuthInput field='password' label='Password' />
                <button>
                    Login
                </button>
            </form>
            <span className='auth-form-switch-label' onClick={switchAuthHandler}> Sign UP </span>
        </div>
    );
};

