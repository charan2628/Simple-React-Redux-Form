import validators from '../../../util/validator';
import { shippingDetails } from '../../../util/reducers';
import actions from '../../../util/actionCreators';

describe('shippingDetails reducer', () => {
    it('add firstname', () => {
        let state = {
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            }
        };
        let action = actions.firstName({
            value: "Light",
            valid: true,
            message: ""
        });
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            }
        })
    });

    it('update firstname', () => {
        let state = {
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            firstName: {
                value: "L",
                valid: true,
                message: ""
            }
        };
        let action = actions.firstName(validators.isValidName(state.firstName));
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "L",
                valid: false,
                message: "Name should be atleast 3 characters"
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            }
        })
    });

    it('add lastname', () => {
        let state = {
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            }
        };
        let action = actions.lastName({
            value: "Yagami",
            valid: true,
            message: ""
        });
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            }
        })
    });

    it('update lastname', () => {
        let state = {
            lastName: {
                value: "Y",
                valid: true,
                message: ""
            },
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            }
        };
        let action = actions.lastName(validators.isValidName(state.lastName));
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Y",
                valid: false,
                message: "Name should be atleast 3 characters"
            }
        })
    });

    it('add email', () => {
        let state = {
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            }
        };
        let action = actions.email({
            value: "midoriya@izuku.com",
            valid: true,
            message: ""
        });
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            }
        })
    });

    it('update email', () => {
        let state = {
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku",
                valid: true,
                message: ""
            }
        };
        let action = actions.email(validators.isValidEmail(state.email));
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku",
                valid: false,
                message: "Invalid Email"
            }
        })
    });

    it('add phone number', () => {
        let state = {
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            }
        };
        let action = actions.phone({
            value: "1234567890",
            valid: true,
            message: ""
        });
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            },
            phone: {
                value: "1234567890",
                valid: true,
                message: ""
            }
        })
    });

    it('update phone number', () => {
        let state = {
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            },
            phone: {
                value: "12abc67890",
                valid: true,
                message: ""
            }
        };
        let action = actions.phone(validators.isValidPhoneNumber(state.phone));
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            },
            phone: {
                value: "12abc67890",
                valid: false,
                message: "Invalid Phone Number"
            }
        })
    });

    it('add shipping address', () => {
        let state = {
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            },
            phone: {
                value: "1234567890",
                valid: true,
                message: ""
            }
        };
        let action = actions.shippingAddress({
            value: "no where",
            valid: true,
            message: ""
        });
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            },
            phone: {
                value: "1234567890",
                valid: true,
                message: ""
            },
            shippingAddress: {
                value: "no where",
                valid: true,
                message: ""
            }
        })
    });

    it('update shipping address', () => {
        let state = {
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            },
            phone: {
                value: "1234567890",
                valid: true,
                message: ""
            },
            shippingAddress: {
                value: "no",
                valid: true,
                message: ""
            }
        };
        let action = actions.shippingAddress(validators.isValidShippingAddress(state.shippingAddress));
        let result = shippingDetails(state, action);
        expect(result).toEqual({
            firstName: {
                value: "Light",
                valid: true,
                message: ""
            },
            lastName: {
                value: "Yagami",
                valid: true,
                message: ""
            },
            email: {
                value: "midoriya@izuku.com",
                valid: true,
                message: ""
            },
            phone: {
                value: "1234567890",
                valid: true,
                message: ""
            },
            shippingAddress: {
                value: "no",
                valid: false,
                message: "Invalid Shipping Address"
            }
        })
    });

});