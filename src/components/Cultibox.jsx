import styled from "styled-components";
import CultiboxCarrusel from "./CultiboxCarrusel";
import CultiboxCarrusel2 from "./CultiboxCarrusel2";

const Cultibox = ({ tema }) => {
  return (
    <Container
      tema={tema}
      style={{
        paddingTop: "5rem",
      }}
    >
      <CultiboxCarrusel tema={tema}></CultiboxCarrusel>
      <br />
      <p>
        Cultibox es un proyecto enfocado en la optimización del auto-sustento
        alimenticio.
      </p>
      <p>
        En su primera etapa, hemos desarrollado una huerta vertical que
        aprovecha al máximo el espacio de cultivo vertical, utilizando
        materiales reciclados como bandejas plásticas y cartón, ofreciendo una
        solución innovadora y sostenible que tiene el potencial de revolucionar
        la forma en que las personas cultivan sus propios alimentos en un
        espacio reducido.
      </p>
      <p>
        Como siguiente etapa viene el desarrollo de la automatización de esta
        huerta. Gracias a la tecnología de sensores e inteligencia artificial,
        esta huerta puede llegar a dar información precisa y detallada sobre el
        estado de cada planta y sobre cómo ciertas plantas benefician a otras en
        un sistema de{" "}
        <span style={{ color: "var(--colorEntropia)" }}>
          Cultivo Sintrópico
        </span>
        , generando bases de datos de uso científico para la comprensión de
        ecosistemas nativos.
      </p>
      <br />
      <h2>Galería</h2>
      <CultiboxCarrusel2 tema={tema}></CultiboxCarrusel2>
      <br />
    </Container>
  );
};

export default Cultibox;

const Container = styled.div`
  p {
    font-size: 0.8rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    padding: 0 1.2rem;
  }
  h2 {
    font-size: 1rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    padding: 0 1.2rem;
  }
`;

const ShadowBanner = styled.div`
  width: 100%;
  height: 4rem;
  background: var(--shadowBanner);
  filter: ${(props) => (props.tema === "dark" ? "" : "invert(1)")};
  position: absolute;
  transform: translateY(16rem);
  transition: 0.7s;
`;
