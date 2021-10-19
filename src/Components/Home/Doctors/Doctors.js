import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    console.log(doctors);

    return (
        <section className="doctors mt-5">
            <div className="container">
                <h2 className="text-center text-primary mb-5">Our Doctors</h2>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;