import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'antd/dist/antd.css';
import './main.css';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorBoundry from './components/error-boundry';

ReactDOM.render(
    <ErrorBoundry>
        <Provider store={store}>
            <App/>
        </Provider>
    </ErrorBoundry>, 
    document.getElementById('root')
);
