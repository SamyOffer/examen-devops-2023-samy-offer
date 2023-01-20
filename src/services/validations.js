// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkGamerTag = (gamerTag) => {
    const regex = new RegExp("^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$");
    return regex.test(gamerTag);
};

module.exports = {
    isEmpty,
    checkGamerTag,
};
