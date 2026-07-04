/**
 * domaines.js
 * -----------------------------------------------------------
 * Génère dynamiquement les 8 cartes de domaines à partir de
 * DOMAINES (voir data.js), sans dupliquer le HTML pour chaque
 * domaine.
 *
 * Au clic sur une carte, on redirige vers filieres.html en
 * passant l'id du domaine dans l'URL :
 *   filieres.html?domaine=sciences-tech
 * -----------------------------------------------------------
 */

function creerCarteDomaine(domaine) {
  // On crée le lien <a class="card-domaine">
  const carte = document.createElement("a");
  carte.href = `filieres.html?domaine=${domaine.id}`;
  carte.className = "card-domaine";

  // La couleur du domaine est appliquée en variable CSS inline,
  // le CSS (domaines.css) se charge du reste via var(--couleur-domaine)
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

function afficherDomaines() {
  const grille = document.querySelector(".grid-domaines");
  if (!grille) return;

  grille.innerHTML = ""; // on vide avant de générer

  DOMAINES.forEach((domaine) => {
    grille.appendChild(creerCarteDomaine(domaine));
  });
}

document.addEventListener("DOMContentLoaded", afficherDomaines);
