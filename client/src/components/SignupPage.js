import {Button} from "reactstrap";
import React from "react";

const SignupPage = () => {

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
                            <Button type="submit" className="ui fluid large teal submit button" value="Sign Up">Sign up</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    ]
};

export default SignupPage;