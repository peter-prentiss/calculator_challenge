let operator;
let firstValue = '';
let secondValue = '';
let number;


$(document).ready(() => {
  //sets up event handlers
  $('.number').click(function() {
    number = $(this).text();
    collectNumbers();
  });

  $('.operator').click(function() {
    operator = $(this).attr('id');
    $('#current-number').val('');
  });

  $('.clear').click(() => {
    $('#current-number').val('0');
    clear();
  });

  $('.equal').click(() => {
    sendCalculation();
  });

  $('#current-number').keyup(() => {
    if (!operator) {
      firstValue = $('#current-number').val();
      $('#current-number').val(firstValue);
      console.log(firstValue);
    } else {
      secondValue = $('#current-number').val();
      $('#current-number').val(secondValue);
      console.log(secondValue);
    }
  });

});
//collects numbers and assigns them to values as buttons are pressed
function collectNumbers() {
  if (!operator) {
    firstValue += number;
    $('#current-number').val(firstValue);
  } else {
    secondValue += number;
    $('#current-number').val(secondValue);
  }
}
//clears collected values
function clear() {
  firstValue = '';
  secondValue = '';
  operator = null;
}
//sends collected values to server
function sendCalculation() {
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
    }, 300)
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
      firstValue += response;
    }
  })
}
