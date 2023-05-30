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
            <p>Web & Software</p>
            <Lottie animationData={codificacion} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Inteligencia Artificial</p>
            <Lottie animationData={robot} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Diseño UX/UI</p>
            <Lottie animationData={diseñoAnimado} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Física y Astronomía</p>
            <Lottie animationData={blackhole} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Robótica</p>
            <Lottie animationData={brazorobotico} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Internet de las cosas</p>
            <Lottie animationData={iot} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Neurociencia</p>
            <Lottie animationData={psychology} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Autosustentabilidad</p>
            <Lottie animationData={ecology} className="icono-animado" />
          </AreaBox>

          <AreaBox tema={tema}>
            <p>Cultivo Sintrópico</p>
            <Lottie animationData={sintropico} className="icono-animado" />
          </AreaBox>

          <div className="espacio">.</div>
        </AreasContainer>
      </SubContainer>
    </Container>
  );
};

export default Areas;
