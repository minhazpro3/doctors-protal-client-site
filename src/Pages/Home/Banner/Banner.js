import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png'
import { Button, Container } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    backgroundPosition: 'left',
    backgroundSize: 'cover',
   height: '500px',
    border: ' 1px solid red'

}

const varticalCenter ={
    display: 'flex',
    alignItems: 'center',
    height: '400px',
    border: '1px solid red'
}

const Banner = () => {


    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container>
        <Grid container spacing={2}>
          <Grid item style={{textAlign: 'left'}} xs={12} md={5}>
         <Box sx={{py: 5}}>
         <Typography variant="h4" component="div" sx={{ color: 'rgba(66, 69, 70) ', m: 2,fontWeight: 500}}>
       YOUR NEW SMILE <br/> START HERE
        </Typography>
          <Typography variant="h6" component="div" sx={{ color: 'rgba(66, 69, 70) ', m: 2,fontSize: 20}}>
          Lorem ipsum dolor sit amet consectetur adipisiching elit . Sed culpa cumque eniml!
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: 'rgba(114, 181, 186)' , my: 2}} >Get Appointment</Button>
         </Box>
        
          </Grid>
          <Grid item xs={12} md={7} style={varticalCenter}>
           <img style={{width: '520px'}}  src={chair} alt="" />
          </Grid>
        </Grid>
        </Container>
      </Box>
    );
};

export default Banner;