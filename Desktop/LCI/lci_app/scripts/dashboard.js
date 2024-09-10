// code horloge
function updateClock() {
  const now = new Date();

  // Obtenir la date au format : Jour, Mois Jour, Année
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  // Obtenir l'heure au format : HH:MM:SS
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Mettre à jour l'élément HTML
  document.getElementById("date").textContent = dateString;
  document.getElementById("time").textContent = timeString;
}

// Mettre à jour l'horloge chaque seconde
setInterval(updateClock, 1000);

// Appel initial pour afficher l'heure immédiatement
updateClock();

// code horloge fin
