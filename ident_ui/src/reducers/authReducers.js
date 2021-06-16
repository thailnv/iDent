import { constants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));

let initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
    case constants.REGISTER_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case constants.LOGIN_FAILURE:
    case constants.REGISTER_FAILURE:
      return {
        message: action.message,
      };
    case constants.CLEAR_AUTH_MESSAGE:
      console.log("clear");
      return {
        ...state,
        message: "",
      };
    case constants.LOGOUT:
      return {};
    default:
      return state;
  }
}
