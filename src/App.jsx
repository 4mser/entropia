import { useState } from "react";

//Rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes
import Nav from "./components/Nav";
import Bg from "./components/Bg";
import Menu from "./components/Menu";
// import Buscador from "./components/Buscador";

import Home from "./routes/Home";
import Nosotros from "./components/Nosotros";

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
        <BrowserRouter>
          <Bg tema={tema}></Bg>
          <Nav
            tema={tema}
            handleTemaChange={handleTemaChange}
            menuOpen={MenuOpen}
            handleMenuChange={handleMenuChange}
          ></Nav>
          <Menu
            tema={tema}
            menuOpen={MenuOpen}
            handleMenuChange={handleMenuChange}
          ></Menu>

          <Routes>
            <Route
              path="/entropia"
              element={
                <Home
                  tema={tema}
                  menuOpen={MenuOpen}
                  handleMenuChange={handleMenuChange}
                  handleTemaChange={handleTemaChange}
                ></Home>
              }
            ></Route>
            <Route
              path="/entropia/nosotros"
              element={<Nosotros tema={tema}></Nosotros>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
