import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Popup from '../components/popup';
import ServiceList from '../components/listService';
import DentistList from '../components/listDentist';
import ClinicInfo from '../components/clinicInfo';
import IdentInNumber from '../components/identInNumber';
function HomePage(){
  return (
    <React.Fragment>
      <Nav/>
      <Banner/>
      <ServiceList/>
      <ClinicInfo/>
      <DentistList/>
      <IdentInNumber/>
      <Popup/>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage