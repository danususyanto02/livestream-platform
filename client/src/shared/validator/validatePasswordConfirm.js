export const validatePasswordConfirm = (pass, confPass) => {
    return pass === confPass;
};

export const passwordConfValidationMessage = "Password do not match.";
