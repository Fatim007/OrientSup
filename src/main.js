import '../src/assets/css/style.css'
import { setupCounter } from './counter.js'
document.querySelector('#app').innerHTML = `
<header class="header">
    <div class="container">
        <a href="../index.html" class="logo">
            <img src="/assets/img/logo.png" alt="Logo">
            <span>Schoolify</span>
        </a>
        <nav class="navbar">
            <ul class="nav-links">
                <li>
                    <a href="/pages/domaines.html">Domaines</a>
                </li>
                <li>
                    <a href="/pages/ecoles.html">Écoles</a>
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
            <a href="/pages/domaines.html" class="btn-primary">
                Domaines
            </a>
        </div>
        <div class="hero-image">
            <img src="/assets/img/hero/student.png"
                alt="Étudiant gabonais">
        </div>
    </div>
</section>

</main>
`
setupCounter(document.querySelector('#counter'))
