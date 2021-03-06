import { Component } from 'react';
import React from 'react';
import Nav from '../../../common/nav';
import Footer from '../../../common/footer';
import MenuSidebar from '../../../common/menuSidebar';

class TeethWhiteningPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div class="service_container">
          <div class="service_banner">
            Teeth whitening
          </div>
          <div class="service_content">
            <div class="service_feature definition">
              <h2>What is teeth whitening ?</h2>
              <p>
                Teeth whitening is the process of using bleach or other materials to make teeth look whiter. The materials remove stains or other discoloration from the tooth surface.
              </p>
            </div>
            <div class="service_feature works">
              <h2>How Teeth Whitening Works</h2>
              <p>Teeth whitening is a cosmetic treatment done to improve the appearance of teeth. Teeth are whitened to remove the effects of coffee, cigarettes, and other substances that permanently stain or discolor teeth. Medications such as antibiotics like tetracycline may discolor teeth. Fluorosis, a condition caused by absorbing too much fluoride, could affect tooth color. Furthermore, aging also causes teeth to loose their bright color.</p>
            </div>
            <div class="service_feature process">
              <h2>Teeth Whitening Process</h2>
              <p><img src="https://i.ibb.co/mHTxs0N/whitening.jpg" alt=""></img></p>
            </div>
            <div class="service_feature candidates bold_designed">
              <h2>Candidates for Treatment</h2>
              <p>One who cannot smile confidently due to yellow tooth.</p>
              <p>One who wants to have a new start with bright and white teeth after quitting smoking.</p>
              <p>One who prepares for a wedding or getting a job.</p>
              <p>One who wants to give pleasant impression to others in social interaction.</p>
            </div>
            <div class="service_feature warning dot_designed">
              <h2>When whitening is not recommended</h2>
              <p>Women who are pregnant and nursing should avoid any whitening treatment except for toothpaste. Oral health care professionals advise that other treatments could contain levels of peroxide that are potentially dangerous to the child. Although no connections have been made between these treatments and harm to the child's health, mothers are urged to take preventive action and delay whitening treatment.</p>
              <p>Teenagers should not have their teeth bleached until they are between 14 and 16 years old. In a younger child, the nerve of the tooth called the pulp chamber has not fully developed. Whitening at this point could irritate the pulp and cause sensitivity.</p>
              <p> People who are allergic to peroxide should not be treated with this whitening agent.</p>
            </div>
          </div>
        </div>
        <Footer />
        <MenuSidebar />
      </React.Fragment>
    )
  }
}

export { TeethWhiteningPage }