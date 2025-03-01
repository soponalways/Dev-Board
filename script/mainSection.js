document.getElementById("go-to-blog").addEventListener("click", function(){
    window.location.href = "./blog.html";
})

document.getElementById("task-complete-btn1").addEventListener('click', function(e){
    const assignedTask = getNumberValueById("assigned-task");
    const completedTask = getNumberValueById("completed-task");
    
    const substriction = assignedTask - 1; 
    const sum = completedTask + 1; 
    setInnerTextById("assigned-task", substriction);
    setInnerTextById("completed-task", sum);  

    // Create Activity Log
    const activity = document.getElementById("activity"); 
    const text = "Sopon islam is a good boy"
    const p = document.createElement("p"); 

    p.classList.add("p-2.5"); 
    p.classList.add("bg-bgColor");
    p.classList.add("text-black/70");
    p.innerHTML = `${text}`; 
    activity.appendChild(p)

    document.getElementById("task-complete-btn1").setAttribute("disabled", "true"); 
});