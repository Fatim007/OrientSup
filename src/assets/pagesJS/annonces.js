async function loadData() {
  try {
    const res = await fetch('data.json');
    const data = await res.json();
    renderCards('bourses-list', data.bourses, '🌍', 'Bourse d\'études');
    renderCards('concours-list', data.concours, '🏛️', 'Concours d\'entrée');
  } catch (e) {
    console.error("Erreur chargement data.json", e);
  }
}

function renderCards(containerId, items, icon, tag) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => {
    // Logique : si lien_site existe on prend ça, sinon lien_pdf
    const lien = item.lien_site || item.lien_pdf || "#";
    
    return `
    <div class="card ${item.couleur}">
      <div class="card-left">
        <div class="card-icon">${icon}</div>
        <div class="card-content">
          <div class="tag">${tag}</div>
          <h3>${item.titre}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
      <div class="card-right">
        <div class="card-info">
          <div class="label">📅 Date limite</div>
          <div class="value">${item.date_limite}</div>
          <div class="label">📍 ${item.lieu}</div>
        </div>
        <a href="${lien}" target="_blank" rel="noopener noreferrer" class="arrow-btn">→</a>
      </div>
    </div>
  `}).join('');
}

document.getElementById('btn-notif').addEventListener('click', () => {
  alert('Notifications activées !');
});

loadData();