document.getElementById("getInput").addEventListener("keyup", getValue);
function getValue(e) {
  document.getElementById("charac").innerHTML = e.target.value;
  filterData(e.target.value);
}

function filterData(letter) {
  word = letter.charAt(0).toUpperCase() + letter.slice(1);
  let filtered = countries.filter((element) => {
    if (element.startsWith(word)) {
      return true;
    }
    return false;
  });

  let lens = filtered.length;
  document.getElementById("len").innerHTML = lens;
  document.getElementById("main-div").innerHTML = "";
  filtered.map((ele) => {
    let cardDiv = document.createElement("div");
    let colorDiv = document.createElement("div");
    let para = document.createElement("p");
    cardDiv.classList.add("card");
    colorDiv.classList.add("color");
    para.innerHTML = ele;
    colorDiv.appendChild(para);
    cardDiv.appendChild(colorDiv);
    document.getElementById("main-div").appendChild(cardDiv);
  });
}

let changeColor = () => {
  let wordBtn = document.getElementById("starting-btn");
  wordBtn.style.backgroundColor = "blueviolet";
  wordBtn.style.fontWeight = "600";
  let searchBtn = document.getElementById("searchBtn");
  searchBtn.style.backgroundColor = "rgb(116, 53, 175)";
  searchBtn.style.fontWeight = "";
  let atoz = document.getElementById("az");
  atoz.style.backgroundColor = "rgb(116, 53, 175)";
};

let changeColo = () => {
  let searchBtn = document.getElementById("searchBtn");
  searchBtn.style.backgroundColor = "blueviolet";
  searchBtn.style.fontWeight = "600";
  let wordBtn = document.getElementById("starting-btn");
  wordBtn.style.backgroundColor = "rgb(116, 53, 175)";
  wordBtn.style.fontWeight = "";
  let atoz = document.getElementById("az");
  atoz.style.backgroundColor = "rgb(116, 53, 175)";
};

let changearrow = () => {
  let atoz = document.getElementById("az");
  atoz.style.backgroundColor = "blueviolet";
  if (atoz.children[0].className == "fa-solid fa-arrow-down-a-z") {
    document.getElementById("main-div").innerHTML = "";
    countries.reverse().map((ele) => {
      let cardDiv = document.createElement("div");
      let colorDiv = document.createElement("div");
      let para = document.createElement("p");
      cardDiv.classList.add("card");
      colorDiv.classList.add("color");
      para.innerHTML = ele;
      colorDiv.appendChild(para);
      cardDiv.appendChild(colorDiv);
      document.getElementById("main-div").appendChild(cardDiv);
    });
    atoz.innerHTML = `<i class="fa-solid fa-arrow-up-a-z"></i>`;
  } else if (atoz.children[0].className == "fa-solid fa-arrow-up-a-z") {
    atoz.innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
    document.getElementById("main-div").innerHTML = "";
    countries.reverse().map((ele) => {
      let cardDiv = document.createElement("div");
      let colorDiv = document.createElement("div");
      let para = document.createElement("p");
      cardDiv.classList.add("card");
      colorDiv.classList.add("color");
      para.innerHTML = ele;
      colorDiv.appendChild(para);
      cardDiv.appendChild(colorDiv);
      document.getElementById("main-div").appendChild(cardDiv);
    });
  }
  let wordBtn = document.getElementById("starting-btn");
  wordBtn.style.backgroundColor = "rgb(116, 53, 175)";
  wordBtn.style.fontWeight = "";
  let searchBtn = document.getElementById("searchBtn");
  searchBtn.style.backgroundColor = "rgb(116, 53, 175)";
  searchBtn.style.fontWeight = "";
};
