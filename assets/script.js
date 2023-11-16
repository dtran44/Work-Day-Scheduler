//Displays the current date in the header of the page
var today = dayjs().format('dddd, D MMMM YYYY')
$('#currentDay').text(today);


//A click event listener on the save button has been added which uses the id in the containing time-block as a key to save the user input in local storage.
$(document).ready(function() {
  $('.saveBtn').on('click', function() {
    var timeBlock = $(this).closest('.time-block');
    if (timeBlock.length > 0) {
      var timeBlockId = timeBlock.attr('id');
      var userInput = timeBlock.find('.description').val();
      localStorage.setItem(timeBlockId, userInput);
    }
  });

 // Get the current hour using Day.js (24-hour format)
 var currentHour = dayjs().format("HH");

  // This applies the past, present, or future class formatting to each time block by comparing the id to the current hour.

  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  //This gets the user input that was saved in localStorage and set the values of the corresponding text area elements.
  $('.time-block').each(function() {
    var blockId = $(this).attr('id');
    var userInput = localStorage.getItem(blockId);

    if (userInput) {
      $(this).find('.description').val(userInput);
    }
  });
});


 