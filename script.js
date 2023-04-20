//document.getElementById("button").addEventListener("click", addTask);

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
}
function deleteTask(id) {
  console.log(id);
  document.getElementById(id.toString()).remove();
}
