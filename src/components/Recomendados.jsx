import { Link } from "react-router-dom";

import styled from "styled-components";

import {
  Container,
  Titulo,
  SubContainer,
  AreasContainer,
  RecomendadosBox,
  ProyectoImage,
  ProyectoAbout,
} from "../styles/RecomendadosStyle";

const Recomendados = ({ tema }) => {
  return (
    <Container>
      <Titulo tema={tema}>
        <h3>Contenido recomendado</h3>
        <Link to="/entropia/contenido/" style={{ textDecoration: "none" }}>
          <p>Ver todo</p>
        </Link>
      </Titulo>
      <SubContainer>
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

          <Link
            to="/entropia/contenido/viajes-temporales"
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
            to="/entropia/contenido/"
            style={{ textDecoration: "none" }}
            className="ver-todo-contenido"
          >
            <RecomendadosBox tema={tema}>
              <h2>Ver Todo</h2>
            </RecomendadosBox>
          </Link>

          <div className="espacio">.</div>
        </AreasContainer>
      </SubContainer>
    </Container>
  );
};

export default Recomendados;
