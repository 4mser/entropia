import styled from "styled-components";
import FixlyCarrusel from "../components/FixlyCarrusel";
import DECarrusel2 from "../components/DECarrusel2";

const Fixly = ({ tema }) => {
  return (
    <Container
      tema={tema}
      style={{
        paddingTop: "5rem",
      }}
    >
      <FixlyCarrusel tema={tema}></FixlyCarrusel>
      <br />
      <p>
        Fixly es una ferretería en línea innovadora que está transformando la
        experiencia del bricolaje.
        <br />
        Nos enfocamos en la autonomía de nuestros clientes al proporcionarles
        soluciones inteligentes e innovadoras a través de nuestra plataforma
        potenciada con Inteligencia Artificial.
        <br />
        En Fixly, creemos que todos pueden aprender y resolver problemas del día
        a día en el hogar de manera eficiente, y es por eso que hemos creado una
        experiencia de compra única que brinda a nuestros clientes la confianza
        necesaria para abordar estos desafíos. Con el uso de tecnologías
        inteligentes, ofrecemos recomendaciones personalizadas y respuestas a
        cualquier pregunta relacionada con el bricolaje.
      </p>
      <br />
      <h2>Galería</h2>
      <DECarrusel2 tema={tema}></DECarrusel2>
      <br />
    </Container>
  );
};

export default Fixly;

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
