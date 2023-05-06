//Rutas
import { Link } from "react-router-dom";

//Estilos
import styled from "styled-components";

const Proyectos = ({ tema }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        paddingTop: "9rem",
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
          Nuestros proyectos
        </h3>
        {/* <p
          style={{
            fontSize: ".7rem",
            color:
              tema === "dark" ? "var(--colorSecundario)" : "var(--blackColor)",
            opacity: ".6",
          }}
        >
          Ver todos
        </p> */}
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "1.2rem",
        }}
      >
        <AreasContainer tema={tema}>
          <Link to="/entropia/deep-eye/" style={{ textDecoration: "none" }}>
            <ProyectosBox>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/img-eye.jpg"
                  alt=""
                  className="img-deep-eye"
                />
              </ProyectoImage>
              <ProyectoAbout className="about">
                <img
                  src="https://appentropia.s3.amazonaws.com/DeepEye-03.jpg"
                  alt=""
                  className="img-chiquita"
                />
                <div>
                  <h3>Deep Eye</h3>
                  <p>5 Integrantes</p>
                </div>
              </ProyectoAbout>
            </ProyectosBox>
          </Link>

          <Link to="/entropia/cultibox/" style={{ textDecoration: "none" }}>
            <ProyectosBox>
              <ProyectoImage>
                {/* <img
                  src="https://appentropia.s3.amazonaws.com/cultibox-web_Mesa+de+trabajo+1-01.png"
                  alt=""
                /> */}
                <img
                  src="https://appentropia.s3.amazonaws.com/cultibox.png"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout className="about">
                <img
                  src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-07.png"
                  alt=""
                  className="img-chiquita"
                />
                <div>
                  <h3>Cultibox</h3>
                  <p>3 Integrantes</p>
                </div>
              </ProyectoAbout>
            </ProyectosBox>
          </Link>

          <Link to="/entropia/fixly/" style={{ textDecoration: "none" }}>
            <ProyectosBox>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/carritoAI2.jpg"
                  alt=""
                  className="imgFixly"
                  style={{
                    filter: "brightness(1.15) hue-rotate(-8deg)",
                  }}
                />
              </ProyectoImage>
              <ProyectoAbout className="about">
                <img
                  src="https://appentropia.s3.amazonaws.com/test-fixly-llave-06.jpg"
                  alt=""
                  className="img-chiquita"
                />
                <div>
                  <h3>Fixly</h3>
                  <p>2 Integrantes</p>
                </div>
              </ProyectoAbout>
            </ProyectosBox>
          </Link>

          <Link to="/entropia/synthropia/" style={{ textDecoration: "none" }}>
            <ProyectosBox>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/logo_Mesa+de+trabajo+1-02.png"
                  alt=""
                  className="imgFixly"
                  style={{
                    filter: "brightness(1.15) hue-rotate(-8deg)",
                  }}
                />
              </ProyectoImage>
              <ProyectoAbout className="about">
                <img
                  src="https://appentropia.s3.amazonaws.com/logo_Mesa+de+trabajo+1-01.png"
                  alt=""
                  className="img-chiquita"
                />
                <div>
                  <h3>Synthropia</h3>
                  <p>7 Integrantes</p>
                </div>
              </ProyectoAbout>
            </ProyectosBox>
          </Link>

          <div className="espacio">.</div>
        </AreasContainer>
      </div>
    </div>
  );
};

export default Proyectos;

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

const ProyectosBox = styled.div`
  width: 23rem;
  height: 12rem;
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

  :hover .about {
    background: #232323;
    filter: brightness(1.3022);
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

  .img-chiquita {
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    left: 0;
    border-radius: 50%;
    z-index: 2;
    border: 3px solid var(--whiteColor);
  }

  :hover .img-chiquita {
    border: 3px solid var(--colorEntropia);
  }
`;

const ProyectoImage = styled.div`
  width: 100%;
  height: 70%;
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

  .img-deep-eye {
    width: 104%;
  }
`;

const ProyectoAbout = styled.div`
  width: 100%;
  position: relative;
  height: 30%;
  overflow: hidden;
  color: var(--whiteColor);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.4rem;
  gap: 0.5rem;
  flex-direction: row;

  h3 {
    color: #ffffffe8;
    font-size: 0.9rem;
    font-weight: 500;
  }

  p {
    font-size: 0.7rem;
  }
`;
