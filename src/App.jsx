import { IoMdCart } from "react-icons/io";

// importação de css
import "./css/main.scss";

// importação de components
import Header from "./components/sections/Header/Header";
import SecInicio from "./components/sections/secInicio/SecInicio";
import SecCategoria from "./components/sections/SecCategoria/SecCategoria";
import SecProdutos from "./components/sections/SecProdutos/SecProdutos";
import Carrinho from "./components/Carrinho/Carrinho";
import Footer from "./components/sections/Footer/Footer";

function App() {
  function mostrarCarrinho() {
    const secCarrinho = document.querySelector("#secCarrinho");

    // secCarrinho.classList.toggle("")
    secCarrinho.classList.add("secCarrinhoAtiva");
  }
  return (
    <>
      <Header />

      <main>
        <Carrinho />
        <div className="div-carrinho-absolute" id="divCArrinhoAbsolute"  onClick={()=> {mostrarCarrinho()}}>
          <div
            className="div-icon"
           
          >
            <IoMdCart className="icon" />
          </div>
          <p>Mostrar Carrinho</p>
        </div>
        <SecInicio />
        <SecCategoria />
        <SecProdutos />
      </main>
      <Footer />
    </>
  );
}

export default App;
