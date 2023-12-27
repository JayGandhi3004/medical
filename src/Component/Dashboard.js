import React from 'react'
import axios from "axios";

const Dashboard = () => {
  const finaldata = [
    {
      id: 101,
      name: "Abacavir",
      quantity: 25,
      price: 150,
      expiry: 2022,
    },
    {
      id: 102,
      name: "Eltrombopag",
      quantity: 90,
      price: 550,
      expiry: 2021,
    },
    {
      id: 103,
      name: "Meloxicam",
      quantity: 85,
      price: 450,
      expiry: 2025,
    },
    {
      id: 104,
      name: "Allopurinol",
      quantity: 50,
      price: 600,
      expiry: 2023,
    },
    {
      id: 105,
      name: "Phenytoin",
      quantity: 63,
      price: 250,
      expiry: 2021,
    },
  ];
  return (
    <div className='App'>
      <h1>medicine table</h1>

      
      <div class="container">
        <div className="text-end">
        <a type="button" className="btn btn-danger btn-sm" href="http://localhost:3000/" >LogOut</a>
      </div>
        <table class="table w-100">
          <thead>
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Expire</th>
            </tr>
          </thead>
          <tbody>
            {finaldata.map(
              (val, index) => (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <td>{val.quantity}</td>
                  <td>{val.expiry}</td>
                </tr>
              )
            )}
   
          </tbody>
        </table>
      </div>

    </div>
  )
}
export default Dashboard
