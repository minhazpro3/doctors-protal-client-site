import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvalibaleAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess]=useState(false)

    const Bookings = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: 10
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            space: 10
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '5:00 AM - 6:30 AM',
            space: 10
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '7:00 AM - 8:30 AM',
            space: 10
        },
        {
            id: 5,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: 10
        },
        {
            id: 6,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: 10
        },
    ]

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main',marginBottom: 2}} gutterBottom component="div">
       Available Appointment {date.toDateString()}
             </Typography>
             {bookingSuccess && <Alert severity="success">Appointment Book  successfully!</Alert>}
           
            <Grid container spacing={2}>
                {
                    Bookings.map(booking=> <Booking key={booking.id} booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
            </Container>
    );
};

export default AvalibaleAppointment;