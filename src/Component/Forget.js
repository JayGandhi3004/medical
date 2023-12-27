import React from 'react'
import { useNavigate } from 'react-router-dom'


const Forget = () => {

  const navigate = useNavigate();

  const Reset = () => {
    navigate("/login")
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Forget Password</h3>
          <form>
          <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">password</label>
              <input type="password" className="form-control" id="password" name="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Confirm Password</label>
              <input type="text" className="form-control" id="pass" name="pass" />
            </div>
            <div className="d-grid mb-3 gap-2">
              <button type="submit" className="btn btn-primary">Reset</button>
            </div>
            <div className="d-grid gap-2">
              <button onClick={Reset} type="submit" className="btn">Back to login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forget
