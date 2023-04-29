import styled from "styled-components";

const Proyectos = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        position: "absolute",
        top: "25rem",
        left: "0",
        color: "var(--whiteColor)",
        padding: "1.2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            fontWeight: "100",
            color: "white",
          }}
        >
          Áreas
        </h3>
        <p
          style={{
            fontSize: ".7rem",
          }}
        >
          Ver todas
        </p>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
        }}
      >
        <AreasContainer>
          <AreaBox>Diseño</AreaBox>

          <AreaBox>Desarrollo de Software</AreaBox>

          <AreaBox>Neurociencias</AreaBox>
        </AreasContainer>
      </div>
    </div>
  );
};

export default Proyectos;

const AreasContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding-top: 1rem;
`;

const AreaBox = styled.div`
  width: 11rem;
  height: 14rem;
  background: var(--blackColor);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: end;
  padding: 0.5rem;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 0.7rem;
  border-radius: 2px;
  overflow: hidden;

  p {
    bottom: 0;
  }

  img {
    width: 35%;
    height: 100%;
    object-fit: cover;
  }
`;
