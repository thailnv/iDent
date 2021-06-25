import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { constants as c } from "../../constants";
import { appActions } from "../../actions/appActions";
import LoadingDisplay from "../../common/loadingDisplay";
import ReportView from "./child/reportView";
import DentistSection from "./child/dentistSection";
import ServiceSection from "./child/serviceSection";
import ScheduleSection from "./child/scheduleSection";
import Popup from "../../components/popup";

function AdminPage() {

  const dispatch = useDispatch();
  const status = useSelector(state => state.application.status);
  const info = useSelector(state => state.application.adminInfo);

  const [currentSection, setCurrentSection] = useState("dentist");
  const [customClass, setCustomClass] = useState({ tab: "section-nav-wraper" })

  const sections = {
    "dentist": <DentistSection
      dentists={info ? info.dentists : []}
      services={info ? info.services : []}
      degrees={info ? info.degrees : []}
    />,
    "schedule": <ScheduleSection
      dentists={info ? info.dentists : []}
      shifts={info ? info.shifts : []}
      schedules={info ? info.schedules : []}
    />,
    "service": <ServiceSection
      services={info ? info.services : []}
      dentists={info ? info.dentists : []}
      shifts={info ? info.shifts : []}
    />
  }

  function handleChangeSection(section) {
    setCustomClass({ ...customClass, tab: "section-nav-wraper" });
    setCurrentSection(section);
  }

  function handleShowTab() {
    if (customClass.tab.split(" ").length > 1) {
      setCustomClass({ ...customClass, tab: "section-nav-wraper" });
      return;
    }
    setCustomClass({ ...customClass, tab: "section-nav-wraper section-nav-wraper-active" })
  }

  useEffect(() => {
    document.title = "iDent - Admin page"
    console.log("Render")
    if (status === c.LOADING) {
      dispatch(appActions.getAdminInfo());
    }
  }, [status, dispatch]);

  return (
    <React.Fragment>
      <div className="admin-page">
        {
          status === c.LOADING ? <LoadingDisplay />
            :
            <React.Fragment>
              <ReportView
                dentists={info.dentists.length}
                services={info.services.length}
                users={info.users}
              />
              {sections[currentSection]}
              <div className={customClass.tab}>
                <button onClick={() => handleChangeSection("schedule")}>
                  Schedule Management
                </button>
                <button onClick={() => handleChangeSection("service")}>
                  Service Management
                </button>
                <button onClick={() => handleChangeSection("dentist")}>
                  Dentist Management
                </button>
                <button>
                  <a href="/">Home page</a>
                </button>
              </div>
              <button onClick={handleShowTab} className="setting-btn">
                <i className="fas fa-cogs"></i>
              </button>
            </React.Fragment>
        }
      </div>
      <Popup />
    </React.Fragment>
  )
}

export { AdminPage }