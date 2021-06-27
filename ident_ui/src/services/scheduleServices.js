import { constants as c } from "../constants";

function addSchedule(schedule) {
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
    body: JSON.stringify(schedule),
  };
  return fetch(`${c.apiUrl}/schedules`, requestOption)
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

function updateSchedule(schedule) {
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
    body: JSON.stringify(schedule),
  };
  return fetch(`${c.apiUrl}/schedules/${schedule._id}`, requestOption)
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

function deleteSchedule(id) {
  const requestOption = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  };
  return fetch(`${c.apiUrl}/schedules/${id}`, requestOption)
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

export const scheduleServices = {
  addSchedule,
  deleteSchedule,
  updateSchedule,
};
