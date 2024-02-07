// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  let curDay = dayjs();
  //console.log(curDay);

  let updateTime = function() {
    curDay = dayjs();
    // TODO: Add code to display the current date in the header of the page.
    document.getElementById('currentDay').innerHTML = curDay.$d;
  }

  let showTasks = function (element) { // element is div class time-block

   // console.log("THIS: " + this);
    console.log("element: " + element);

    /* -- div class time-block
    <div id="hour-9" class="row time-block ">
      <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
    */

    let time_block_id = element.id;
    console.log("show time block ID: " + time_block_id);

    let textTag = element.getElementsByTagName('textarea')[0]; //.innerHTML("myTask")
    console.log(textTag);

    // test 
     //localStorage.setItem("hour-9", "Wake up.");
    
     let description = localStorage.getItem(time_block_id);
      //console.log("description :" + description);

     if (description !== null)
     {
      //console.log("show: " + description);
      //console.log("text: " + textTag);
      //console.log(textTag.innerHTML);
      textTag.innerHTML = description;
     }
     
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  let mySave = function (element) { // element is div class time-block

    setHourColors(element);

      /* -- div class time-block
    <div id="hour-9" class="row time-block ">
      <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
    */

    //console.log("THIS: " + this);
    //console.log("element: " + element);

    //let time_block_id = element.closest('.time-block')//.attr('id');
    //console.log(time_block_id)

  //  let time_id = element.getElementsByTagName('div')[0]; //.attr('class');

   // curDay = dayjs();
  //console.log(curDay);

  // TODO: Add code to display the current date in the header of the page.
  //document.getElementById('currentDay').innerHTML = curDay.$d;

   // console.log("THIS: " + this);
   // console.log("element: " + element);


    let time_block_id = element.id;
    console.log("show time block ID: " + time_block_id);

    let textTag = element.getElementsByTagName('textarea')[0]; //.innerHTML("myTask")
    console.log(textTag);

    let description = textTag.value;
    console.log(description);

     //let description = localStorage.getItem(time_block_id);
      //console.log("description :" + description);

     if (description !== null)
     {
     // set localStorage
     localStorage.setItem(time_block_id, description);
     }
   // console.log(time_id);

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

      /* -- div class time-block
    <div id="hour-9" class="row time-block ">
      <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
    */

     // test 
     //localStorage.setItem("hour-9", "Wake up.");

  };

  let setHourColors = function (element) { // // element is div class time-block

   // console.log("THIS: " + this);
    //console.log("element: " + element);

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

      /* -- div class time-block
    <div id="hour-9" class="row time-block ">
      <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
    */
    updateTime();
    // TODO: Add code to display the current date in the header of the page.
    //document.getElementById('currentDay').innerHTML = curDay.$d;
   
    //let time_block = element.closest('.time-block');
    let time_block_id = element.id;
    //console.log("time_block_id: " + time_block_id)

    
   // let time_id = element.getElementsByTagName('div')[0];
    //console.log("time_id: " + time_id.id)

   // let calHour = time_id.innerHTML;
    time_block_id = Number(time_block_id.replace("hour-", ""));
    //console.log("calHour: " + calHour);

    curHour = curDay.format("HH")
    //console.log("dayjs :" + curHour);

    /*
    if (curHour > 12) {
      curHour = curHour + 12;
    }
    */

    //console.log(curDay.$H);
    //console.log("curHour: " + curHour);

    if (time_block_id < curHour) {
      element.classList.add("past");
      element.classList.remove("present");
      element.classList.remove("future");
      //console.log("grey");
    }
    else if (time_block_id == curHour) {
      element.classList.remove("past");
      element.classList.add("present");
      element.classList.remove("future");
      //console.log("red")
    }
    else if (time_block_id > curHour) {
      element.classList.remove("past");
      element.classList.remove("present");
      element.classList.add("future");
      //console.log("green")
    }
    else {
      alert("error in hours");
    }

  }


    // main
    updateTime();

  // loops through hours and sets hour color
  // loops through tasks buttons enters data from local storage
  // loops through save buttons and adds click event handler, to save to local storage

  for (const element of document.getElementsByClassName("time-block")) {
    
    //console.log("THIS loop: " + this);
    //console.log("element loop: " + element)

    setHourColors(element);
    showTasks(element);
    let saveButton = element.getElementsByClassName('saveBtn')[0].addEventListener('click', () => mySave(element));
    
   // console.log("saveButton: " + saveButton);

  }

  // gets Refresh Current Time button and adds click event handler
  document.getElementById("refreshCurTime").addEventListener('click', () => {
    for (const element of document.getElementsByClassName("time-block")) {
      setHourColors(element)
    }
  });

});
