import styled from "styled-components";
import { Link } from "react-router-dom";

const Creatividad = ({ tema }) => {
  return (
    <Container>
      <Link
        className="link span"
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
        className="link"
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
        className="link"
        to="/entropia/contenido/astrofotografia"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img src="https://appentropia.s3.amazonaws.com/astro.jpg" alt="" />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Astrofotografía</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>

      <Link
        className="link span"
        to="/entropia/contenido/figma"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://th.bing.com/th/id/OIP.meNsDCTbNJIA2WvuAq68XAHaFj?pid=ImgDet&rs=1"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Diseño UX/UI en Figma</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>
    </Container>
  );
};

export default Creatividad;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  .link {
    width: calc(50% - 1rem);
    transform: translateX(0.5rem);
  }

  .span {
    width: calc(100% - 1rem);
  }
`;

const RecomendadosBox = styled.div`
  width: 100%;
  height: 10rem;
  background: var(--blackColor);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
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
    text-align: center;
  }
`;
