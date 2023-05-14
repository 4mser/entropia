import styled from "styled-components";
import { Link } from "react-router-dom";

const Ciencia = ({ tema }) => {
  return (
    <Container>
      <Link
        className="link span"
        to="/entropia/contenido/geometria-fractal"
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

      <Link
        className="link"
        to="/entropia/contenido/proporcion-aurea"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://images.unsplash.com/photo-1448454050639-2f8d4bf26975?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Proporción Aurea</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>

      <Link
        className="link"
        to="/entropia/contenido/teoria-caos"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://www.researchgate.net/profile/Michael-Wilkinson-20/publication/2262087/figure/fig1/AS:669430333849603@1536616037553/An-example-of-the-fractal-shape-of-a-strange-attractor-the-Lorenz-attractor-which-may_Q640.jpg"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Teoría del Caos</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>

      <Link
        className="link span"
        to="/entropia/contenido/teoria-caos"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://www.astrobitacora.com/wp-content/uploads/2017/10/cuerda.jpg"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Teoría de cuerdas</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>

      <Link
        className="link"
        to="/entropia/contenido/agujeros-negros"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://media.wired.com/photos/5cadec1fb75f9b23c6466d74/4:3/w_1864,h_1398,c_limit/blackhole.jpg"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Agujeros Negros</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>
    </Container>
  );
};

export default Ciencia;

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
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--blackColor)"};
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
