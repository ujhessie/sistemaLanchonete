/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./cardProduto.scss";
import produtos from "../../produtos";
import { IoMdAddCircle } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function CardProduto({ id }) {
  const [showMessage, setShowMessage] = useState(false); // Definido fora da função

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return <div className="card-produto">Produto não encontrado</div>;
  }

  function adicionarAoCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const produtoExistente = carrinho.find(
      (item) => item.nome === produto.nome
    );

    if (produtoExistente) {
      // Se o produto já existe, incremente a quantidade
      produtoExistente.quantidade += 1;
    } else {
      // Se o produto não existe, crie um novo objeto
      const item = {
        nome: produto.nome,
        valor: produto.valor || 0,
        urlImg: produto.imagemUrl,
        quantidade: 1,
        tipo: produto.tipo,
      };
      carrinho.push(item);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    window.dispatchEvent(new Event("carrinhoAtualizado"));

    const iconCarrinhoElement = document.getElementById("iconCarrinho");
    iconCarrinhoElement.classList.add("animate");

    iconCarrinhoElement.addEventListener("animationend", () => {
      iconCarrinhoElement.classList.remove("animate");
    });

    // Agora, definimos o estado showMessage para exibir a mensagem
    setShowMessage(true);

    // Configuramos um timeout para ocultar a mensagem após um período de tempo
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // 3 segundos em milissegundos
  }

  return (
    <div className="card-produto">
      <div className="div-img">
        <img src={produto.imagemUrl} alt={produto.nome} />
        <span className="valor">
          R${" "}
          {produto.valor !== undefined ? produto.valor : "Valor desconhecido"}
        </span>
      </div>
      <div className="texts">
        <h3 className="nome-produto">{produto.nome}</h3>
        <p className="desc-1">{produto.desc}</p>
      </div>
      <button
        className="botao-adicionar-produto"
        onClick={() => {
          adicionarAoCarrinho();
        }}
      >
        <IoMdAddCircle className="icon" />
        <span>Adicionar</span>
      </button>
      {showMessage && <div className="mensagem-carrinho">Item adicionado ao carrinho</div>}
    </div>
  );
}

export default CardProduto;
