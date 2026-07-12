/**
 * inscription.js
 * -----------------------------------------------------------
 * Gère :
 *  - l'affichage/masquage du mot de passe
 *  - la validation basique du formulaire
 *  - la soumission (temporaire : pas de backend pour l'instant,
 *    donc on se contente de logger les données et d'afficher
 *    un message de confirmation)
 *
 * Quand le backend sera prêt, remplace la section marquée
 * "TODO BACKEND" par un vrai appel API (fetch vers ton serveur).
 * -----------------------------------------------------------
 */

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

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const donnees = {
      nomComplet: form.nomComplet.value.trim(),
      email: form.email.value.trim(),
      motDePasse: form.motDePasse.value,
      notifEmail: form.notifEmail.checked,
      notifPlateforme: form.notifPlateforme.checked,
    };

    if (!donnees.nomComplet || !donnees.email || donnees.motDePasse.length < 8) {
      alert("Merci de remplir correctement tous les champs obligatoires (mot de passe : 8 caractères minimum).");
      return;
    }

    if (!form.accepteConditions.checked) {
      alert("Merci d'accepter les conditions d'utilisation pour continuer.");
      return;
    }

    // ---------- TODO BACKEND ----------
    // Remplace ce bloc par un vrai appel API une fois le backend prêt, par ex :
    //
    // fetch("/api/inscription", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(donnees),
    // })
    //   .then((res) => res.json())
    //   .then((reponse) => { /* rediriger vers la page de connexion, etc. */ })
    //   .catch((err) => { /* afficher une erreur */ });
    //
    console.log("Données du formulaire (à envoyer au backend plus tard) :", donnees);
    alert("Compte créé (simulation) ! Le vrai enregistrement sera branché une fois le backend en place.");
    // -----------------------------------
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAfficherMotDePasse();
  initFormulaireInscription();
});