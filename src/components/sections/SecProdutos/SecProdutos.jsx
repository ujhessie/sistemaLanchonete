import produtos from "../../produtos";
import "./secProdutos.scss";
import CardProduto from "../../layouts/CardProduto/CardProduto";

function SecProdutos() {
  return (
    <section id="secProdutos">
      <div className="content">
        <h2>Churrascos</h2>
        <div className="divProdutos">
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecProdutos;
