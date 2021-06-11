import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../../actions/userActions";
import Input from "../../../common/input";

function SignupForm(props) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const { email, password, name } = inputs;
  const dispatch = useDispatch();

  const message = useSelector(store => store.authentication.message);

  function validate() {
    let err = {};
    if (!email)
      err.email = "Plaese enter your email!";
    if (!name)
      err.name = "Please enter your name!";
    if (!password)
      err.password = "Please enter your password!";
    return err;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = validate();
    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }
    dispatch(
      userActions.register(name, email, password)
    );
  }
  return (
    <form className="form center ">
      <div className="center-text">
        <h2>iDent - Register</h2>
        <div>Please provide these infomation to create your account!</div>
      </div>
      <div className="input-container">
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          error={errors.name}
          handleChange={handleInputChange}
        />
        <Input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          error={errors.email}
          handleChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          error={errors.password}
          handleChange={handleInputChange}
        />
        <button onClick={handleSubmit} id="signup-btn">Register</button>
        {message && <div className="center-text text-error">{message}</div>}
        <div className='center-text'>Already have an account? <button onClick={props.onToggle} >Login</button> </div>
      </div>
    </form>
  )
}

export default SignupForm