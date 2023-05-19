import { useState } from "react";

//Rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes
import Nav from "./components/Nav";
import Bg from "./components/Bg";
import Menu from "./components/Menu";
// import Buscador from "./components/Buscador";

import Home from "./routes/Home";
import Nosotros from "./routes/Nosotros";
import Cultibox from "./routes/Cultibox";
import DeepEye from "./routes/DeepEye";
import Fixly from "./routes/Fixly";
import Synthropia from "./routes/Synthropia";
import Contenido from "./routes/Contenido";
import MovieSearch from "./components/MovieSearch";
import ScrollToTop from "./components/ScrollToTop";
import Astrofotografia from "./routes/contenido/Astrofotografia";
import CodigoCreativo from "./routes/contenido/CodigoCreativo";
import HackingEtico from "./routes/contenido/HackingEtico";
import Impresion3d from "./routes/contenido/Impresion3d";
import GeometriaFractal from "./routes/contenido/GeometriaFractal";
import Python from "./routes/contenido/Python";
// import NosotrosTest from "./routes/NosotrosTest";

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
          <ScrollToTop></ScrollToTop>
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

            <Route
              path="/entropia/cultibox"
              element={<Cultibox tema={tema}></Cultibox>}
            ></Route>

            <Route
              path="/entropia/deep-eye"
              element={<DeepEye tema={tema}></DeepEye>}
            ></Route>

            <Route
              path="/entropia/fixly"
              element={<Fixly tema={tema}></Fixly>}
            ></Route>

            <Route
              path="/entropia/contenido/"
              element={<Contenido tema={tema}></Contenido>}
            ></Route>

            <Route
              path="/entropia/contenido/astrofotografia"
              element={<Astrofotografia tema={tema}></Astrofotografia>}
            ></Route>

            <Route
              path="/entropia/contenido/codigo-creativo"
              element={<CodigoCreativo tema={tema}></CodigoCreativo>}
            ></Route>

            <Route
              path="/entropia/synthropia"
              element={<Synthropia tema={tema}></Synthropia>}
            ></Route>

            <Route
              path="/entropia/contenido/hacking-etico"
              element={<HackingEtico tema={tema}></HackingEtico>}
            ></Route>

            <Route
              path="/entropia/contenido/impresion3d"
              element={<Impresion3d tema={tema}></Impresion3d>}
            ></Route>

            <Route
              path="/entropia/contenido/python"
              element={<Python tema={tema}></Python>}
            ></Route>

            <Route
              path="/entropia/contenido/geometria-fractal"
              element={<GeometriaFractal tema={tema}></GeometriaFractal>}
            ></Route>

            <Route
              path="/entropia/buscador-pelis"
              element={<MovieSearch tema={tema}></MovieSearch>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
