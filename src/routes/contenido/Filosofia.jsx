import { Link } from "react-router-dom";

import {
  Container,
  RecomendadosBox,
  ProyectoImage,
  ProyectoAbout,
} from "../../styles/ContenidoStyle";

const Filosofia = ({ tema }) => {
  return (
    <Container>
      <Link
        className="link span"
        to="/entropia/contenido/universos-paralelos"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://www.milenio.com/uploads/media/2020/05/20/universo-paralelo.jpg"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Universos Paralelos y Dimensiones Extra</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>

      <Link
        className="link"
        to="/entropia/contenido/codigo-creativo"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://th.bing.com/th/id/OIP.Z_hrIzHLWjaKCVTk2RqThwHaEK?pid=ImgDet&rs=1"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Viajes en el Tiempo</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>

      <Link
        className="link"
        to="/entropia/contenido/codigo-creativo"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img
              src="https://th.bing.com/th/id/OIP.u8dMbWWsZPleaf1-UBTjxgHaEK?pid=ImgDet&rs=1"
              alt=""
            />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Teoría del Universo Simulado</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>
    </Container>
  );
};

export default Filosofia;
