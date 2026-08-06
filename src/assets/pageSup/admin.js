
import { supabase } from '../../supabaseClient.js'; 

// Protection d'accès1
async function verifierAcces() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    alert("Vous devez être connecté pour accéder à cette page.");
    window.location.href = "/src/pages/connexion.html";
    return false;
  }

  const { data: profil, error } = await supabase
    .from("profils")
    .select("role")
    .eq("id", session.user.id)
    .single();

  if (error || !profil || profil.role !== "admin") {
    alert("Accès réservé aux administrateurs.");
    window.location.href = "/index.html";
    return false;
  }

  return true;
}

// Gestion des onglets
function initOnglets() {
  const boutons = document.querySelectorAll(".onglet-btn");
  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".onglet-btn").forEach((b) => b.classList.remove("actif"));
      document.querySelectorAll(".section-onglet").forEach((s) => s.classList.remove("actif"));
      btn.classList.add("actif");
      document.getElementById(btn.dataset.cible).classList.add("actif");
    });
  });
}

function texteVersTableau(texte) {
  return texte.split(",").map((s) => s.trim()).filter(Boolean);
}

// Annonces
async function afficherListeAnnonces() {
  const container = document.querySelector("#liste-annonces-admin");
  if (!container) return;

  const { data, error } = await supabase.from("annonces").select("*").order("date_limite", { ascending: true });
  if (error) { console.error(error); return; }

  container.innerHTML = data.map((a) => `
    <div class="ligne-annonce-admin">
      <div class="infos"><strong>${a.titre}</strong><small>${a.categorie} — limite : ${a.date_limite}</small></div>
      <button class="btn-supprimer" data-table="annonces" data-id="${a.id}"><i class="fa-solid fa-trash"></i> Supprimer</button>
    </div>
  `).join("");
}

function initFormulaireAnnonce() {
  const form = document.querySelector("#form-annonce");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nouvelleAnnonce = {
      id: form.id.value.trim(),
      categorie: form.categorie.value,
      libelle_categorie: form.categorie.value === "bourse" ? "Bourse d'études" : "Concours d'entrée",
      titre: form.titre.value.trim(),
      description: form.description.value.trim(),
      date_limite: form.date_limite.value,
      lieu: form.lieu.value.trim(),
      couleur_var: form.categorie.value === "bourse" ? "--bourse-bleu" : "--concours-bleu",
      icone: form.categorie.value === "bourse" ? "fa-solid fa-earth-africa" : "fa-solid fa-building-columns",
      lien_type: form.lien_type.value,
      lien_url: form.lien_url.value.trim(),
    };
    const { error } = await supabase.from("annonces").insert(nouvelleAnnonce);
    if (error) { alert("Erreur : " + error.message); return; }
    form.reset();
    afficherListeAnnonces();
  });
}

// écoles
async function afficherListeEcoles() {
  const container = document.querySelector("#liste-ecoles-admin");
  if (!container) return;

  const { data, error } = await supabase.from("ecoles").select("*").order("nom");
  if (error) { console.error(error); return; }

  container.innerHTML = data.map((e) => `
    <div class="ligne-annonce-admin">
      <div class="infos"><strong>${e.nom}</strong><small>${e.type} — ${e.localisation}</small></div>
      <button class="btn-supprimer" data-table="ecoles" data-id="${e.id}"><i class="fa-solid fa-trash"></i> Supprimer</button>
    </div>
  `).join("");
}

function initFormulaireEcole() {
  const form = document.querySelector("#form-ecole");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nouvelleEcole = {
      id: form.id.value.trim(),
      nom: form.nom.value.trim(),
      logo: form.logo.value.trim() || null,
      localisation: form.localisation.value.trim(),
      type: form.type.value,
      whatsapp: form.whatsapp.value.trim() || null,
      site_web: form.site_web.value.trim() || null,
    };
    const { error } = await supabase.from("ecoles").insert(nouvelleEcole);
    if (error) { alert("Erreur : " + error.message); return; }
    form.reset();
    afficherListeEcoles();
  });
}

// domaines
async function afficherListeDomaines() {
  const container = document.querySelector("#liste-domaines-admin");
  if (!container) return;

  const { data, error } = await supabase.from("domaines").select("*").order("nom");
  if (error) { console.error(error); return; }

  container.innerHTML = data.map((d) => `
    <div class="ligne-annonce-admin">
      <div class="infos"><strong>${d.nom}</strong><small>${d.id}</small></div>
      <button class="btn-supprimer" data-table="domaines" data-id="${d.id}"><i class="fa-solid fa-trash"></i> Supprimer</button>
    </div>
  `).join("");

  const selectDomaine = document.querySelector("#f-domaine");
  if (selectDomaine) {
    selectDomaine.innerHTML = data.map((d) => `<option value="${d.id}">${d.nom}</option>`).join("");
  }
}

