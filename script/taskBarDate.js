const dateElement = document.getElementById("task-bar-date"); 

const d = new Date(); 
const dayDate = d.getDate(); 
const months = [
    "Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]; 
const day = days[d.getDay()]
const month = months[d.getMonth()]; 
const year = d.getFullYear(); 

dateElement.innerHTML = `
    <span>${day} ,</span>
    <span class="font-bold">${dayDate} ${month} ${year} </span>
`