import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { dentistActions } from "../actions/dentistAction";
import { serviceActions } from "../actions/serviceActions";
import Input from '../common/input';
import Calendar from './calendar';
import { constants } from '../constants';

function Appointment() {
    const [input, setInput] = useState({ email: '' })
    const [errors, setErrors] = useState({});

    const schedule = useSelector(state => state.dentist.schedule);
    const [shift, setShift] = useState([]);

    const [currentDentists, setCurrentDentists] = useState([]);
    const [currentServices, setCurrentServices] = useState([]);
    const dentists = useSelector(state => state.dentist.dentists);
    const services = useSelector(state => state.service.services);
    const dentistStatus = useSelector(state => state.dentist.status);
    const serviceStatus = useSelector(state => state.service.status);

    const dispatch = useDispatch();

    const { email } = input;
    useEffect(() => {
        if (dentistStatus === constants.LOADING) {
            dispatch(dentistActions.getAllDentist())
        }
        else
            if (serviceStatus === constants.LOADING)
                dispatch(serviceActions.getAllService())
            else {
                setCurrentDentists(dentists);
                setCurrentServices(services);
            }
    }, [dentists, dentistStatus, serviceStatus, services, dispatch])
    function handleInputChange(e) {
        const { name, value } = e.target;
        setInput(input => ({ ...input, [name]: value }));
    }
    function handleShilfDisplay(date) {
        console.log(date);
        let selectedSchedule = schedule.filter(v => date === `${v.year}-${v.month}-${v.day}`);
        console.log(selectedSchedule[0].shifts);
        setShift(selectedSchedule[0].shifts);
        console.log(shift);
    }
    function validate() {
        let err = {};
        if (!email)
            err.email = "Please enter email!";
        return err;
    }
    function handleSubmit(e) {
        e.preventDefault();
        let error = validate();
        if (Object.keys(error).length) {
            setErrors(error);
            return;
        }
    }

    function handleServiceChange(e) {
        let serviceID = e.target.value;
        setShift([]);
        let lstDentists = dentists.filter(v => {
            let isOk = false;
            for (let i = 0; i < v.expert.length; i++)
                if (v.expert[i]._id === serviceID)
                    isOk = true;
            return isOk;
        });
        setCurrentDentists(lstDentists);
    }
    function handleDentistChange(e) {
        let dentistID = e.target.value;
        setShift([]);
        dispatch(dentistActions.getDentistSchedule(dentistID));
    }

    return (
        dentistStatus === constants.LOADING || serviceStatus === constants.LOADING
            ? <div></div>
            :
            <div className="page_container" style={{ background: "url(/img/a_banner.jpg)" }}>
                <div className="appointment">
                    <div className="service">
                        <div className="content">
                            <p>Need a doctor?</p>
                            <h2>Make An Appointment Now</h2>
                        </div>
                        <form className="book-doctor" onSubmit={handleSubmit}>
                            <label htmlFor="service">Service</label>
                            <select id="service" onChange={handleServiceChange}>
                                {
                                    currentServices.map((v, i) => <option key={i} className="service-name" value={v._id}>{v.name}</option>)
                                }
                            </select>
                            <label htmlFor="doctor">Dentists</label>
                            <select id="doctor" onChange={handleDentistChange}>
                                {
                                    currentDentists.map(function (dentist, i) {
                                        return <option className="doctor-name" key={i} value={dentist._id}>{dentist.name}</option>
                                    })
                                }
                            </select>
                            <label htmlFor="doctor">Email</label>
                            <Input
                                type="text"
                                name="email"
                                value={email}
                                placeholder="Your email"
                                error={errors.email}
                                handleChange={handleInputChange}
                            />
                            <button onClick={handleSubmit} id="getDoctor-btn">Book now</button>
                        </form>
                    </div>
                    <div className="container">
                        <Calendar handleShilfDisplay={handleShilfDisplay} workingDay={schedule} />
                        <div className="schedule">
                            {
                                shift.map((s, i) => {
                                    let id = `${s.from}-${s.to}`;
                                    return (
                                        <div className="shift">
                                            <input type="radio" name="shift" id={id} />
                                            <label htmlFor={id}>{`From ${s.from} to ${s.to}`}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Appointment