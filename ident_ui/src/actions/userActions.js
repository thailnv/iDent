import { userService } from "../services/userServices";
import { constants } from "../constants";

function register(name, email, password) {
  return (dispatch) => {
    userService.register(name, email, password).then((res) => {
      if (res.user) dispatch(success(res.user));
      else dispatch(failure(res.message));
    });
  };

  function success(user) {
    return { type: constants.REGISTER_SUCCESS, user };
  }
  function failure(message) {
    return { type: constants.REGISTER_FAILURE, message };
  }
}

function login(email, password) {
  return (dispatch) => {
    userService.login(email, password).then((res) => {
      if (res.user) dispatch(success(res.user));
      else dispatch(failure(res.message));
    });
  };

  function success(user) {
    return { type: constants.LOGIN_SUCCESS, user };
  }
  function failure(message) {
    return { type: constants.LOGIN_FAILURE, message };
  }
}

function logout() {
  userService.logout();
  return (dispatch) => {
    dispatch({ type: constants.LOGOUT });
  };
}

export const userActions = {
  login,
  logout,
  register,
};
