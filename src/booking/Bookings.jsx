import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import TableRow from "./TableRow.jsx/TableRow";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [booking , setBooking] = useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
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

    return (
        <div>
            <h1 className=" text-2xl font-semibold text-center text-blue-500 p-4 uppercase"> your total services : {booking.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>ServiceName</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
        {booking.map(books=><BookingRow key={books._id} books = {books} handleDelete={handleDelete}></BookingRow>)}
  </table>
</div>
        </div>
    );
};

export default Bookings;