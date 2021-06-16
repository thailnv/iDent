import { constants as c } from "../constants";

const initialState = { status: c.LOADING, appointmentStatus: c.LOADING };

export function appointment(state = initialState, action) {
  switch (action.type) {
    case c.GET_APPOINTMENTS_SUCCESS:
      return {
        status: c.SUCCESS,
        appointments: action.appointments,
      };
    case c.GET_APPOINTMENTS_FAILURE:
      return {
        status: c.FAILURE,
        message: action.message,
      };
    default:
      return state;
  }
}
