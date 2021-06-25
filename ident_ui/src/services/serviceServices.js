import { constants as c } from "../constants";

function getAllService() {
  let requestOption = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${c.apiUrl}/services`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}

function createService(service) {
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
    body: JSON.stringify(service),
  };
  return fetch(`${c.apiUrl}/services`, requestOption)
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

function updateService(service) {
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("token")),
    },
    body: JSON.stringify(service),
  };
  return fetch(`${c.apiUrl}/services/${service._id}`, requestOption)
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

export const serviceServices = {
  getAllService,
  createService,
  updateService,
};
