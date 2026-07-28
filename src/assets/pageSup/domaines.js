/**
 * domaines.js (version Supabase) — pour domaines.html uniquement
 * -----------------------------------------------------------
 */

import { supabase } from '../../supabaseClient.js'; // adapte le chemin selon l'emplacement réel

function creerCarteDomaine(domaine, nbFilieres) {
  const carte = document.createElement("a");
  carte.href = `/src/pages/filieres.html?domaine=${domaine.id}`;
  carte.className = "card-domaine";

  // Compatibilité double format :
  // - anciens domaines : couleur_var contient un nom de variable CSS (ex: "--informatique")
  // - nouveaux domaines (ajoutés via le backoffice) : couleur_var contient un code hex direct (ex: "#2563EB")
  const couleur = domaine.couleur_var.startsWith("#")
    ? domaine.couleur_var
    : `var(${domaine.couleur_var})`;
  carte.style.setProperty("--couleur-domaine", couleur);

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

async function afficherDomaines(limit = null) {
  const grille = document.querySelector(".grid-domaines");
  if (!grille) return;

  // 1. Récupérer les domaines
  let requeteDomaines = supabase.from("domaines").select("*");
  if (limit) requeteDomaines = requeteDomaines.limit(limit);
  const { data: domaines, error: erreurDomaines } = await requeteDomaines;

  if (erreurDomaines) {
    console.error("Erreur Supabase (domaines) :", erreurDomaines);
    return;
  }

  // 2. Récupérer uniquement les colonnes nécessaires au comptage des filières
  const { data: filieres, error: erreurFilieres } = await supabase
    .from("filieres")
    .select("id, domaine_id");

  if (erreurFilieres) {
    console.error("Erreur Supabase (filieres) :", erreurFilieres);
  }

  // 3. Compter le nombre de filières par domaine_id
  const compteurParDomaine = {};
  (filieres ?? []).forEach((f) => {
    compteurParDomaine[f.domaine_id] = (compteurParDomaine[f.domaine_id] ?? 0) + 1;
  });

  // 4. Afficher les cartes avec le bon compteur
  grille.innerHTML = "";
  domaines.forEach((domaine) => {
    const nbFilieres = compteurParDomaine[domaine.id] ?? 0;
    grille.appendChild(creerCarteDomaine(domaine, nbFilieres));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const grille = document.querySelector(".grid-domaines");
  if (!grille) return;
  const limit = grille.dataset.limit ? parseInt(grille.dataset.limit, 10) : null;
  afficherDomaines(limit);
});