import React from 'react'
const { Component } = React;

export default class CustomerDetailsForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="userForm">
                <div id="title">
                    <h2><span>Shipping</span></h2>
                </div>
                <label>First Name</label><br />
                <input name="firstname" type="text" required /><br />
                <label>Last Name</label><br />
                <input name="lastname" type="text" required /><br />
                <label>Email</label><br />
                <input name="email" type="email" required /><br />
                <label>Phone</label><br />
                <input name="phone" type="phone" required /><br />
                <label>Shipping Address</label><br />
                <input name="shippingaddress" type="text" required /><br />
                <label>Zip Code</label><br />
                <input name="zipcode" type="text" required /><span id="city"></span><br />
            </div>
        )
    }
}