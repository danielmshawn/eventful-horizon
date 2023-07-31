import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLoginButton ({ onSuccess, onError }) {

    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onError}
            />
    );
}