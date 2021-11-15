import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctor from  '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button } from '@mui/material';


const appointmentBg = {
    background:   `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.9 )',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 200
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img  style={{width: 400, marginTop: -110}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex' , justifyContent: 'flex-start', textAlign: 'left' , alignItems: 'center' }}>
     <Box>
     <Typography variant="h6" component="div" sx={{ color: 'rgba(131, 250, 235, 0.9)'}}>
        Appointment
        </Typography>
        <Typography variant="h5" component="div" sx={{ my: 3, color: 'white' }}>
       Make An Appointment <br/> Today
        </Typography>
        <Typography variant="h5" component="div" sx={{color: 'white',fontSize: 16 , fontWeight:  300}}>
        Lorem ipsum dolor sit amet consectetur adipisiching elit . Sed culpa cumque eniml! Boluptatibus aliquid expedita 
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: 'rgba(131, 250, 235, 0.7)' , my: 2}} >Learn more</Button>
     </Box>
        </Grid>
      
       
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;