import { useSelector, useDispatch } from "react-redux";

import { appActions } from "../actions/appActions";

export default function ResultPopup() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.application.message);
  const willReload = useSelector(state => state.application.willReload);

  function handleClose() {
    dispatch(appActions.hidePopup());
    if (willReload)
      document.location.reload();
  }

  return (
    <div className="result-popup">
      {
        message ?
          <div className="result-message">
            {message}
          </div>
          :
          <div className="result-message">
            <img src="https://i.ibb.co/Z64YB8h/ajax-loader.gif" alt="" />
          </div>
      }
      <button onClick={handleClose} id="closeResultBtn">Close</button>
    </div>
  )
}