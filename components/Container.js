import Header from './Header';
import CustomerDetailsForm from './CustomerDetailsForm';
import PaymentDetailsForm from './PaymentDetailsForm';

export default (props) =>
    <div id="container">
        <Header />
        <form action="/checkout">
            <CustomerDetailsForm />
            <PaymentDetailsForm />
            <button>PLACE ORDER</button>
        </form>
    </div>