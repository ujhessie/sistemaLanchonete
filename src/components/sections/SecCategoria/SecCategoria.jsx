import "./secCategoria.scss";

function SecCategoria() {
  return (
    <section id="secCategoria">
      <div className="content">
        <h2>O que você procura?</h2>
        <nav className="nav-catgorias">
          <a href="#" className="item-nav">
            <img
              src="imgs/icons/carne.png"
              alt="icon churrasco"
            />

            <span>Churrascos</span>
          </a>
          <a href="#" className="item-nav">
            <img
              src="imgs/icons/churrasco.png"
              alt=""
            />
            <span>Espetos</span>
          </a>
          <a href="#" className="item-nav">
            <img
             src="imgs/icons/refrigerantes.png"
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
