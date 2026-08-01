/**
 * auth-header.js
 * -----------------------------------------------------------
 * Script réutilisable à importer sur TOUTES les pages du site.
 *
 *  - Non connecté  -> garde "Se connecter" (lien vers connexion.html)
 *  - Connecté      -> devient "Se déconnecter" (déconnexion au clic)
 *  - Connecté + admin -> ajoute un lien "Admin" dans le menu de navigation
 *
 * Écrit de façon défensive (try/catch partout) pour ne jamais
 * casser l'affichage de la page même en cas d'erreur réseau
 * ou de souci Supabase — important en contexte de démonstration.
 * -----------------------------------------------------------
 */

import { supabase } from '../src/supabaseClient.js'; // adapte le chemin selon l'emplacement réel de ce fichier

async function mettreAJourHeader() {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    const bouton = document.querySelector(".btn-login");

    if (!session) {
      // Utilisateur non connecté : on ne touche à rien,
      // le bouton garde son comportement HTML par défaut.
      return;
    }

    // ---------- Utilisateur connecté : adapter le bouton ----------
    if (bouton) {
      bouton.textContent = "Se déconnecter";
      bouton.removeAttribute("href");
      bouton.style.cursor = "pointer";

      // Évite d'accumuler plusieurs écouteurs si la fonction est rappelée
      if (!bouton.dataset.listenerAjoute) {
        bouton.addEventListener("click", async (e) => {
          e.preventDefault();
          try {
            await supabase.auth.signOut();
          } catch (err) {
            console.error("Erreur lors de la déconnexion :", err);
          }
          window.location.href = "/index.html"; l
        });
        bouton.dataset.listenerAjoute = "true";
      }
    }

    // ---------- Vérifier si admin, pour afficher le lien "Admin" ----------
    const { data: profil, error } = await supabase
      .from("profils")
      .select("role")
      .eq("id", session.user.id)
      .single();

    if (error) {
      console.error("Erreur récupération du profil :", error);
      return; // on n'affiche pas le lien admin en cas de doute, sans casser le reste
    }

    if (profil?.role === "admin") {
      const nav = document.querySelector(".nav-links");
      if (nav && !document.querySelector(".lien-admin-header")) {
        const lienAdmin = document.createElement("li");
        lienAdmin.innerHTML = `<a href="/src/pages/admin.html" class="lien-admin-header">Admin</a>`;
        nav.appendChild(lienAdmin);
      }
    }
  } catch (err) {
    // Filet de sécurité global : une erreur ici ne doit jamais
    // empêcher le reste de la page de fonctionner normalement.
    console.error("Erreur auth-header.js :", err);
  }
}

document.addEventListener("DOMContentLoaded", mettreAJourHeader);

// Réagit aux changements d'état (connexion/déconnexion) sans recharger la page
supabase.auth.onAuthStateChange(() => {
  mettreAJourHeader();
});