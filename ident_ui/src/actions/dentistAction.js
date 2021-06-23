import { dentistsServices } from "../services/dentistServices";
import { constants } from "../constants";
function getAllDentist() {
  return (dispatch) => {
    dentistsServices.getAllDentist().then((res) => {
      if (res.docs) dispatch(success(res.docs));
      else dispatch(failure(res.message));
    });
  };

  function success(dentists) {
    return { type: constants.GET_DENTISTS_SUCCESS, dentists };
  }
  function failure(message) {
    return { type: constants.GET_DENTISTS_FAILURE, message };
  }
}

function getDentistSchedule(id) {
  return (dispatch) => {
    dentistsServices.getDentistSchedule(id).then((res) => {
      console.log(res);
      if (res.doc) dispatch(success(res.doc));
      else dispatch(failure(res.message));
    });
  };

  function success(schedule) {
    return { type: constants.GET_SCHEDULE_SUCCESS, schedule };
  }
  function failure(message) {
    return { type: constants.GET_SCHEDULE_FAILURE, message };
  }
}

function addDentist(dentist) {
  return (dispatch) => {
    dentistsServices.addDentist(dentist).then((res) => {
      if (res.status === "success") {
        dispatch(success());
      } else {
        dispatch(failure(res.message));
      }
    });
  };
  function success() {
    return { type: constants.CREATE_DENTIST_SUCCESS };
  }
  function failure(message) {
    return { type: constants.CREATE_DENTIST_FAILURE, message };
  }
}

function updateDentist(info) {
  return (dispatch) => {
    dentistsServices.updateDentist(info).then((res) => {
      if (res.status === "success") {
        dispatch(success());
      } else {
        dispatch(failure(res.message));
      }
    });
  };
  function success() {
    return { type: constants.UPDATE_DENTIST_SUCCESS };
  }
  function failure(message) {
    return { type: constants.UPDATE_DENTIST_FAILURE, message };
  }
}

export const dentistActions = {
  addDentist,
  updateDentist,
  getAllDentist,
  getDentistSchedule,
};
