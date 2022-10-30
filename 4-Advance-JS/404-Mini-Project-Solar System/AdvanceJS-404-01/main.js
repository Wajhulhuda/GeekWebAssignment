document.getElementById("calculateSec").style.display = "none";
document.getElementById("warningDiv").style.display = "none";

let calWeight = () => {
  var planetName = document.getElementById("planetName");
  var planetImage = document.getElementById("planetImage");
  var mass = document.getElementById("mass");
  var weight = document.getElementById("weight");
  var planetSelec = document.getElementById("planetSelec");
  if (mass.value === "" || planetSelec.value === "selectPlanet") {
    if (mass.value === "") {
      let warning = document.getElementById("show-warning");
      warning.innerText = "Mass is required";
      document.getElementById("warningDiv").style.display = "block";
      document.getElementById("calculateSec").style.display = "none";
      warning.classList.add("waringstyle");
      return;
    } else if (planetSelec.value === "selectPlanet") {
      alert("Please Select Planet");
      return;
    }
  } else {
    document.getElementById("warningDiv").style.display = "none";
    document.getElementById("calculateSec").style.display = "block";
    if (planetSelec.value === "mercury") {
      planetName.innerText = "MERCURY";
      planetImage.src = "ProjectImage/mercury.png";
      weight.innerText = `${parseFloat(mass.value * 3.59).toFixed(2)} N`;
    } else if (planetSelec.value === "venus") {
      planetName.innerText = "VENUS";
      planetImage.src = "ProjectImage/venus.png";
      weight.innerText = `${parseFloat(mass.value * 8.87).toFixed(2)} N`;
    } else if (planetSelec.value === "earth") {
      planetName.innerText = "EARTH";
      planetImage.src = "ProjectImage/earth.png";
      weight.innerText = `${parseFloat(mass.value * 9.81).toFixed(2)} N`;
    } else if (planetSelec.value === "moon") {
      planetName.innerText = "MOON";
      planetImage.src = "ProjectImage/moon.png";
      weight.innerText = `${parseFloat(mass.value * 1.62).toFixed(2)} N`;
    } else if (planetSelec.value === "mars") {
      planetName.innerText = "MARS";
      planetImage.src = "ProjectImage/mars.png";
      weight.innerText = `${parseFloat(mass.value * 3.77).toFixed(2)} N`;
    } else if (planetSelec.value === "jupiter") {
      planetName.innerText = "JUPITER";
      planetImage.src = "ProjectImage/jupiter.png";
      weight.innerText = `${parseFloat(mass.value * 25.95).toFixed(2)} N`;
    } else if (planetSelec.value === "saturn") {
      planetName.innerText = "SATURN";
      planetImage.src = "ProjectImage/saturn.png";
      weight.innerText = `${parseFloat(mass.value * 11.08).toFixed(2)} N`;
    } else if (planetSelec.value === "uranus") {
      planetName.innerText = "URANUS";
      planetImage.src = "ProjectImage/uranus.png";
      weight.innerText = `${parseFloat(mass.value * 10.67).toFixed(2)} N`;
    } else if (planetSelec.value === "neptune") {
      planetName.innerText = "NEPTUNE";
      planetImage.src = "ProjectImage/neptune.png";
      weight.innerText = `${parseFloat(mass.value * 14.07).toFixed(2)} N`;
    } else if (planetSelec.value === "pluto") {
      planetName.innerText = "PLUTO";
      planetImage.src = "ProjectImage/pluto.png";
      weight.innerText = `${parseFloat(mass.value * 0.42).toFixed(2)} N`;
    }
    planetSelec.value = "selectPlanet";
    mass.value = "";
  }
};
