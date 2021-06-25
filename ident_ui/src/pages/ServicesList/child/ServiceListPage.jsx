import { Component } from 'react';
import React from 'react';
import Nav from '../../../common/nav';
import Footer from '../../../common/footer';
import ServiceCard from './serviceCard';
import MenuSidebar from '../../../common/menuSidebar';

class ServiceListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="list_service">
          <h2 style={{ marginBottom: "0.5em" }}>List Services</h2>
          <ServiceCard
            img='https://i.ibb.co/nk4H07d/white.jpg'
            name='Teeth Whitening'
            rating="4.2"
            price="40 - 60"
            time="15"
            link="/services/teeth-whitening"
          />
          <ServiceCard
            img='https://i.ibb.co/47X9dKf/otho.jpg'
            name='Orthodontics'
            rating="4.1"
            price="900 - 1500"
            time="45"
          />
          <ServiceCard
            img='https://i.ibb.co/pnjKSYB/clean.jpg'
            name='Teeth Cleaning'
            rating="4.5"
            price="50 - 60"
            time="45"
          />
          <ServiceCard
            img='https://i.ibb.co/wK7fYjP/dental.jpg'
            name='Dental Anesthesia'
            rating="4.7"
            price="100 - 250"
            time="30"
            link="/services/teeth-whitening"
          />
        </div>
        <Footer />
        <MenuSidebar />
      </React.Fragment>
    )
  }
}

export { ServiceListPage }