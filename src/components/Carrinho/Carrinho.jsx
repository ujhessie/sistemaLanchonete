import { useState, useEffect } from "react";
import ProdutoCarrinho from "./ProdutoCarrinho";
import "./carrinho.scss";

function Carrinho() {
  // Inicialize o estado do carrinho com um array vazio
  const [carrinho, setCarrinho] = useState([]);

  // Use useEffect para carregar o carrinho do localStorage no estado inicial
  useEffect(() => {
    const carrinhoJson = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoJson);

    const handleLocalStorageChange = (e) => {
      if (e.key === "carrinho") {
        const novoCarrinho = JSON.parse(e.newValue) || [];
        setCarrinho(novoCarrinho);
      }
    };

    // Adicione um ouvinte de evento para o evento de armazenamento local
    window.addEventListener("storage", handleLocalStorageChange);

    // Adicione um ouvinte de evento personalizado para atualizar o carrinho
    window.addEventListener("carrinhoAtualizado", () => {
      const carrinhoJson = JSON.parse(localStorage.getItem("carrinho")) || [];
      setCarrinho(carrinhoJson);
    });

    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);

  // Função para adicionar um item ao carrinho
  const adicionarAoCarrinho = (index) => {
    // Crie uma cópia do carrinho para evitar mutações diretas no estado
    const novoCarrinho = [...carrinho];

    // Verifique se o produto já existe no carrinho com base no índice
    if (novoCarrinho[index]) {
      // Se o produto já existe, aumente a quantidade
      novoCarrinho[index].quantidade += 1;
    } else {
      // Caso contrário, crie um novo objeto e adicione-o ao carrinho
      novoCarrinho[index] = {
        ...carrinho[index], // Copie as propriedades do produto existente
        quantidade: 1, // Defina a quantidade como 1
      };
    }

    // Atualize o carrinho e o localStorage
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  // Função para diminuir a quantidade de um item no carrinho
  const diminuirQuantidadeNoCarrinho = (index) => {
    // Crie uma cópia do carrinho para evitar mutações diretas no estado
    const novoCarrinho = [...carrinho];

    // Verifique se o produto já existe no carrinho com base no índice
    if (novoCarrinho[index]) {
      // Se o produto já existe e a quantidade é maior que 1, diminua a quantidade
      if (novoCarrinho[index].quantidade > 1) {
        novoCarrinho[index].quantidade -= 1;
      } else {
        // Caso contrário, remova o produto do carrinho
        novoCarrinho.splice(index, 1);
      }

      // Atualize o carrinho e o localStorage
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
  };

  // Função para remover um item do carrinho com base no índice
  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);

    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  // Função para atualizar a quantidade de um item no carrinho
  const atualizarQuantidadeNoCarrinho = (index, novaQuantidade) => {
    if (novaQuantidade >= 1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].quantidade = novaQuantidade;

      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
  };

  return (
    <section className="" id="secCarrinho">
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
                  onAdicionar={() => adicionarAoCarrinho(index)} // Chame a função com o índice
                  onDiminuir={() => diminuirQuantidadeNoCarrinho(index)} // Adicione a função onRemover
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
        <div className="botoes">
          <a href="#" className="continuar">
            Continuar comprando
          </a>
          <a href="#" className="proximo">
            Próximo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Carrinho;
