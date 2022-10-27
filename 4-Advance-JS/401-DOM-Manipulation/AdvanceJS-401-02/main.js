let container = document.getElementsByClassName("item");
for (let i = 0; i < container.length; i++) {
  if (i == 0) {
    container[i].style.backgroundColor = "blue";
    container[i].style.color = "white";
  } else if (i == 8) {
    container[i].style.backgroundColor = "green";
    container[i].style.color = "white";
  } else if (i == container.length - 1) {
    container[i].style.backgroundColor = "palevioletred";
    container[i].style.color = "white";
  } else if (i % 2 == 1) {
    container[i].style.backgroundColor = "lime";
    container[i].style.color = "white";
  } else {
    container[i].style.background = "white";
  }
}
