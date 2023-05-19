import { Link } from "react-router-dom";
import {
  Container,
  RecomendadosBox,
  ProyectoImage,
  ProyectoAbout,
} from "../../styles/ContenidoStyle";

const Organizacion = ({ tema }) => {
  return (
    <Container>
      <Link
        className="link span"
        to="/entropia/contenido/codigo-creativo"
        style={{ textDecoration: "none" }}
      >
        <RecomendadosBox tema={tema}>
          <ProyectoImage>
            <img src="https://appentropia.s3.amazonaws.com/notion.jpg" alt="" />
          </ProyectoImage>
          <ProyectoAbout tema={tema}>
            <h3>Guía de organización en Notion</h3>
          </ProyectoAbout>
        </RecomendadosBox>
      </Link>
    </Container>
  );
};

export default Organizacion;
