const client = supabase.createClient('https://xioqkgztmioablsvmqop.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb3FrZ3p0bWlvYWJsc3ZtcW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzM1OTcsImV4cCI6MTk5ODgwOTU5N30.JK7n_hUYgOy3AmwTd4A5tCyLp79Oiq9hEHCv5_DFlQQ')
console.log(client)


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
