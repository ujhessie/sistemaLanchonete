import "./footer.scss"

function Footer() {
  return (
    <footer>
      <div className="content">
          <div className="card">
              <h2>Acesse nossas redes sociais</h2>
              <div className="div-redes-sociais">
                <a href="#">instagram</a>
                <a href="#">facebook</a>
                <a href="#">tiktok</a>
              </div>
          </div>
          <div className="card">
            <h2>Ja sabe a nossa localização?</h2>
            <div className="div-localizacao">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1992.9724543078091!2d-44.28405108947983!3d-2.5248933777198674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68feffefcc9bf%3A0x76bd30634874b904!2sChurrasco%20do%20Geilson!5e0!3m2!1spt-BR!2sbr!4v1697406567384!5m2!1spt-BR!2sbr"  loading="lazy" ></iframe>
            </div>
          </div>
      </div>
      <p className="desenvolvido">Site projetado e desenvolvido por <a href="https://ujhessie.github.io/ujhessie/">Jesse Rodrigues</a></p>
    </footer>
  );
}

export default Footer