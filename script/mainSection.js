document.getElementById("go-to-blog").addEventListener("click", function(){
    window.location.href = "./blog.html";
})

// Task 1 
document.getElementById("task-complete-btn1").addEventListener('click', function(e){

    const assignedTask = getNumberValueById("assigned-task");
    const completedTask = getNumberValueById("completed-task");
    
    const substriction = assignedTask - 1; 
    const sum = completedTask + 1; 
    setInnerTextById("assigned-task", substriction);
    setInnerTextById("completed-task", sum);  

    if(assignedTask === 1){
        alert("All Task complete")
    };
    alert("Board Upadated Succesfull");
    // Create Activity Log
    const title = e.target.parentNode.parentNode.children[0].children[1].innerText;
    const time = getTime();
    const activity = document.getElementById("activity"); 
    const p = document.createElement("p");
    p.classList.add("p-2.5"); 
    p.classList.add("bg-bgColor");
    p.classList.add("text-black/70");
    p.innerText = `You have Complete The Task ${title} at ${time}`; 
    activity.appendChild(p)

    document.getElementById("task-complete-btn1").setAttribute("disabled", "true"); 
});

// Task 2 
document.getElementById("task-complete-btn2").addEventListener('click', function(e){

    const assignedTask = getNumberValueById("assigned-task");
    const completedTask = getNumberValueById("completed-task");
    
    const substriction = assignedTask - 1; 
    const sum = completedTask + 1; 
    setInnerTextById("assigned-task", substriction);
    setInnerTextById("completed-task", sum);  

    if(assignedTask === 1){
        alert("All Task complete")
    };
    alert("Board Upadated Succesfull");
    // Create Activity Log
    const title = e.target.parentNode.parentNode.children[0].children[1].innerText;
    const time = getTime();
    const activity = document.getElementById("activity"); 
    const p = document.createElement("p");
    p.classList.add("p-2.5"); 
    p.classList.add("bg-bgColor");
    p.classList.add("text-black/70");
    p.innerText = `You have Complete The Task ${title} at ${time}`; 
    activity.appendChild(p)

    document.getElementById("task-complete-btn2").setAttribute("disabled", "true"); 
});

// Task 3 
document.getElementById("task-complete-btn3").addEventListener('click', function(e){

    const assignedTask = getNumberValueById("assigned-task");
    const completedTask = getNumberValueById("completed-task");
    
    const substriction = assignedTask - 1; 
    const sum = completedTask + 1; 
    setInnerTextById("assigned-task", substriction);
    setInnerTextById("completed-task", sum);  

    if(assignedTask === 1){
        alert("All Task complete")
    };
    alert("Board Upadated Succesfull");
    // Create Activity Log
    const title = e.target.parentNode.parentNode.children[0].children[1].innerText;
    const time = getTime();
    const activity = document.getElementById("activity"); 
    const p = document.createElement("p");
    p.classList.add("p-2.5"); 
    p.classList.add("bg-bgColor");
    p.classList.add("text-black/70");
    p.innerText = `You have Complete The Task ${title} at ${time}`; 
    activity.appendChild(p)

    document.getElementById("task-complete-btn3").setAttribute("disabled", "true"); 
});

// Task 4 
document.getElementById("task-complete-btn4").addEventListener('click', function(e){

    const assignedTask = getNumberValueById("assigned-task");
    const completedTask = getNumberValueById("completed-task");
    
    const substriction = assignedTask - 1; 
    const sum = completedTask + 1; 
    setInnerTextById("assigned-task", substriction);
    setInnerTextById("completed-task", sum);  

    if(assignedTask === 1){
        alert("All Task complete")
    };
    alert("Board Upadated Succesfull");
    // Create Activity Log
    const title = e.target.parentNode.parentNode.children[0].children[1].innerText;
    const time = getTime();
    const activity = document.getElementById("activity"); 
    const p = document.createElement("p");
    p.classList.add("p-2.5"); 
    p.classList.add("bg-bgColor");
    p.classList.add("text-black/70");
    p.innerText = `You have Complete The Task ${title} at ${time}`; 
    activity.appendChild(p)

    document.getElementById("task-complete-btn4").setAttribute("disabled", "true"); 
});

// Task 5 
document.getElementById("task-complete-btn5").addEventListener('click', function(e){

    const assignedTask = getNumberValueById("assigned-task");
    const completedTask = getNumberValueById("completed-task");
    
    const substriction = assignedTask - 1; 
    const sum = completedTask + 1; 
    setInnerTextById("assigned-task", substriction);
    setInnerTextById("completed-task", sum);  

    if(assignedTask === 1){
        alert("All Task complete")
    };
    alert("Board Upadated Succesfull");
    // Create Activity Log
    const title = e.target.parentNode.parentNode.children[0].children[1].innerText;
    const time = getTime();
    const activity = document.getElementById("activity"); 
    const p = document.createElement("p");
    p.classList.add("p-2.5"); 
    p.classList.add("bg-bgColor");
    p.classList.add("text-black/70");
    p.innerText = `You have Complete The Task ${title} at ${time}`; 
    activity.appendChild(p)

    document.getElementById("task-complete-btn5").setAttribute("disabled", "true"); 
});

// Task 6 
document.getElementById("task-complete-btn6").addEventListener('click', function(e){

    const assignedTask = getNumberValueById("assigned-task");
    const completedTask = getNumberValueById("completed-task");
    
    const substriction = assignedTask - 1; 
    const sum = completedTask + 1; 
    setInnerTextById("assigned-task", substriction);
    setInnerTextById("completed-task", sum);  

    if(assignedTask === 1){
        alert("All Task complete")
    };
    alert("Board Upadated Succesfull");
    // Create Activity Log
    const title = e.target.parentNode.parentNode.children[0].children[1].innerText;
    const time = getTime();
    const activity = document.getElementById("activity"); 
    const p = document.createElement("p");
    p.classList.add("p-2.5"); 
    p.classList.add("bg-bgColor");
    p.classList.add("text-black/70");
    p.innerText = `You have Complete The Task ${title} at ${time}`; 
    activity.appendChild(p)

    document.getElementById("task-complete-btn6").setAttribute("disabled", "true"); 
});