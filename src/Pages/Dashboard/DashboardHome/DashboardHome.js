import { Grid } from '@mui/material';
import * as React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Appointments from '../../Appointment/Appointments/Appointments';
import Calender from '../../Shared/Calender/Calender';


const DashboardHome = () => {
    const [date,setDate]=React.useState(new Date())
    const {admin}=useAuth()
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
        <Calender
        date={date}
        setDate={setDate}>
          
        </Calender>
       </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Appointments
          date={date}
          >
          
          </Appointments>
       </Grid>
      </Grid>
    );
};

export default DashboardHome;