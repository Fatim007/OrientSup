import '../src/assets/pagesJS/data2.js';
import '../src/assets/pagesJS/domaines.js';
import '../src/assets/css/style.css';
import '../src/assets/css/domaines.css';
document.querySelector('#app').innerHTML = `
<header class="header">
    <div class="container">
        <a href="../index.html" class="logo">
            <img src="/src/assets/images/Logo-removebg-preview.png" alt="Logo">
            <span>Schoolify</span>
        </a>
        <nav class="navbar">
            <ul class="nav-links">
                <li>
                    <a href="/src/pages/domaines.html">Domaines</a>
                </li>
                <li>
                    <a href="/src/pages/ecoles.html">Établissements</a>
                </li>
                <li>
                    <a href="/src/pages/annonces.html">Annonces</a>
                </li>
            </ul>
        </nav>
        <a href="/pages/connexion.html" class="btn-login">
            Se connecter
        </a>
    </div>
</header>
<main>
<section class="hero">
    <div class="circle-top"></div>
    <div class="circle-bottom"></div>
    <div class="container hero-container">
        <div class="hero-content">
            <h1>
                Tracez votre <br>
                propre chemin <br>
                <span class="hero-content-gras">académique</span>
            </h1>
            <p>
                Découvrez les filières, les métiers et les établissements
                qui correspondent à votre profil et préparez sereinement
                votre avenir.
            </p>
            <a href="/src/pages/domaines.html" class="btn-primary">
                Domaines
            </a>
        </div>
        <div class="hero-image">
            <img src="/src/assets/images/choix2.jpg" alt="Étudiant gabonais">
        </div>
    </div>
</section>
  <!-- SECTION 1: DOMAINES -->
<section class="section-domaines" id="domaines">
  <div class="container">
    <div class="section-header">
      <h2>Explorez par Domaines</h2>
      <div class="underline"></div>
    </div>

    <div class="grid-domaines" data-limit="8"></div>
  </div>

  <div class="section-footer">
      <a href="/src/pages/domaines.html" class="btn-voir-plus">Voir plus →</a>
  </div>
</section>
  <!-- SECTION 2: CONSEILS -->
  <section class="section-conseils">
    <div class="container">
      <div class="section-header left">
        <h2>Nos <span>conseils</span> pour bien choisir votre avenir</h2>
        <div class="underline"></div>
      </div>
      <div class="grid-conseils">
        <div class="item-conseil">
          <div class="icon-conseil">
            <i class="fa-solid fa-heart" style="color:var(--primary-color);font-size: 2em;"></i>
          </div>
          <div>
            <h3>Identifiez vos passions</h3>
            <p>Choisissez un domaine qui vous motive réellement.</p>
          </div>
        </div>
        <div class="item-conseil">
          <div class="icon-conseil">
            <i class="fa-brands fa-google" style="color: var(--primary-color);font-size: 2em;"></i>
          </div>
          <div>
            <h3>Informez-vous sur les métiers</h3>
            <p>Découvrez les missions, compétences et débouchés.</p>
          </div>
        </div>
        <div class="item-conseil">
          <div class="icon-conseil">
            <i class="fa-solid fa-chart-bar" style="color: var(--primary-color);font-size: 2em;"></i>
          </div>
          <div>
            <h3>Comparez les formations</h3>
            <p>Analysez les programmes, conditions et perspectives.</p>
          </div>
        </div>
        <div class="item-conseil">
          <div class="icon-conseil">
            <i class="fa-solid fa-calendar-days" style="color: var(--primary-color);font-size:2em;"></i>
          </div>
          <div>
            <h3>Planifiez votre futur</h3>
            <p>Fixez vos objectifs et avancez pas à pas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- SECTION 3: ECOLES -->
  <section class="section-ecoles">
    <div class="container">
      <div class="section-header">
        <h2>Établissements à la une</h2>
        <div class="underline"></div>
      </div>
      <div class="grid-ecoles">
        <div class="card-ecole">
          <img src="/src/assets/images/UOB.png" alt="Université Omar Bongo" class="ecole-img">
          <div class="card-ecole-content">
            <h3>Université Omar Bongo</h3>
            <p class="location"><i class="fa-solid fa-location-dot" style="color: rgb(44, 153, 236);"></i> Libreville</p>
          </div>
        </div>
        <div class="card-ecole">
          <img src="/src/assets/images/EM-Gabon.png" alt="Institut Pédagogique National" class="ecole-img">
          <div class="card-ecole-content">
            <h3>EM-Gabon Université</h3>
            <p class="location"><i class="fa-solid fa-location-dot" style="color: rgb(44, 153, 236);"></i> Libreville</p>
          </div>
        </div>
        <div class="card-ecole">
          <img src="/src/assets/images/USTM.jpg" alt="USTM" class="ecole-img">
          <div class="card-ecole-content">
            <h3>USTM</h3>
            <p class="location"><i class="fa-solid fa-location-dot" style="color: rgb(44, 153, 236);"></i> Franceville</p>
          </div>
        </div>
        <div class="card-ecole">
          <img src="/src/assets/images/ESGI.png" alt="Ecole Normale Supérieure" class="ecole-img">
          <div class="card-ecole-content">
            <h3>ESGI</h3>
            <p class="location"><i class="fa-solid fa-location-dot" style="color: rgb(44, 153, 236);"></i> Libreville</p>
          </div>
        </div>
      </div>
      <div class="section-footer">
      <a href="/src/pages/ecoles.html" class="btn-voir-plus">Voir plus →</a>
    </div>
      <!-- CTA -->
      <div class="cta-box">
        <div class="cta-text">
          <div class="cta-icon">
            <i class="fa-solid fa-microphone" style="color: var(--primary-color);font-size: 2em;"></i>
          </div>
          <div>
            <h3>Explore toutes les opportunités</h3>
            <p>Compare les domaines, les filières et les établissements en 1 clic.</p>
          </div>
        </div>
        <div class="cta-buttons">
          <button class="btn-primary2">Voir tous les domaines</button>
          <button class="btn-secondary">Voir tous les établissements</button>
        </div>
      </div>
    </div>
  </section>
  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo">
            <div class="logo-icon">
              <img src="/src/assets/images/Logo-removebg-preview.png" alt="Logo School">
            </div>
            <span>School</span>
          </div>
          <p>Votre plateforme d'orientation pour un avenir réussi.</p>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/index.html">Accueil</a></li>
            <li><a href="/src/pages/domaines.html">Domaines</a></li>
            <li><a href="/src/pages/domaines.html">Etablissements</a></li>
            <li><a href="/src/pages/annonces.html">Anonces</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Ressources</h4>
          <ul>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Conseils</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Suivez-nous</h4>
          <div class="socials">
            <a href="#"><i class="fa-brands fa-facebook" style="font-size: 2em;"></i></a>
            <a href="#"><i class="fa-brands fa-square-whatsapp" style="font-size: 2em;"></i>
  </footer>          
</main>
`
