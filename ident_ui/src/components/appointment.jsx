import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/input';
import Calendar from './calendar';
import AppointmentForm from './appointmentform';

function Appointment () {
    const[dentists, setDentits] = useState([]);
   // const[services, setServices] = useState([]);
    const[input, setInput] = useState({email:''})
    const [addrtype, setAddrType] = useState('')
    const [errors, setErrors] = useState({});

    const [doctorID, setDoctorID] = useState("6092da0ada6f1c1cecc5ae36") ;
    const [service, setService] = useState();
    const [dayHavePlan, setDayHavePlan] = useState({}) ;
    const [smallPlans, setSmallPlans] = useState([]);

    const [showPlans, setShowPlans] = useState(false);
    const [showConfirmForm, setShowConfirmForm] = useState(false);
    const [time, setTime] = useState();
    function handleAddrTypeChange(e) {
        setAddrType(e.target.value);
        setService(e.target.value);
    }
    const { email } = input;
  useEffect(()=>{
      fetch("http://localhost:3000/api/dentists")
      .then(res=>res.json())
      .then(data=>{
          setDentits(data.docs);
      })
  },[])

  function handleInputChange(e){
    const { name, value } = e.target;
    setInput(input => ({...input, [name]: value}));
  }

  function validate(){
    let err = {};
    if(!email)
      err.email = "Please enter email!";
    return err;
  }

  function handleSubmit(e){
    e.preventDefault();
    let error = validate();
    if(Object.keys(error).length){
      setErrors(error);
      return;
    }
    fetch(`https://powerful-earth-66015.herokuapp.com/api/schedules/${doctorID}`)
    .then(res=>res.json())
    .then(data=>{
        let day = {year:data.doc.year,
        month:data.doc.month,
        day:data.doc.day};
        console.log(day);
        setDayHavePlan(day);
        setSmallPlans(data.doc.shifts);
    })
  }

  function confirmInfor(e){
      console.log(e.target.id);
      setTime(e.target.id);
      setShowConfirmForm(true);
  }

  return (
    <div class="m1em page_container">
    <div class="appointment">
        <div class="service">
            <div class="content">
                <p>Need a doctor?</p>
                <h2>Make An Appointment Now</h2>
            </div>
            <form class="book-doctor" onSubmit ={handleSubmit}> 
                <label for="service">Service</label>
                <select id="service">
                    <option class="service-name" value="Porcelain crowns">Porcelain crowns</option>
                    <option class="service-name" value="saab">Saab</option>
                    <option class="service-name" value="mercedes">Mercedes</option>
                    <option class="service-name" value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <label for="doctor">Doctor</label>
                <select id="doctor" defaultValue={addrtype} onChange={handleAddrTypeChange}>
                    {
                        dentists.map(function(dentist){
                            return <option class="doctor-name" value={dentist.name}>{dentist.name}</option>
                        })
                    }
                </select>
                <Input 
                    type="text" 
                    name="email" 
                    value= {email}
                    placeholder="Your email"
                    error= {errors.email}
                    handleChange ={handleInputChange}
                    />
                <button onClick={handleSubmit} id="getDoctor-btn">Book now</button>
            </form>
        </div>
        <div class="container">
           <Calendar handleShowPlans = {setShowPlans} dayHavePlan = {dayHavePlan} />
            <div class="schedule">
                {
                    showPlans &&
                    smallPlans.map((smallPlan)=>(
                        <div onClick = {confirmInfor} id = {smallPlan.from} class = "small-plan">{smallPlan.from}-{smallPlan.to}</div>
                    ))
                }
            </div>
        </div>
    </div>
    {showConfirmForm && <AppointmentForm Date = {dayHavePlan} Email = {input.email} Time = {time} setConfirmForm = {setShowConfirmForm}/>}
</div>
  )
}

export default Appointment