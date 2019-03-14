import React from 'react'
import C from '../util/constants';
import validator from '../util/validator';
import { firstName, lastName, email, phone, shippingAddress, zipCode } from '../util/actionCreators';

const { Component } = React;

export default class CustomerDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = props.store.getState().shippingDetails;
    }

    change(field) {
        switch (field) {
            case C.FIRST_NAME:
                let value = this.refs._firstName.value;
                this.props.store.dispatch(firstName(validator.isValidName({ value })));
                break;
            case C.LAST_NAME:
                value = this.refs._lastName.value;
                this.props.store.dispatch(lastName(validator.isValidName({ value })));
                break;
            case C.EMAIL:
                value = this.refs._email.value;
                this.props.store.dispatch(email(validator.isValidEmail({ value })));
                break;
            case C.PHONE:
                value = this.refs._phone.value;
                this.props.store.dispatch(phone(validator.isValidPhoneNumber({ value })));
                break;
            case C.SHIPPING_ADDRESS:
                value = this.refs._shippingAddress.value;
                this.props.store.dispatch(shippingAddress(validator.isValidShippingAddress({ value })));
                break;
            case C.ZIP_CODE:
                value = this.refs._zipCode.value;
                fetch('/zipCode/'+value).
                then(res => res.json()).
                then(data => {
                    this.props.store.dispatch(zipCode({
                        value: {
                            code: value,
                            places: data.places,
                            selected: ""
                        },
                        valid: true,
                        message: ""
                    }));
                });
                break;
            case C.PLACE:
                value = this.refs._place.value;
                let code = this.refs._zipCode.value;
                let places = this.state.zipCode.value.places;
                this.props.store.dispatch(zipCode({
                    value: {
                        code,
                        places,
                        selected: value
                    },
                    valid: true,
                    message: ""
                }));
            default:
                break;
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps.store.getState().shippingDetails
        });
    }

    render() {
        let change = this.change.bind(this);
        return (
            <div id="userForm">
                <div id="title">
                    <h2><span>Shipping</span></h2>
                </div>
                <div className="inputContainer">
                    <label>First Name</label><br />
                    <input name="firstName" type="text" ref="_firstName" defaultValue={this.state.firstName.value}
                        onChange={() => change(C.FIRST_NAME)} required /><br />
                    <span>{this.state.firstName.message}</span><br />
                </div>
                <div className="inputContainer">
                    <label>Last Name</label><br />
                    <input name="lastName" type="text" ref="_lastName" defaultValue={this.state.lastName.value}
                        onChange={() => change(C.LAST_NAME)} required /><br />
                    <span>{this.state.lastName.message}</span><br />
                </div>
                <div className="inputContainer">
                    <label>Email</label><br />
                    <input name="email" type="email" ref="_email" defaultValue={this.state.email.value}
                        onChange={() => change(C.EMAIL)} required /><br />
                    <span>{this.state.email.message}</span><br />
                </div>
                <div className="inputContainer">
                    <label>Phone</label><br />
                    <input name="phone" type="phone" ref="_phone" defaultValue={this.state.phone.value}
                        onChange={() => change(C.PHONE)} required /><br />
                    <span>{this.state.phone.message}</span><br />
                </div>
                <div className="inputContainer">
                    <label>Shipping Address</label><br />
                    <input name="shippingAddress" type="text" ref="_shippingAddress" defaultValue={this.state.shippingAddress.value}
                        onChange={() => change(C.SHIPPING_ADDRESS)} required /><br />
                    <span>{this.state.shippingAddress.message}</span><br />
                </div>
                <div className="inputContainer">
                    <label>Zip Code</label><br />
                    <input name="zipCode" type="text" ref="_zipCode" defaultValue={this.state.zipCode.value.code}
                        onChange={() => change(C.ZIP_CODE)} required />
                    <select name="place" hidden={this.state.zipCode.value.places.length === 0} ref="_place"
                        onChange={() => change(C.PLACE)} defaultValue={this.state.zipCode.value.selected}>
                        {
                            this.state.zipCode.value.places.map((place, i) => 
                                    <option key={i}>{place}</option>
                                    )
                        }
                    </select>
                        <br />
                    <span>{this.state.zipCode.message}</span><br />
                </div>
            </div>
        )
    }
}