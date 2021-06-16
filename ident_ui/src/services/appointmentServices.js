import { constants as c } from "../constants";

function makeAppointment(appointment) {
  let requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  };
  return fetch(`${c.apiUrl}/appointments`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}
function getUserAppointments() {
  let requestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  };
  return fetch(`${c.apiUrl}/appointments/by_user`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}
function cancelAppointment(id) {
  let requestOption = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  };
  return fetch(`${c.apiUrl}/appointments/${id}`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}
export const appointmentServices = {
  makeAppointment,
  cancelAppointment,
  getUserAppointments,
};
