import React, { useState } from "react";

export default function AppointmentCard(props) {
  let { dentist_name, dentist_img, dentist_degree, service, date, time } = props;
  const [customHeight, setHeight] = useState("0px");
  function handleShowDetail() {
    if (customHeight === "0px") {
      setHeight("160px");
      return;
    }
    setHeight("0px");
  }
  return (
    <React.Fragment>
      <tr className="appointment-card">
        <td className="dentist-info">
          <div className="img-container">
            <img src={dentist_img} alt="" />
          </div>
          <div className="dentist-main-info">
            <div className="name">
              {dentist_name}
            </div>
            <div className="title">
              {dentist_degree}
            </div>
          </div>
        </td>
        <td className="status">
          <div className="complete">
            Complete
        </div>
        </td>
        <td className="service-name">
          {service}
        </td>
        <td className="date-time">
          <div className="time">
            {time}
          </div>
          <div className="date">
            {date}
          </div>
        </td>
        <td className="action">
          <button>Cancel</button>
        </td>
        <td className="mobile-show">
          <button onClick={handleShowDetail} >
            <img src="https://i.ibb.co/HnZk8BX/down.png" alt="" />
          </button>
        </td>
      </tr>
      <tr className="appointment-detail-info">
        <td>
          <div className='detail-info' style={{ height: customHeight }}>
            <div className="row" style={{ height: "4em" }}>
              <div className="dentist-info">
                <div className="img-container">
                  <img src={dentist_img} alt="" />
                </div>
                <div className="dentist-main-info">
                  <div className="name">
                    {dentist_name}
                  </div>
                  <div className="title">
                    {dentist_degree}
                  </div>
                </div>
              </div>
              <div className="status-info">
                <div className="info-title">
                  Status:
                </div>
                <div className="status">
                  <div className="complete">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ height: "3em" }}>
              <div className="service-info">
                <div className="info-title">
                  Service:
                </div>
                <div className="service-name">
                  {service}
                </div>
              </div>
              <div className="time-info">
                <div className="info-title">
                  Time:
                </div>
                <div className="time">
                  {time}
                </div>
              </div>
            </div>
            <div className="row" style={{ height: "3em" }}>
              <div className="action-info">
                <div className="action">
                  <button>
                    Cancel
                  </button>
                </div>
              </div>
              <div className="time-info">
                <div className="info-title">
                  Date:
                </div>
                <div className="time">
                  {date}
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </React.Fragment>
  )
}