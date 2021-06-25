import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../actions/appActions';
import { constants } from '../constants';

import { closeSidebar, toggleSubitem } from "../helper";
import { userActions } from '../actions/userActions';
import React from 'react';

export default function MenuSidebar() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.authentication.user);

  function handleLogoutClick() {
    closeSidebar();
    dispatch(userActions.logout());
  }

  function handleLoginClick() {
    closeSidebar();
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleCloseSidebar() {
    closeSidebar();
  }

  function handleToggle() {
    toggleSubitem()
  }
  return (
    <React.Fragment>
      <div id="sidebar-modal">
      </div>
      <div id="menuSidebar" className="menu-sidebar">
        <div style={{ height: "3em" }}>
          <button onClick={handleCloseSidebar} id="closeSidebarBtn">
            <img src="https://i.ibb.co/TrvZM1h/close-icon.png" alt="" />
          </button>
        </div>
        <div className="item-container">
          <div className="sidebar-item" style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="/services">
              Service
            </a>
            <button onClick={handleToggle} style={{ marginRight: "1em", padding: "0" }}>
              <img src="https://i.ibb.co/HnZk8BX/down.png" alt="" />
            </button>
          </div>
          <div id="sidebarSubitem" className="sidebar-subitem">
            <a href="/services/teeth-whitening" className="sub-item">
              Teeth whitening
            </a>
            <a href="/services/teeth-cleaning" className="sub-item">
              Teeth cleaning
            </a>
            <a href="/services/dental-anesthesia" className="sub-item">
              Dental anesthesia
            </a>
            <a href="/services/orthodontics" className="sub-item">
              Orthodontics
            </a>
          </div>
          <div className="sidebar-item">
            <a href="/make-appointment">
              Appointment
            </a>
          </div>
          <div className="sidebar-item">
            <a href="/dentists">
              Our Doctors
            </a>
          </div>
          {
            !user
              ?
              <button className="sidebar-login-btn" onClick={handleLoginClick}>
                Login
              </button>
              :
              <React.Fragment>
                <div className="sidebar-item">
                  <a href="/appointment-list">
                    My appointments
                  </a>
                </div>
                <div className="sidebar-item">
                  <a href="/dentists">
                    My medical record
                  </a>
                </div>
                {
                  user.role === "admin" &&
                  <div className="sidebar-item">
                    <a href="/admin">
                      Manager page
                    </a>
                  </div>
                }
                <button className="sidebar-login-btn" onClick={handleLogoutClick}>
                  Logout
                </button>
              </React.Fragment>
          }
        </div>
      </div>
    </React.Fragment>
  )
}