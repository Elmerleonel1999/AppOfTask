//button to view tasks
let btnTasks = document.getElementById('btn-tasks');
btnTasks.addEventListener('click', Activate);

function Activate(){
  let taskData = document.getElementById('in-data');
  taskData.style.display="none";
  btnTasks.style.display="none";

  let btnBack = document.getElementById('btn-back');
  btnBack.style.display="block";

  let spaceForTasks = document.getElementById('spaceTasks');
  spaceForTasks.style.display="block";
}


//button to return to form

let btnBack = document.getElementById('btn-back');
btnBack.addEventListener('click', Back);

function Back(){
  let taskData = document.getElementById('in-data');
  taskData.style.display="block";
  btnTasks.style.display="block";

  let btnBack = document.getElementById('btn-back');
  btnBack.style.display="none";

  let spaceForTasks = document.getElementById('spaceTasks');
  spaceForTasks.style.display="none";
}