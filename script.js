$(function () {
  // listener added to click events on the save button; save button is fully functional
  $('.saveBtn').on('click', function () {
    // Get the hour ID of the time-block containing the clicked button
    var hourId = $(this).closest('.time-block').attr('id');

    // user input comes from the textarea within the same time-block
    var userInput = $(this).siblings('.description').val();

    // user input saved in local storage using the hour ID as the key
    localStorage.setItem(hourId, userInput);
  });

  // past, present, or future classes attached to each time block
  $('.time-block').each(function () {
    // hour comes from the ID of each time-block
    var hour = parseInt($(this).attr('id').split('-')[1]);

    // current hour obtained using Day.js
    var currentHour = dayjs().hour();

    // compares hour to current hour; apply the appropriate class
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // user input saved in localStorage 
  $('.time-block').each(function () {
    // Get the hour ID of each time-block
    var hourId = $(this).attr('id');

    // user input corresponds to the hour ID from localStorage
    var userInput = localStorage.getItem(hourId);

    // value of textarea set within the same time-block
    $(this).find('.description').val(userInput);
  });

  // current date displayed at top of the page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
