import C from './constants';

export const firstName = (firstName) => ({
    type: C.FIRST_NAME,
    firstName
})

export const lastName = (lastName) => ({
    type: C.LAST_NAME,
    lastName
})

export const email = (email) => ({
    type: C.EMAIL,
    email
})

export const phone = (phone) => ({
    type: C.PHONE,
    phone
})

export const shippingAddress = (shippingAddress) => ({
    type: C.SHIPPING_ADDRESS,
    shippingAddress
})

export const zipCode = (zipCode) => ({
    type: C.ZIP_CODE,
    zipCode
})

export const creditCard = (creditCard) => ({
    type: C.CREDIT_CARD,
    creditCard
})

export const expirationMonth = (expirationMonth) => ({
    type: C.EXPIRATION_MONTH,
    expirationMonth
})

export const expirationYear = (expirationYear) => ({
    type: C.EXPIRATION_YEAR,
    expirationYear
})

export const cvv = (cvv) => ({
    type: C.CVV,
    cvv
})

export const password = (password) => ({
    type: C.PASSWORD,
    password
})

export default {
    firstName,
    lastName,
    email,
    phone,
    shippingAddress,
    zipCode,
    creditCard,
    expirationMonth,
    expirationYear,
    password
}