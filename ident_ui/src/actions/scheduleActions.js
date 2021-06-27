import { constants as c } from "../constants";
import { scheduleServices } from "../services/scheduleServices";

function addSchedule(schedule) {
  return (dispatch) => {
    scheduleServices.addSchedule(schedule).then((res) => {
      if (res.status === "success") {
        dispatch(success());
      } else {
        dispatch(failure(res.message));
      }
    });
  };
  function success() {
    return { type: c.ADD_SCHEDULE_SUCCESS };
  }
  function failure(message) {
    return { type: c.ADD_SCHEDULE_FAILURE, message };
  }
}

function updateSchedule(schedule) {
  return (dispatch) => {
    scheduleServices.updateSchedule(schedule).then((res) => {
      if (res.status === "success") {
        dispatch(success());
      } else {
        dispatch(failure(res.message));
      }
    });
  };
  function success() {
    return { type: c.UPDATE_SCHEDULE_SUCCESS };
  }
  function failure(message) {
    return { type: c.UPDATE_SCHEDULE_FAILURE, message };
  }
}

function deleteSchedule(id) {
  return (dispatch) => {
    scheduleServices.deleteSchedule(id).then((res) => {
      if (res.status === "success") {
        dispatch(success());
      } else {
        dispatch(failure(res.message));
      }
    });
  };
  function success() {
    return { type: c.DELETE_SCHEDULE_SUCCESS };
  }
  function failure(message) {
    return { type: c.DELETE_SCHEDULE_FAILURE, message };
  }
}

export const scheduleActions = {
  addSchedule,
  updateSchedule,
  deleteSchedule,
};
