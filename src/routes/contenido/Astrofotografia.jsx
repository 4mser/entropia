import styled from "styled-components";

styled;

const Astrofotografia = ({ tema }) => {
  return (
    <AstroContainer tema={tema}>
      <img src="https://appentropia.s3.amazonaws.com/astro.jpg" alt="" />
      <p>
        La Astrofotografía es el arte de capturar imágenes impresionantes de
        objetos celestes utilizando equipos y técnicas especializadas.
        <br />
        Desde capturar la belleza del cielo nocturno hasta los detalles
        intrincados de los planetas, la astrofotografía nos permite explorar el
        universo de una manera interactiva y con resultados asombrosos.
      </p>
    </AstroContainer>
  );
};

export default Astrofotografia;

const AstroContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 6rem 1.2rem;

  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;
4;
