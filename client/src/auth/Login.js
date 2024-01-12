import React, { useState } from 'react';
import { Logo } from './Logo';
import { AuthInput } from './AuthInput';

export const Login = ({ switchAuthHandler }) => {
    const [formState, setFormState,] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false,
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState(
            prev => ({
                ...prev,
                [field]: {
                    ...prev[field],
                    value,
                }
            })
        );
    }
    console.log(formState);
    return (
        <div className='login-container'>
            <Logo text={' Login And Start To Become Streamer'} />
            <form className='auth-form'>

                <AuthInput field='email' label='Email' value={formState.email.value} onChangeHandler={handleInputValueChange} />
                <AuthInput field='password' label='Password' value={formState.password.value} onChangeHandler={handleInputValueChange} />
                <button>
                    Login
                </button>
            </form>
            <span className='auth-form-switch-label' onClick={switchAuthHandler}> Sign UP </span>
        </div>
    );
};

