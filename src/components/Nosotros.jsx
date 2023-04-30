import styled from "styled-components";

const Nosotros = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "5rem",
        padding: "7rem 1.2rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <CartaEmpleado>
        <FotoEmpleado>
          <img src="src/assets/nicolasMoreno.jpeg" alt="" />
        </FotoEmpleado>

        <InfoEmpleado>
          <h3>Nicolás Moreno</h3>
          <h4>Fundador</h4>
          <p>Estudiante de Ingeniería Informática</p>
        </InfoEmpleado>
      </CartaEmpleado>

      <CartaEmpleado>
        <FotoEmpleado>
          <img src="src/assets/pipa.png" alt="" />
        </FotoEmpleado>

        <InfoEmpleado>
          <h3>Pipazo Don Pipa Pipael</h3>
          <h4>Gerente de ventas</h4>
          <p>Físico Nuclear MIAUACH</p>
        </InfoEmpleado>
      </CartaEmpleado>
    </div>
  );
};

export default Nosotros;

export const CartaEmpleado = styled.div`
  width: calc(50% - 0.5rem);
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  background: var(--blackColor);
  color: white;
`;

const FotoEmpleado = styled.div`
  width: 100%;
  height: 14rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoEmpleado = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0.4rem;

  h3 {
    font-size: 1rem;
    font-weight: 700;
  }

  h4 {
    font-weight: 400;
    padding: 0.2rem 0 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    opacity: 0.7;
  }
`;
