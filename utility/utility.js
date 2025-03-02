function getNumberValueById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
};



function getTime() {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let amOrPm = "";
    minute = minute.toString().padStart(2, "0");
    second = second.toString().padStart(2, "0")
    if (hour >= 12) {
        amOrPm = "PM";
    } else {
        amOrPm = "AM";
    };
    hour = hour % 12 || 12;
    return `${hour}:${minute}:${second} ${amOrPm}`
};

function setInnerTextById(id, value) {
    document.getElementById(id).innerText = value
};

