import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../../common/nav";
import Footer from "../../common/footer";
import Popup from "../../components/popup";
import LoadingDisplay from "../../common/loadingDisplay";
import MenuSidebar from "../../common/menuSidebar";
import DentistCard from "./child/dentistCard";

import { dentistActions } from "../../actions/dentistAction";
import { constants as c } from "../../constants";
function DentistsPage() {
  const dentists = useSelector(state => state.dentist.dentists);
  const status = useSelector(state => state.dentist.status);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === c.LOADING) {
      dispatch(dentistActions.getAllDentist());
    } else {
      console.log(dentists);
    }
  })
  return (
    <React.Fragment>
      <Nav />
      {
        status === c.LOADING ? <LoadingDisplay />
          :
          <div className="dentists-page" style={{}}>
            <div className="dentist-card-container">
              <h2>Our Dentists</h2>
              {
                dentists.map((v, i) =>
                  <DentistCard
                    key={i}
                    name={v.name}
                    img={v.img}
                    title={v.degree.name}
                    expert={v.expert}
                    rating={v.rating}
                    patient={v.patient}
                    yearExperience={v.yearExperience}
                  />
                )
              }
            </div>
          </div>
      }
      <Footer />
      <Popup />
      <MenuSidebar />
    </React.Fragment>
  )
}
export { DentistsPage }