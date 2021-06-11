import React, { useEffect } from "react";
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

  useEffect(() => {
    if (status === c.LOADING)
      dispatch(appointmentActions.getUserAppointments("6067c63e9d56c60614ac3c32"));
    else
      console.log(appointments)
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
      <Footer />
      <Popup />
      <MenuSidebar />
    </React.Fragment>
  )
}

export { AppointmentListPage }