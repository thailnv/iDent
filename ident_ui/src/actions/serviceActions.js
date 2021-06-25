import { serviceServices } from "../services/serviceServices";
import { constants } from "../constants";
function getAllService() {
  return (dispatch) => {
    serviceServices.getAllService().then((res) => {
      if (res.docs) dispatch(success(res.docs));
      else dispatch(failure(res.message));
    });
  };

  function success(services) {
    return { type: constants.GET_SERVICE_SUCCESS, services };
  }
  function failure(message) {
    return { type: constants.GET_DENTISTS_FAILURE, message };
  }
}

function createService(service) {
  return (dispatch) => {
    serviceServices.createService(service).then((res) => {
      if (res.status === "success") {
        dispatch(success());
      } else {
        dispatch(failure(res.message));
      }
    });
  };

  function success() {
    return { type: constants.CREATE_SERVICE_SUCCESS };
  }
  function failure(message) {
    return { type: constants.CREATE_SERVICE_FAILURE, message };
  }
}

function updateService(service) {
  return (dispatch) => {
    serviceServices.updateService(service).then((res) => {
      if (res.status === "success") {
        dispatch(success());
      } else {
        dispatch(failure(res.message));
      }
    });
  };
  function success() {
    return { type: constants.UPDATE_SERVICE_SUCCESS };
  }
  function failure(message) {
    return { type: constants.UPDATE_SERVICE_FAILURE, message };
  }
}

export const serviceActions = {
  getAllService,
  createService,
  updateService,
};
