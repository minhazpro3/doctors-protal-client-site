import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvalibaleAppointment from '../AvalibaleAppointment/AvalibaleAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation ></Navigation>
           <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
           <AvalibaleAppointment date={date}></AvalibaleAppointment>
        </div>
    );
};

export default Appointment;