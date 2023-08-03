import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './pages/App/App'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Google Client ID:', process.env.REACT_APP_GOOGLE_CLIENT_ID);
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar"
    > */}
      <Router>
        <App />
      </Router>
    {/* </GoogleOAuthProvider > */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
