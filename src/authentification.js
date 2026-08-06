
import { supabase } from '../src/supabaseClient.js'; // adapte le chemin selon l'emplacement réel de ce fichier

async function mettreAJourHeader() {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    const bouton = document.querySelector(".btn-login");

    if (!session) {
      return;
    }

    // ---------- Utilisateur connecté : adapter le bouton ----------
    if (bouton) {
      bouton.textContent = "Se déconnecter";
      bouton.removeAttribute("href");
      bouton.style.cursor = "pointer";


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

    const { data: profil, error } = await supabase
      .from("profils")
      .select("role")
      .eq("id", session.user.id)
      .single();

    if (error) {
      console.error("Erreur récupération du profil :", error);
      return; 
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
    console.error("Erreur auth-header.js :", err);
  }
}

document.addEventListener("DOMContentLoaded", mettreAJourHeader);

// Réagit aux changements d'état (connexion/déconnexion) sans recharger la page
supabase.auth.onAuthStateChange(() => {
  mettreAJourHeader();
});