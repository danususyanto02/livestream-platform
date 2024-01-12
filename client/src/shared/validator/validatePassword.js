export const validatePassword = (password) => {

    const regex = /^\S{6,12}$/;
    return regex.test(password);
};
export const passwordConfValidationMessage = "Password shound have between 6 and 12 characters. Space is not allowed.";
