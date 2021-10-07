import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import fluride from '../../../images/flurideTreatment.png';
import cavity from '../../../images/cavityFilling.png';
import teeth from '../../../images/teethWhitening.png';

const serviceData = [
    {
        name: 'Fluride Treatment',
        img: fluride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        img: teeth,
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color: '#3A4256'}}>Services we Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;