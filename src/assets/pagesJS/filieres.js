/**
 * filieres.js
 * -----------------------------------------------------------
 * Cette page a DEUX affichages possibles selon les paramètres
 * présents dans l'URL :
 *
 *   filieres.html?domaine=sciences-tech
 *   -> affiche la liste des filières du domaine (.vue-liste)
 *
 *   filieres.html?domaine=sciences-tech&filiere=genie-logiciel
 *   -> affiche le détail de la filière (.vue-detail)
 *
 * Tout est généré à partir de DOMAINES (voir data.js).
 * -----------------------------------------------------------
 */

function lireParametresURL() {
  const params = new URLSearchParams(window.location.search);
  return {
    domaineId: params.get("domaine"),
    filiereId: params.get("filiere"),
  };
}

function appliquerCouleurDomaine(domaine) {
  // Toute la page utilise var(--couleur-domaine) dans le CSS,
  // on la relie ici à la couleur réelle du domaine.
  document.documentElement.style.setProperty(
    "--couleur-domaine",
    `var(${domaine.couleurVar})`
  );
}

/* =========================================================
   VUE 1 : Liste des filières d'un domaine
   ========================================================= */
function afficherVueListe(domaine) {
  document.querySelector(".vue-liste").classList.add("actif");

  // En-tête du domaine
  document.querySelector(".vue-liste .fil-ariane").innerHTML =
    `<a href="domaines.html">Domaines</a> / ${domaine.nom}`;
  document.querySelector(".vue-liste .entete-domaine h1").textContent = domaine.nom;
  document.querySelector(".vue-liste .entete-domaine p").textContent = domaine.description;

  // Cartes filières
  const grille = document.querySelector(".grid-filieres");
  grille.innerHTML = "";

  domaine.filieres.forEach((filiere) => {
    const carte = document.createElement("a");
    carte.className = "card-filiere";
    carte.href = `filieres.html?domaine=${domaine.id}&filiere=${filiere.id}`;
    carte.innerHTML = `
      <h3>${filiere.nom}</h3>
      <p>${filiere.resume}</p>
      <span class="arrow">&rarr;</span>
    `;
    grille.appendChild(carte);
  });

  // Établissements d'excellence du domaine
  const grilleEtabs = document.querySelector(".grid-etablissements");
  grilleEtabs.innerHTML = "";

  domaine.etablissementsExcellence.forEach((etab) => {
    const carte = document.createElement("div");
    carte.className = "card-etablissement";
    carte.innerHTML = `
      <div class="nom">${etab.nom}</div>
      <div class="ville">${etab.ville}</div>
      <div class="note"><i class="fa-solid fa-star"></i> ${etab.note}/5</div>
    `;
    grilleEtabs.appendChild(carte);
  });
}

/* =========================================================
   VUE 2 : Détail d'une filière
   ========================================================= */
function afficherVueDetail(domaine, filiere) {
  document.querySelector(".vue-detail").classList.add("actif");

  document.querySelector(".vue-detail .fil-ariane").innerHTML =
    `<a href="domaines.html">Domaines</a> / <a href="filieres.html?domaine=${domaine.id}">${domaine.nom}</a> / ${filiere.nom}`;

  document.querySelector(".vue-detail .entete-filiere h1").textContent = filiere.nom;
  document.querySelector(".vue-detail .entete-filiere .resume").textContent = filiere.resume;
  document.querySelector(".vue-detail .meta-duree").textContent = filiere.duree;
  document.querySelector(".vue-detail .meta-niveau").textContent = filiere.niveau;

  document.querySelector(".vue-detail .apercu-texte").textContent = filiere.apercu;
  document.querySelector(".vue-detail .nom-filiere-cta").textContent = filiere.nom;

  remplirListe(".liste-debouches", filiere.debouches);
  remplirListe(".liste-competences", filiere.competences);
  remplirListe(".liste-conditions", filiere.admission.conditions);
  remplirListe(".liste-filieres-bac", filiere.admission.filieresBac);

  // Établissements qui proposent cette filière
  const grilleEtabs = document.querySelector(".vue-detail .grid-etablissements");
  grilleEtabs.innerHTML = "";
  filiere.etablissements.forEach((etab) => {
    const carte = document.createElement("div");
    carte.className = "card-etablissement";
    carte.innerHTML = `
      <div class="nom">${etab.nom}</div>
      <div class="ville">${etab.ville}</div>
      <div class="note"><i class="fa-solid fa-star"></i> ${etab.note}/5</div>
    `;
    grilleEtabs.appendChild(carte);
  });

  // Lien "Découvrir les écoles" avec le bon domaine pré-rempli
  const lienEcoles = document.querySelector(".lien-ecoles");
  if (lienEcoles) lienEcoles.href = `ecoles.html?domaine=${domaine.id}&filiere=${filiere.id}`;
}

function remplirListe(selecteur, elements) {
  const liste = document.querySelector(selecteur);
  if (!liste) return;
  liste.innerHTML = elements.map((item) => `<li>${item}</li>`).join("");
}

/* =========================================================
   Point d'entrée : décide quelle vue afficher
   ========================================================= */
function initialiserPage() {
  const { domaineId, filiereId } = lireParametresURL();
  const domaine = getDomaineById(domaineId);

  if (!domaine) {
    // Pas de domaine valide dans l'URL -> on renvoie vers la liste des domaines
    window.location.href = "domaines.html";
    return;
  }

  appliquerCouleurDomaine(domaine);

  if (filiereId) {
    const filiere = getFiliereById(domaineId, filiereId);
    if (!filiere) {
      // Filière introuvable -> on revient à la liste du domaine
      window.location.href = `filieres.html?domaine=${domaineId}`;
      return;
    }
    afficherVueDetail(domaine, filiere);
  } else {
    afficherVueListe(domaine);
  }
}

document.addEventListener("DOMContentLoaded", initialiserPage);