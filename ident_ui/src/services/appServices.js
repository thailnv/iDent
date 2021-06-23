import { constants as c } from "../constants";

function getAdminInfo() {
  const requestOption = {
    method: "GET",
  };
  return fetch(`${c.apiUrl}/admin`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => {
      console.log(err);
    });
}

export const appServices = { getAdminInfo };
