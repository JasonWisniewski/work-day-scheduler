var currentdateEl = document.getElementById("current-date");

var userInput = document.querySelector(".form-contorol");

// display date on the top of the page
currentdateEl.textContent= moment().format("dddd-MMMM-Do");

var loadTasks = function () {
  for (i=9;i<18; i++) {

    var storage = localStorage.getItem(i.toString());
    console.log(storage);

    if (storage) {
      document.getElementById(i.toString()).textContent=storage;
    }
    

  }
}

var changeTaskColor = function() {

  for (i=9; i<18; i++) {

    var scheduleTime = document.getElementById(`${i}`);
    // var scheduledTime = $(`#${i}).val()
    console.log('time 1', scheduleTime.id);
    console.log('new loggers', scheduleTime);
    if (moment().format("HH") > parseInt(scheduleTime.id)) {
      $(`#${i}`).removeClass("present");
      // change to appropite color
      $(`#${i}`).addClass("future");
      console.log(i);
      console.log('time color',scheduleTime);
      console.log('moment time read',moment().format("HH"))
    }
    else
    if (moment().format("HH") < parseInt(scheduleTime.id)) {
      console.log(moment().format("hh"))
      $(`#${i}`).removeClass("present");
      $(`#${i}`).addClass("past");
      console.log('time color2',scheduleTime);
    }
    //  else
    // this works below
    // (moment().format("hh") < parseInt(scheduleTime.id))

    //  if (moment().format("h") = parseInt(scheduleTime.id)){
    //   $(`#${i}`).removeClass("bg-light");
    //   $(`#${i}`).addClass("bg-warning");
    //   console.log('time color2',scheduleTime);
    //  }
  }
};

var saveTask = function (){
  console.log(this);
  // grabbing texarea box entered by user
  
  var text = $(this).siblings(".input-group").children(".textarea").val().trim();
  console.log('text-entered', text);

  // !!grab time that was entered into, only grabs 9 right now!!!
  var time = $(this).siblings(".input-group").children(".textarea").attr('id');
  console.log('time',time);

  // consolelog what user input and that click registered
  console.log("click works");
  
  // and task time under tasks array out sourcing to another fxn??
  // if (taskText && taskTime) {
  //   createTask(taskText, taskTime, "tasks");
  // }

  localStorage.setItem (time, text);

  // replace textarea with new content
  // $(this).replaceWith(taskP);
  // not working for all classes with save-btn only for first 9am :(
}

$(".saveBtn").click(saveTask);
changeTaskColor();
loadTasks();