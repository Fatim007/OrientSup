/**
 * annonces.js
 * -----------------------------------------------------------
 * Génère les cartes de concours et de bourses à partir de
 * ANNONCES (voir data-annonces.js).
 *
 * Le bouton d'action change selon annonce.lien.type :
 *   - "pdf"  -> icône fichier, ouvre le PDF dans un nouvel onglet
 *   - "site" -> icône flèche/lien externe, ouvre le site dans un nouvel onglet
 * -----------------------------------------------------------
 */

function creerCarteAnnonce(annonce) {
  const carte = document.createElement("div");
  carte.className = "card-annonce";
  carte.style.setProperty("--couleur-annonce", `var(${annonce.couleurVar})`);

  const iconeAction =
    annonce.lien.type === "pdf" ? "fa-solid fa-file-arrow-down" : "fa-solid fa-arrow-up-right-from-square";

  carte.innerHTML = `
    <div class="card-annonce-icone">
      <i class="${annonce.icone}"></i>
    </div>
    <div class="card-annonce-contenu">
      <span class="card-annonce-label">${annonce.libelleCategorie}</span>
      <h3>${annonce.titre}</h3>
      <p>${annonce.description}</p>
    </div>
    <div class="card-annonce-meta">
      <div class="label-date"><i class="fa-regular fa-calendar"></i> Date limite</div>
      <div class="valeur-date"><i class="fa-regular fa-calendar-check"></i> ${annonce.dateLimite}</div>
      <div class="valeur-lieu"><i class="fa-solid fa-location-dot"></i> ${annonce.lieu}</div>
    </div>
    <a class="card-annonce-action" href="${annonce.lien.url}" target="_blank" rel="noopener noreferrer" title="Plus d'informations">
      <i class="${iconeAction}"></i>
    </a>
  `;

  return carte;
}

function afficherAnnonces() {
  const listeConcours = document.querySelector("#liste-concours");
  const listeBourses = document.querySelector("#liste-bourses");
  if (!listeConcours || !listeBourses) return;

  listeConcours.innerHTML = "";
  listeBourses.innerHTML = "";

  ANNONCES.filter((a) => a.categorie === "concours").forEach((annonce) => {
    listeConcours.appendChild(creerCarteAnnonce(annonce));
  });

  ANNONCES.filter((a) => a.categorie === "bourse").forEach((annonce) => {
    listeBourses.appendChild(creerCarteAnnonce(annonce));
  });
}

document.addEventListener("DOMContentLoaded", afficherAnnonces);