let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  tasks.push(taskText);
  input.value = "";

  showTasks();
}

function showTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(li);
  });
}