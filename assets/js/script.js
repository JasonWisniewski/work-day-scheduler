var currentdateEl = document.getElementById("current-date");
var saveButton = document.querySelector(".save-btn");
// var userInput =  document.
var tasks = {};
var userInput = document.querySelector(".form-contorol")
// display date on the top of the page
currentdateEl.textContent= moment();

var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
      time: [],
      task: []
    };
  }
  console.log('tasks object', tasks)
  // // loop over object properties
  // $.each(tasks, function(list, arr) {
  //   // then loop over sub-array
  //   arr.forEach(function(task) {
  //     createTask(task.text, task.date, list);
  //   });
}

var changeTaskColor = function() {

  for (i=9; i<17; i++) {

    var scheduleTime = document.getElementById(`${i}`);
    // var scheduledTime = $(`#${i}).val()
    console.log('time 1',scheduleTime.id);
    if (moment().isAfter(scheduleTime.id)) {
      $(`#${i}`).removeClass("bg-light");
      $(`#${i}`).addClass("bg-danger");
      console.log('time color',scheduleTime);
    }
    else
    if (moment().format("hh") < parseInt(scheduleTime.id)) {
      console.log(moment().format("hh"))
      $(`#${i}`).removeClass("bg-light");
      $(`#${i}`).addClass("bg-success");
      console.log('time color2',scheduleTime);
    }
    //  else
    //  if (moment().format("h") = parseInt(scheduleTime.id)){
    //   $(`#${i}`).removeClass("bg-light");
    //   $(`#${i}`).addClass("bg-warning");
    //   console.log('time color2',scheduleTime);
    //  }
  }
};

var saveTask = function (){
  // grabbing texarea box entered by user
  var text = document.getElementById("textarea");
  console.log('text-entered', text.value);

  // !!grab time that was entered into, only grabs 9 right now!!!
  var time = document.getElementById("9");
  console.log('time',time.innerHTML);

  // consolelog what user input and that click registered
  console.log("click works");
  
  // and task time under tasks array out sourcing to another fxn??
  // if (taskText && taskTime) {
  //   createTask(taskText, taskTime, "tasks");
  // }

  
  tasks = {
    time: [],
    task: []
  };
  console.log(tasks);
  // push user inputted task into local storage array
  tasks.push({
    text: text,
    time: time
  });

  // set local storage?
  localStorage.setItem("tasks", JSON.stringify(tasks));

 
  
  // replace textarea with new content
  $(this).replaceWith(taskP);
  // not working for all classes with save-btn only for first 9am :(
}

saveButton.addEventListener("click", saveTask);
changeTaskColor();
loadTasks();