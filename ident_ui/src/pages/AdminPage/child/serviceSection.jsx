import { useState } from "react";
import { useDispatch } from "react-redux";

import { serviceActions } from "../../../actions/serviceActions";
import { constants } from "../../../constants";

export default function ServiceSection(props) {

  const dispatch = useDispatch();
  const [customClass, setCustomClass] = useState({ confirm: "none", info: "none" })
  const [insertInfo, setInsertInfo] = useState({
    name: "",
    time: "",
    from: 0,
    to: 0,
    img: ""
  });
  const [updateInfo, setUpdateInfo] = useState({
    name: "",
    time: "",
    from: 0,
    to: 0,
    img: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: constants.SHOW_LOADING_STATUS });
    dispatch(serviceActions.createService(insertInfo));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInsertInfo({ ...insertInfo, [name]: value });
    return;
  }

  function handleShowInfo(service) {
    console.log(service);
    setCustomClass({ ...customClass, info: "flex" });
    setUpdateInfo(service);
  }

  function handleCloseInfo(e) {
    e.preventDefault();
    setCustomClass({ ...customClass, info: "none" });
  }


  function handleUpdate(e) {
  }

  return (
    <div className="admin-section">
      <div className="form-view">
        <form>
          <h3>New service</h3>
          <div className="form-wraper">
            <label htmlFor="name">Name:</label>
            <input onChange={handleInputChange} type="text" name="name" id="name" />
            <label htmlFor="name">Image:</label>
            <input onChange={handleInputChange} type="text" name="img" id="img" />
            <label htmlFor="price">Price:</label>
            <div className="row" style={{ paddingLeft: "3em" }}>
              <label htmlFor="form">Form:</label>
              <input onChange={handleInputChange} type="number" name="from" id="from" />
            </div>
            <div className="row" style={{ paddingLeft: "3em" }}>
              <label htmlFor="to">To:</label>
              <input onChange={handleInputChange} type="number" name="to" id="to" />
            </div>
            <label htmlFor="time">Time:</label>
            <input onChange={handleInputChange} type="number" name="time" id="time" min="0" />
          </div>
          <button onClick={handleSubmit} className="submit-btn">
            Lưu
          </button>
        </form>
      </div>
      <div className="table-view">
        <h3>Services list</h3>
        <div className="header">
          <div className="name">
            Name
          </div>
          <div className="level">
            Price
          </div>
          <div className="service-time">
            Time
          </div>
          <div className="status">
            Status
          </div>
          <div className="rating">
            Rating
          </div>
          <div className="action">
            Actions
          </div>
        </div>
        <div className="data-row-container">
          {
            props.services.map((v, i) => {
              return (
                <div className="data-row" key={i}>
                  <div className="name">
                    {`${v.name}`}
                  </div>
                  <div className="level">
                    {`${v.from} - ${v.to}`}
                  </div>
                  <div className="service-time">
                    {v.time} min
                  </div>
                  <div className="status">
                    {v.status}
                  </div>
                  <div className="rating">
                    {v.rating}
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
        <div className="info-popup schedule-info">
          {/* <form>
            <h3>New service</h3>
            <div className="form-wraper">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" value={updateInfo.name} />
              <label htmlFor="name">Image:</label>
              <input type="text" name="img" id="img" value={updateInfo.img} />
              <label htmlFor="price">Price:</label>
              <div className="row" style={{ paddingLeft: "3em" }}>
                <label htmlFor="form">Form:</label>
                <input type="number" name="from" id="from" value={updateInfo.from} />
              </div>
              <div className="row" style={{ paddingLeft: "3em" }}>
                <label htmlFor="to">To:</label>
                <input type="number" name="to" id="to" value={updateInfo.to} />
              </div>
              <label htmlFor="time">Time:</label>
              <input type="number" name="time" id="time" min="0" value={updateInfo.time} />
              <div className="row">
                <label>Status:</label>
                <div>
                  <div className="row">
                    <input type="checkbox"
                      id="serving"
                      name="status" value="serving" />
                    <label htmlFor="Serving">Serving</label>
                  </div >
                  <div className="row">
                    <input type="checkbox"
                      id="stopserving"
                      name="status" value="stopserving" />
                    <label htmlFor="Serving">Stop serving</label>
                  </div >
                </div>
              </div>
              <label htmlFor="rating">Rating:</label>
              <input type="number" readOnly name="rating" id="rating" min="0" value={updateInfo.rating} />
            </div>
            <div style={{ display: "flex" }}>
              <button onClick={handleUpdate} id="btnSubmit" className="submit-btn">Lưu</button>
              <button onClick={handleCloseInfo} className="cancel-btn">Đóng</button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  )
}