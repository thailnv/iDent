import { constants } from "../constants";

const initialState = {
  popupType: "",
  message: "",
  status: constants.LOADING,
  willReload: false,
};

export function application(state = initialState, action) {
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
    case constants.MAKE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        message: "Your appointment was successfully create !",
        popupType: "result",
        willReload: true,
      };
    case constants.CANCEL_APPOINTMENT_SUCCESS:
      return {
        ...state,
        message: "Your appointment was successfully delete !",
        popupType: "result",
        willReload: true,
      };
    case constants.MAKE_APPOINTMENT_FAILURE:
      console.log(action);
      return {
        ...state,
        message: action.message,
        popupType: "result",
      };
    case constants.CANCEL_APPOINTMENT_FAILURE:
      return {
        ...state,
        message: "Something went wrong please try again latter !",
        popupType: "result",
      };
    case constants.CREATE_DENTIST_FAILURE:
      return {
        ...state,
        message: action.message,
        popupType: "result",
      };
    case constants.CREATE_DENTIST_SUCCESS:
      return {
        ...state,
        message: "Dentist was successfully added to the system !",
        popupType: "result",
        willReload: true,
      };
    case constants.UPDATE_DENTIST_SUCCESS:
      return {
        ...state,
        message: "Dentist information was successfully updated !",
        popupType: "result",
        willReload: true,
      };
    case constants.UPDATE_DENTIST_FAILURE:
      return {
        ...state,
        message: action.message,
        popupType: "result",
        willReload: false,
      };
    case constants.ADD_SCHEDULE_SUCCESS:
      return {
        ...state,
        message: "Schedule was successfully created !",
        popupType: "result",
        willReload: true,
      };
    case constants.UPDATE_SCHEDULE_SUCCESS:
      return {
        ...state,
        message: "Schedule was successfully update !",
        popupType: "result",
        willReload: true,
      };
    case constants.ADD_SCHEDULE_FAILURE:
    case constants.UPDATE_SCHEDULE_FAILURE:
      return {
        ...state,
        message: action.message,
        popupType: "result",
        willReload: false,
      };
    case constants.SHOW_LOADING_STATUS:
      return {
        ...state,
        message: "",
        popupType: "result",
      };
    case constants.GET_ADMIN_SUCCESS:
      return {
        ...state,
        adminInfo: action.info,
        status: constants.SUCCESS,
      };
    case constants.GET_ADMIN_FAILURE:
      return {
        ...state,
        status: constants.FAILURE,
      };
    default:
      return state;
  }
}
