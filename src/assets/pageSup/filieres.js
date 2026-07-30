/**
 * filieres.js (version Supabase)
 * -----------------------------------------------------------
 * Deux affichages possibles selon les paramètres d'URL :
 *   filieres.html?domaine=xxx                -> liste des filières
 *   filieres.html?domaine=xxx&filiere=yyy     -> détail d'une filière
 * -----------------------------------------------------------
 */

import { supabase } from '../../supabaseClient.js'; // adapte le chemin selon l'emplacement réel

function lireParametresURL() {
  const params = new URLSearchParams(window.location.search);
  return {
    domaineId: params.get("domaine"),
    filiereId: params.get("filiere"),
  };
}

function appliquerCouleurDomaine(domaine) {
  const couleur = domaine.couleur_var.startsWith("#")
    ? domaine.couleur_var
    : `var(${domaine.couleur_var})`;
  document.documentElement.style.setProperty("--couleur-domaine", couleur);
}

function creerCarteEtablissement(etab) {
  return `
    <div class="card-etablissement">
      <div class="nom">${etab.nom}</div>
      <div class="ville">${etab.ville}</div>
      <div class="note"><i class="fa-solid fa-star"></i> ${etab.note}/5</div>
    </div>
  `;
}

function remplirListe(selecteur, elements) {
  const liste = document.querySelector(selecteur);
  if (!liste) return;
  liste.innerHTML = (elements ?? []).map((item) => `<li>${item}</li>`).join("");
}

/* =========================================================
   VUE 1 : Liste des filières d'un domaine
   ========================================================= */
async function afficherVueListe(domaine) {
  document.querySelector(".vue-liste").classList.add("actif");

  document.querySelector(".vue-liste .fil-ariane").innerHTML =
    `<a href="domaines.html">Domaines</a> / ${domaine.nom}`;
  document.querySelector(".vue-liste .entete-domaine h1").textContent = domaine.nom;
  document.querySelector(".vue-liste .entete-domaine p").textContent = domaine.description ?? "";

  // Récupère les filières de ce domaine
  const { data: filieres, error } = await supabase
    .from("filieres")
    .select("id, nom, resume")
    .eq("domaine_id", domaine.id);

  if (error) {
    console.error("Erreur Supabase (filieres) :", error);
    return;
  }

  const grille = document.querySelector(".grid-filieres");
  grille.innerHTML = "";
  (filieres ?? []).forEach((filiere) => {
    const carte = document.createElement("a");
    carte.className = "card-filiere";
    carte.href = `filieres.html?domaine=${domaine.id}&filiere=${filiere.id}`;
    carte.innerHTML = `
      <h3>${filiere.nom}</h3>
      <p>${filiere.resume ?? ""}</p>
      <span class="arrow">&rarr;</span>
    `;
    grille.appendChild(carte);
  });

  // Établissements d'excellence du domaine (optionnel, peut être vide/null)
  const grilleEtabs = document.querySelector(".grid-etablissements");
  const etabsExcellence = domaine.etablissements_excellence ?? [];
  grilleEtabs.innerHTML = etabsExcellence.map(creerCarteEtablissement).join("");
}

/* =========================================================
   VUE 2 : Détail d'une filière
   ========================================================= */
async function afficherVueDetail(domaine, filiereId) {
  const { data: filiere, error } = await supabase
    .from("filieres")
    .select("*")
    .eq("id", filiereId)
    .eq("domaine_id", domaine.id)
    .single();

  if (error || !filiere) {
    console.error("Erreur Supabase (filiere) :", error);
    window.location.href = `filieres.html?domaine=${domaine.id}`;
    return;
  }

  document.querySelector(".vue-detail").classList.add("actif");

  document.querySelector(".vue-detail .fil-ariane").innerHTML =
    `<a href="domaines.html">Domaines</a> / <a href="filieres.html?domaine=${domaine.id}">${domaine.nom}</a> / ${filiere.nom}`;

  document.querySelector(".vue-detail .entete-filiere h1").textContent = filiere.nom;
  document.querySelector(".vue-detail .entete-filiere .resume").textContent = filiere.resume ?? "";
  document.querySelector(".vue-detail .meta-duree").textContent = filiere.duree ?? "";
  document.querySelector(".vue-detail .meta-niveau").textContent = filiere.niveau ?? "";
  document.querySelector(".vue-detail .apercu-texte").textContent = filiere.apercu ?? "";
  document.querySelector(".vue-detail .nom-filiere-cta").textContent = filiere.nom;

  remplirListe(".liste-debouches", filiere.debouches);
  remplirListe(".liste-competences", filiere.competences);
  remplirListe(".liste-conditions", filiere.conditions_admission);
  remplirListe(".liste-filieres-bac", filiere.filieres_bac);

  const grilleEtabs = document.querySelector(".vue-detail .grid-etablissements");
  const etabs = filiere.etablissements ?? [];
  grilleEtabs.innerHTML = etabs.map(creerCarteEtablissement).join("");

  const lienEcoles = document.querySelector(".lien-ecoles");
  if (lienEcoles) lienEcoles.href = `ecoles.html?domaine=${domaine.id}&filiere=${filiere.id}`;
}

/* =========================================================
   Point d'entrée
   ========================================================= */
async function initialiserPage() {
  const { domaineId, filiereId } = lireParametresURL();

  if (!domaineId) {
    window.location.href = "domaines.html";
    return;
  }

  const { data: domaine, error } = await supabase
    .from("domaines")
    .select("*")
    .eq("id", domaineId)
    .single();

  if (error || !domaine) {
    console.error("Erreur Supabase (domaine) :", error);
    window.location.href = "domaines.html";
    return;
  }

  appliquerCouleurDomaine(domaine);

  if (filiereId) {
    afficherVueDetail(domaine, filiereId);
  } else {
    afficherVueListe(domaine);
  }
}

document.addEventListener("DOMContentLoaded", initialiserPage);