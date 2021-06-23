export default function UpdateForm(props) {
  return (
    <div className="info-popup">
      <form id="updateForm" encType="multipart/form-data">
        <h3>Dentist Information</h3>
        <div className="form-wraper">
          <label htmlFor="new-name">Name:</label>
          <input autoComplete="off" type="text" name="name" onChange={props.handleInputChange}
            id="new-name" value={props.updateInfo.name} />
          <label htmlFor="new-img">Avatar:</label>
          <input autoComplete="off" type="text" name="img" onChange={props.handleInputChange}
            id="new-img" value={props.updateInfo.img} />
          <label htmlFor="time">ID Number: </label>
          <input autoComplete="off" type="number" name="idNumber" onChange={props.handleInputChange}
            id="idNumber" value={props.updateInfo.idNumber} />
          <label htmlFor="yearExperience">Years Experience: </label>
          <input readOnly type="number" name="yearExperience" onChange={props.handleInputChange}
            id="yearExperience" value={props.updateInfo.yearExperience} />
          <div className="row">
            <label>Degree:</label>
            <div>
              {
                props.degrees.map((v, i) =>
                  <div className="row" key={i}>
                    <input type="checkbox"
                      id={`update_${v._id}`}
                      checked={props.updateInfo.degree === v._id}
                      onChange={props.handleInputChange} name="degree" value={v._id} />
                    <label htmlFor={`update_${v._id}`}>{v.name}</label>
                  </div >
                )
              }
            </div>
          </div>
          <label htmlFor="phone">Phone: </label>
          <input type="number" name="phone" onChange={props.handleInputChange}
            id="phone" value={props.updateInfo.phone} />
          <div className="row">
            <label>Expert:</label>
            <div>
              {
                props.services.map((v, i) =>
                  <div className="row" key={i}>
                    <input type="checkbox"
                      checked={props.updateInfo.expert.indexOf(v._id) !== -1}
                      onChange={props.handleInputChange} name="expert" value={v._id}
                    />
                    <label htmlFor="new-250-500">{v.name}</label>
                  </div >
                )
              }
            </div>
          </div>
          <label htmlFor="yearExperience">Patients: </label>
          <input readOnly type="number" name="patients" onChange={props.handleInputChange}
            id="patients" value={props.updateInfo.patient} />
          <label htmlFor="yearExperience">Rating: </label>
          <input readOnly type="number" name="rating" onChange={props.handleInputChange}
            id="rating" value={props.updateInfo.rating} />
        </div>
        <div style={{ display: "flex" }}>
          <button onClick={props.handleUpdate} id="btnSubmit" className="submit-btn">Lưu</button>
          <button onClick={props.handleCloseEdit} className="cancel-btn">Đóng</button>
        </div>
      </form>
    </div>
  )
}