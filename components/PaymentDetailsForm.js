import React from 'react';
import C from '../util/constants';
import validator from '../util/validator';
import { creditCard, expirationMonth, expirationYear, password } from '../util/actionCreators';
const { Component } = React;

export default class PaymentDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = props.store.getState().paymentDetails;
    }

    change(field) {
        switch (field) {
            case C.CREDIT_CARD:
                value = this.refs._creditCardNumber.value;
                this.props.store.dispatch(creditCard(value));
                break;
            case C.EXPIRATION_MONTH:
                value = this.refs._expirationMonth.value;
                this.props.store.dispatch(expirationMonth(value));
                break;
            case C.EXPIRATION_YEAR:
                value = this.refs._expirationYear.value;
                this.props.store.dispatch(expirationYear(value));
                break;
            case C.CVV:
                value = this.refs._cvv.value;
                this.props.store.dispatch(cvv(value));
                break;
            case C.PASSWORD:
                value = this.refs._password.value;
                this.props.store.dispatch(password(value));
                break;
            default:
                break;
        }
    }

    render() {
        let change = this.change.bind(this);
        return (
            <div id="paymentForm">
                <div id="title">
                    <h2><span>Payment</span></h2>
                </div>
                <div className="inputContainer">
                    <label>Credit Card</label><br />
                    <input name="creditCardNumber" type="text" ref="_creditCardNumber" defaultValue={this.state.creditCard.value}
                        onChange={() => change(C.CREDIT_CARD)} required /><br />
                </div>
                <div className="inputContainer">

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Expiration</label><br />
                                    <select name="expirationMonth" ref="_expirationMonth" defaultValue={this.state.expirationMonth.value}
                                        onChange={() => change(C.EXPIRATION_MONTH)} required >
                                        <option selected="selected">Month</option>
                                        <option value="01 - January">01 - January</option>
                                        <option value="02 - February">02 - February</option>
                                        <option value="03 - March">03 - March</option>
                                        <option value="04 - April">04 - April</option>
                                        <option value="05 - May">05 - May</option>
                                        <option value="06 - June">06 - June</option>
                                        <option value="07 - July">07 - July</option>
                                        <option value="08 - August">08 - August</option>
                                        <option value="09 - September">09 - September</option>
                                        <option value="10 - October">10 - October</option>
                                        <option value="11 - November">11 - November</option>
                                        <option value="12 - December">12 - December</option>
                                    </select>
                                </td>
                                <td>
                                    <label>&nbsp;</label><br />
                                    <select name="expirationYear" ref="_expirationYear" defaultValue={this.state.expirationYear.value}
                                        onChange={() => change(C.EXPIRATION_YEAR)} required>
                                        <option value="" selected="selected">Year</option>
                                        <option value="2019">2019</option>
                                        <option value="2020" >2020</option>
                                        <option value="2021" >2021</option>
                                        <option value="2022" >2022</option>
                                        <option value="2023" >2023</option>
                                        <option value="2024" >2024</option>
                                        <option value="2025" >2025</option>
                                        <option value="2026" >2026</option>
                                        <option value="2027" >2027</option>
                                        <option value="2028" >2028</option>
                                        <option value="2029" >2029</option>
                                        <option value="2030" >2030</option>
                                        <option value="2031" >2031</option>
                                        <option value="2032" >2032</option>
                                        <option value="2033" >2033</option>
                                        <option value="2034" >2034</option>
                                        <option value="2035" >2035</option>
                                    </select>
                                </td>
                                <td>
                                    <label>CVV (on back)</label><br />
                                    <input name="cvv" type="text" ref="_cvv" defaultValue={this.state.cvv.value}
                                        onChange={() => change(C.CVV)} required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="inputContainer">
                    <label>Create Password</label><br />
                    <input name="password" type="password" ref="_password"
                        required /><br />
                </div>
            </div>
        )
    }
}