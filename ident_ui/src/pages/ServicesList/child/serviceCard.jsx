export default function ServiceCard(props) {

  return (
    <div className="service-card">
      <div className="service-content">
        <img src={props.img} alt="" />
        <div className="main-view">
          <div className="name"><h2>{props.name}</h2></div>
          <p className="intro">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Amet itaque dolores quaerat vero atque ut nisi facere omnis!
            Laboriosam quibusdam quaerat non! In consequuntur ratione ad asperiores magnam,
            velit assumenda hic illum nisi. Aspernatur, nemo quam quas labore officia suscipit
            laudantium pariatur, nam obcaecati hic deleniti perspiciatis! Impedit reiciendis veritatis
            incidunt ut earum id repellat, dignissimos neque ea perferendis voluptate iure laudantium
            temporibus, atque excepturi modi quam similique quas aperiam assumenda a! Nemo rerum provident
            nobis eligendi saepe, a alias.</p>
          <p className=""></p>
        </div>
        <div className="sub-view">
          <div>
            <div className="point"><i className="fas fa-star"></i><span>{props.rating}</span> RATING</div>
            <div className="point"><i className="fas fa-hourglass-start"></i><span>0 : {props.time}</span> Hr</div>
            <div className="point"><i className="fas fa-wallet"></i><span>{props.price}</span> $</div>
          </div>
          <a href={props.link} id="viewtutor_btn">MORE INFO</a>
        </div>
      </div>
    </div>
  )
}