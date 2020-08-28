const path = require('path');

module.exports = {

    name : 'word-relay-setting',
    mode : 'development', // 실서비스 : production
    devtool : 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry : {
        app : ['./client'], // 이미 client.jsx에서 wordrelay를 불러오기때문에 wordrelay를 추가해줄 필요 없다.
    }, //입력

    module : {
        rules: [ {
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            },
        }],
    },
    output: {
        path : path.join(__dirname, 'dist'), // 현재 __dirname안에 들어있는 dist // C:/user/zero~언제 치고앉아있어 path쓰자
        filename: 'app.js'
    }, // 출력


};