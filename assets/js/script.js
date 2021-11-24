var currentdateEl = document.getElementById("current-date");
// display date on the top of the page
currentdateEl.textContent= moment();

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
    // else(remove any old classes that might be on it)
  }
};

// need to save tasks when refreshed.. either local storage or prevent clear

changeTaskColor();
