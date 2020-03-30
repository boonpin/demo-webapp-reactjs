module.exports = {
    setLocalStorage: (key, value) => {
        localStorage.setItem(key, value);
    },
    getLocalStorage: (key, defaultValue = null) => {
        return localStorage.getItem(key);
    },
    removeLocalStorage: (key) => {
        localStorage.removeItem(key);
    }
};
