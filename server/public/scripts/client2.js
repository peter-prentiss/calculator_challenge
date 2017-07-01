let operator;
let numArray = [];
let numArray2 = [];
let number;


$(document).ready(function() {

  $('.number').click(function() {
    if (!operator) {
      numArray.push($(this).text());
      console.log(numArray);
      $('#current-number').val(numArray.join(''));
    } else {
      numArray2.push($(this).text());
      console.log(numArray2);
      $('#current-number').val(numArray2.join(''));
    }
  });

  $('.operator').click(function() {
    operator = $(this).attr('id');
    $('#current-number').val('');
    console.log(operator);
  });

  $('.clear').click(function() {
    $('#current-number').val('');
    clear();
  });

  $('.equal').click(function() {
    let firstValue = numArray.join('');
    let secondValue = numArray2.join('');
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: {
        firstValue: firstValue,
        secondValue: secondValue,
        operator: operator
      },
      success: function(response) {
        console.log('responded');
        console.log(response);
        answer();
      }
    })
  });

});

function answer() {
  $.ajax({
    type: 'GET',
    url: '/calculate',
    success: function(response) {
      $('#current-number').val(response);
      clear();
    }
  })
}

function clear() {
  numArray = [];
  numArray2 = [];
  operator = null;
}
