import { DOMAINES } from './data2.js'; 

function creerCarteDomaine(domaine) {
  const carte = document.createElement("a");
  carte.href = `/src/pages/filieres.html?domaine=${domaine.id}`;
  carte.className = "card-domaine";
  carte.style.setProperty("--couleur-domaine", `var(${domaine.couleurVar})`);
  const nbFilieres = domaine.filieres.length;
  carte.innerHTML = `
    <div class="icon-domaine">
      <i class="${domaine.icone}"></i>
    </div>
    <h3>${domaine.nom}</h3>
    <p>${nbFilieres} filière${nbFilieres > 1 ? "s" : ""}</p>
    <span class="arrow">&rarr;</span>
  `;
  return carte;
}

function afficherDomaines(limit = null) {
  const grille = document.querySelector(".grid-domaines");
  if (!grille) return;
  grille.innerHTML = "";
  const domainesAAfficher = limit ? DOMAINES.slice(0, limit) : DOMAINES;
  domainesAAfficher.forEach((domaine) => {
    grille.appendChild(creerCarteDomaine(domaine));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const grille = document.querySelector(".grid-domaines");
  if (!grille) return;
  const limit = grille.dataset.limit ? parseInt(grille.dataset.limit, 10) : null;
  afficherDomaines(limit);
});