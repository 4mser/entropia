import { useState } from "react";

//Componentes
import Nav from "./components/Nav";
import Bg from "./components/Bg";
// import Buscador from "./components/Buscador";
import Encabezado from "./components/Encabezado";
import Areas from "./components/Areas";
import Proyectos from "./components/Proyectos";
import Recomendados from "./components/Recomendados";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  //Cambio de tema
  const [tema, setTema] = useState("dark");

  const handleTemaChange = () => {
    if (tema === "dark") {
      setTema("light");
    } else {
      setTema("dark");
    }
  };

  //Abrir menu
  const [MenuOpen, setMenuOpen] = useState("open");

  const handleMenuChange = () => {
    if (MenuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  return (
    <>
      <main>
        <Bg tema={tema}></Bg>
        <Nav
          tema={tema}
          handleTemaChange={handleTemaChange}
          menuOpen={MenuOpen}
          handleMenuChange={handleMenuChange}
        ></Nav>
        <Menu tema={tema} menuOpen={MenuOpen}></Menu>
        {/* <Buscador tema={tema}></Buscador> */}
        <Encabezado tema={tema}></Encabezado>
        <Areas tema={tema}></Areas>
        <Proyectos tema={tema}></Proyectos>
        <Recomendados tema={tema}></Recomendados>
        <Footer tema={tema}></Footer>
      </main>
    </>
  );
}

export default App;
