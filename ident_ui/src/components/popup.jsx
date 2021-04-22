import { useSelector } from 'react-redux'

import React from 'react';
import Login from './login';

function Popup(){

  const popupType = useSelector(state => state.application.popupType);

  console.log(popupType);

  let currentPopup = {
    login: <Login/>,
  }

  let className = 'popup';

  if(popupType)
    className += ' block';

  return (
    <div className={className}>
      {currentPopup[popupType]}
    </div>
  )
}

export default Popup