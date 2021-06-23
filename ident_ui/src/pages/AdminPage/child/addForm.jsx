import { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../../../common/input";
import { dentistActions } from "../../../actions/dentistAction";

import { toggleItem } from "../../../helper";
import { constants } from "../../../constants";

export default function AddForm(props) {

  const dispatch = useDispatch();

  const [insertInfo, setInsertInfo] = useState({
    expert: [],
    name: "",
    phone: "",
    idNumber: "",
    img: "",
    yearExperience: ""
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name !== "expert") {
      setInsertInfo({ ...insertInfo, [name]: value });
      return;
    }
    let expert = [...insertInfo.expert];
    toggleItem(expert, value);
    console.log(expert);
    setInsertInfo({ ...insertInfo, expert: expert });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(insertInfo);
    dispatch({ type: constants.SHOW_LOADING_STATUS });
    dispatch(dentistActions.addDentist(insertInfo));
  }

  return (
    <form onSubmit={handleSubmit} id="form">
      <h3>New dentist</h3>
      <div className="form-wraper">
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          name="name"
          id="name"
          handleChange={handleInputChange}
          autoComplete="off"
        />
        <label htmlFor="img">Avatar:</label>
        <Input
          autoComplete="off"
          type="text"
          name="img"
          id="img"
          handleChange={handleInputChange}
        />
        <label htmlFor="idNumber">ID Number: </label>
        <Input
          type="number"
          autoComplete="off"
          name="idNumber"
          id="idNumber"
          handleChange={handleInputChange}
        />
        <label htmlFor="yearExperience">Years Experience: </label>
        <Input
          type="number"
          autoComplete="off"
          name="yearExperience"
          id="yearExperience"
          handleChange={handleInputChange}
          value={insertInfo.yearExperience}
        />
        <div className="row">
          <label>Degree</label>
          <div>
            {
              props.degrees.map((v, i) =>
                <div className="row" key={i}>
                  <input type="checkbox"
                    onChange={handleInputChange} checked={insertInfo.degree === v._id}
                    name="degree" id={v._id} value={v._id} />
                  <label htmlFor={v._id}>{v.name}</label>
                </div >
              )
            }
          </div>
        </div>
        <label htmlFor="time">Phone: </label>
        <Input
          type="number"
          autoComplete="off"
          name="phone"
          id="phone"
          handleChange={handleInputChange}
          value={insertInfo.phone}
        />
        <div className="row">
          <label>Expert: </label>
          <div>
            {
              props.services.map((v, i) =>
                <div key={i} className="row">
                  <input type="checkbox" onChange={handleInputChange}
                    name="expert" id={v._id} value={v._id} />
                  <label htmlFor={v._id}>{v.name}</label>
                </div >
              )
            }
          </div>
        </div>
      </div>
      <button className="submit-btn" id="btnSubmit">Lưu</button>
    </form>
  )
}