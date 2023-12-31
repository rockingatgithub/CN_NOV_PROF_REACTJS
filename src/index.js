import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import main from './components/reducers';

const store = createStore(main, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

        <GoogleOAuthProvider clientId='416750331254-2a1v89960f28bma1vdmq9v9t12gf7kmp.apps.googleusercontent.com'>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GoogleOAuthProvider>

    </Provider>
    
    
);
