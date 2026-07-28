/**
 * ecoles.js (version Supabase)
 * -----------------------------------------------------------
 * Génère les cartes d'établissements à partir de la table `ecoles`
 * dans Supabase, au lieu du fichier data-ecoles.js statique.
 *
 * Les boutons WhatsApp et Site web ne s'affichent que si la
 * donnée correspondante existe pour l'établissement.
 * -----------------------------------------------------------
 */

import { supabase } from '../../supabaseClient.js'; // adapte le chemin selon l'emplacement réel

function creerCardEcole(ecole) {
  const badgeClass = ecole.type === "public" ? "badge-public" : "badge-prive";
  const badgeLabel = ecole.type === "public" ? "Public" : "Privé";

  const boutonWhatsapp = ecole.whatsapp
    ? `<a href="https://wa.me/${ecole.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
         <i class="fa-brands fa-whatsapp"></i> WhatsApp
       </a>`
    : "";

  const boutonSiteWeb = ecole.site_web
    ? `<a href="${ecole.site_web}" target="_blank" rel="noopener noreferrer" class="btn-site">
         <i class="fa-solid fa-globe"></i> Site web
       </a>`
    : "";

  const actions = boutonWhatsapp || boutonSiteWeb
    ? `<div class="card-ecole-actions">${boutonWhatsapp}${boutonSiteWeb}</div>`
    : `<p class="aucun-contact">Contact non disponible pour le moment</p>`;

  return `
    <div class="card-ecole">
      <span class="badge ${badgeClass}">${badgeLabel}</span>
      <img src="${ecole.logo}" alt="${ecole.nom}" class="ecole-img">
      <div class="card-ecole-content">
        <h3>${ecole.nom}</h3>
        <p class="location">
          <i class="fa-solid fa-location-dot" style="color: rgb(44, 153, 236);"></i> ${ecole.localisation}
        </p>
        ${actions}
      </div>
    </div>
  `;
}

async function afficherEcoles() {
  const container = document.getElementById("grid-ecoles");
  if (!container) return;

  const { data: ecoles, error } = await supabase.from("ecoles").select("*");

  if (error) {
    console.error("Erreur Supabase (ecoles) :", error);
    return;
  }

  container.innerHTML = ecoles.map(creerCardEcole).join("");
}

document.addEventListener("DOMContentLoaded", afficherEcoles);