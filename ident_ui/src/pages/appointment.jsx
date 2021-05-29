import Appointment from "../components/appointment";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Popup from "../components/popup";
import React from "react";
export default function AppointmentPage() {
  return (
    <React.Fragment>
      <Nav />
      <Appointment />
      <Footer />
      <Popup />
    </React.Fragment>
  )
}