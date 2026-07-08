function creerCardEcole(ecole) {
  const badgeClass = ecole.type === "public" ? "badge-public" : "badge-prive";
  const badgeLabel = ecole.type === "public" ? "Public" : "Privé";

  return `
    <div class="card-ecole">
      <span class="badge ${badgeClass}">${badgeLabel}</span>
      <img src="${ecole.logo}" alt="${ecole.nom}" class="ecole-img">
      <div class="card-ecole-content">
        <h3>${ecole.nom}</h3>
        <p class="location">
          <i class="fa-solid fa-location-dot" style="color: rgb(44, 153, 236);"></i> ${ecole.localisation}
        </p>
        <div class="card-ecole-actions">
          <a href="https://wa.me/${ecole.whatsapp}" target="_blank" class="btn-whatsapp">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a href="${ecole.siteWeb}" target="_blank" class="btn-site">
            <i class="fa-solid fa-globe"></i> Site web
          </a>
        </div>
      </div>
    </div>
  `;
}

function afficherEcoles() {
  const container = document.getElementById("grid-ecoles");
  if (!container) return;

  container.innerHTML = ecoles.map(creerCardEcole).join("");
}

document.addEventListener("DOMContentLoaded", afficherEcoles);
