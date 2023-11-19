import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from "axios"


export default function PaymantPage() {

  const[userdata,setUserData] = useState({
    firstName:'',
    lastName:'',
    email: '',
    phoneNumber: '',
    state:'',
    country:'',
    pincode:'',
    paymentAmount:'',
  })

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };


  async function onPayment(){
    const response = await axios.post("http://localhost:5000/api/payment",userdata,config);
    alert("payment sucessfull of ",userdata.paymentAmount);
    console.log(userdata);
  }
  
  return (
    <div className='px-[100px] py-14  text-black'>
        <h1 className='text-xl  font-semibold text-black ml-[427px]'>Donate here</h1>
        <div className='flex items-center justify-evenly gap-5 mt-10'>

            {/* personal details */}
            <div className='  px-24 h-screen'>
                <h1 className='text-left  mb-4 text-black font-semibold'>Personal Information*</h1>
                <div className='flex items-center gap-5 mb-4'>
                <TextField 
               
                 value={userdata.firstName}
                 onChange={e=>setUserData({...userdata,firstName:e.target.value})}
                sx={{color:"white",border:"white"}} required id="outlined-basic" label="FirstName" variant="outlined" />
                <TextField
                   value={userdata.lastName}
                   onChange={e=>setUserData({...userdata,lastName:e.target.value})}
                required id="outlined-basic" label="LastName" variant="outlined" />
                </div>
                <TextField
                 value={userdata.email}
                 onChange={e=>setUserData({...userdata,email:e.target.value})}
                className='w-full mt-4' required id="outlined-basic" label="Email" variant="outlined" />
                <div className='flex mt-5 items-center gap-5 mb-4'>
                <TextField
                value={userdata.country}
                onChange={e=>setUserData({...userdata,country:e.target.value})}
                 required id="outlined-basic" label="Country" variant="outlined" />
                <TextField 
                       value={userdata.state}
                       onChange={e=>setUserData({...userdata,state:e.target.value})}
                required id="outlined-basic" label="State" variant="outlined" />
                </div>
                <TextField
                 value={userdata.pincode}
                 onChange={e=>setUserData({...userdata,pincode:e.target.value})}
                className='w-full mt-4' required id="outlined-basic" label="Pincode" variant="outlined" />
                <div className='mt-4'>
                <TextField
                 value={userdata.phoneNumber}
                 onChange={e=>setUserData({...userdata,phoneNumber:e.target.value})}
                className='w-full mt-4' required id="outlined-basic" label="PhoneNumber" variant="outlined" />
                </div>
                <div className='mt-4'>
                <TextField 
                 value={userdata.paymentAmount}
                 onChange={e=>setUserData({...userdata,paymentAmount:e.target.value})}
                className='w-full mt-4' required id="outlined-basic" label="PaymantAmount" variant="outlined" />
                </div>

                <button
                onClick={onPayment}
                className='bg-[#072541] w-full rounded text-white font-semibold p-4 mt-5 shadow-lg active:shadow-none'>Pay Amount</button>
                

                





            </div>

            
        </div>
      
    </div>
  )
}
