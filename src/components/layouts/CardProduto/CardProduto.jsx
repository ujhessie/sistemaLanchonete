/* eslint-disable react/prop-types */
import "./cardProduto.scss";
import produtos from "../../produtos";

function CardProduto({ id }) {
  // Função para encontrar o produto com base no id
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
        valor: produto.valor || 0, // Certifica-se de que valor seja um número ou 0 se for indefinido
        urlImg: produto.imagemUrl,
        quantidade: 1,
      };
      carrinho.push(item);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    // Dispare um evento personalizado para notificar outras partes do aplicativo
    window.dispatchEvent(new Event("carrinhoAtualizado"));

    const iconCarrinhoElement = document.getElementById("iconCarrinho");
  iconCarrinhoElement.classList.add("animate");

  iconCarrinhoElement.addEventListener("animationend", () => {
    // A animação terminou, remova a classe "animate"
    iconCarrinhoElement.classList.remove("animate");
  });
  }

  return (
    <div className="card-produto">
      <div className="div-img">
        <img src={produto.imagemUrl} alt={produto.nome} />
        <span className="valor">R$ {produto.valor !== undefined ? produto.valor : 'Valor desconhecido'}</span>
      </div>
      <h3 className="nome-produto">{produto.nome}</h3>
      <p className="desc-1">{produto.desc}</p>
      <button
        className="botao-adicionar-produto"
        onClick={() => {
          adicionarAoCarrinho();
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default CardProduto;
