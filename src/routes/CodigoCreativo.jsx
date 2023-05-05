import styled from "styled-components";

styled;

const CodigoCreativo = ({ tema }) => {
  return (
    <AstroContainer tema={tema}>
      <img
        src="https://inteng-storage.s3.amazonaws.com/img/iea/nWOVjeWROo/sizes/creativecoding2_resize_md.jpg"
        alt=""
      />
      <p>
        El código creativo es el acto de utilizar software de programación para
        crear obras de arte, diseño, arquitectura, moda o visualización de datos
        didácticos e interactivos.
        <br />
        Es simplemente el arte de crear visualizaciones o expresiones.
        Tradicionalmente, la codificación se centra en crear algo funcional.
      </p>

      <a
        href="https://4mser.github.io/math-art/"
        target="__blank"
        style={{ textDecoration: "none" }}
      >
        <CodigoEnlace>
          <img src="https://appentropia.s3.amazonaws.com/mathart.jpg" alt="" />
        </CodigoEnlace>
      </a>
    </AstroContainer>
  );
};

export default CodigoCreativo;

const AstroContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 6rem 1.2rem;

  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    margin-bottom: 1rem;
  }
`;

const CodigoEnlace = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
`;
