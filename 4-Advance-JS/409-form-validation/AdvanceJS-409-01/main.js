function validation(e) {
  e.preventDefault();
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var telephone = document.getElementById("phone").value;
  var bio = document.getElementById("bio").value;

  var firstNameRegex = /^[0-9A-Za-z. ]{3,16}$/;
  var lastNameRegex = /^[0-9A-Za-z. ]{3,16}$/;
  var passwordRegex = /^[0-9A-Za-z@_-]{6,20}$/;
  var emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  var telephoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
  var bioRegex = /^[a-z_-]{8,50}$/;

  if (firstNameRegex.test(firstName)) {
    document.getElementById("firstWarning").innerHTML = "";
    document.getElementById("fname").style.outlineColor = "green";
    document.getElementById("fname").classList.add("after-validation");
  } else {
    document.getElementById("firstWarning").innerHTML =
      "First name must be alphanumeric and contain 3 - 16 characters";
  }
  if (lastNameRegex.test(lastName)) {
    document.getElementById("lasterror").innerHTML = "";
    document.getElementById("lname").style.outlineColor = "green";
    document.getElementById("lname").classList.add("after-validation");
  } else {
    document.getElementById("lasterror").innerHTML =
      "Last name must be alphanumeric and contain 3 - 16 characters";
  }
  if (emailRegex.test(email)) {
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("email").style.outlineColor = "green";
    document.getElementById("email").classList.add("after-validation");
  } else {
    document.getElementById("emailerror").innerHTML =
      "Email must be a valid address, e.g. example@example.com";
  }

  if (passwordRegex.test(password)) {
    document.getElementById("passerror").innerHTML = "";
    document.getElementById("pass").style.outlineColor = "green";
    document.getElementById("pass").classList.add("after-validation");
  } else {
    document.getElementById("passerror").innerHTML =
      "Password must be alphanumeric (@,_and-are also allowed) and between 6-20 characters";
  }
  if (telephoneRegex.test(telephone)) {
    document.getElementById("telephoneerror").innerHTML = "";
    document.getElementById("phone").style.outlineColor = "green";
    document.getElementById("phone").classList.add("after-validation");
  } else {
    document.getElementById("telephoneerror").innerHTML =
      "A valid Telephone number (10 digits and 333-333-3334)";
  }
  if (bioRegex.test(bio)) {
    document.getElementById("bioerror").innerHTML = "";
    document.getElementById("bio").style.outlineColor = "green";
    document.getElementById("bio").classList.add("after-validation");
  } else {
    document.getElementById("bioerror").innerHTML =
      "Bio must contain only lowercase letters, underscore, hyphens and be 8 - 50 characters";
  }

  if (
    firstNameRegex.test(firstName) &&
    lastNameRegex.test(lastName) &&
    emailRegex.test(email) &&
    passwordRegex.test(password) &&
    telephoneRegex.test(telephone) &&
    bioRegex.test(bio)
  ) {
    document.getElementById("sub").style.backgroundColor = "green";
  } else {
    document.getElementById("sub").style.backgroundColor =
      "rgba(0, 0, 0, 0.678)";
  }
}

document.getElementById("submit").addEventListener("keyup", validation);
