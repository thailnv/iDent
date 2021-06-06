import { constants } from "../constants";
import { appointmentServices } from "../services/appointmentService";

function getUserAppointments(id) {
  return (dispatch) => {
    appointmentServices.getUserAppointments(id).then((res) => {
      if (res.appointments) dispatch(success(res.appointments));
      else dispatch(failure(res.message));
    });
  };

  function success(appointments) {
    return { type: constants.GET_APPOINTMENT_SUCCESS, appointments };
  }
  function failure(message) {
    return { type: constants.GET_APPOINTMENT_FAILURE, message };
  }
}


export const appointmentActions = {
    getUserAppointments,
};
