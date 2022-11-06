const searchuser = (e) => {
  e.preventDefault();
  var search = document.getElementById("search").value;
  //    document.getElementById('result')=
  fetch("https://api.github.com/search/users?q=" + search + "&per_page=100")
    .then(
      (result) => result.json(),
      function (err) {
        console.log(err);
        document.getElementById("erro").innerHTML = err;
      }
    )
    .then(function (data) {
      console.log(data);
      document.getElementById("result").innerHTML = "";
      data.items.forEach((element) => {
        document.getElementById("result").innerHTML += `<div class="items">
        <div class="img">
          <img
            src=${element.avatar_url}
            alt="No user found"
          />
        </div>
        <div class="name">
          <a href="https://github.com/${search}" target="_blank">${element.login}</a>
          <a href="https://github.com/${search}" target="_blank" class="profile">View Profile</a>
        </div>
      </div>`;
      });
    });
};

function romoveEverything() {
  document.getElementById("result").innerHTML = "";
}

let form = document.getElementById("myForm");
form.addEventListener("submit", searchuser);
