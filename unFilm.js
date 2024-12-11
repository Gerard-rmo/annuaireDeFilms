let myParam = new URLSearchParams(window.location.search);

let myId = myParam.get("id");
console.log(myId);

let APIKEY = "8f305c75";

let URL = "https://www.omdbapi.com/?i=" + myId + "&apikey=" + APIKEY;
function newMovie() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let myResult = data;
      let unFilm = `
      <h2 class="titrejs">${myResult.Title}</h2>
      <img src="${myResult.Poster}" alt="Poster of
      ${myResult.Title}" class="posterjs">
      <p class="anneejs">Année :${myResult.Year}</p>
      <p class="acteursjs">Acteurs : ${myResult.Actors}</p>
      <p class="textejs">${myResult.Plot}</p>

      `;
      document.getElementById("movie").innerHTML += unFilm;
    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
}
newMovie();
