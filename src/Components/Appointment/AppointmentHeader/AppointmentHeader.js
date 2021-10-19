import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../Home/Header/Header.css';
import NavBar from '../../Shared/NavBar/NavBar';

const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main style={{height: '600px'}} className="header-container row d-flex align-items-center">
            <NavBar />
            <div className="col-md-4 offset-md-1">
                <h1 className="text-brand">Appointment</h1> <br />

                <div>
                    <Calendar className="mt-5 p-1 calender-brand border-white" onChange={handleDateChange} value={new Date()} />
                </div>
                
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;