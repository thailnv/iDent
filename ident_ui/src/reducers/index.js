import { combineReducers } from "redux";

import { authentication } from "./authReducers";
import { application } from "./appReducers";
import { dentist } from "./dentistReducers";
import { service } from "./serviceReducers";

const rootReducer = combineReducers({
  authentication,
  application,
  dentist,
  service,
});

export default rootReducer;
