import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="mt-5" style={{height: '50px'}} src={service.img} alt="serviceImage" />
            <h5 className="mt-5 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta dolor sit amet</p>
        </div>
    );
};

export default ServiceDetails;