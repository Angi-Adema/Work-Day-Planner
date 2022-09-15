// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var day = moment().format("dddd, MMMM Do, YYYY, h:mma");
$('#currentDay').text(day);
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr('id')
  var value = $(this).siblings(".description").val();

  localStorage.setItem(key, value);
});
// WHEN I refresh the page
// THEN the saved events persist

// the short way using an each loop
$('.time-block').each(function () {
  var id = $(this).attr('id');

  $('#' + id + ' .description').val(localStorage.getItem(id))
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  var time = moment().hour();
  if (id < time) {
    // past
    $(this).addClass('past');
  } else if (id == time) {
    // present
    $(this).addClass('present');
  } else {
    // future
    $(this).addClass('future');
  }
});

// the long way for looping through the timeblocks
// $('#9 .description').val(localStorage.getItem('9'))
// $('#10 .description').val(localStorage.getItem('9'))
