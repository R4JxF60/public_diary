const path = require('path');


module.exports = {
    entry: "./src/init.js",
    output: {
        filename: 'web_scripts.js',
        path: path.resolve(__dirname, "serve")
    },
    mode: "development",
};