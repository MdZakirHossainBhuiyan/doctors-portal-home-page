import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;