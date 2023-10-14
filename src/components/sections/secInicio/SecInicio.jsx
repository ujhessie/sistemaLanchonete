import Container1 from "../../layouts/Containers/Container1/Container1";
import "./secInicio.scss";

function SecInicio() {
  return (
    <Container1>
      <section id="secInicio">
        <div className="divImgs">
          <div className="capa">
            <img src="https://img.freepik.com/free-photo/grilled-beef-burger-with-melted-cheddar-cheese-generated-by-ai_24640-81580.jpg?t=st=1697225615~exp=1697229215~hmac=e264a7845d0e5c2e03d16b91a4116d886ac333131903e66ca8b60f82c92db599&w=900" alt="" />
            <div className="imgPerfil"></div>
          </div>
        </div>
        <div className="texts">
          <h1>Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="botoes">
          <a href="#" className="b1">Cardápio</a>
          <a href="#" className="b2">Ver mais</a>
        </div>

        <hr />
      </section>
    </Container1>
  );
}

export default SecInicio;
