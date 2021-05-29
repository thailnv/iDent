import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { dentistActions } from "../actions/dentistAction";
import { serviceActions } from "../actions/serviceActions";
import Input from '../common/input';
import Calendar from './calendar';
import AppointmentForm from './appointmentform';
import { constants } from '../constants';

function Appointment() {
    const [input, setInput] = useState({ email: '' })
    const [errors, setErrors] = useState({});

    const schedule = useSelector(state => state.dentist.schedule);

    const [showPlans, setShowPlans] = useState(false);
    const [showConfirmForm, setShowConfirmForm] = useState(false);
    const [time, setTime] = useState();

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

    function confirmInfor(e) {
        console.log(e.target.id);
        setTime(e.target.id);
        setShowConfirmForm(true);
    }

    function handleServiceChange(e) {
        let serviceID = e.target.value;
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
                        <Calendar handleShowPlans={setShowPlans} workingDay={schedule} />
                        <div className="schedule">
                            {
                                showPlans &&
                                [].map((smallPlan, i) => (
                                    <div
                                        onClick={confirmInfor}
                                        key={i}
                                        id={smallPlan.from}
                                        className="small-plan">
                                        {smallPlan.from}-{smallPlan.to}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Appointment