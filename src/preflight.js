const setTheme = () => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return document.body.style.backgroundColor = "#11151C";
    }
    return document.body.style.backgroundColor = "#F6F8FF";
}

module.exports = { 
    setTheme: setTheme
};