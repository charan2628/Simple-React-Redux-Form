import React from 'react'
const { Component } = React;

export default class PaymentDetailsForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="paymentForm">
                <div id="title">
                    <h2><span>Payment</span></h2>
                </div>
                <label>Credit Card</label><br />
                <input name="creditcardnumber" type="text" required /><br />
                <table>
                    <tr>
                        <td>
                            <label>Expiration</label><br />
                            <select name="expMonth">
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
                            <select name="expYear">
                                <option value="" class="" selected="selected">Year</option>
                                <option disabled="" label="2019" value="object:41">2019</option>
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
                            <input name="cvv" type="text" />
                        </td>
                    </tr>
                </table>
                <br />
                <label>Create Password</label><br />
                <input name="password" type="password" required /><br />
            </div>
        )
    }
}