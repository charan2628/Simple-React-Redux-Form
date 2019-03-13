import C from './constants';

export const shippingDetails = (state = {}, action) => {
    switch(action.type) {
        case C.FIRST_NAME:
            return {
                ...state,
                firstName: action.firstName
            }
        case C.LAST_NAME:
            return {
                ...state,
                lastName: action.lastName
            }
        case C.EMAIL:
            return {
                ...state,
                email: action.email
            }
        case C.PHONE:
            return {
                ...state,
                phone: action.phone
            }
        case C.SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.shippingAddress
            }
        case C.ZIP_CODE:
            return {
                ...state,
                zipCode: action.zipCode
            }
        default:
            return state
    }
}

export const paymentDetails = (state = {}, action) => {
    switch(action.type) {
        case C.CREDIT_CARD: 
            return {
                ...state,
                creditCard: action.creditCard
            }
        case C.EXPIRATION_MONTH:
            return {
                ...state,
                expirationMonth: action.expirationMonth
            }
        case C.EXPIRATION_YEAR: 
            return {
                ...state,
                expirationYear: action.expirationYear
            }
        case C.PASSWORD:
            return {
                ...state,
                password: action.password
            }
    }
}