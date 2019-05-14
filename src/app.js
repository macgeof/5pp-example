import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Add Ui Router
import UiRouter from './routers/UiRouter';

// Import css
import '../node_modules/normalize.css/normalize.css'
import './scss/styles.scss';

// Add redux store
import store from './store/configureStore';
// Configure Redux Store
const _jsx = (
    <Provider store={store}>
        <UiRouter/>
    </Provider>
);

ReactDOM.render(_jsx, document.getElementById('app'));
