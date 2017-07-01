let firstValue;
let secondValue;
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
    console.log(operator);
  });

  $('.clear').click(function() {
    numArray = [];
    numArray2 = [];
    operator = null;
  })

});



function setValues() {
  numArray.push()

}
