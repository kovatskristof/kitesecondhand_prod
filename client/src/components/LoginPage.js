import React from 'react';

const LoginPage = () => {
    renderContent(){

    }

    return[
        <li key={1}><a href="/auth/google">Login with Google</a></li>,
        <li key={2}><a href="/auth/facebook">Login with Facebook</a></li>
    ]
};

export default LoginPage;