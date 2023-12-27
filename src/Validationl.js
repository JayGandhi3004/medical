

export default function Validationl(data) {

    let error = {}
    if (data.name === "" || data.email === "" || data.pass === "" || data.cpass === "") {
        error.name = "please provide your name"
        error.email = "please provide your email"
        error.pass = "please enter your password"
        error.cpass = "please enter confirm password"
    }

    if (!data.email) {
        error.email = "please fill the email field";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "email must be like this 'abc@xyz.com'";
    }

    // password validation 

    if (!data.pass) {
        error.pass = "please fill the password field"
    }
    else if (data.pass.length < 8 || !/[A-Z]/.test(data.pass) || !/[a-z]/.test(data.pass) || !/\d/.test(data.pass)) {
        error.pass = "password must contain 1 uppercase,1 lowercase letter and one number"
    }


    return error
}