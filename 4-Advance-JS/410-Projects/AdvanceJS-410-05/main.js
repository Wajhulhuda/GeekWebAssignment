window.onload = (_) => displayQuote();
function displayQuote() {
  fetch("https://type.fit/api/quotes")
    .then((result) => result.json())
    .then(myQuotes);
}
function myQuotes(data) {
  let rand = Math.floor(Math.random() * 1643);
  document.getElementById("div").innerHTML = `<div class="quoteDiv">
      <h1 class="quote">
        <img src="../image/first-removebg-preview.png" />${data[rand].text}
        <img src="../image/second.png" />
      </h1>
    </div>
    <p class="author">~ ${data[rand].author}</p>
    <hr />`;
  document.getElementById("b").addEventListener("click", displayQuote);
}
