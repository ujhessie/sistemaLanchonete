import "./secInicio.scss";

function SecInicio() {
  function mostrarCarrinho() {
    const secCarrinho = document.querySelector("#secCarrinho")

    // secCarrinho.classList.toggle("")
    secCarrinho.classList.toggle("secCarrinhoAtiva")
  }
  return (
    <section id="secInicio">
      <div className="content">
        <div className="div-flex">
          <div className="texts">
            <p className="bem-vindo">Seja bem vindo</p>
            <h1>CHURRASCO DE QUALIDADE É AQUI!!</h1>
            <p>Sinta o sabor da liberdade...</p>
            <div className="div-redes-sociais">
              <a href="#">#</a>
              <a href="#">#</a>
              <a href="#">#</a>
            </div>
            <div className="botoes">
              <a href="#secCategoria" className="b1">
                Cardápio
              </a>
              <button className="b2" onClick={mostrarCarrinho}>
                Finalizar pedidos
              </button>
            </div>
            <p className="projetada">Página projetada e desenvolvida por <a href="https://ujhessie.github.io/ujhessie">Jesse Rodrigues</a></p>
            <a href="#secCategoria" className="ver-mais">
              Role a página
            </a>
          </div>
          <div className="div-img"></div>
        </div>
      </div>
    </section>
  );
}

export default SecInicio;
