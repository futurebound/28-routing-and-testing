import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app/index';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<App />, container);