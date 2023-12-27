export default function Validation(data) {

    let error = {}
    if (data.name === "" || data.email === "" || data.pass === "" || data.cpass === "") {
        error.name = "Required name"
        error.email = "Required email"
        error.pass = "Required password"
        error.cpass = "Required confirm password"
    }

    if (!data.email) {
        error.email = "please fill the email field";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "email must be like this 'abc@xyz.com'";
    }

    // pass validation 

    if (!data.pass) {
        error.pass = "please fill the password field"
    }
    else if (data.pass.length<8||!/[A-Z]/.test(data.pass)||!/[a-z]/.test(data.pass)||!/\d/.test(data.pass)) {
        error.pass = "password must contain 1 uppercase,1 lowercase letter and one number"  
    }

    // name validation 

    if (data.name.length < 3) {
        error.name = "your name must be upto 3 character"
    }

    // cpass validation
    if (data.pass !== data.cpass) {
        error.cpass = "confirm password doesn't match to your password"
    }

    return error
}