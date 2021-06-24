import { Component } from 'react';
import React from 'react';
import Nav from '../../common/nav';
import Footer from '../../common/footer';
import MenuSidebar from '../../common/menuSidebar';

class DenatlAnesthesiaPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div class="service_container">
            <div class="service_banner">
                Dental anesthesia 
            </div>
            <div class="service_content">
                <div class="service_feature definition">
                    <h2>What is Dental Anesthesia ?</h2>
                    <p>
                        Dental anesthesia helps manage pain during dental procedures and surgeries. It blocks painful sensations in specific areas of your mouth. It can be used while you are conscious or unconscious, depending on the procedure, your individual needs, and your doctor's recommendation.Local anesthesia is a medication that makes parts of your mouth numb throughout the procedure. The effects typically last for a few hours after the treatment.Anesthesia is a safe way to help patients relax, feel safe, and experience less pain before, during, and after a procedures are complete. Anesthesia can cause you to be in a semi-conscious or unconscious state.
                    </p>
                </div>
                <div class="service_feature">
                    <h2>Types of dental anesthesia</h2>
                    <p><span>Local Anesthesia.</span></p>
                    <p>Commonly used dental anesthetics include lidocaine, articaine, prilocaine, mepivacaine, and bupivacaine.</p>
                    <p>
                    These drugs be applied topically or injected into a specific location in your mouth. They usually begin working in less than 10 minutes. The area will become numb, but you will still be conscious and able to communicate. The effects will last throughout the procedure, and for several hours afterward.</p>
                    <p>
                    Local anesthetics are also available as prescription or over-the-counter medications. They come in gel, cream, liquid, ointment, spray, patch, and injectable forms.</p>
                    <p><span>Sedation</span></p>
                    <p>edatives and anesthesia are used for different reasons. Sedation dentistry can help relieve nervousness and anxiety during dental work, reduce pain, or help keep patients from moving. Anesthesia is used to eliminate pain and discomfort.</p>
                    <p>
                    Sedation can be administered in mild, moderate, or deep strengths. Mild sedation keeps you conscious, and you can respond to commands. Moderate sedation may put you in a state of semiconsciousness. Deep sedation often makes you unaware of your surroundings and you are unable to respond to stimulation.</p>
                    <p><span>General Anesthesia</span></p>
                    <p>General anesthesia results in a temporary loss of consciousness. It is used for longer procedures, or if a patient has high levels of anxiety that may cause them to move around.</p>
                    <p>
                    This type of anesthesia is often referred to as a medically induced coma. The patient will remain unresponsive during the entire procedure and will not feel any pain. The medication is normally inhaled or administered intravenously (IV sedation).
                    </p>
                </div>
                <div class="service_feature process">
                    <h2>Benefits of Anesthesia</h2>
                    <p>Patients with anxiety or fear of dental treatments are also more likely to refuse local anesthetics during dental hygiene procedures. However, after your dentist explains the benefits of anesthesia in detail, you can relax during the procedure and feel less pain.</p>
                    <p><span>The primary benefits of anesthesia include:</span></p>
                    <div class="dot_designed">
                        <p> Using anesthesia can consolidate multiple appointments into one appointment.</p>
                        <p> The patient will experience little to no pain during the procedure.</p>
                        <p> Anesthesia can be used in combination with sedation dentistry to relieve anxiety, pain, fear, and discomfort during procedures.</p>
                        <p> Most types of dental anesthesia are considered safe and effective when safely used.</p>
                        <p> Anesthesia is not a “sleep medication,” which means the patient will remain conscious during the procedure (except general anesthesia).</p>
                    </div>
                </div>
                <div class="service_feature">
                    <h2>Anesthesia Side Effects</h2>
                    <p>Dental anesthesia is a common and safe treatment. Before administration, the dentist should be aware of your full medical history, alcohol abuse history, and any allergies to ensure complications are avoided.</p>
                    <p><span>Side effects are rare, and usually only felt with sedation or general anesthesia. These may include:</span></p>
                    <div class="border_designed">
                        <p> Nausea</p>
                        <p> Dizziness</p>
                        <p> Vomiting</p>
                        <p> Swelling (in the mouth or at the injection site)</p>
                        <p> Sweating or shivering</p>
                        <p> Confusion</p>
                        <p> Hallucinations</p>
                        <p> Tiredness</p>
                        <p> Lockjaw</p>
                    </div>
                </div>
                <div class="service_feature warning ">
                    <h2>Risks of Anesthesia</h2>
                    <p><span>Anesthesiology is considered a safe, effective, and necessary component of dental care. However, there are certain groups that are at higher risk for adverse effects.</span></p>
                    <p><span>Those that should speak to a dental office or anesthesiologist before their procedure include:</span></p>
                    <div class="dot_designed">
                        <p>Pregnant women</p>
                        <p>Pediatric patients</p>
                        <p>People with special needs</p>
                        <p>Elderly adults</p>
                        <p>Anyone with liver, kidney, lung, or heart problems</p>
                        <p>People with neurological conditions</p>
                        <p>People taking other medications, such as opioids</p>
                        <p>History of allergy to anesthesia medication</p>
                    </div>
                    <p><span>Though complications are rare, there are some risks involved in dental anesthesia.Potential adverse reactions include:</span></p>
                    <div class="dot_designed">
                        <p>Allergic reactions</p>
                        <p>Nerve damage</p>
                        <p>Low blood pressure</p>
                        <p>A dangerous increase in body temperature (malignant hyperthermia)</p>
                        <p>Heart attack</p>
                        <p>Heart failure</p>
                        <p>Stroke</p>
                        <p>Failed breathing</p>
                        <p>Death</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <MenuSidebar />
      </React.Fragment>
    )
  }
}

export { DenatlAnesthesiaPage }