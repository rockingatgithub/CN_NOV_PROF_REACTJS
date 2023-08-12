import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId='416750331254-ppnm8ca2409p2hfqaglr222au3kc3f99.apps.googleusercontent.com'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GoogleOAuthProvider>
    
    
);
