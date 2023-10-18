/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import ProdutoCarrinho from "./ProdutoCarrinho";
import "./carrinho.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeItens, setQuantidadeItens] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    const carrinhoJson = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoJson);

    const handleLocalStorageChange = (e) => {
      if (e.key === "carrinho") {
        const novoCarrinho = JSON.parse(e.newValue) || [];
        setCarrinho(novoCarrinho);
      }
    };

    window.addEventListener("storage", handleLocalStorageChange);

    window.addEventListener("carrinhoAtualizado", () => {
      const carrinhoJson = JSON.parse(localStorage.getItem("carrinho")) || [];
      setCarrinho(carrinhoJson);
    });

    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);

  const adicionarAoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    if (novoCarrinho[index]) {
      novoCarrinho[index].quantidade += 1;
    } else {
      novoCarrinho[index] = {
        ...carrinho[index],
        quantidade: 1,
      };
    }
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const diminuirQuantidadeNoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    if (novoCarrinho[index]) {
      if (novoCarrinho[index].quantidade > 1) {
        novoCarrinho[index].quantidade -= 1;
      } else {
        novoCarrinho.splice(index, 1);
      }
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const atualizarQuantidadeNoCarrinho = (index, novaQuantidade) => {
    if (novaQuantidade >= 1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].quantidade = novaQuantidade;
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
  };

  const fecharCarrinho = () => {
    const secCarrinho = document.querySelector("#secCarrinho");
    secCarrinho.classList.remove("secCarrinhoAtiva");
  };

  // Calcula a quantidade de itens no carrinho
  const calcularQuantidadeItens = () => {
    const quantidadeItens = carrinho.reduce(
      (total, produto) => total + produto.quantidade,
      0
    );
    setQuantidadeItens(quantidadeItens);
  };

  // Calcula o valor total
  const calcularValorTotal = () => {
    const valorTotal = carrinho.reduce(
      (total, produto) => total + produto.valor * produto.quantidade,
      0
    );
    setValorTotal(valorTotal);
  };

  useEffect(() => {
    calcularQuantidadeItens();
    calcularValorTotal();
  }, [carrinho]);

  const gerarLinkWhatsApp = () => {
    const numeroTelefone = "98988740103"; // Substitua pelo seu número de telefone
    const mensagemItens = carrinho
      .map((produto) => {
        return `${produto.quantidade}x ${produto.nome}: R$${(
          produto.valor * produto.quantidade
        ).toFixed(2)}`;
      })
      .join("\n");

    const mensagemTotal = `Total: R$${valorTotal}`;

    const mensagem = `Olá, estou interessado em fazer uma compra! Meu carrinho: \n\n${mensagemItens}\n${mensagemTotal}`;
    const mensagemCodificada = encodeURIComponent(mensagem);

    return `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`;

  };

  const limparCarrinho = () => {
    setCarrinho([]); // Define o carrinho como vazio
    localStorage.removeItem("carrinho"); // Remove os itens do carrinho do armazenamento local
    calcularQuantidadeItens(); // Recalcula a quantidade de itens no carrinho (deve ser zero)
    calcularValorTotal(); // Recalcula o valor total (deve ser zero)
  };
  

  return (
    <section className="secCarrinho" id="secCarrinho">
      <div className="content">
        <div id="carrinho">
          <h2>Carrinho</h2>
          <ul>
            {carrinho.map((produto, index) => (
              <li key={index}>
                <ProdutoCarrinho
                  nome={produto.nome}
                  valor={produto.valor}
                  quantidade={produto.quantidade}
                  imgUrl={produto.urlImg}
                  onAdicionar={() => adicionarAoCarrinho(index)}
                  onDiminuir={() => diminuirQuantidadeNoCarrinho(index)}
                  onRemover={() => {
                    removerDoCarrinho(index);
                  }}
                  index={index}
                  atualizarQuantidade={atualizarQuantidadeNoCarrinho}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <div className="div-total">
            <p>Itens: {quantidadeItens}</p>
            <p>Total: R$ {valorTotal}</p>
          </div>
          <div className="botoes">
            <div className="div-flex">
              <a href="#" className="limpar" onClick={limparCarrinho}>
                Limpar carrinho
              </a>
              <a href="#" className="continuar" onClick={fecharCarrinho}>
                Continuar comprando
              </a>
            </div>
            <a href={gerarLinkWhatsApp()} className="proximo" target="_blank">
              <p>Finalizar pedido</p>
              <div className="div-icon">
                <AiOutlineArrowRight className="icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrinho;
