import storeFactory from '../../util/Store';
import actions from '../../util/actionCreators';
import validators from '../../util/validator';

describe('store', () => {
    it('adding firstname', () => {
        let state = {
            shippingDetails: {},
            paymentDetails: {}
        };
        let store = storeFactory(state);
        store.dispatch(actions.firstName({
            value: "Rin",
            valid: true,
            message: ""
        }));
        expect(store.getState()).toEqual({
            shippingDetails: {
                firstName: {
                    value: "Rin",
                    valid: true,
                    message: ""
                }
            },
            paymentDetails: {}
        })
    })

    it('updating firstname', () => {
        let state = {
            shippingDetails: {
                firstName: {
                    value: "R",
                    valid: true,
                    message: ""
                }
            },
            paymentDetails: {}
        }
        let store = storeFactory(state);
        let action = actions.firstName(validators.isValidName(state.shippingDetails.firstName));
        store.dispatch(action);
        expect(store.getState()).toEqual({
            shippingDetails: {
                firstName: {
                    value: "R",
                    valid: false,
                    message: "Name should be atleast 3 characters"
                }
            },
            paymentDetails: {}
        })
    })
})