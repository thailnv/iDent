import { constants } from "../constants";

const initialState = { popupType: "" };

export function application(state = initialState, action) {
  console.log("appReducers", action);
  switch (action.type) {
    case constants.POPUP_LOGIN:
      return {
        ...state,
        popupType: "login",
      };
    case constants.HIDE_POPUP:
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        popupType: "",
      };
    case constants.POPUP_FORGOTPASS:
      return {
        ...state,
        popupType: "forgotpass",
      };
    default:
      return state;
  }
}
