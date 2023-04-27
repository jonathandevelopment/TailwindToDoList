//document.getElementById("button").addEventListener("click", addTask);

// var counter = 0;
// function addTask() {
//   counter++;
//   let task = document.getElementById("task").value;
//   let list = document.getElementById("to-do-list");

//   list.innerHTML += 
//   `<li id='${counter}'> ${task} 
//     <button style="color:red" id="btn${counter}" 
//     onclick="deleteTask(${counter})"> 
//     DELETE TASK
//     </button>
//   </li>`;
// }
// function deleteTask(id) {
//   console.log(id);
//   document.getElementById(id.toString()).remove();
// }

var counter = 0;
function addTask() {
  counter++;
  let task = document.getElementById("task").value;
  let list = document.getElementById("to-do-list");

  list.innerHTML += 
  `<li id='${counter}'> ${task} 
    <button style="color:red" id="btn${counter}" 
    onclick="deleteTask(${counter})"> 
    DELETE TASK
    </button>
  </li>`;
  
  // Save task to local storage
  localStorage.setItem(`task-${counter}`, JSON.stringify(task));
}

function deleteTask(id) {
  console.log(id);
  document.getElementById(id.toString()).remove();
  
  // Remove task from local storage
  localStorage.removeItem(`task-${id}`);
}

window.addEventListener("load", function() {
  let list = document.getElementById("to-do-list");
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("task-")) {
      let task = JSON.parse(localStorage.getItem(key));
      let id = parseInt(key.substring(5));
      list.innerHTML += 
      `<li id='${id}'> ${task} 
        <button style="color:red" id="btn${id}" 
        onclick="deleteTask(${id})"> 
        DELETE TASK
        </button>
      </li>`;
    }
  }
});
