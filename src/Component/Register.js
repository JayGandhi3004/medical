import React, { useState } from 'react'
import Validation from './Validation';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [data, setdata] = useState({
    name: "", email: "", pass: "", cpass: ""
  })
  const url = "http://localhost:3030/Data"

  const [error, setError] = useState({})


  const change = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault();
    const validationErrors = Validation(data);
    setError(validationErrors);
    console.log("Validation Errors:", validationErrors);

    if (!Object.values(validationErrors).some(error => error !== '')) {
      console.log("Navigating...");
      axios.post(url, data).then((res) => {
        console.log(res.data);
        setdata({
          name: "", email: "", pass: "", cpass: ""
        });
        navigate("/Login");
      });
    } else {
      console.log("Validation errors exist. Cannot navigate.");
    }
  };


  const click=()=>{
    navigate("/Login")
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Registration Form</h3>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input onChange={change} value={data.name} type="text" className="form-control" id="name" name="name" />
              {error.name && <label style={{ color: "red" }}>{error.name}</label>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input onChange={change} value={data.email} type="text" className="form-control" id="email" name="email" />
              {error.email && <label style={{ color: "red" }}>{error.email}</label>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input onChange={change} value={data.pass} type="text" className="form-control" id="pass" name="pass" />
              {error.pass && <label style={{ color: "red" }}>{error.pass}</label>}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input onChange={change} value={data.cpass} type="text" className="form-control" id="cpass" name="cpass" />
              {error.cpass && <label style={{ color: "red" }}>{error.cpass}</label>}
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <div>
              <p className='py-3'>Can you have any Account ?<a style={{color:"#3498db"}} onClick={click}>Login</a></p>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register
