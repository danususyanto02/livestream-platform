import React from 'react';


export const AuthInput = (
   { field, label, value, onChangeHandler, type, errorMessage, validationMessage, onBlurHandler}
) => {
    const handleValueChange = (e) =>{
        onChangeHandler(e.target.value, field);
    }
    const handInputBlur = (e) =>{
        onChangeHandler(e.target.value, field);
    }

    return (
        <>

            <div className='auth-form-label'>
                <span>
                    {label}
                </span>
            </div>
            <input
                className='auth-form-input'
                type={type}
                value={value}
                onChange={handleValueChange}
              //  onBlur={handInputBlur}
            />
            <span className='auth-form-error-message'>
                {errorMessage && validationMessage}
            </span>
        </>
    );
};