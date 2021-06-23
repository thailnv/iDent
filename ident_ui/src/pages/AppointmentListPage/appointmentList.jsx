import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../../common/nav";
import Footer from "../../common/footer";
import Popup from "../../components/popup";
import LoadingDisplay from "../../common/loadingDisplay";
import MenuSidebar from "../../common/menuSidebar";
import { constants as c } from "../../constants";
import { appointmentActions } from "../../actions/appointmentActions";

import AppointmentCard from "./child/appointmentCard";
function AppointmentListPage() {
  document.title = "iDent - Appointment list";

  const dispatch = useDispatch();
  const status = useSelector(state => state.appointment.status);
  const appointments = useSelector(state => state.appointment.appointments);
  const [confirmPopupStyle, setConfirmPopupStyle] = useState("none");
  const [cancelAppointmentID, setCancelAppointmentID] = useState("");

  function showConfirm(id) {
    setCancelAppointmentID(id);
    setConfirmPopupStyle("flex");
  }

  function handleConfirmCancel() {
    dispatch(appointmentActions.cancelAppointment(cancelAppointmentID));
    setConfirmPopupStyle("none");
    dispatch({ type: c.SHOW_LOADING_STATUS });
  }

  function handleNotConfirmCancel() {
    setConfirmPopupStyle("none");
  }

  useEffect(() => {
    if (status === c.LOADING)
      dispatch(appointmentActions.getUserAppointments());
  })

  return (
    <React.Fragment>
      <Nav />
      {
        status === c.LOADING ? <LoadingDisplay />
          :
          <div className="appointment-list-page" style={{ background: "url(https://i.ibb.co/3zSLHKj/a-banner.jpg)" }}>
            <div className="sub-view">
              <h2>
                Manage Your Appointment
              </h2>
            </div>
            <div className="main-view">
              <div className="appointment-list">
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr className="header">
                      <th className="dentist-info">Dentist</th>
                      <th className="status">Status</th>
                      <th className="service-name">Service</th>
                      <th className="date-time">Time</th>
                      <th className="action">&nbsp;&nbsp;Action&nbsp; </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      appointments.map((v, i) => {
                        let hour = v.hour < 10 ? `0${v.hour}` : `${v.hour}`;
                        let minute = v.minute < 10 ? `0${v.minute}` : `${v.minute}`;
                        let day = v.day < 10 ? `0${v.day}` : `${v.day}`;
                        let month = v.month < 10 ? `0${v.month}` : `${v.month}`;
                        return (
                          <AppointmentCard key={i}
                            handleCancel={showConfirm}
                            id={v._id}
                            status={v.status}
                            time={`${hour}:${minute}`}
                            date={`${day}/${month}/${v.year}`}
                            dentist_name={v.dentist.name}
                            service={v.service.name}
                            dentist_img={v.dentist.img}
                            dentist_degree={v.dentist.degree.name}
                          />
                        )
                      }
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      }
      <div className="popup-container" style={{ display: confirmPopupStyle }}>
        <div className="confirm-popup">
          Are you sure to cancel this appointment ? <br />
          <button onClick={handleConfirmCancel} className="yes-btn">Yes</button>
          <button onClick={handleNotConfirmCancel} className="no-btn">No</button>
        </div>
      </div>
      <Footer />
      <Popup />
      <MenuSidebar />
    </React.Fragment>
  )
}

export { AppointmentListPage }