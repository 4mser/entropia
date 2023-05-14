import { Link } from "react-router-dom";

import styled from "styled-components";

const Recomendados = ({ tema }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        paddingTop: "15.5rem",
        left: "0",
        color: "var(--whiteColor)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.2rem",
        }}
      >
        <h3
          style={{
            fontWeight: "100",
            color: tema === "dark" ? "white" : "black",
          }}
        >
          Contenido recomendado
        </h3>
        <Link to="/entropia/contenido/" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: ".7rem",
              color:
                tema === "dark"
                  ? "var(--colorSecundario)"
                  : "var(--blackColor)",
              opacity: ".6",
            }}
          >
            Ver todo
          </p>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "1.2rem",
        }}
      >
        <AreasContainer tema={tema}>
          <Link
            to="/entropia/contenido/codigo-creativo"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox tema={tema}>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/black-equation-math-numbers.jpg"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout tema={tema}>
                <h3>Código Creativo</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/contenido/hacking-etico"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox tema={tema}>
              <ProyectoImage>
                <img
                  src="https://th.bing.com/th/id/R.0970e5a9612e3b8610db9cc52d3f0379?rik=KorjIaDNP9NV4Q&pid=ImgRaw&r=0"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout tema={tema}>
                <h3>Hacking Ético</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/contenido/astrofotografia"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox tema={tema}>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/astro.jpg"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout tema={tema}>
                <h3>Astrofotografía</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/contenido/impresion3d"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox tema={tema}>
              <ProyectoImage>
                <img src="https://appentropia.s3.amazonaws.com/3d.jpg" alt="" />
              </ProyectoImage>
              <ProyectoAbout tema={tema}>
                <h3>Impresión 3D</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/contenido/python"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox tema={tema}>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/python.jpg"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout tema={tema}>
                <h3>Python</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/contenido/geometría-fractal"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox tema={tema}>
              <ProyectoImage>
                <img
                  src="https://th.bing.com/th/id/R.7cd2ee20e9aa420a56d2f5ea1bbb9aea?rik=SNwwzjUmIkngBQ&pid=ImgRaw&r=0"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout tema={tema}>
                <h3>Geometría Fractal</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link to="/entropia/contenido/" style={{ textDecoration: "none" }}>
            <RecomendadosBox tema={tema}>
              <h2>Ver Todo</h2>
            </RecomendadosBox>
          </Link>

          <div className="espacio">.</div>
        </AreasContainer>
      </div>
    </div>
  );
};

export default Recomendados;

const AreasContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  .espacio {
    width: 1.2rem;
    transition: 0.7s;
    height: 2rem;
    background: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
    color: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  }
`;

const RecomendadosBox = styled.div`
  width: 15rem;
  height: 10rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--colorBoxLight)"};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
  margin-right: 1rem;
  flex-shrink: 0;
  position: relative;
  transition: 0.3s;
  font-size: 0.7rem;
  border-radius: 5px;
  overflow: hidden;

  h2 {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
  }

  :hover {
    box-shadow: 0px 1px 10px -5px black;
    filter: brightness(1.3);
  }
  p {
    bottom: 0;
  }

  img {
    width: 100%;
    top: 0;
    height: 100%;
    object-fit: contain;
  }
`;

const ProyectoImage = styled.div`
  width: 100%;
  height: 12rem;

  overflow: hidden;

  :hover img {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: 0.3s;
  }
`;

const ProyectoAbout = styled.div`
  width: 100%;
  position: relative;
  height: 4rem;
  overflow: hidden;
  color: ${(props) => (props.tema === "dark" ? "var(--whiteColor)" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s;

  h3 {
    font-weight: 400;
  }
`;
