import "./secInicio.scss";

function SecInicio() {
  return (
    <section id="secInicio">
      <div className="content">
        <div className="div-flex">
          <div className="texts">
            <p className="bem-vindo">Seja bem vindo</p>
            <h1>CHURRASCO DE QUALIDADE É AQUI!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="botoes">
              <a href="" className="b1">
                Cardápio
              </a>
              <a href="" className="b2">
                Finalizar pedidos
              </a>
            </div>
            <p>Página projetada e desenvolvida por Jesse Rodrigues</p>
            <a href="#" className="ver-mais">
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
