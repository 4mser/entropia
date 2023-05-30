import { Container } from "../../styles/TemaStyle";

const Astrofotografia = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://appentropia.s3.amazonaws.com/astro.jpg"
        alt=""
        className="banner-img"
      />
      <p>
        La Astrofotografía es el arte de capturar imágenes impresionantes de
        objetos celestes utilizando equipos y técnicas especializadas.
        <br />
        Desde capturar la belleza del cielo nocturno hasta los detalles
        intrincados de los planetas, la astrofotografía nos permite explorar el
        universo de una manera interactiva y con resultados asombrosos.
      </p>
    </Container>
  );
};

export default Astrofotografia;
