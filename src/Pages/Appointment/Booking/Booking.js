import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking,date,setBookingSuccess}) => {
    const {name,time,space}=booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{py: 3}} elevation={3} >
            <Typography sx={{ color: 'info.main',fontWeight: 600 }} variant="h5" gutterBottom component="div">
                 {name}
             </Typography>
            <Typography variant="h6" gutterBottom component="div">
                 {time}
             </Typography>
             <Typography variant="caption" display="block" gutterBottom>
                 {space} SPACES AVAILABLE
              </Typography>
              <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                 </Paper>
        </Grid>
        <BookingModal
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        booking={booking}
        date={date}
        setBookingSuccess={setBookingSuccess}
        
        >
            </BookingModal> 
        </>
    );
};

export default Booking;