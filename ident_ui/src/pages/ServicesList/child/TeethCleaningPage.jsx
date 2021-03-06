import { Component } from 'react';
import React from 'react';
import Nav from '../../../common/nav';
import Footer from '../../../common/footer';
import MenuSidebar from '../../../common/menuSidebar';

class TeethCleaningPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div class="service_container">
          <div class="service_banner">
            Teeth Cleaning
          </div>
          <div class="service_content">
            <div class="service_feature definition">
              <h2>What is Teeth Cleaning ?</h2>
              <p>
                As we eat and drink, food and bacteria may accumulate in our teeth, which eventually becomes dental plaque. Over time, the dental plaque may calcify and harden to form tartar. While regular brushing and flossing may remove some plaque, can’t remove tartar. It will have to be removed by the hygienist
              </p>
            </div>
            <div class="service_feature">
              <h2>Benefits of Teeth Cleaning</h2>
              <p><span>1. It brightens your smile</span></p>
              <p>Your teeth can get stained by certain food and drinks. Dental cleaning removes built-up stains which results in perfectly polished teeth. There’s no better way to brighten up your smile than having your teeth cleaned by your dentist.</p>
              <p><span>2. Bad breath is reduced</span></p>
              <p>The best way to reduce bad breath is by maintaining clean teeth. Going beyond your daily brushing and flossing by getting a dental cleaning treatment gives you a healthier mouth and a fresher breath.</p>
              <p><span>3. Cavities are prevented</span></p>
              <p>
                Plaque buildup on your teeth causes tooth decay. They eat away your tooth enamel which leads to cavities. Together with daily brushing and flossing, dental cleaning prevents cavities.</p>
              <p><span>4. Tooth loss is prevented</span></p>
              <p>Your teeth and gum line loosen up when there’s plaque build-up on your teeth. This leads to gum disease, which is the major cause of tooth loss. Through good oral habits at home and dental cleanings, tooth loss is prevented.</p>
              <p><span>5. Your overall health is boosted</span></p>
              <p>There’s a correlation between your overall health and oral health. Keeping your teeth clean lowers your risk for certain diseases such as diabetes and heart disease. Some medical conditions may also be detected by dentists during an oral exam.</p>
            </div>
            <div class="service_feature process">
              <h2>Teeth Cleaning Proccess</h2>
              <p><span>Teeth and gum examination</span></p>
              <p>Before beginning the cleaning process, the hygienist uses a small concave mirror to check the patient’s mouth for any signs of oral problems, such as inflamed gums, plaque and tartar buildup, or dark spots on the teeth. This helps the hygienist know what to focus on during the cleaning. If more serious issues such as cavities or gum disease are found, the hygienist most often informs the dentist for a more thorough examination.</p>
              <p><span>Scaling</span></p>
              <p>Using a small hooked tool called a scaler, the hygienist removes any plaque and tartar from the surface of the teeth, near the gum line and in between the teeth. Depending on how much buildup is present, either a manual or ultrasonic scaler is used. A manual scaler feels like scraping on the teeth while the ultrasonic scaler uses gentle vibration and water for removing large deposits.</p>
              <p><span>Polishing and flossing</span></p>
              <p>Next, the hygienist polishes the teeth and removes any stains using a handheld electric tool with a rubber prophy cup attached and a gritty toothpaste called prophylaxis paste. Patients can expect to feel a slow grinding motion on the teeth during this step in the process. The hygienist then flosses the patient’s teeth to remove any remaining plaque and paste.</p>
              <p><span>Fluoride</span></p>
              <p>Some dental offices include fluoride treatment in the teeth cleaning process. Often, patients can choose what flavor fluoride gel they like. This gel is then placed inside a mouthpiece that the patient must wear for approximately a minute.</p>
            </div>
            <div class="service_feature">
              <h2>Can Dental Cleanings Damage Enamel?</h2>
              <p>Dental cleanings do not damage the enamel on your teeth! Cleanings safely remove the plaque and bacteria that builds up over time on the teeth and under the gums. If teeth are not cleaned regularly inflammation can occur, and this can lead to gum disease. Brushing at home is a great way to remove bacteria from the teeth, but brushing cannot clean our teeth like a professional cleaning. Our certified hygienists provide quality cleanings to keep your teeth and mouth healthy.</p>
            </div>
            <div class="service_feature warning ">
              <h2>Necessary</h2>
              <p>Getting your teeth checked and cleaned is an important part of your oral hygiene routine. Besides keeping your gums and teeth healthy, doctor can also detect problems such as gum disease or cavities and rectify them before they worsen. Depending on your oral health, you may need to get your teeth cleaned every six months.</p>
            </div>
          </div>
        </div>
        <Footer />
        <MenuSidebar />
      </React.Fragment>
    )
  }
}

export { TeethCleaningPage }