import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256', fontSize: 'bold'}}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo voluptatem non reprehenderit earum, harum quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio quod velit, et odit ipsam.</p>
                <button style={{backgroundColor: '#15D2C5', border: 'none'}} className="btn btn-primary"><Link to="/appointment">GET APPOINTMENT</Link> </button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;