import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import main from './components/reducers';

const store = createStore(main)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

    
        <GoogleOAuthProvider clientId='416750331254-ppnm8ca2409p2hfqaglr222au3kc3f99.apps.googleusercontent.com'>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GoogleOAuthProvider>

    </Provider>
    
    
);
