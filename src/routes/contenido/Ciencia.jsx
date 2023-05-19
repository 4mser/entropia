import { Link } from "react-router-dom";

import {
  Container,
  RecomendadosBox,
  ProyectoImage,
  ProyectoAbout,
} from "../../styles/ContenidoStyle";

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
