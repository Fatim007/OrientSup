/**
 * inscription.js (version Supabase Auth)
 * -----------------------------------------------------------
 * Gère l'affichage/masquage du mot de passe et la vraie
 * inscription via Supabase Auth.
 *
 * Le trigger SQL "on_auth_user_created" crée automatiquement
 * une ligne dans `profils` dès l'inscription (avec role='etudiant'
 * par défaut). On met ensuite à jour les préférences de
 * notifications choisies dans le formulaire.
 * -----------------------------------------------------------
 */

import { supabase } from '../../supabaseClient'; // adapte le chemin selon l'emplacement réel

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

function initFormulaireInscription() {
  const form = document.querySelector("#form-inscription");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nomComplet = form.nomComplet.value.trim();
    const email = form.email.value.trim();
    const motDePasse = form.motDePasse.value;
    const notifEmail = form.notifEmail.checked;
    const notifPlateforme = form.notifPlateforme.checked;

    if (!nomComplet || !email || motDePasse.length < 8) {
      alert("Merci de remplir correctement tous les champs obligatoires (mot de passe : 8 caractères minimum).");
      return;
    }

    if (!form.accepteConditions.checked) {
      alert("Merci d'accepter les conditions d'utilisation pour continuer.");
      return;
    }

    const boutonSubmit = form.querySelector(".btn-creer-compte");
    boutonSubmit.disabled = true;
    boutonSubmit.textContent = "Création en cours...";

    // 1. Créer le compte via Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password: motDePasse,
      options: {
        data: { nom_complet: nomComplet }, // récupéré par le trigger SQL pour remplir profils.nom_complet
      },
    });

    if (error) {
      alert("Erreur lors de la création du compte : " + error.message);
      boutonSubmit.disabled = false;
      boutonSubmit.innerHTML = '<i class="fa-solid fa-user-plus"></i> Créer mon compte';
      return;
    }

    // 2. Mettre à jour les préférences de notifications choisies
    // (le trigger crée déjà la ligne profils avec les valeurs par défaut à true,
    // ici on applique les vrais choix cochés dans le formulaire)
    if (data.user) {
      const { error: erreurProfil } = await supabase
        .from("profils")
        .update({ notif_email: notifEmail, notif_plateforme: notifPlateforme })
        .eq("id", data.user.id);

      if (erreurProfil) {
        console.error("Erreur mise à jour des préférences :", erreurProfil);
      }
    }

    // 3. Message de confirmation
    if (data.session) {
      // Session immédiate : confirmation email désactivée dans Supabase Auth
      alert("Compte créé avec succès ! Vous êtes maintenant connecté(e).");
      window.location.href = "index.html"; // adapte vers la page d'accueil ou tableau de bord
    } else {
      // Confirmation email activée : l'utilisateur doit cliquer sur le lien reçu
      alert("Compte créé ! Vérifiez votre boîte mail pour confirmer votre adresse avant de vous connecter.");
      window.location.href = "connexion.html";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAfficherMotDePasse();
  initFormulaireInscription();
});