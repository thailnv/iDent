import { Component } from 'react';
import React from 'react';
import Nav from '../../common/nav';
import Footer from '../../common/footer';
import ServiceCard from './child/serviceCard';
import MenuSidebar from '../../common/menuSidebar';

class ServiceListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="list_service">
          <ServiceCard Img = 'https://i.ibb.co/m80jrMp/pexels-daniel-xavier-1239291-1.jpg' Name = 'Teeth Whitening' Intro = 'Our dentist-guided whitening treatment will brighten your smile two shades or more.' />
          <ServiceCard Img = 'https://i.ibb.co/m80jrMp/pexels-daniel-xavier-1239291-1.jpg' Name = 'Teeth cleaning' Intro = 'Your teeth can get stained by certain food and drinks. Dental cleaning removes built-up stains which results in perfectly polished teeth. There’s no better way to brighten up your smile than having your teeth cleaned by your dentist.' />
          <ServiceCard Img = 'https://i.ibb.co/m80jrMp/pexels-daniel-xavier-1239291-1.jpg' Name = 'Dental anesthesia' Intro = 'A comprehensive wellness visit with a comfortable cleaning, x-rays, and a personalized exam.' />
          <ServiceCard Img = 'https://i.ibb.co/m80jrMp/pexels-daniel-xavier-1239291-1.jpg' Name = 'Orthodontics' Intro = 'A new care-free, can’t-see straightening technology that goes behind your teeth, exclusively from Tend.' />
        </div>
        <Footer />
        <MenuSidebar />
      </React.Fragment>
    )
  }
}

export { ServiceListPage }