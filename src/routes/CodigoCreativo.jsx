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
          </Link>
        </div>

        <div className="ejemplosCodigoCreativo">
          <Link
            to="https://4mser.github.io/fluctuaciones/spaceTime.html"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <img src="https://appentropia.s3.amazonaws.com/fluc.jpg" alt="" />
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
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .bannerImg {
    width: 100%;
    margin-bottom: 1rem;
  }

  .ejemplosCodigoCreativo {
    width: 48%;
    border-radius: 5px;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
