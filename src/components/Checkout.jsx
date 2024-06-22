import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const services = useLoaderData();
  const { title, price, _id , img } = services;
  const { user } = useContext(AuthContext);
  //console.log(user)

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const due = form.dueAmount.value;

    const booking = {
      customerName: name,
      email,
      date,
      img,
      serviceName: title,
      price: price,
      serviceId: _id,
      due,
    };

    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST', 
      headers: {
          'content-type': 'application/json'
      }, 
      body: JSON.stringify(booking)
  })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Service successfully added!')
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-blue-500 text-center">Book For {title}</h1>
      <div className="hero min-h-[460px] bg-base-200 w-full">
        <form onSubmit={handleBookService} className="card-body w-full">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="date"
                className="input input-bordered"
                name="date"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="EMail"
                className="input input-bordered"
                name="email"
                defaultValue={user.email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="number"
                placeholder="Due Amount"
                className="input input-bordered"
                name="dueAmount"
                defaultValue={price}
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary text-2xl">Confirm order</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Checkout;
