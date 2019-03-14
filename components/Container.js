import React from 'react';
import Header from './Header';
import CustomerDetailsForm from './CustomerDetailsForm';
import PaymentDetailsForm from './PaymentDetailsForm';
import validator from '../util/validator';

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        console.log(e);
        if(validator.isvalid(this.props.store.getState())) {
            let checkoutForm = new FormData();
            checkoutForm.append('data', JSON.stringify(this.props.store.getState()));
            fetch('/checkout/data', {
                method: "post",
                body: checkoutForm
            }).then(res => {
                console.log(res);
            });
        } else {
            console.log('not valid');
        }
    }

    render() {
        let store = this.props.store;
        return (
            <div id="container">
                <Header />
                <form action="/checkout" method="post" onSubmit={this.submit}>
                    <CustomerDetailsForm store={store} />
                    <PaymentDetailsForm store={store} />
                    <button>PLACE ORDER</button>
                </form>
            </div>
        )
    }
}