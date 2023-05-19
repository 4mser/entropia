import styled from "styled-components";

import { Link } from "react-router-dom";

styled;

const CodigoCreativo = ({ tema }) => {
  return (
    <AstroContainer tema={tema}>
      <img
        src="https://inteng-storage.s3.amazonaws.com/img/iea/nWOVjeWROo/sizes/creativecoding2_resize_md.jpg"
        alt=""
        className="bannerImg"
      />
      <p>
        El código creativo es el acto de utilizar software de programación para
        crear obras de arte, diseño, arquitectura, moda o visualización de datos
        didácticos e interactivos.
        <br />
        Es simplemente el arte de crear visualizaciones o expresiones.
        Tradicionalmente, la codificación se centra en crear algo funcional.
      </p>
      <br />
      <h3>Ejemplos:</h3>
      <br />
      <div className="codigoContainer">
        <div className="ejemplosCodigoCreativo">
          <Link
            to="https://4mser.github.io/math-art/"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://appentropia.s3.amazonaws.com/mathart.jpg"
              alt=""
            />
            <p>Iniciar</p>
          </Link>
        </div>

        <div className="ejemplosCodigoCreativo">
          <Link
            to="https://4mser.github.io/fluctuaciones/spaceTime.html"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <img src="https://appentropia.s3.amazonaws.com/fluc.jpg" alt="" />
            <p>Iniciar</p>
          </Link>
        </div>
      </div>
    </AstroContainer>
  );
};

export default CodigoCreativo;

const AstroContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 6rem 1.2rem;

  .codigoContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .bannerImg {
    width: 100%;
    margin-bottom: 1rem;
  }

  .ejemplosCodigoCreativo {
    width: 100%;
    border-radius: 5px;
    height: 12rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    align-items: center;

    :hover img {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
      transition: 0.3s;
      object-fit: cover;
    }

    p {
      position: absolute;
      width: 100%;
      padding: 0.3rem;
      text-align: center;
      bottom: -1rem;
      user-select: none;
      color: white;
      background: var(--colorEntropia);
      font-size: 0.8rem;
    }
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;
