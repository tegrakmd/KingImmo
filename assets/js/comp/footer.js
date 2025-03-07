class FooterComponent extends HTMLElement {
  constructor() {
    super();
    // Récupère le chemin de base depuis l'attribut ou utilise "." par défaut
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
           <footer class="footer">
      <div class="footer-container">
        <div class="bos">
          <div class="bo_left">
            <div class="newsletter bo">
              <h3>Rejoignez notre newslette</h3>
              <div class="newsletter-form">
                <input type="email" placeholder="Email" />
                <button class="btn-grad">Subscribe</button>
              </div>
            </div>
            <div class="links links_footer bo">
              <h3>
                  Consultez ces liens <br />
                avant de partir
              </h3>
              <!--  -->
              <div class="links-columns">
                <div>
                  <h4>Pages Liens</h4>
                  <ul>
                    <li><a href="${basePath}">KING IMMO</a></li>
                    <li><a href="${basePath}/src/about.html">A PROPOS DE NOUS</a></li>
                    <li><a href="${basePath}/src/about.html">SERVICES</a></li>
                    <li><a href="${basePath}/src/proj/allpro.html">IMMOBILIERS</a></li>
                  </ul>
                </div>
                <div>
                  <h4>Legal</h4>
                  <ul>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Refund policy</a></li>
                    <li><a href="#">Community rules</a></li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
          <!--  -->
          <div class="bo_right">
            <div class="creators bo">
              <h3>For creators <span class="new-badge">NEW</span></h3>
              <p>
                 Vous avez une forte présence sur les réseaux sociaux, une newsletter populaire ou
                un podcast ? Devenez affilié 10x pour générer un revenu passif facilement !
              </p>
              <a href="#">Devenir affilié</a>
              <div class="call_phone">
                <p>Ousmanejames85@gmail.com</p>
                <p>peterjonathanngolo6@gmail.com</p>
                <p>+ 243 974 783 035</p>
                <p>+ 243 858 396 767</p>
              </div>
              <p class="adress">
                AV.LIKASI N*13798, LUBUMBASHI, REF/EN FACE DE MEDECINE
                VETERINAIRE
              </p>
            </div>
            <div class="social-links bo">
              <div class="social_img">
                <a href="#"
                  ><img src="../../assets/images/logo-1.svg" alt="Twitter"
                /></a>
              </div>
              <div class="social_img">
                <a href="#"
                  ><img src="../../assets/images/logo-2.svg" alt="Twitter"
                /></a>
              </div>
              <div class="social_img">
                <a href="#"
                  ><img src="../../assets/images/logo-3.svg" alt="Twitter"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <p class="copyright">Designers by Tegrakmd©</p>
      </div>
    </footer>
        `;
  }
}
customElements.define("footer-component", FooterComponent);
{
  /* <div>
<h4>Job board</h4>
<ul>
  <li><a href="#">Join the collective</a></li>
  <li><a href="#">Hire a 10x Designer</a></li>
</ul>
</div> */
}
