const React = require("react");
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay'); 

ReactDom.render(<WordRelay />, document.querySelector('#root')); // jsx문법 쓰기 때문에 확장자 jsx