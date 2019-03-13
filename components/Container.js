import Header from './Header';
import CustomerDetailsForm from './CustomerDetailsForm';
import PaymentDetailsForm from './PaymentDetailsForm';

export default ({store}) =>
    <div id="container">
        <Header />
        <form action="/checkout">
            <CustomerDetailsForm store={store}/>
            <PaymentDetailsForm store={store}/>
            <button>PLACE ORDER</button>
        </form>
    </div>