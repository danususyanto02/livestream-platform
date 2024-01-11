import React from 'react';
import logoPlaceholder from '../resources/images/logo.svg';

export const Logo = ({text}) => {
    return (
        <div className='auth-form-logo-container'>
            <img src={logoPlaceholder} alt='logo' />
            <span>
                &nbsp;{text}
            </span>
        </div>
    );
};