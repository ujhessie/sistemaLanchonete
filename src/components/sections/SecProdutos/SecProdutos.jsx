import produtos from "../../produtos";
import "./secProdutos.scss";
import CardProduto from "../../layouts/CardProduto/CardProduto";

function SecProdutos() {
  return (
    <section id="secProdutos">
      <div className="content">
        <h2 id="catChurrascos">Churrascos</h2>
        <div className="divProdutos">
          {produtos
            .filter((produto) => produto.tipo === "churrasco")
            .map((produto) => (
              <CardProduto key={produto.id} id={produto.id} />
            ))}
        </div>
        <h2 id="catBebidas">O que você quer beber?</h2>
        <div className="divProdutos">
        {produtos
            .filter((produto) => produto.tipo === "bebida")
            .map((produto) => (
              <CardProduto key={produto.id} id={produto.id} />
            ))}
        </div>
        <h2>Prefere latinhas?</h2>
        <div className="divProdutos">
        {produtos
            .filter((produto) => produto.tipo === "latinha")
            .map((produto) => (
              <CardProduto key={produto.id} id={produto.id} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default SecProdutos;
