import { useState, useEffect } from "react";
import ProdutoCarrinho from "./ProdutoCarrinho";
import "./carrinho.scss";

function Carrinho() {
  // Definindo os estados para o carrinho, quantidade de itens e valor total
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeItens, setQuantidadeItens] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  // Função para atualizar o carrinho a partir do armazenamento local
  const atualizarCarrinho = () => {
    const carrinhoJson = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoJson);
  };

  // Use useEffect para carregar o carrinho do armazenamento local e ouvir eventos de atualização do carrinho
  useEffect(() => {
    atualizarCarrinho();

    const handleLocalStorageChange = (e) => {
      if (e.key === "carrinho") {
        atualizarCarrinho();
      }
    };

    window.addEventListener("storage", handleLocalStorageChange);

    // Removendo o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);

  // Função para adicionar um item ao carrinho
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

    // Atualizar o carrinho no armazenamento local
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  // Função para diminuir a quantidade de um item no carrinho
  const diminuirQuantidadeNoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    if (novoCarrinho[index]) {
      if (novoCarrinho[index].quantidade > 1) {
        novoCarrinho[index].quantidade -= 1;
      } else {
        novoCarrinho.splice(index, 1);
      }
      setCarrinho(novoCarrinho);

      // Atualizar o carrinho no armazenamento local
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
  };

  // Função para remover um item do carrinho
  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);

    // Atualizar o carrinho no armazenamento local
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  // Função para atualizar a quantidade de um item no carrinho
  const atualizarQuantidadeNoCarrinho = (index, novaQuantidade) => {
    if (novaQuantidade >= 1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].quantidade = novaQuantidade;
      setCarrinho(novoCarrinho);

      // Atualizar o carrinho no armazenamento local
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
  };

  // Função para fechar a seção do carrinho
  const fecharCarrinho = () => {
    const secCarrinho = document.querySelector("#secCarrinho");
    secCarrinho.classList.remove("secCarrinhoAtiva");
  };

  // Função para calcular a quantidade de itens no carrinho
  const calcularQuantidadeItens = () => {
    const quantidadeItens = carrinho.reduce(
      (total, produto) => total + produto.quantidade,
      0
    );
    setQuantidadeItens(quantidadeItens);
  };

  // Função para calcular o valor total do carrinho
  const calcularValorTotal = () => {
    const valorTotal = carrinho.reduce(
      (total, produto) => total + produto.valor * produto.quantidade,
      0
    );
    setValorTotal(valorTotal);
  };

  // Use useEffect para recalcular a quantidade de itens e valor total sempre que o carrinho for atualizado
  useEffect(() => {
    calcularQuantidadeItens();
    calcularValorTotal();
  }, [carrinho]);

  // Função para gerar o link do WhatsApp com os itens do carrinho
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

  // Função para limpar o carrinho
  const limparCarrinho = () => {
    setCarrinho([]); // Define o carrinho como vazio
    localStorage.removeItem("carrinho"); // Remove os itens do carrinho do armazenamento local
    calcularQuantidadeItens(); // Recalcula a quantidade de itens no carrinho (deve ser zero)
    calcularValorTotal(); // Recalcula o valor total (deve ser zero)
  };

  // Função para mostrar a mensagem de confirmação e redirecionar para o WhatsApp
  const mostrarMensagem = () => {
    if (carrinho.length === 0) {
      alert("Você ainda não tem itens no carrinho");
    } else {
      const confirmaRedirecionamento = window.confirm(
        "Você será redirecionado para o WhatsApp. Por favor, apenas envie a mensagem predefinida."
      );

      if (confirmaRedirecionamento) {
        window.open(gerarLinkWhatsApp());
      }
    }
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
              <button  className="continuar" onClick={fecharCarrinho}>
                Continuar comprando
              </button>
            </div>
            <button onClick={mostrarMensagem} className="proximo">
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrinho;
