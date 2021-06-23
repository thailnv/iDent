import InfoCard from "./infoCard"

export default function ReportView(props) {
  return (
    <div className="report-view">
      <InfoCard
        icon="fas fa-tooth"
        title="Patients"
        number={props.users}
        color="rgb(189, 124, 113)"
      />
      <InfoCard
        icon="fas fa-user-nurse"
        title="Dentists"
        number={props.dentists}
        color="rgb(77, 189, 133)"
      />
      <InfoCard
        icon="fas fa-tasks"
        title="Services"
        number={props.services}
        color="rgb(77, 185, 189)"
      />
      <InfoCard
        icon="fas fa-star-half-alt"
        title="Rating"
        number="4.2"
        color="rgb(206, 207, 113)"
      />
    </div>
  )
}