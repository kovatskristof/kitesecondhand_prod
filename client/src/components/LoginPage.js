import React from 'react';
import { Button } from 'reactstrap';
import './mystyle.scss';

const LoginPage = () => {

    return[
        <div className="centered">
            <div className="ui middle aligned center aligned grid container">
                <div className="column">
                    <form action="/auth/signup" method="POST" className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="Enter Email Address"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Enter Password"/>
                                </div>
                            </div>
                            <input type="submit" className="ui fluid large teal submit button" value="Sign Up"/>
                            </div>
                    </form>

                </div>
            </div>
            <div className="button">
                <Button variant="dark" href="/auth/google" block>Login with Google</Button>
            </div>
            <div className="button">
                <Button color="secondary" size="lg" href="/auth/facebook" block>Login with Facebook</Button>
            </div>
        </div>
    ]
};

export default LoginPage;