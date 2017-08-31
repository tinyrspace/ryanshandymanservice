//input num
function getInitialSalary() {
  //reference the id of the form
  var theForm = document.forms["wage-gap"];
  //reference the text box
  var initialSalaryAmount = theForm.elements["salary-initial"];
  var initialSalary = 0;
  //if the textbox is not blank
  if (initialSalaryAmount.value != "") {
    initialSalary = parseInt(initialSalaryAmount.value);
  }

  //return the salary $$$ to calculate in the final result
  return initialSalary;
}

function calculateTotal() {
  //get the final calculated salary by calling our function!
  //then we have to round using weird math from http://www.webdeveloper.com/forum/showthread.php?222667-How-to-round-variables-up-to-2-decimal-places
  var getCalculatedSalary = getInitialSalary() * 50;
  var calculatedSalary = Math.round(getCalculatedSalary * Math.pow(10, 2)) / Math.pow(10, 2);

  //display the result
  document.getElementById('salary-calculated').innerHTML = "$" + calculatedSalary + ".";
}
