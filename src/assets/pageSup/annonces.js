/**
 * annonces.js (version Supabase)
 * -----------------------------------------------------------
 * Génère les cartes de concours et de bourses à partir de la
 * table `annonces` dans Supabase.
 * -----------------------------------------------------------
 */

import { supabase } from '../../supabaseClient.js'; // adapte le chemin selon l'emplacement réel

function creerCarteAnnonce(annonce) {
  const carte = document.createElement("div");
  carte.className = "card-annonce";
  carte.style.setProperty("--couleur-annonce", `var(${annonce.couleur_var})`);

  const iconeAction =
    annonce.lien_type === "pdf" ? "fa-solid fa-file-arrow-down" : "fa-solid fa-arrow-up-right-from-square";

  const dateAffichee = annonce.date_limite
    ? new Date(annonce.date_limite).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })
    : "";

  carte.innerHTML = `
    <div class="card-annonce-icone">
      <i class="${annonce.icone}"></i>
    </div>
    <div class="card-annonce-contenu">
      <span class="card-annonce-label">${annonce.libelle_categorie}</span>
      <h3>${annonce.titre}</h3>
      <p>${annonce.description}</p>
    </div>
    <div class="card-annonce-meta">
      <div class="label-date"><i class="fa-regular fa-calendar"></i> Date limite</div>
      <div class="valeur-date"><i class="fa-regular fa-calendar-check"></i> ${dateAffichee}</div>
      <div class="valeur-lieu"><i class="fa-solid fa-location-dot"></i> ${annonce.lieu}</div>
    </div>
    <a class="card-annonce-action" href="${annonce.lien_url}" target="_blank" rel="noopener noreferrer" title="Plus d'informations">
      <i class="${iconeAction}"></i>
    </a>
  `;

  return carte;
}

async function afficherAnnonces() {
  const listeConcours = document.querySelector("#liste-concours");
  const listeBourses = document.querySelector("#liste-bourses");
  if (!listeConcours || !listeBourses) return;

  const { data: annonces, error } = await supabase
    .from("annonces")
    .select("*")
    .order("date_limite", { ascending: true });

  if (error) {
    console.error("Erreur Supabase (annonces) :", error);
    return;
  }

  listeConcours.innerHTML = "";
  listeBourses.innerHTML = "";

  annonces.filter((a) => a.categorie === "concours").forEach((annonce) => {
    listeConcours.appendChild(creerCarteAnnonce(annonce));
  });

  annonces.filter((a) => a.categorie === "bourse").forEach((annonce) => {
    listeBourses.appendChild(creerCarteAnnonce(annonce));
  });
}

document.addEventListener("DOMContentLoaded", afficherAnnonces);