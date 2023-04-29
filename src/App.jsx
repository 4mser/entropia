import Nav from "./components/Nav";
import Bg from "./components/Bg";
import Buscador from "./components/Buscador";
import Encabezado from "./components/Encabezado";
import Areas from "./components/Areas";
import Proyectos from "./components/Proyectos";
import Recomendados from "./components/Recomendados";

function App() {
  return (
    <>
      <main>
        <Bg></Bg>
        <Nav></Nav>
        <Buscador></Buscador>
        <Encabezado></Encabezado>
        <Areas></Areas>
        <Proyectos></Proyectos>
        <Recomendados></Recomendados>
      </main>
    </>
  );
}

export default App;
