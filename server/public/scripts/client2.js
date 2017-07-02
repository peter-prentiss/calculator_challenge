let operator;
let numArray = [];
let numArray2 = [];
let number;


$(document).ready(function() {
  //sets up event handlers
  $('.number').click(function() {
    number = $(this).text();
    collectNumbers();
  });

  $('.operator').click(function() {
    operator = $(this).attr('id');
    $('#current-number').val('');
  });

  $('.clear').click(function() {
    $('#current-number').val('0');
    clear();
  });

  $('.equal').click(function() {
    sendCalculation();
  });

});
//collects numbers and assigns them to values as buttons are pressed
function collectNumbers() {
  if (!operator) {
    numArray.push(number);
    $('#current-number').val(numArray.join(''));
  } else {
    numArray2.push(number);
    $('#current-number').val(numArray2.join(''));
  }
}
//clears collected values
function clear() {
  numArray = [];
  numArray2 = [];
  operator = null;
}
//sends collected values to server
function sendCalculation() {
  let firstValue = numArray.join('');
  let secondValue = numArray2.join('');
  $('#current-number').val('calculating...');
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: {
      firstValue: firstValue,
      secondValue: secondValue,
      operator: operator
    },
    success: setTimeout(function(response) {
      answer();
    }, 3000)
  });
}
//receives and displays calculated value from server
function answer() {
  $.ajax({
    type: 'GET',
    url: '/calculate',
    success: function(response) {
      $('#current-number').val(response);
      clear();
      numArray.push(response);
    }
  })
}
