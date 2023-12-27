import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Validationl from '../Validationl';

const Login = () => {

  const navigate = useNavigate();


  const [data, setdata] = useState({
    email: "", pass: ""
  })

  const [error, setError] = useState({})


  const url = "http://localhost:3030/Data"
  let userdata = ""



  const login = (e) => {
    setError(Validationl(data))


    e.preventDefault()
    console.log("login")


    axios.get(url).then(Response => {
      userdata = Response.data

      const loginemail = data.email.toLowerCase()
      const loginpassword = data.pass.toLowerCase()


      if (data.email === "" && data.pass === "") {

        alert('please fill all the field')
      } else {
        if (loginemail.email === userdata.email && loginpassword.pass === userdata.pass) {
          console.log("login is ongoing");
          navigate('/dashboard')


        } else {
          console.log("login is not happening");
          console.log(data);
          console.log(userdata);
        }
      }
    }).catch(error => {
      console.error("An error occurred:", error);
    });
  }

  const change = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })

    console.log(data);
  }

  const forgot = () => {
    navigate("/forget")
  }



  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Login Form</h3>
          <form onSubmit={login}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input onChange={change} type="email" className="form-control" id="email" name="email" />
              {error.email && <label style={{ color: "red" }}>{error.email}</label>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input onChange={change} type="text" className="form-control" id="pass" name="pass" />
              {error.pass && <label style={{ color: "red" }}>{error.pass}</label>}
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="mb-3">
              <p onClick={forgot} className='text-danger py-3'>Forgot Password ?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
