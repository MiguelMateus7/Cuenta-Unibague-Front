const valid = (email) => {
    return !!email.match(/.+@.+\.\w{2,3}/);
};

module.exports = valid; // Do not remove.