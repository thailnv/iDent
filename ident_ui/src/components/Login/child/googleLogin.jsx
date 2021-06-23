import { GoogleLogin as Login } from 'react-google-login';
import React from 'react';

import styled from 'styled-components';
const CLIENT_ID = "428568904300-qr141kvg7m1mjnun6oc0nftikuuk3ifm.apps.googleusercontent.com";

export default function GoogleLogin(props) {
  const onSuccess = (res) => {
    console.log(res.profileObj);
  }
  function onFailure(res) {
    console.log(res);
  }
  const GoogleLoginButton = styled.button`
    position:relative;
    margin: auto;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid gray;
    height: 40px;
    width: 250px;
    display: flex;
    align-items:center;
    justify-content: center;
    background: white;
    &:hover{
      box-shadow: 0 0 5px gray;
    }
  `
  return (
    <Login
      clientId={CLIENT_ID}
      render={renderProps => (
        <div>
          <GoogleLoginButton onClick={renderProps.onClick}><img alt="" style={{ width: "20px", marginRight: "20px" }} src="https://i.ibb.co/Vjcxkxf/115615.png"></img><span style={{ color: "black", fontSize: "12px" }}>Continute with Google</span></GoogleLoginButton>
        </div>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  )
}