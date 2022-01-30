$(startUp);

function startUp() {
    $("#time-display").text(moment().format("MMM DD, YYYY [at] hh:mm:ss a"));

  timeBlocks();
  setInterval(timeBlocks, 60000);

  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

  $(".saveBtn").on("click", handleSave);
}

function timeBlocks() {
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));
    $(this).removeClass("past present future");
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

function handleSave(event) {
  var hour = $(this).parent().attr("id");
  // save data in textarea in local storage
  localStorage.setItem(moment().format("DDDYYYY") + hour, $("#" + hour + " textarea").val());
}




