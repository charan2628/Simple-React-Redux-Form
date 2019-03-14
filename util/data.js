export default {
    shippingDetails: {
        firstName: {
            value: "Light",
            valid: true,
            message: ""
        },
        lastName: {
            value: "Y",
            valid: false,
            message: "Name should be atleast 3 characters"
        },
        email: {
            value: "midoriya@izuku.com",
            valid: true,
            message: ""
        },
        phone: {
            value: "",
            valid: true,
            message: ""
        },
        shippingAddress: {
            value: "y",
            valid: false,
            message: "Invalid Shipping Address"
        },
        zipCode: {
            value: {
                code: "52202",
                places: ["No Where", "DisneyLand"],
                selected: ""
            },
            valid: true,
            message: ""
        }
    },
    paymentDetails: {
        creditCard: {
            value: "4545 6565 7878 9898",
            valid: true,
            message: ""
        },
        expirationMonth: {
            value: "09 - September",
            valid: true,
            message: ""
        },
        expirationYear: {
            value: "2020",
            valid: true,
            message: ""
        },
        cvv: {
            value: "123",
            valid: true,
            message: ""
        },
        password: {
            value: "NO PASS",
            valid: true,
            message: ""
        }
    }
}