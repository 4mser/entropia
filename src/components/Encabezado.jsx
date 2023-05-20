import { Container } from "../styles/EncabezadoStyle";

const Encabezado = ({ tema }) => {
  return (
    <Container tema={tema}>
      <p>
        INVESTIGACIÓN, APLICACIÓN E INNOVACIÓN CIENTÍFICO TECNOLÓGICA <br /> EN
        SIMBIOSIS CON EL MEDIOAMBIENTE
      </p>
    </Container>
  );
};

export default Encabezado;
