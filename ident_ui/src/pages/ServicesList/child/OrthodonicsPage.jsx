import { Component } from 'react';
import React from 'react';
import Nav from '../../../common/nav';
import Footer from '../../../common/footer';
import MenuSidebar from '../../../common/menuSidebar';

class OrthodonticsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="service_container">
          <div className="service_banner">
            Orthodontics
          </div>
          <div className="service_content">
            <div className="service_feature definition">
              <h2>What is orthodontics ?</h2>
              <p>
                Teeth whitening is the process of using bleach or other materials to make teeth look whiter. The materials remove stains or other discoloration from the tooth surface.
              </p>
            </div>
            <div className="service_feature dot_designed">
              <h2>How Orthodontics Works</h2>
              <p>closing wide gaps between the teeth.</p>
              <p>aligning the tips of the teeth</p>
              <p>straightening crooked teeth</p>
              <p>improving speech or chewing ability</p>
              <p>boosting the long-term health of gums and teeth</p>
              <p>preventing long-term excessive wear or trauma of the teeth</p>
              <p>treating an improper bite</p>
            </div>
            <div className="service_feature process">
              <h2>Orthodontics Process</h2>
              <p style={{ fontWeight: "bold", paddingBottom: "0" }}>Pre-consultation / Clinical examination and diagnostic information collection</p>
              <p>Clinical examination and interviews for patients who visit the clinic regarding the teeth and facial factors will be conducted to check their oral health including cavities, gum conditions, and teeth alignment.</p>
              <p style={{ fontWeight: "bold", paddingBottom: "0" }}>Data analysis and diagnosis</p>
              <p>
                A second follow-up stage will allow us to compile the data to establish the most appropriate treatment plan.
                In-depth medical examination for an accurate diagnosis is taken based on various diagnostic procedures, including Cephalometric and panoramic X-rays, mouth and face pictures, and plaster casts of the mouth</p>
              <p><img src="https://i.ibb.co/hZFK73B/picture.jpg" alt=""></img></p>
              <p style={{ fontWeight: "bold", paddingBottom: "0" }}>2nd Consultation</p>
              <p>Based on the data collected, the issues are diagnosed and analyzed. Then, a detailed treatment plan, treatment period, type of brace to be used, and estimated cost are decided.</p>
              <p style={{ fontWeight: "bold", paddingBottom: "0" }}>Treatment Process</p>
              <p>The treatment begins when orthodontic appliances are mounted based on the treatment plan.</p>
              <p style={{ fontWeight: "bold", paddingBottom: "0" }}>Maintenance appliances after orthodontic treatment</p>
              <p>Right after orthodontic appliance removal, it is necessary to wear a retainer for a certain period of time to help maintain your teeth and prevent any future misalignment.</p>
            </div>
            <div className="service_feature candidates dot_designed">
              <h2>Candidates for Treatment</h2>
              <p><span>Crossbite:</span> One or more of your top teeth don’t line up properly with your bottom teeth.</p>
              <p><span>Open bite:</span> Your top and bottom front teeth don't meet as they should.</p>
              <p><span>Overbite:</span> Your top front teeth cover too much of your bottom front teeth.</p>
              <p><span>Overjet:</span> Your top front teeth stick out.</p>
              <p><span>Underbite:</span> Your top teeth sit behind your bottom teeth rather than in front of them.</p>
            </div>
            <div className="service_feature warning bold_designed">
              <h2>When whitening is not recommended</h2>
              <p>If you have gum disease (also known as periodontal disease), you may not be an ideal candidate for braces. Gum disease occurs when the tissue that supports your teeth becomes infected. Often this is because of plaque, a sticky film of bacteria that builds up on your teeth. Gum disease is usually painless, but your dentist can spot it. </p>
            </div>
          </div>
        </div>
        <Footer />
        <MenuSidebar />
      </React.Fragment>
    )
  }
}

export { OrthodonticsPage }