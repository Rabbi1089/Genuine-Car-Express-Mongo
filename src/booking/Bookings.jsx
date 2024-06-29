import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import TableRow from "./TableRow.jsx/TableRow";
import BookingRow from "./BookingRow";
import { json } from "react-router-dom";
import axios from "axios";

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [booking , setBooking] = useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`


    useEffect(() =>{
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setBooking(data))

    axios.get(url, {withCredentials : true})
.then(res => {
  setBooking(res.data)
})
    
  } , [url]);

    const handleDelete = id => {
      const proceed = confirm('Are you sure');
      if (proceed){
        fetch(`http://localhost:5000/booking/${id}` , {
          method : 'DELETE'
        
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remaining = booking.filter(booking => booking._id !== id);
            setBooking(remaining)
          }
  
        })

      }
    }

    const handleBookingConfirmed = id => {
      fetch(`http://localhost:5000/booking/${id}` , { method : 'PATCH',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify({ status : 'confirm'})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaining = booking.filter(booking => booking._id !== id);
          const updated = booking.find(booking => booking._id === id);
          updated.status = 'confirm'
          const newBooking = [updated, ...remaining]
          setBooking(newBooking)
          
        }
      })
    }

    return (
        <div>
            <h1 className=" text-2xl font-semibold text-center text-blue-500 p-4 uppercase"> your total services : {booking.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Delete</th>
        <th></th>
        <th>ServiceName</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
        {booking.map((books , index)=><BookingRow 
        key={books._id} books = {books} handleDelete={handleDelete} 
        handleBookingConfirmed={handleBookingConfirmed} index={index}>
        </BookingRow>)}
  </table>
</div>
        </div>
    );
};

export default Bookings;