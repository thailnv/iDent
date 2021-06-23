import { constants } from "../constants";
import { appServices } from "../services/appServices";

function changePopup(type) {
  return { type };
}

function hidePopup() {
  return { type: constants.HIDE_POPUP };
}

function getAdminInfo() {
  return (dispatch) => {
    return appServices.getAdminInfo().then((res) => {
      if (res.status === "success") {
        dispatch(success(res));
      } else {
        dispatch(failure(res.message));
      }
    });
  };
  function success(info) {
    return { type: constants.GET_ADMIN_SUCCESS, info };
  }
  function failure(message) {
    return { type: constants.GET_ADMIN_FAILURE, message };
  }
}

export const appActions = {
  changePopup,
  hidePopup,
  getAdminInfo,
};
