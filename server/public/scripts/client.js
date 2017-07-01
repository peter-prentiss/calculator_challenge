console.log('js sourced ');
let button = "add";

$(document).ready(function() {

  $('.operator').click(function() {
    button = $(this).attr('id');
    console.log(button);
  })
  $('#equals').click(buildEquation);
  $('#clear').click(clearValues);
  $('#val1').on('focus', function() {
    $('#val1').val("");
  });
  $('#val2').on('focus', function() {
    $('#val2').val("");
  });
});

function buildEquation() {
  let firstValue = $('#val1').val();
  let secondValue = $('#val2').val();
  let operator = button;
  console.log(firstValue);
  console.log(secondValue);
  console.log(button);
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
}

function answer() {
  $.ajax({
    type: 'GET',
    url: '/calculate',
    success: function(response) {
      $('#answer').text(response);
    }
  })
}

function clearValues() {
  $('#val1').val(0);
  $('#val2').val(0);
  $('#answer').empty();
}
