function myContent(e) {
  e.preventDefault();
  let serch = document.getElementById("serc").value;
  fetch(
    `https://www.dictionaryapi.com/api/v3/references/learners/json/${serch}?key=f3314d5b-a052-4e93-be4b-b6c356e8a9d8`
  )
    .then((result) => result.json())
    .then(mydata);
}

function mydata(data) {
  document.getElementById("meaning").innerHTML = data[0].shortdef[0];
  document.getElementById("source").src =
    data[0].hwi.prs[0].sound.audio + ".mp3";
  document.getElementById("source").src =
    data[0].hwi.prs[0].sound.audio + ".ogg";
  console.log(data[0]);
  console.log(data[0].hwi.prs[0].sound.audio);
}

document.getElementById("myform").addEventListener("submit", myContent);
