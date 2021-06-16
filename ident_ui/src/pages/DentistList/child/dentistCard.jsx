export default function DentistCard(props) {
  const { name, img, title, expert, rating, patient, yearExperience } = props;
  const experts = expert.reduce((rs, v) => { return rs + v.name + ", " }, " ");
  return (
    <div className="dentist-card">
      <div className="dentist-content">
        <img src={img} alt="" />
        <div className="main-view">
          <div className="name"><h2>{name}</h2></div>
          <p className="title">{title}</p>
          <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam quis, unde ipsam dolor corrupti nisi est quibusdam, doloremque qui facilis consequatur aliquid, at porro. Cupiditate voluptas perferendis reiciendis quisquam!</p>
          <p className="expert"><span style={{ fontWeight: "bold" }}>Expert:</span>{experts}</p>
        </div>
        <div className="sub-view">
          <div>
            <div className="point"><i className="fas fa-star"></i><span>{rating}</span> RATING</div>
            <div className="point"><i className="fas fa-columns"></i><span>{yearExperience}</span> YEARS EXPERIENCE</div>
            <div className="point"><i className="fas fa-tooth"></i><span>{patient}</span> PATIENT</div>
          </div>
          <button id="viewtutor_btn">MORE INFO</button>
        </div>
      </div>
    </div>
  )
}