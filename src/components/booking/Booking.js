import React, { useState, useEffect } from "react";
import "./BookingStyles.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


import UpdateBooking from "./updateBooking";


const BookingForm = () => {

  let path = window.location.pathname;
  
  const [booking, setBooking] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrival, setArrival] = useState(Number());
  const [departure, setDeparture] = useState(Number());
  const [destination, setDestination] = useState();
  const [phone, setPhone] = useState(Number());

  const [getData, setgetData] = useState(false);
  const [bookings, setBookings] = useState([]);

  const API = "http://localhost:3000";

  const randomId = Math.floor(Math.random() * 10000).toFixed(0);
  const handleDelete = async (id, e) => {
    e.preventDefault();
    fetch(`${API}/booking/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log("response", response);
        setgetData(true);
        setBookings(bookings);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setName ("");
    setEmail("");
    setArrival("");
    setDeparture("");
    setDestination("");
    setPhone("");



    const data = {
      id: parseInt(randomId).toString(),
      name: name,
      email: email,
      checkIn: arrival,
      checkOut: departure,
      phone: phone,
      destination: destination,
    };

    await fetch(`${API}/booking`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setEmail("");
        setArrival("");
        setDeparture("");
        setPhone("");
        setDestination("");
        setgetData(true);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`${API}/booking`)
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setgetData(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getData]);


  return (
    <>
    <div className="nav-black">{path == "/booking" ? <Navbar /> : ""}</div>
    
    <div className="form-container" >

      <form onSubmit={handleSubmit}>
        <label> {" "} Select destination <select required defaultValue={null} name="destination" id="destinacioni" onClick={(e) => {e.preventDefault(); setDestination(e.target.value);}}>
            <option hidden value="null">Destination </option>
            <option value="Rome">Rome</option>
            <option value="Paris">Paris</option>
            <option value="Venice">Venice</option>
            <option value="Prague">Prague</option>
            <option value="Dubai">Dubai</option>
            <option value="Mauritius">Mauritius</option>
          </select>
        </label>
        <br />

        <label>
          Full Name:
          <input type="text" required name="name" value={booking.name} onChange={(e) => {  setName(e.target.value);  }}/>
        </label>
        <br />

        <label>
          E-Mail: <input type="email" required name="email" value={booking.email} onChange={(e) => { e.preventDefault(); setEmail(e.target.value);  }}/>
        </label>
        <br />

        <label>
          Phone Number:
          <input type="tel" name="phone" required value={booking.phone} onChange={(e) => { e.preventDefault(); setPhone(e.target.value); }} />
        </label>
        <br />
        
        <label>
          Arrival Date:
          <input type="date" required  name="arrivalDate" value={booking.arrivalDate} onChange={(e) => { e.preventDefault(); setArrival(e.target.value);
          }}/>
    
        </label>
        <br />

        <label>
          Departure Date:
          <input type="date" required name="departureDate"  value={booking.departureDate} onChange={(e) => { e.preventDefault(); setDeparture(e.target.value);}}/>
        </label>
        <br />

        <button type="submit"> Confirm Booking </button>
      </form>

      </div>
      

      {/* / / / / / / / / / / / / / / / MAP / / / / / / / / / / / / / / /  */}
    
      
      {bookings.length == 0 ? <h3 className="no-bookings">There are no active bookings at the moment, please use the booking form above to make a booking!</h3> : ""}
      {bookings?.map((el) => {
        return (
         
          <div className="active-bookings">
             <h3> Active Bookings:</h3>
            Booking ID: {el?.id} <br />
            Destination: {el?.destination} <br />
            Full Name: {el?.name} <br />
            Phone Number:{el?.phone} <br />
            E-Mail: {el?.email} <br />
            Check In: {el?.checkIn} <br />
            Check Out: {el?.checkOut} <br />
            <button
              className="deleteBooking"
              onClick={(e) => {
                handleDelete(el?.id, e);
              }}>
              Cancel Booking
            </button>
            
          </div>
        );
      })}
    <div className="footer2">{path == "/booking" ? <Footer /> : ""}</div>

    </>
  );
  
};

export default BookingForm;
