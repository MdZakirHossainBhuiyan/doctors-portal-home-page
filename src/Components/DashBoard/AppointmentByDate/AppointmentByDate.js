import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointments}) => {
    return (
        <div className="pt-5">
            <h2 className="text-brand text-center mt-5">Appointments</h2>
            
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }

            
        </div>
    );
};

export default AppointmentByDate;