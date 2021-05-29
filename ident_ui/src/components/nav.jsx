import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { appActions } from '../actions/appActions';
import { userActions } from '../actions/userActions';
import { constants } from '../constants';

function Nav() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.authentication.user);

  function handleLoginClick() {
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleLogoutClick() {
    dispatch(userActions.logout());
  }

  const buttonTitle = user ? 'Logout' : 'Login';

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/trang-chu"><img src="/img/logo_trans_light.png" alt="" /></Link>
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <Link to="/dich-vu" className="dropdown-btn">Service +</Link>
          <div className="dropdown-list">
            <Link to="/dich-vu/kiem-tra" className="dropdown-item">Teeth whitening</Link>
            <Link to="/dich-vu/nho-rang" className="dropdown-item">Teeth cleaning </Link>
            <Link to="/dich-vu/chinh-nha" className="dropdown-item">Dental anesthesia</Link>
            <Link to="/dich-vu/tay-trang" className="dropdown-item">Orthodontics </Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/hen-lich" className="dropdown-btn">Appointment</Link>
        </div>
        <div className="dropdown">
          <Link to="/nha-si" className="dropdown-btn">Our Doctors</Link>
        </div>
        <div className="dropdown">
          <Link to="/co-so-vat-chat" className="dropdown-btn">Facilities</Link>
        </div>
        <div className="dropdown">
          <button
            id="account-btn"
            onClick={user ? handleLogoutClick : handleLoginClick}>
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav