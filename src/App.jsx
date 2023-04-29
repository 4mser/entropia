import { useState } from "react";

//Componentes
import Nav from "./components/Nav";
import Bg from "./components/Bg";
import Buscador from "./components/Buscador";
import Encabezado from "./components/Encabezado";
import Areas from "./components/Areas";
import Proyectos from "./components/Proyectos";
import Recomendados from "./components/Recomendados";
import Footer from "./components/Footer";

function App() {
  const [tema, setTema] = useState("dark");

  const handleTemaChange = () => {
    if (tema === "dark") {
      setTema("light");
    } else {
      setTema("dark");
    }
  };
  return (
    <>
      <main>
        <Bg tema={tema}></Bg>
        <Nav tema={tema} handleTemaChange={handleTemaChange}></Nav>
        <Buscador tema={tema}></Buscador>
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
