document.getElementById("theme-toggole").addEventListener('click', function(){
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    
    const bgColor = `rgb(${r}, ${g}, ${b})`; 
    document.body.style.background = bgColor; 
    document.getElementById("task-bar").style.borderColor = bgColor; 
})