module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "userBuiltIns": "usage",
                "bugfixes": "true"
            }
        ],
        [
            "@babel/preset-react",
            {
                "development": true
            }
        ]
    ]
}