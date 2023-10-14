import Container1 from "../../layouts/Containers/Container1/Container1"
import "./header.scss"

function Header () {
    return (
        <Container1>
            <header className="header" id="header">
                <a href="3" className="logoHeader">LOGO</a>
                <nav>
                    <a href="#" className="itemNavHeader">Inicio</a>
                    <a href="#" className="itemNavHeader">Cardápio</a>
                    <a href="#" className="itemNavHeader">Sobre</a>
                    <a href="#" className="itemNavHeader">Localização</a>
                </nav>

                <div className="botoesHeader">
                    <a href="#">Contato</a>
                    <a href="#">Cardápio</a>
                    {/* <a href="#">Menu</a> */}
                </div>
            </header>
        </Container1>   
    )
}

export default Header