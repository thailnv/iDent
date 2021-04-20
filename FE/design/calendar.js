const date = new Date();

const renderCalendar= ()=>{

const firstDayIndex = new Date(date.getFullYear(),
date.getMonth(),0).getDay();

const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(), 
date.getMonth()+1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), 
date.getMonth(), 0).getDate();

const lastDayIndex = new Date(date.getFullYear(), 
date.getMonth()+1, 0).getDay();

let nextDay = 7 - lastDayIndex;
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
document.querySelector('.date h1').innerHTML
= months[date.getMonth()];
document.querySelector('.date p').innerHTML
= date.toDateString();

let days = "";
for(let x=firstDayIndex-1; x>=0; x--){
    days += `<div class = "prev-date">${prevLastDay - x}</div>`;
}
for(let i =1; i<=lastDay;i++)
{
    var dateinfor = `${date.getFullYear()}-${date.getMonth()+1}-${i}`;
    if(i=== new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class ="today normal-day" id = ${dateinfor}>${i}</div>`
    }
    else
        days += `<div id = ${dateinfor} class="normal-day" onclick ="getPlanOfDay(this)">${i}</div>`
}

for(let j = 1; j <= nextDay; j++){
    days += `<div class ="next-date">${j}</div>`;
    monthDays.innerHTML = days;
}
}

document.querySelector('.prev-btn').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});

document.querySelector('.next-btn').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});
renderCalendar();

var doctor =
{
        name: 'Tyler',
        plan: [
            {
                date:'2021-4-17',
                hour:[
                    '8:00',
                    '14:00',
                    '19:00'
                ]
            },
            {
                date:'2021-4-15',
                hour:[
                    '8:00',
                    '14:00',
                    '15:00'
                ]
            },
            {
                date:'2021-4-20',
                hour:[
                    '9:00',
                    '14:00',
                    '20:00'
                ]
            },
            {
                date:'2021-4-30',
                hour:[
                    '5:00',
                    '14:00',
                ]
            },
            {
                date:'2021-4-25',
                hour:[
                    '10:00',
                    '19:00'
                ]
            }
        ]
    }

function getDoctorSchedule(){
    console.log(doctor.plan.length);
    for(var i=0;i<doctor.plan.length;i++){
        document.getElementById(doctor.plan[i].date).classList.add('day-have-plan');
    }
}
function getPlanOfDay(ele){
    var pos = doctor.plan.map(function(e){return e.date;})
.indexOf(ele.id);
    var plans = doctor.plan[pos].hour;
    var smallPlan = "";
    for(var i=0;i<plans.length;i++){
        smallPlan += `<div class = "small-plan">${plans[i]}</div>`
    }
    document.querySelector('.schedule-layer2').innerHTML = smallPlan;
} 
