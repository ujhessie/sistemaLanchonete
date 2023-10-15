import "./header.scss";
import { IoMdCart } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {

  function mostrarCarrinho() {
    const secCarrinho = document.querySelector("#secCarrinho")

    // secCarrinho.classList.toggle("")
    secCarrinho.classList.toggle("secCarrinhoAtiva")
  }

  return (
    <header className="header" id="header">
      <div className="content">
        <a href="3" className="logoHeader">
          LOGO
        </a>
        {/* <nav>
                        <a href="#" className="itemNavHeader">Inicio</a>
                        <a href="#" className="itemNavHeader">Cardápio</a>
                        <a href="#" className="itemNavHeader">Sobre</a>
                        <a href="#" className="itemNavHeader">Localização</a>
                    </nav> */}
        <div className="botoesHeader">
          <div className="div-icon carrinho" id="iconCarrinho" onClick={()=> {mostrarCarrinho()}}>
            <IoMdCart className="icon" />
          </div>
          <a href="#" className=" b1">
            Contato
          </a>
          <a href="#" className="b2">
            Cardápio
          </a>
          {/* <a href="#">Menu</a> */}
          <div className="div-icon menu">
            <HiMenuAlt3 className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
