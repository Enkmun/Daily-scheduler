   
    var now = moment().format("dddd, MMMM Do YYYY");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    var currentHour=moment().format("HH");

    
    $(".time-block").each(function() {
        var timeBlock = $(this).attr("id").split("-")[1];
        

        if (currentHour == timeBlock) {
            $(this).addClass("present");
            $(this).children(".description").addClass("present");
   
        } else if (currentHour < timeBlock) {
            $(this).removeClass("present");
            $(this).addClass("future");

        } else if (currentHour > timeBlock) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time,value);
    });

    $("#hour-8 .description").val(localStorage.getItem("8"));
    $("#hour-9 .description").val(localStorage.getItem("9"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .descriptiion").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));
    

     
    
