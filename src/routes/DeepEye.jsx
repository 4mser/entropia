import styled from "styled-components";
import DECarrusel from "../components/DECarrusel";
import DECarrusel2 from "../components/DECarrusel2";

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
      <Boton>
        <a href="https://4mser.github.io/deep-eye/" target="__blank">
          <button>Ir a Deep Eye</button>
        </a>
      </Boton>
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

const Boton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  a {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
  }

  button {
    width: 100%;
    padding: 1rem;
    border: none;
    background: var(--encabezado1);
    border-radius: 5px;
    color: white;
    transition: 0.2s;
    box-shadow: 0 2px 6px -3px black;
  }

  button:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
`;
