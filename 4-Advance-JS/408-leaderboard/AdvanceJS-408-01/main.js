let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let country = document.getElementById("country");
let score = document.getElementById("score");
let addBtn = document.getElementById("add");

addBtn.addEventListener("click", validation);

function validation() {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    country.value == "" ||
    score.value == ""
  ) {
    document.getElementById("warn").innerText = "All fields are required.";
  } else {
    document.getElementById("warn").innerText = "";
    addData();
  }
}

function addData() {
  let currentTimeDate = new Date();

  var month = new Array();
  month[0] = "JAN";
  month[1] = "FEB";
  month[2] = "MAR";
  month[3] = "APR";
  month[4] = "May";
  month[5] = "JUN";
  month[6] = "JUL";
  month[7] = "AUG";
  month[8] = "SEP";
  month[9] = "OCT";
  month[10] = "NOV";
  month[11] = "DEC";

  var hours = currentTimeDate.getHours();

  var minutes = currentTimeDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var AMPM = hours >= 12 ? "PM" : "AM";

  if (hours === 12) {
    hours = 12;
  } else {
    hours = hours % 12;
  }

  var currentTime = `${hours}:${minutes}${AMPM}`;

  var currentDate = currentTimeDate.getDate();
  currentDate = currentDate < 10 ? "0" + currentDate : currentDate;
  var currentMonth = month[currentTimeDate.getMonth()];
  var CurrentYear = currentTimeDate.getFullYear();

  var fullDate = ` ${currentMonth} ${currentDate}, ${CurrentYear}`;

  document.getElementById("show").innerHTML += `<div class="result">
    <div class="first">
      <p class="p">${firstName.value} ${lastName.value}</p>
      <p class="score-date">${fullDate} ${currentTime}</p>
    </div>
    <div class="cname">
      <p>${country.value}</p>
    </div>
    <div class="scores">
      <p>${score.value}</p>
    </div>

    <div class="delete">
      <div class="del icon" onclick="deleteData(this)">
        <i class="fa-regular fa-trash-can" ></i>
      </div>
      <div class="del" onclick="plusData(this)">
        <p>+5</p>
      </div>
      <div class="del" onclick="minusData(this)">
        <p>-5</p>
      </div>
    </div>
  </div>`;

  firstName.value = "";
  lastName.value = "";
  country.value = "";
  score.value = "";
}

function deleteData(e) {
  e.parentElement.parentElement.remove();
}

function plusData(e) {
  e.parentElement.previousElementSibling.children[0].innerText =
    parseInt(e.parentElement.previousElementSibling.children[0].innerText) + 5;
}
function minusData(e) {
  e.parentElement.previousElementSibling.children[0].innerText =
    e.parentElement.previousElementSibling.children[0].innerText - 5;
}
