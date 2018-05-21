import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.interceptors.request.use( req => {
    console.log(req);
    // we can edit request config before returning or forwarding to child components
    return req;
    }, err => {
        console.log(err);
        return Promise.reject(err);  //this error is for request sending fail for example internet gone.
        })
axios.interceptors.response.use( res => {
    console.log(res);
    return res;
}, err => {
    console.log(err);
    return Promise.reject(err);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
