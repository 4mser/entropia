//Rutas
import { Link } from "react-router-dom";

//Estilos
import {
  Container,
  Titulo,
  SubContainer,
  ProyectoAbout,
  ProyectoImage,
  AreasContainer,
  ProyectosBox,
} from "../styles/ProyectosStyle";

const Proyectos = ({ tema }) => {
  return (
    <Container>
      <Titulo tema={tema}>
        <h3>Proyectos principales</h3>
        {/* <Link to="/entropia/contenido/" style={{ textDecoration: "none" }}>
          <p>Ver todo</p>
        </Link> */}
      </Titulo>
      <SubContainer>
        <AreasContainer tema={tema}>
          <Link to="/entropia/deep-eye/" style={{ textDecoration: "none" }}>
            <ProyectosBox tema={tema}>
              <ProyectoImage>
                <img
                  src="https://appentropia.s3.amazonaws.com/img-eye.jpg"
                  alt=""
                  className="img-deep-eye"
                />
              </ProyectoImage>
              <ProyectoAbout className="about" tema={tema}>
                <img
                  src="https://appentropia.s3.amazonaws.com/DeepEye-03.jpg"
                  alt=""
                  className="img-chiquita"
                />
                <div>
                  <h3>Deep Eye</h3>
                  <p>6 Integrantes</p>
                </div>
              </ProyectoAbout>
            </ProyectosBox>
          </Link>

          <Link to="/entropia/cultibox/" style={{ textDecoration: "none" }}>
            <ProyectosBox tema={tema}>
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
              <ProyectoAbout className="about" tema={tema}>
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
            <ProyectosBox tema={tema}>
              <ProyectoImage>
                {/* <img
                  src="https://appentropia.s3.amazonaws.com/cultibox-web_Mesa+de+trabajo+1-01.png"
                  alt=""
                /> */}
                <img
                  src="https://image.lexica.art/full_jpg/447cfdaa-dccd-4c2c-86d5-8e922aa368eb"
                  alt=""
                />
              </ProyectoImage>
              <ProyectoAbout className="about" tema={tema}>
                <img
                  src="https://image.lexica.art/full_jpg/1ec65c85-ffc2-4a00-944c-cdfd952e8d8d"
                  alt=""
                  className="img-chiquita"
                />
                <div>
                  <h3>S.P.I.R.I.T</h3>
                  <p>5 Integrantes</p>
                </div>
              </ProyectoAbout>
            </ProyectosBox>
          </Link>

          <div className="espacio">.</div>
        </AreasContainer>
      </SubContainer>
    </Container>
  );
};

export default Proyectos;
