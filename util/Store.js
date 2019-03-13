import {createStore, combineReducers, applyMiddleware} from 'redux';
import {shippingDetails, paymentDetails} from './reducers';

export default (initialState) => createStore(combineReducers({shippingDetails, paymentDetails}), initialState)