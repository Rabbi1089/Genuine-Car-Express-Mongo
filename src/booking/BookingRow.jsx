import { data } from "autoprefixer";
import React from "react";

const BookingRow = ({ books, handleDelete , handleBookingConfirmed , index}) => {
  const { customerName, email, date, serviceName, img, price , _id  , status} = books;




  return (
    <tbody>
      {/* row 1 */}
      <tr>
      <td>{index+1}</td>
        <th>
          <button className="btn btn-square text-red-500 " onClick={() =>handleDelete(_id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <th>
          <div className="avatar">
            <div className="w-36 h-24 rounded">
              <img src={img} />
            </div>
          </div>
        </th>

        <th>{serviceName}</th>
        <td>{email}</td>
        <td>{date}</td>
        <td>{price}</td>
        
        <td>
        {status ? <span className=" text-blue-600">Confirmed</span> :
         <button onClick={() => handleBookingConfirmed(_id)} className="btn btn-outline btn-accent">Please Confirm</button>
        }
          
        </td>
      </tr>
    </tbody>
  );
};

export default BookingRow;
