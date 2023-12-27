
export default function validation2(data) {

    let error = {}
    if (data.uname === "" || data.email === "" || data.password === "" || data.conp === "") {
        error.uname = "please provide your name"
        error.email = "please provide your email"
        error.password = "please enter your password"
        error.conp = "please enter confirm password"
    }

    if (!data.email) {
        error.email = "please fill the email field";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "email must be like this 'abc@xyz.com'";
    }

    // password validation 

    if (!data.password) {
        error.password = "please fill the password field"
    }
    else if (data.password.length <= 8 || !/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/\d/.test(data.password)) {
        error.password = "password must contain 1 uppercase,1 lowercase letter and one number"
    }


    return error
}