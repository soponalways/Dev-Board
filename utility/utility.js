function getNumberValueById(id){
    const value =  document.getElementById(id).innerText; 
    const convertedValue = parseFloat(value); 
    return convertedValue; 
}; 