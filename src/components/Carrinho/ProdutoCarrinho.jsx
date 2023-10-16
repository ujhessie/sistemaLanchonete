/* eslint-disable react/prop-types */
import "./produtoCarrinho.scss";

function ProdutoCarrinho({
  nome,
  quantidade,
  valor,
  imgUrl,
  onAdicionar,
  onDiminuir,
  onRemover,
  index,
  atualizarQuantidade,
}) {
  const handleQuantidadeChange = (event) => {
    const novaQuantidade = parseInt(event.target.value, 10);
    if (!isNaN(novaQuantidade) && novaQuantidade >= 0) {
      atualizarQuantidade(index, novaQuantidade);
    } else {
      // Se o valor não for um número válido, defina a quantidade como 0 (ou outro valor padrão)
      atualizarQuantidade(index, 0);
    }
  };

  return (
    <div className="produto-carrinho">
      <div className="img-produto">
        <span>R$ {valor} ({quantidade}x)</span>
        <img src={imgUrl} alt="" />
      </div>
      <div className="textos">
        <p className="nome">{nome}</p>
        <p className="valor"></p>
        <div className="acoes">
          <button onClick={() => onDiminuir(index)}>-</button>
          <input
            type="number"
            name=""
            id=""
            value={quantidade}
            onChange={handleQuantidadeChange}
          />
          <button onClick={() => onAdicionar(index)}>+</button>
        </div>
        <p className="remover" onClick={() => onRemover(index)}>
          Remover item
        </p>
      </div>
    </div>
  );
}

export default ProdutoCarrinho;
