import { useState } from "react";
import { useDispatch } from "react-redux";

import UpdateForm from "./updateForm";
import AddForm from "./addForm";

import { dentistActions } from "../../../actions/dentistAction";
import { constants } from "../../../constants";
import { toggleItem } from "../../../helper";

export default function DentistSection(props) {

  const dispatch = useDispatch();
  const [customClass, setCustomClass] = useState({ confirm: "none", info: "none", insert: "" });
  const [updateInfo, setUpdateInfo] = useState({
    name: "",
    img: "",
    idNumber: "",
    yearExperience: "",
    degree: {},
    expert: [],
    phone: "",
    rating: 0,
    patient: 0
  });

  function handleShowInfo(dentist) {
    let dentistInfo = { ...dentist };
    dentistInfo.degree = dentistInfo.degree._id;
    setUpdateInfo(dentistInfo);
    setCustomClass({ ...customClass, info: "flex" });
  }

  function handleCloseInfo(e) {
    e.preventDefault();
    setCustomClass({ ...customClass, info: "none" });
  }

  function handleInputUpdateChange(e) {
    let { name, value } = e.target;
    if (name !== "expert") {
      setUpdateInfo({ ...updateInfo, [name]: value });
      return;
    }
    let expert = updateInfo.expert;
    toggleItem(expert, value);
    setUpdateInfo({ ...updateInfo, [name]: expert })
  }

  function handleUpdate(e) {
    e.preventDefault();
    dispatch({ type: constants.SHOW_LOADING_STATUS });
    dispatch(dentistActions.updateDentist(updateInfo));
  }

  function handleShowInsert() {
    setCustomClass({ ...customClass, insert: "popup-container flex" });
  }

  function handleCloseInsert(e) {
    e.preventDefault()
    setCustomClass({ ...customClass, insert: "" });
  }

  return (
    <div className="admin-section">
      <div className={customClass.insert}>
        <div className="form-view">
          <AddForm
            services={props.services}
            degrees={props.degrees}
            handleCloseForm={handleCloseInsert}
          />
        </div>
      </div>
      <div className="table-view">
        <div style={{ display: "flex" }}>
          <h3>Dentists list</h3>
          <button className="insert-btn" onClick={handleShowInsert}>New +</button>
        </div>
        <div className="header">
          <div className="name">
            Name
          </div>
          <div className="level">
            Degree
          </div>
          <div className="number-questions">
            Status
          </div>
          <div className="time">
            Phone
          </div>
          <div className="action">
            Actions
          </div>
        </div>
        <div className="data-row-container">
          {
            props.dentists.map((v, i) => {
              return (
                <div className="data-row" key={i}>
                  <div className="name">
                    {v.name}
                  </div>
                  <div className="level">
                    {v.degree.name}
                  </div>
                  <div className="number-questions">
                    {v.status}
                  </div>
                  <div className="time">
                    {v.phone}
                  </div>
                  <div className="action">
                    <button onClick={() => handleShowInfo(v)} className="edit-btn">
                      <i className="far fa-edit"></i>
                    </button>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </div>
      <div className="popup-container" style={{ display: customClass.info }}>
        <UpdateForm
          services={props.services}
          degrees={props.degrees}
          updateInfo={updateInfo}
          handleInputChange={handleInputUpdateChange}
          handleUpdate={handleUpdate}
          handleCloseEdit={handleCloseInfo}
        />
      </div>
    </div>
  )
}