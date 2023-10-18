import  { useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import "./css/main.scss";
import Header from "./components/sections/Header/Header";
import SecInicio from "./components/sections/secInicio/SecInicio";
import SecCategoria from "./components/sections/SecCategoria/SecCategoria";
import SecProdutos from "./components/sections/SecProdutos/SecProdutos";
import Carrinho from "./components/Carrinho/Carrinho";
import Footer from "./components/sections/Footer/Footer";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  // Função para atualizar a quantidade de itens e o valor total
  const atualizarCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const quantidade = carrinho.reduce((total, item) => total + item.quantidade, 0);
    const valorTotal = carrinho.reduce((total, item) => total + item.valor * item.quantidade, 0);
    setItemCount(quantidade);
    setTotalValue(valorTotal);
  };

  // Use useEffect para ouvir eventos de atualização do carrinho
  useEffect(() => {
    window.addEventListener("carrinhoAtualizado", atualizarCarrinho);
    atualizarCarrinho(); // Atualizar o carrinho inicialmente
    return () => {
      window.removeEventListener("carrinhoAtualizado", atualizarCarrinho);
    };
  }, []);

  function mostrarCarrinho() {
    const secCarrinho = document.querySelector("#secCarrinho");
    secCarrinho.classList.add("secCarrinhoAtiva");
  }

  return (
    <>
      <Header />

      <main className=".main-carrinho-ativo">
        <Carrinho />
        <div
          className="div-carrinho-absolute"
          id="divCArrinhoAbsolute"
          onClick={() => {
            mostrarCarrinho();
          }}
        >
          <div className="div-icon">
            <IoMdCart className="icon" />
          </div>
          <p>Mostrar Carrinho<br/> Itens: ({itemCount}) Total: R$ {totalValue}</p>
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
