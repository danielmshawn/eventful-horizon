
import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

export default function App() {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential)
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse  
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    // Google One Tap Dialogue. Don't know if we want this,
    // but nice to know it's an option. 
    window.google.accounts.id.prompt();
  }, []);

  // If we have no user: sign in button
  // If we have a user: show the log out button

  return (
    <div className="App">
      
        <p>
         Welcome! Login to google below to see your upcoming events
        </p>
        <div id="signInDiv"></div>
        { Object.keys(user).length != 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }
        { user &&
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
           }
       
    </div>
  );
}

