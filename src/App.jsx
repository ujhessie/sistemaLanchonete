// importação de css
import "./css/main.scss";

// importação de components
import Header from "./components/sections/Header/Header";
import SecInicio from "./components/sections/secInicio/SecInicio";

function App() {
  return (
    <>
      <Header/>
      <main>
        <SecInicio />
      </main>
    </>
  );
}

export default App;
