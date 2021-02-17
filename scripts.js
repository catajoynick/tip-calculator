function calculate() {
  var bill = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var number_of_people = document.getElementById("number_of_people").value;

  if (bill == 0 || service == 0) {
    alert("Please provide input");
    return;
  }
  if (number_of_people == 0 || number_of_people <= 1) {
    number_of_people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (bill * service) / number_of_people;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  document.getElementById("tip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("each").style.display = "none";
document.getElementById("tip").style.display = "none";

document.getElementById("calculate").onclick = function () {
  calculate();
};
