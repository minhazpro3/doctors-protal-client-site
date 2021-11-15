import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { width } from '@mui/system';
import useAuth from '../../../Hooks/useAuth'
import { TableBody } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({openBooking,handleBookingClose,booking,date,setBookingSuccess}) => {
    const {name,time,id,space}=booking;
       const {user}=useAuth();
       const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
       const [bookingInfo,setBookingInfo]=useState(initialInfo)


       const handleOncBlur = e =>{
            const field = e.target.name;
            const value = e.target.value;
            const  newInfo = {...bookingInfo}
            newInfo[field]=value;
            
            setBookingInfo(newInfo)
       }

    const handleBookingSubmit = e =>{
      e.preventDefault()
        // collected data 
      const appointment = {
        ...bookingInfo,
        time,
        serviceName: name,
        // date dewar duita system
        date: date.toLocaleDateString(),
        // currentDate: new  Date().toISOString().slice(0, 10-16),
      }
      
        // send to the server

        fetch('http://localhost:5000/appointment',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(appointment)
        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            setBookingSuccess(true)
            handleBookingClose()
          }
        })
        


        
       
    }


    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
          <TextField
          disabled
          sx={{width: '90%', m: 1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          <TextField
          
          sx={{width: '90%', m: 1}}
          name= 'patientName'
          id="outlined-size-small"
          onBlur={handleOncBlur}
          defaultValue={user.displayName}
          size="small"
        />
          <TextField
          
          sx={{width: '90%', m: 1}}
          name="email"
          id="outlined-size-small"
          onBlur={handleOncBlur}
          defaultValue={user.email}
          size="small"
        />
          <TextField
          
          sx={{width: '90%', m: 1}}
          id="outlined-size-small"
          name='phone'
          onBlur={handleOncBlur}
          label='Your phone'
          size="small"
        />
          <TextField
          
          disabled
          sx={{width: '90%', m: 1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button type="submit" variant="contained">Submit</Button>

          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;