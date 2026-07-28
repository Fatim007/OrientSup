/**
 * connexion.js (Supabase Auth)
 * -----------------------------------------------------------
 */

import { supabase } from '../../supabaseClient.js'; // adapte le chemin selon l'emplacement réel

function initAfficherMotDePasse() {
  const btn = document.querySelector("#btn-afficher-mdp");
  const champ = document.querySelector("#mot-de-passe");
  if (!btn || !champ) return;

  btn.addEventListener("click", () => {
    const estMasque = champ.type === "password";
    champ.type = estMasque ? "text" : "password";
    btn.innerHTML = estMasque
      ? '<i class="fa-regular fa-eye-slash"></i>'
      : '<i class="fa-regular fa-eye"></i>';
  });
}

function initFormulaireConnexion() {
  const form = document.querySelector("#form-connexion");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const motDePasse = form.motDePasse.value;

    const boutonSubmit = form.querySelector(".btn-creer-compte");
    boutonSubmit.disabled = true;
    boutonSubmit.textContent = "Connexion en cours...";

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: motDePasse,
    });

    if (error) {
      alert("Erreur de connexion : " + error.message);
      boutonSubmit.disabled = false;
      boutonSubmit.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Se connecter';
      return;
    }

    // Connexion réussie
    window.location.href = "index.html"; // adapte vers la page d'accueil ou tableau de bord
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAfficherMotDePasse();
  initFormulaireConnexion();
});