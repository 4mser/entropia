import { Link } from "react-router-dom";

import {
  Container,
  RecomendadosBox,
  ProyectoImage,
  ProyectoAbout,
} from "../../styles/ContenidoStyle";

const Creatividad = ({ tema }) => {
  return (
    <Container tema={tema}>
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
