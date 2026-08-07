import { supabase } from '../../supabaseClient.js'; // adapte le chemin selon l'emplacement réel

function creerCarteDomaine(domaine, nbFilieres) {
  const carte = document.createElement("a");
  carte.href = `/src/pages/filieres.html?domaine=${domaine.id}`;
  carte.className = "card-domaine";

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

  grille.innerHTML = `
    <div class="loader-conteneur">
      <div class="loader-spinner"></div>
      <p>Chargement des domaines...</p>
    </div>
  `;


  let requete = supabase.from("domaines").select("*, filieres(count)");
  if (limit) requete = requete.limit(limit);
  const { data: domaines, error } = await requete;

  if (error) {
    console.error("Erreur Supabase (domaines) :", error);
    return;
  }

  grille.innerHTML = "";
  domaines.forEach((domaine) => {
    const nbFilieres = domaine.filieres?.[0]?.count ?? 0;
    grille.appendChild(creerCarteDomaine(domaine, nbFilieres));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const grille = document.querySelector(".grid-domaines");
  if (!grille) return;
  const limit = grille.dataset.limit ? parseInt(grille.dataset.limit, 10) : null;
  afficherDomaines(limit);
});