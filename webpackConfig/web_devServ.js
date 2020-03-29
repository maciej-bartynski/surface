require('dotenv').config()
const path = require('path');

module.exports = {
    port: process.env.PORT_FRONTEND,
    index: 'index.html',
    publicPath: "/",
    contentBase: path.join(__dirname, '../static'),
    https: true,
    overlay: true,
    proxy: {
        '/api': {
            target: process.env.PROXY_BACKEND,
            secure: false,
            changeOrigin: true,
        }
    },
    historyApiFallback: {
        disableDotRule: true,
    },
}