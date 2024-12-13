//---------------Bouton jour/nuit--------------

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//-------------------carousel-------------------
let idx = 0;
let interval = 3000; // Intervalle en millisecondes (3 secondes)

showSlide(idx); // Afficher la première image
autoChangeSlide(); // Démarrer le changement automatique

function changeSlide(n) {
  showSlide((idx += n));
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  let slideNow = n;

  // Gérer les cas où l'indice dépasse les limites
  if (n >= slides.length) {
    slideNow = 0; // Retour à la première slide
  } else if (n < 0) {
    slideNow = slides.length - 1; // Retour à la dernière slide
  }

  // Supprimer la classe "active" de toutes les slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Ajouter la classe "active" à la slide actuelle
  slides[slideNow].classList.add("active");

  // Mettre à jour l'indice
  idx = slideNow;
}

function autoChangeSlide() {
  setInterval(() => {
    changeSlide(1);
  }, interval);
}

// ----------------Recherche de films----------------------------------

const btnFilm = document.getElementById("search");
function getValue() {
  document.getElementById("films").innerHTML = "";

  const chercherFilm = document.getElementById("searchBar").value;

  let APIKEY = "8f305c75";
  let URL = "https://www.omdbapi.com/?s=" + chercherFilm + "&apikey=" + APIKEY;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let movie = data.Search;
      for (let data of movie) {
        let HTML = `
      <h1 class="titres">${data.Title}</h1>
      <img src="${data.Poster}" alt="Poster of
      ${data.Title}" class="affiche0">
      <p class="anneejs"> ${data.Year}</p>
      <a href="./film.html?id=${data.imdbID}" class="detail">Voir détail</a>
      `;
        document.getElementById("films").innerHTML += HTML;
        window.scrollTo({
          top: 1000,
          left: 100,
          // top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
}
