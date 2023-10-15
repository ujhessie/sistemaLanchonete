import "./secCategoria.scss";

function SecCategoria() {
  return (
    <section id="secCategoria">
      <div className="content">
        <h2>O que você procura?</h2>
        <nav className="nav-catgorias">
          <a href="#" className="item-nav">
            <img
              src="https://ujhessie.github.io/miniLanchonete/img/icons/hamburguer.png"
              alt=""
            />

            <span>Churrascos completos</span>
          </a>
          <a href="#" className="item-nav">
            <img
              src="https://ujhessie.github.io/miniLanchonete/img/icons/hamburguer.png"
              alt=""
            />
            <span>Espetos</span>
          </a>
          <a href="#" className="item-nav">
            <img
              src="https://ujhessie.github.io/miniLanchonete/img/icons/hamburguer.png"
              alt=""
            />
            <span>Bebidas</span>
          </a>
        </nav>
      </div>
    </section>
  );
}

export default SecCategoria;