function initFormulaireDomaine() {
  const form = document.querySelector("#form-domaine");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let etablissementsExcellence = null;
    const texteEtabExc = form.etablissements_excellence.value.trim();
    if (texteEtabExc) {
      try {
        etablissementsExcellence = JSON.parse(texteEtabExc);
      } catch (err) {
        alert("Le champ 'Établissements d'excellence' doit être un JSON valide, ou laissé vide. Exemple : [{\"nom\": \"Ecole X\", \"ville\": \"Libreville\", \"note\": 4.5}]");
        return;
      }
    }

    const nouveauDomaine = {
      id: form.id.value.trim(),
      nom: form.nom.value.trim(),
      description: form.description.value.trim(),
      icone: form.icone.value.trim(),
      couleur_var: form.couleur_var.value.trim(),
      etablissements_excellence: etablissementsExcellence,
    };
    const { error } = await supabase.from("domaines").insert(nouveauDomaine);
    if (error) { alert("Erreur : " + error.message); return; }
    form.reset();
    afficherListeDomaines();
  });
}

// Filières
async function afficherListeFilieres() {
  const container = document.querySelector("#liste-filieres-admin");
  if (!container) return;

  const { data, error } = await supabase.from("filieres").select("id, nom, domaine_id").order("nom");
  if (error) { console.error(error); return; }

  container.innerHTML = data.map((f) => `
    <div class="ligne-annonce-admin">
      <div class="infos"><strong>${f.nom}</strong><small>domaine : ${f.domaine_id}</small></div>
      <button class="btn-supprimer" data-table="filieres" data-id="${f.id}"><i class="fa-solid fa-trash"></i> Supprimer</button>
    </div>
  `).join("");
}

function initFormulaireFiliere() {
  const form = document.querySelector("#form-filiere");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let etablissements = null;
    const texteEtab = form.etablissements.value.trim();
    if (texteEtab) {
      try {
        etablissements = JSON.parse(texteEtab);
      } catch (err) {
        alert("Le champ 'Établissements' doit être un JSON valide, ou laissé vide. Exemple : [{\"nom\": \"Ecole X\", \"ville\": \"Libreville\", \"note\": 4.5}]");
        return;
      }
    }

    const nouvelleFiliere = {
      id: form.id.value.trim(),
      domaine_id: form.domaine_id.value,
      nom: form.nom.value.trim(),
      resume: form.resume.value.trim(),
      duree: form.duree.value.trim(),
      niveau: form.niveau.value.trim(),
      apercu: form.apercu.value.trim(),
      debouches: texteVersTableau(form.debouches.value),
      competences: texteVersTableau(form.competences.value),
      conditions_admission: texteVersTableau(form.conditions_admission.value),
      filieres_bac: texteVersTableau(form.filieres_bac.value),
      etablissements,
    };

    const { error } = await supabase.from("filieres").insert(nouvelleFiliere);
    if (error) { alert("Erreur : " + error.message); return; }
    form.reset();
    afficherListeFilieres();
  });
}


function initSuppressionGenerique() {
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".btn-supprimer");
    if (!btn) return;

    const table = btn.dataset.table;
    const id = btn.dataset.id;
    if (!confirm(`Supprimer cet élément de "${table}" ?`)) return;

    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) { alert("Erreur lors de la suppression : " + error.message); return; }

    // Rafraîchit la bonne liste selon la table concernée
    if (table === "annonces") afficherListeAnnonces();
    if (table === "ecoles") afficherListeEcoles();
    if (table === "domaines") afficherListeDomaines();
    if (table === "filieres") afficherListeFilieres();
  });
}

// Initialisation générale
document.addEventListener("DOMContentLoaded", async () => {
  const accesAutorise = await verifierAcces();
  if (!accesAutorise) return;

  initOnglets();
  initSuppressionGenerique();

  afficherListeAnnonces();
  afficherListeEcoles();
  afficherListeDomaines(); 
  afficherListeFilieres();

  initFormulaireAnnonce();
  initFormulaireEcole();
  initFormulaireDomaine();
  initFormulaireFiliere();
});