import styled from "styled-components";
import DECarrusel from "./DECarrusel";
import DECarrusel2 from "./DECarrusel2";

const DeepEye = ({ tema }) => {
  return (
    <Container
      tema={tema}
      style={{
        paddingTop: "5rem",
      }}
    >
      <DECarrusel tema={tema}></DECarrusel>
      <br />
      <p>
        Deep Eye es una plataforma dedicada a la investigación y reflexión sobre
        la mente humana y los estados alterados de conciencia.
      </p>
      <p>
        Aboga por la reducción de riesgos asociados al consumo de sustancias
        psicoáctivas, analizando los datos de las experiencias de los usuarios
        para una comprensión más profunda y empírica de sus efectos.
      </p>
      <br />
      <h2>Galería</h2>
      <DECarrusel2 tema={tema}></DECarrusel2>
      <br />
    </Container>
  );
};

export default DeepEye;

const Container = styled.div`
  p {
    font-size: 1rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    padding: 0 1.2rem;
  }
  h2 {
    font-size: 1rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    padding: 0 1.2rem;
  }
`;
