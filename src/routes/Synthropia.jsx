import styled from "styled-components";
import DECarrusel from "../components/DECarrusel";
import DECarrusel2 from "../components/DECarrusel2";

const Synthropia = ({ tema }) => {
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
        Synthropia es un proyecto dedicado al estudio y cultivo Sintrópico
        Nativo
      </p>
      <br />
      <h2>Galería</h2>
      <DECarrusel2 tema={tema}></DECarrusel2>
      <br />
    </Container>
  );
};

export default Synthropia;

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
