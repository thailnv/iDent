import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { a } from 'react-router-dom';

import { appActions } from '../actions/appActions';
import { userActions } from '../actions/userActions';
import { constants } from '../constants';
import { showSidebar } from "../helper";

function Nav() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.authentication.user);

  function handleLoginClick() {
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleLogoutClick() {
    dispatch(userActions.logout());
  }

  function handleShowSidebar() {
    showSidebar();
  }

  const buttonTitle = user ? 'Logout' : 'Login';

  return (
    <div className="nav" style={{ background: 'url("https://i.ibb.co/BKq8KSg/banner-bg.jpg")' }}>
      <div className="logo">
        <a href="/"><img src="https://i.ibb.co/DrQY4fY/logo-trans.png" alt="" /></a>
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <a href="/services" className="dropdown-btn">Service +</a>
          <div className="dropdown-list">
            <a href="/services/teeth-whitening" className="dropdown-item">Teeth whitening</a>
            <a href="/services/teeth-cleaning" className="dropdown-item">Teeth cleaning </a>
            <a href="/services/dental-anesthesia" className="dropdown-item">Dental anesthesia</a>
            <a href="/services/orthodontics" className="dropdown-item">Orthodontics </a>
          </div>
        </div>
        <div className="dropdown">
          <a href="/make-appointment" className="dropdown-btn">Appointment</a>
        </div>
        <div className="dropdown">
          <a href="/dentists" className="dropdown-btn">Our Doctors</a>
        </div>
        <div className="dropdown">
          <a href="/appointment-list" className="dropdown-btn">Facilities</a>
        </div>
        <div className="dropdown">
          <button
            id="account-btn"
            onClick={user ? handleLogoutClick : handleLoginClick}>
            {buttonTitle}
          </button>
        </div>
        <div className="dropdown mobile-display">
          <button onClick={handleShowSidebar}>
            <img src="https://i.ibb.co/L54TwF4/menu-icon2.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav