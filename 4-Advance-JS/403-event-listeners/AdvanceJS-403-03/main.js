let submitBtn = document.getElementById("submit");
let bill = document.getElementById("bill");
let people = document.getElementById("people");

submitBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  if (
    bill != "" &&
    people != "" &&
    document.forms["Tip_form"].service.value != ""
  ) {
    calculateTip();
    document.getElementById("warning").innerText = "";
  } else {
    document.getElementById("warning").innerText = "All fields are mandatory";
  }
}

function calculateTip() {
  let billAmonut = bill.value;
  let serviceQuality = document.forms["Tip_form"].service.value;
  let numPeople = people.value;

  let result = (billAmonut * serviceQuality) / parseFloat(numPeople);
  document.getElementById("result").innerText = "$" + result.toFixed(2);

  document.forms["Tip_form"].service.value = "";
  people.value = "";
  bill.value = "";
}
