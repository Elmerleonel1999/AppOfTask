let header = document.getElementById('navigation-title');
header.addEventListener('click', (e) =>{
  e.preventDefault();
});

let formTask = document.getElementById('formTask').addEventListener('submit',saveTask);

function saveTask(e){
  let titleOfTask = document.getElementById('in-title').value;
  let descriptionOfTask = document.getElementById('description').value;

  const task = {
    title: titleOfTask,
    description: descriptionOfTask
  };

  if(localStorage.getItem('tasks') === null){
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }else{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  titleOfTask.clear();
  descriptionOfTask.clear();

  // localStorage.setItem('Tasks',JSON.stringify(task));
  console.log(task.description);
  e.preventDefault();
}

function getTasks(){
  let data = JSON.parse(localStorage.getItem('tasks'));
  let taskView = document.getElementById('tasks');
  taskView.innerHTML = "";

  for(let i= 0; i < data.length; i++){
    console.log(data[i]);
  }

}

getTasks();