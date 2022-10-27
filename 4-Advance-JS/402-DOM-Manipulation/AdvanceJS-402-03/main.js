document.getElementById("addItem").addEventListener("click", getData);

function getData() {
  let inputref = document.getElementById("things");
  let unOrList = document.getElementById("item");
  unOrList.innerHTML += ` <li>
  ${inputref.value}
  <button onclick="deleteData(this)">Delete</button>
</li>`;
  inputref.value = "";
  inputref.focus();
}

function deleteData(e) {
  e.parentElement.remove();
}
