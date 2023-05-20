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

//Estilos
import {
  Container,
  Titulo,
  SubContainer,
  AreasContainer,
  AreaBox,
} from "../styles/AreasStyle";

const Areas = ({ tema }) => {
  return (
    <Container tema={tema}>
      <Titulo tema={tema}>
        <h3>Áreas de interés</h3>
      </Titulo>
      <SubContainer>
        <AreasContainer tema={tema}>
          <AreaBox tema={tema}>
            Web & Software
            <Lottie animationData={codificacion} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Inteligencia Artificial
            <Lottie animationData={robot} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Diseño UX/UI
            <Lottie animationData={diseñoAnimado} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Física y Astronomía
            <Lottie animationData={blackhole} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Automatización y robótica
            <Lottie animationData={brazorobotico} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Internet de las cosas
            <Lottie animationData={iot} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Neurociencia
            <Lottie animationData={psychology} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Autosustentabilidad
            <Lottie animationData={ecology} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            Cultivo Sintrópico
            <Lottie animationData={sintropico} className="icono-animado" />
          </AreaBox>

          <div className="espacio">.</div>
        </AreasContainer>
      </SubContainer>
    </Container>
  );
};

export default Areas;
