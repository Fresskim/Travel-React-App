import React, { useEffect, useState } from 'react'
import './BookingStyles.css'



function Booking() {

  const API = "http://localhost:3001";

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [submit, setSubmit]= useState(false);

  const randomId = Math.floor(Math.random() * 10000).toFixed(0)
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true)

}

const postForm = async () => {

const data = {
  id: parseInt(randomId).toString(),
  name: name,
  email: email,
  phone: phone,
  checkIn: checkIn,
  checkOut: checkOut,
}

await fetch(`${API}/booking`,{
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type" : 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})

}

useEffect(()=>{
  if(submit === true) {
    postForm();

  } else {
    return
  }

}, [submit])


return (
  <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Full Name" value={name} onChange={(e)=> setName(e.target.value)}/>
  <input type="text" placeholder="E-Mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
  <input type="text" placeholder="Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
  <input type="date" placeholder="Check In" value={checkIn} onChange={(e)=> setCheckIn(e.target.value)}/>
  <input type="date" placeholder="Check Out" value={checkOut} onChange={(e)=> setCheckOut(e.target.value)}/>
  <button type="submit">Submit</button>


</form>
)

}

export default Booking
