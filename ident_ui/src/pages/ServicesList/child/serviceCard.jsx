export default function ServiceCard(props) {

    return (
      <div className="service-card">
        <div className="service-content">
          <img src={props.Img} alt="" />
          <div className="main-view">
            <div className="name"><h2>{props.Name}</h2></div>
            <p className="intro">{props.Intro}</p>
            <p className=""></p>
          </div>
          <div className="sub-view">
            <div>
              <div className="point"><i className="fas fa-star"></i><span>4.5</span> RATING</div>
              <div className="point"><i class="fas fa-hourglass-start"></i><span>1:30</span> Hr</div>
              <div className="point"><i class="fas fa-wallet"></i><span>40</span> $</div>
            </div>
            <button id="viewtutor_btn">MORE INFO</button>
          </div>
        </div>
      </div>
    )
  }