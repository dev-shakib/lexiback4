import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios'
import Apps from './Apps';

axios.defaults.baseURL = 'https://lexi.lskit.com/api'

ReactDOM.render(
    <>
<Provider store={store}><Apps /></Provider></> , document.getElementById('root'));
