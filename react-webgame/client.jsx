const React = require("react");
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');
const NumberBaseBall = require('./NumberBaseBall'); 

const Hot = hot(NumberBaseBall);

ReactDom.render(<Hot />, document.querySelector('#root')); // jsx문법 쓰기 때문에 확장자 jsx