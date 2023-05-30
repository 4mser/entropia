import { Container } from "../styles/FooterStyle";

const Footer = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://appentropia.s3.amazonaws.com/EOA-PNG.png"
        alt="EOA-LOGO"
      />
      <p>©2023 ENTROPÍA - TODOS LOS DERECHOS RESERVADOS</p>
    </Container>
  );
};

export default Footer;
