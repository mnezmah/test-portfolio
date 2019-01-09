import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/Approuter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));