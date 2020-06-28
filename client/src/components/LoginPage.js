import React from 'react';
import { Button } from 'reactstrap';
import './mystyle.scss';

const LoginPage = () => {

    return[
        <div className="centered">
            <div className="button">
                <Button variant="dark" href="/auth/google" block>Login with Google</Button>
            </div>
            <div className="button">
                <Button color="secondary" size="lg" href="/auth/facebook" block>Login with Facebook</Button>
            </div>
            <div className="button">
                <Button variant="dark" href="/signup" block>Sign up</Button>
            </div>
        </div>
    ]
};

export default LoginPage;