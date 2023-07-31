
import React, { useState } from 'react';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

export default function App() {

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Handle sucessful login here. the credentialResponse object contains
    // info about the logged in user
  };

  const handleError = () => {
    console.log('Login Failed');
    // Handle faield login here
  };

  return (
    <div className="App">
      
        <p>
         Welcome! Login to google below to see your upcoming events
        </p>
        <GoogleLoginButton
          onSuccess={handleSuccess}
          onError={handleError}
        />
    </div>
  );
}

