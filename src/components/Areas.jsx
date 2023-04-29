import Lottie from "lottie-react";
import styled from "styled-components";

//ICONOS ANIMADOS
import diseñoAnimado from "/src/assets/icons/monitor.json";
import codificacion from "/src/assets/icons/codificacion.json";
import robot from "/src/assets/icons/robot.json";
import psychology from "/src/assets/icons/psychology.json";
import ecology from "/src/assets/icons/ecology.json";
import iot from "/src/assets/icons/control-de-luz.json";
import sintropico from "/src/assets/icons/sintropico.json";
import brazorobotico from "/src/assets/icons/brazo-robotico.json";
import blackhole from "/src/assets/icons/blackhole.json";

const Areas = ({ tema }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        top: "16rem",
        paddingTop: "12rem",
        left: "0",
        color: "var(--whiteColor)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.2rem",
        }}
      >
        <h3
          style={{
            fontWeight: "100",
            color: tema === "dark" ? "white" : "black",
          }}
        >
          Áreas
        </h3>
        <p
          style={{
            fontSize: ".7rem",
            color:
              tema === "dark" ? "var(--colorSecundario)" : "var(--blackColor)",
            opacity: ".6",
          }}
        >
          Ver todas
        </p>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "1.2rem",
        }}
      >
        <AreasContainer tema={tema}>
          <AreaBox>
            Diseño UX/UI
            <Lottie animationData={diseñoAnimado} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Desarrollo de Software
            <Lottie animationData={codificacion} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Inteligencia Artificial
            <Lottie animationData={robot} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Neurociencia
            <Lottie animationData={psychology} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Autosustentabilidad
            <Lottie animationData={ecology} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Internet de las cosas
            <Lottie animationData={iot} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Cultivo Sintrópico
            <Lottie animationData={sintropico} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Automatización y robótica
            <Lottie animationData={brazorobotico} className="icono-animado" />
          </AreaBox>

          <AreaBox>
            Física y Astronomía
            <Lottie animationData={blackhole} className="icono-animado" />
          </AreaBox>

          <div className="espacio">.</div>
        </AreasContainer>
      </div>
    </div>
  );
};

export default Areas;

const AreasContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  .espacio {
    width: 1.2rem;
    transition: 0.7s;
    height: 2rem;
    background: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
    color: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  }
`;

const AreaBox = styled.div`
  width: 12rem;
  height: 4.6rem;
  background: var(--blackColor);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 0.7rem;
  border-radius: 5px;

  :hover {
    filter: brightness(1.3);
  }

  .icono-animado {
    width: 4rem;
  }
`;
