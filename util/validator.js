export const isValidName = (name) => {
    if(name.length < 3) return {
        value: name,
        valid: false,
        message: "name should be atleast 3 characters"
    };
    return {
        value: name,
        valid: true,
        message: ""
    }; 
}

export const isValidEmail = (email) => {
    if(/[^@]*@[^.]*\.[a-zA-Z]*/.test(email)) return {
        value: email,
        valid: true,
        message: ""
    };
    return {
        value: email,
        valid: false,
        message: "invalid email"
    };
}

export const isValidPhoneNumber = (phoneNumber) => {
    if(phoneNumber.length === 10) return {
        value: phoneNumber,
        valid: true,
        message: ""
    };
    return {
        value: phoneNumber,
        valid: true,
        message: "invalid phone number"
    }
}

export const isValidShippingAddress = (shippingAddress) => {
    if(shippingAddress.length < 3) return {
        value: shippingAddress,
        valid: false,
        message: "invalid shipping address"
    }
    return {
        value: shippingAddress,
        valid: true,
        message: ""
    }
}

export const isValidPassword = (password) => {
    if(password.length < 8) return {
        value: password,
        valid: false,
        message: "password should be atleast 8 characters"
    }
    return {
        value: password,
        valid: true,
        message: ""
    }
}

export const isvalid = (data) => {
    if(data.shippingDetails.firstName.valid && data.shippingDetails.lastName.valid &&
        data.shippingDetails.email.valid && data.shippingDetails.phone.valid && data.shippingDetails.shippingAddress.valid &&
        data.shippingDetails.zipCode.valid && data.paymentDetails.creditCard.valid && data.paymentDetails.cvv.valid && 
        data.paymentDetails.expirationMonth.valid && data.paymentDetails.expirationYear.valid && data.paymentDetails.password.valid) 
            return true;
    return false;
}

export default {
    isValidName,
    isValidEmail,
    isValidPhoneNumber,
    isValidShippingAddress,
    isValidPassword,
    isvalid
}