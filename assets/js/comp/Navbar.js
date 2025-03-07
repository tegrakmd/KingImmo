class Navbar extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: "open" });

    // Récupérer le chemin de base depuis l'attribut
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
    
      <header class="header_nav" data-header>
        <div class="container">
          <a href="#" class="logo">
            <img
              src="${basePath}/assets/images/king immo2.jpg"
              width="10"
              height="10"
              alt="Pfolio home" />
          </a>
          <button class="nav-toggle-btn" data-nav-toggler data-nav-toggle-btn aria-label="Toggle menu">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
          </button>
        </div>
      </header>
      <nav class="navbar" data-navbar>
        <ul class="navbar-list">
          <li><a href="${basePath}/index.html" class="navbar-link">Home</a></li>
          <li><a href="${basePath}/src/about.html" class="navbar-link">About</a></li>
          <li><a href="${basePath}/src/proj/allpro.html" class="navbar-link">Immobiliers</a></li>
        </ul>
        <div class="portrais_menu">
          <img src="${basePath}/assets/images/img1.jpg" alt="" />
        </div>
      </nav>
    `;

    // ... (le reste du code JavaScript pour le toggle reste identique)
  }
}

customElements.define("nav-bar", Navbar);
