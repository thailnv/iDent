import { constants as c } from "../constants";

function getAllDentist() {
  let requestOption = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${c.apiUrl}/dentists`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}

function getDentistSchedule(id) {
  let requestOption = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${c.apiUrl}/schedules?dentist=${id}`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}

function addDentist(dentist) {
  let requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
    body: JSON.stringify(dentist),
  };
  return fetch(`${c.apiUrl}/dentists`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

function updateDentist(info) {
  const requestOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
    body: JSON.stringify(info),
  };
  return fetch(`${c.apiUrl}/dentists/${info._id}`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

export const dentistsServices = {
  addDentist,
  updateDentist,
  getAllDentist,
  getDentistSchedule,
};
