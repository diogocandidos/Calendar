//Declare the variables in hours.
var hour9am = $("#9");
var hour10am = $("#10");
var hour11am = $("#11");
var hour12pm = $("#12");
var hour1pm = $("#13");
var hour2pm = $("#14");
var hour3pm = $("#15");
var hour4pm = $("#16");
var hour5pm = $("#17");
var time = moment();

//Set the date and time.  
function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

// Set the function for the save button.
setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

//Set the function for the Past, Present and Future hours.
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("pastHour");
        }
    })
}
pastPresentFuture();

