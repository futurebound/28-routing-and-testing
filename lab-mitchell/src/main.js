import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app/index';

const container = document.createElement('div');
document.body.appendChild(container);
//ReactDom.render() is the only line that uses this module
ReactDom.render(<App />, container); //using this container (div, like the root style from Scott) render app here