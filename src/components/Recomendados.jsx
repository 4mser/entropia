import styled from "styled-components";

const Recomendados = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        position: "absolute",
        top: "46.5rem",
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
            color: "white",
          }}
        >
          Contenido recomendados
        </h3>
        <p
          style={{
            fontSize: ".7rem",
          }}
        >
          Ver todos
        </p>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "1.2rem",
        }}
      >
        <AreasContainer>
          <RecomendadosBox>
            <ProyectoImage>
              <img
                src="https://appentropia.s3.amazonaws.com/astro.jpg"
                alt=""
              />
            </ProyectoImage>
            <ProyectoAbout>
              <h3>Astrofotografía</h3>
            </ProyectoAbout>
          </RecomendadosBox>

          <RecomendadosBox>
            <ProyectoImage>
              <img
                src="https://appentropia.s3.amazonaws.com/black-equation-math-numbers.jpg"
                alt=""
              />
            </ProyectoImage>
            <ProyectoAbout>
              <h3>Código Creativo</h3>
            </ProyectoAbout>
          </RecomendadosBox>

          <RecomendadosBox>
            <ProyectoImage>
              <img
                src="https://appentropia.s3.amazonaws.com/python.jpg"
                alt=""
              />
            </ProyectoImage>
            <ProyectoAbout>
              <h3>Python</h3>
            </ProyectoAbout>
          </RecomendadosBox>

          <RecomendadosBox>
            <ProyectoImage>
              <img
                src="https://appentropia.s3.amazonaws.com/arduino.jpg"
                alt=""
              />
            </ProyectoImage>
            <ProyectoAbout>
              <h3>Arduino</h3>
            </ProyectoAbout>
          </RecomendadosBox>

          <div className="espacio">.</div>
        </AreasContainer>
      </div>
      <div className="spaceBottom"></div>
    </div>
  );
};

export default Recomendados;

const AreasContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  .espacio {
    width: 1.2rem;
    height: 2rem;
    background: var(--bg_dark);
    color: var(--bg_dark);
  }
`;

const RecomendadosBox = styled.div`
  width: 15rem;
  height: 10rem;
  background: var(--blackColor);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
  margin-right: 1rem;
  flex-shrink: 0;
  position: relative;
  font-size: 0.7rem;
  border-radius: 5px;
  overflow: hidden;

  :hover {
    filter: brightness(1.3);
  }
  p {
    bottom: 0;
  }

  img {
    width: 100%;
    top: 0;
    height: 100%;
    object-fit: contain;
  }
`;

const ProyectoImage = styled.div`
  width: 100%;
  height: 12rem;

  overflow: hidden;

  :hover img {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: 0.3s;
  }
`;

const ProyectoAbout = styled.div`
  width: 100%;
  position: relative;
  height: 4rem;
  overflow: hidden;
  color: var(--whiteColor);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
