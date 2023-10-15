// importação de css
import "./css/main.scss";

// importação de components
import Header from "./components/sections/Header/Header";
import SecInicio from "./components/sections/secInicio/SecInicio";
import SecCategoria from "./components/sections/SecCategoria/SecCategoria";
import SecProdutos from "./components/sections/SecProdutos/SecProdutos";
import Carrinho from "./components/Carrinho/Carrinho";

function App() {
  return (
    <>
      <Header />
      <main>
        <Carrinho />
        <SecInicio />
        <SecCategoria />
        <SecProdutos />

      </main>
    </>
  );
}

export default App;
