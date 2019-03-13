import validators from '../../../util/validator';
import { shippingDetails } from '../../../util/reducers';
import actions from '../../../util/actionCreators';

describe('shippingDetails reducer', () => {
    it('add firstname', () => {
        let state = {};
        let action = actions.firstName({
            value: "Rin",
            valid: true,
            message: ""
        });
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Rin",
                valid: true,
                message: ""
            }
        })
    })
    it('update firstname', () => {
        let state = {
            firstName: {
                value: "R",
                valid: true,
                message: ""
            }
        };
        let action = actions.firstName(validators.isValidName(state.firstName.value));
        let result = shippingDetails(state, action);
        console
        expect(result).toEqual({
            firstName: {
                value: "R",
                valid: false,
                message: "name should be atleast 3 characters"
            }
        })
    })
})