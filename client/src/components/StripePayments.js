import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./mystyle.scss"

class Payments extends Component{
    render() {
        return (
            <StripeCheckout name={"Emaily"}
                            description={"Adding credits"}
                            amount={500}
                            token={token => this.props.handleToken(token)}
                            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <li><a>ADD CREDITS</a></li>

            </StripeCheckout>


        )
    }
}

export default connect(null, actions) (Payments);