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
          Libertad creativa
        </h3>
        <p
          style={{
            fontSize: ".7rem",
            color:
              tema === "dark" ? "var(--colorSecundario)" : "var(--blackColor)",
            opacity: ".6",
          }}
        >
          Ver todos
        </p>
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
            to="/entropia/libertad-creativa/codigo-creativo"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/black-equation-math-numbers.jpg"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout>
                <h3>Código Creativo</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/libertad-creativa/hacking-etico"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox>
              <ProyectoImage>
                <img
                  src="https://th.bing.com/th/id/R.b7953b7856dbcba7873c7a2602f80286?rik=MhSKrhJGEnCuWQ&riu=http%3a%2f%2fwww.renegadetribune.com%2fwp-content%2fuploads%2f2017%2f02%2fmr-robot-hacker.jpg&ehk=20z2dRb0hCnXcXkkoSBfUTkRZDNOv3Rm5diGKimZwII%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout>
                <h3>Hacking Ético</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/libertad-creativa/astrofotografia"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/astro.jpg"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout>
                <h3>Astrofotografía</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/libertad-creativa/impresion3d"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox>
              <ProyectoImage>
                <img src="https://appentropia.s3.amazonaws.com/3d.jpg" alt="" />
              </ProyectoImage>
              <ProyectoAbout>
                <h3>Impresión 3D</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/libertad-creativa/python"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/python.jpg"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout>
                <h3>Python para principiantes</h3>
              </ProyectoAbout>
            </RecomendadosBox>
          </Link>

          <Link
            to="/entropia/libertad-creativa/arduino"
            style={{ textDecoration: "none" }}
          >
            <RecomendadosBox>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/arduino.jpg"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout>
                <h3>Arduino para principiantes</h3>
              </ProyectoAbout>
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
  background: var(--blackColor);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
  margin-right: 1rem;
  flex-shrink: 0;
  position: relative;
  font-size: 0.7rem;
  border-radius: 5px;
  overflow: hidden;

  :hover {
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
  color: var(--whiteColor);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
