// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkGamerTag = (gamerTag) => gamerTag.length >= 8;

module.exports = {
    isEmpty,
    checkGamerTag,
};
