import { useState } from "react";
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import { scheduleActions } from "../../../actions/scheduleActions";
import { toggleItem } from "../../../helper";
import { constants } from "../../../constants";

export default function ScheduleSection(props) {

  const dispatch = useDispatch();
  const currentDate = new Date();
  const [customClass, setCustomClass] = useState({ confirm: "none", info: "none", insert: "" })
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [insertInfo, setInsertInfo] = useState({
    shifts: [],
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear()
  });
  const [updateInfo, setUpdateInfo] = useState({
    dentist: {},
    shifts: [],
    time: [],
    day: 0,
    month: 0,
    year: 0
  });
  const [deleteID, setDeleteID] = useState("");
  const [newShifts, setNewShifts] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let schedule = { ...insertInfo };
    schedule.time = [];
    for (let i = 0; i < schedule.shifts.length; i++)
      schedule.time.push(90);
    console.log(schedule);
    dispatch({ type: constants.SHOW_LOADING_STATUS });
    dispatch(scheduleActions.addSchedule(schedule));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name !== "shift") {
      setInsertInfo({ ...insertInfo, [name]: value });
      return;
    }
    let shifts = [...insertInfo.shifts];
    toggleItem(shifts, value);
    setInsertInfo({ ...insertInfo, shifts });
  }

  function handleDateSelect(date) {
    console.log(date.getDate());
    setInsertInfo({ ...insertInfo, day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() })
    setSelectedDate(date);
  }

  function handleShowInfo(schedule) {
    console.log(schedule);
    setCustomClass({ ...customClass, info: "flex" });
    setUpdateInfo(schedule);
    setNewShifts(schedule.shifts);
  }

  function handleCloseInfo(e) {
    e.preventDefault();
    setCustomClass({ ...customClass, info: "none" });
  }

  function handleUpdateShift(e) {
    const { value } = e.target;
    let shifts = [...newShifts];
    toggleItem(shifts, value);
    setNewShifts(shifts)
  }

  function handleUpdate(e) {
    e.preventDefault();
    for (let i = 0; i < newShifts.length; i++) {
      if (updateInfo.shifts.indexOf(newShifts[i]) === -1) {
        updateInfo.shifts.push(newShifts[i]);
        updateInfo.time.push(90);
      }
    }
    for (let i = 0; i < updateInfo.shifts.length; i++) {
      if (newShifts.indexOf(updateInfo.shifts[i]) === -1) {
        updateInfo.shifts.splice(i, 1);
        updateInfo.time.splice(i, 1);
      }
    }
    console.log(updateInfo, newShifts);
    dispatch({ type: constants.SHOW_LOADING_STATUS });
    dispatch(scheduleActions.updateSchedule(updateInfo));
  }

  function handleDeleteClick(id) {
    setDeleteID(id);
    setCustomClass({ ...customClass, confirm: "flex" });
  }

  function handleConfirmDelete() {
    setCustomClass({ ...customClass, confirm: "none" });
    dispatch({ type: constants.SHOW_LOADING_STATUS });
    dispatch(scheduleActions.deleteSchedule(deleteID));
  }

  function handleCancelDelete() {
    setCustomClass({ ...customClass, confirm: "none" });
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
          <form>
            <h3>New schedule</h3>
            <div className="form-wraper">
              <div className="row">
                <label>Dentist:</label>
                <div>
                  {
                    props.dentists.map((v, i) =>
                      <div className="row" key={i}>
                        <input type="checkbox"
                          checked={insertInfo.dentist === v._id}
                          onChange={handleInputChange}
                          name="dentist" id={v._id} value={v._id} />
                        <label htmlFor={v._id}>{v.name}</label>
                      </div >
                    )
                  }
                </div>
              </div>
              <div className="row">
                <label>Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <DatePicker selected={selectedDate} onChange={(date) => handleDateSelect(date)} />
              </div>
              <div className="row">
                <label>Shifts:&nbsp;&nbsp;</label>
                <div>
                  {
                    props.shifts.map((v, i) =>
                      <div className="row" key={i}>
                        <input type="checkbox"
                          onChange={handleInputChange}
                          name="shift" id={v._id} value={v._id} />
                        <label htmlFor={v._id}>{`${v.from} - ${v.to}`}</label>
                      </div >
                    )
                  }
                </div>
              </div>
            </div>
            <div className="flex">
              <button onClick={handleSubmit} className="submit-btn">
                Lưu
              </button>
              <button onClick={handleCloseInsert} className="cancel-btn desktop-hide">
                Đóng
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="table-view">
        <div style={{ display: "flex" }}>
          <h3>Schedules list</h3>
          <button className="insert-btn" onClick={handleShowInsert}>New +</button>
        </div>
        <div className="header">
          <div className="name">
            Date
          </div>
          <div className="level">
            Dentist
          </div>
          <div className="number-questions">
            Shifts
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
            props.schedules.map((v, i) => {
              return (
                <div className="data-row" key={i}>
                  <div className="name">
                    {`${v.day}/${v.month}/${v.year}`}
                  </div>
                  <div className="level">
                    {v.dentist.name}
                  </div>
                  <div className="number-questions">
                    {v.shifts.length}
                  </div>
                  <div className="time">
                    {v.dentist.phone}
                  </div>
                  <div className="action">
                    <button onClick={() => handleDeleteClick(v._id)} className="delete-btn">
                      <i className="far fa-trash-alt"></i>
                    </button>
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
          <form>
            <h3>Schedule Information</h3>
            <div className="form-wraper">
              <div className="row">
                <label>Dentist:</label>
                <div>
                  {updateInfo.dentist.name}
                </div>
              </div>
              <div className="row">
                <label>Date:</label>
                <div>
                  {`${updateInfo.day}/${updateInfo.month}/${updateInfo.year}`}
                </div>
              </div>
              <div className="row">
                <label>Shifts:</label>
                <div>
                  {
                    props.shifts.map((v, i) =>
                      <div className="row" key={i}>
                        <input type="checkbox"
                          onChange={handleUpdateShift}
                          checked={newShifts.indexOf(v._id) !== -1}
                          name="dentist" id={v._id + "_up"} value={v._id} />
                        <label htmlFor={v._id + "_up"}>{`${v.from} - ${v.to}`}</label>
                      </div >
                    )
                  }
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <button onClick={handleUpdate} id="btnSubmit" className="submit-btn">Lưu</button>
              <button onClick={handleCloseInfo} className="cancel-btn">Đóng</button>
            </div>
          </form>
        </div>
      </div>
      <div className="popup-container" style={{ display: customClass.confirm }}>
        <div className="confirm-popup">
          <div>
            Delete selected schedule ?
          </div>
          <div>
            <button onClick={handleConfirmDelete} className="yes-btn">
              Yes
            </button>
            <button onClick={handleCancelDelete} className="no-btn">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}