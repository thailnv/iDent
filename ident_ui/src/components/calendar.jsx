import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/input';
const date = new Date();
const doctorID = '6092da0ada6f1c1cecc5ae36'
const plandate ='2021-6-28'

function Calendar (props) {
    //appointmentform
    const months = [
        "January","February","March","April","May","June","July","August","September","October","November","December",
    ]
    const [month, setMonth] = useState(months[date.getMonth()]);
    const [days, setDays] = useState([]);
    const [prevDays, setPrevDays] =useState([]);
    const [nextDays, setNextDays] = useState([]);


    function getCalendarDays(){
        const firstDayIndex = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
          ).getDay();
          const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
          ).getDate();
        
          const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
          ).getDate();
        
          const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
          ).getDay();
        
          let nextDay = 7 - lastDayIndex;
          const prevdays =[];
          const dayss = [];
          const nextdays = [];
          for (let x = firstDayIndex - 1; x >= 0; x--)
          {
            prevdays.push(prevLastDay - x);
          }
          setPrevDays(prevdays);
          for (let i = 1; i <= lastDay; i++){
              dayss.push(i);
          }
          setDays(dayss);
          for (let j = 1; j <= nextDay; j++) {
            nextdays.push(j);
          }
         setNextDays(nextdays);
    }
    useEffect(()=>{
        getCalendarDays();
    },[month])


    function goNextMonth(){
        date.setMonth(date.getMonth() + 1);
        setMonth(months[date.getMonth()]);
    }
    function goPrevMonth(){
        date.setMonth(date.getMonth() - 1);
        setMonth(months[date.getMonth()]);
    }
    function getSchedule(){
            props.handleShowPlans(true);
    }
  return (
            <div class="calendar">
                <div class="month noselect">
                    <button class="prev-btn" onClick={goPrevMonth} name="chevron-back-outline"></button>
                    <div class="date">
                        <h1>{month}</h1>
                        <p>{date.toDateString()}</p>
                    </div>
                    <button class="next-btn" name="chevron-forward-outline" onClick={goNextMonth} ></button>
                </div>
                <div class="weekdays">
                    <div class="noselect">Mo</div>
                    <div class="noselect">Tu</div>
                    <div class="noselect">We</div>
                    <div class="noselect">Th</div>
                    <div class="noselect">Fr</div>
                    <div class="noselect">Sa</div>
                    <div class="noselect">Su</div>
                </div>
                <div class="days">
                    {
                        prevDays.map((prevday)=>
                             (<div class="col1-7">
                                <div class="square">
                                    <div class = "day-display prev-date noselect">{prevday}</div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        days.map(function(day){
                            let dayinfor = `${date.getFullYear()}-${date.getMonth() + 1}-${day}`;
                            let dayhaveplan =`${props.dayHavePlan.year}-${props.dayHavePlan.month}-${props.dayHavePlan.day}`
                            if(dayinfor == dayhaveplan ){
                                return <div class="col1-7"><div class="square"><div class ="day-display normal-day noselect day-have-plan"
                                onClick={getSchedule}>{day}</div></div></div>
                            }
                            if (day === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                                return <div class="col1-7"><div class="square"><div class ="day-display today normal-day noselect"
                                >{day}</div></div></div>
                              } else
                                return <div class="col1-7"><div class="square"><div class="normal-day day-display noselect">{day}</div></div></div>
                            }
                        )
                    }
                    {
                        nextDays.map((nextDay)=>(
                            <div class="col1-7"><div class="square"><div class ="day-display next-date noselect">{nextDay}</div></div></div>
                        ))
                    }
                </div>
            </div>
  )
}

export default Calendar