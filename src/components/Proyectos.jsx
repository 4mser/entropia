import styled from "styled-components";

const Proyectos = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        position: "absolute",
        top: "25.5rem",
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
          Nuestros proyectos
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
          <ProyectosBox>
            <img
              src="https://appentropia.s3.amazonaws.com/DeepEye-07.jpg"
              alt=""
              className="img-chiquita"
            />
            <ProyectoImage>
              <img
                src="https://appentropia.s3.amazonaws.com/logoCompleto-04.png"
                alt=""
              />
            </ProyectoImage>
            <ProyectoAbout>
              <h3>Deep Eye</h3>
              <p>5 Miembros</p>
            </ProyectoAbout>
          </ProyectosBox>

          <ProyectosBox>
            <img
              src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-06.png"
              alt=""
              className="img-chiquita"
            />
            <ProyectoImage>
              <img
                src="https://appentropia.s3.amazonaws.com/cultibox-web_Mesa+de+trabajo+1-01.png"
                alt=""
              />
            </ProyectoImage>
            <ProyectoAbout>
              <h3>Cultibox</h3>
              <p>3 Miembros</p>
            </ProyectoAbout>
          </ProyectosBox>

          <ProyectosBox>
            <img
              src="https://appentropia.s3.amazonaws.com/logo+fixly+positivo.jpg"
              alt=""
              className="img-chiquita"
            />
            <ProyectoImage>
              <img
                src="https://appentropia.s3.amazonaws.com/test-fixly-llave-06.jpg"
                alt=""
              />
            </ProyectoImage>
            <ProyectoAbout>
              <h3>Fixly</h3>
              <p>2 Miembros</p>
            </ProyectoAbout>
          </ProyectosBox>

          <div className="espacio">.</div>
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

  .espacio {
    width: 1.2rem;
    height: 2rem;
    background: var(--bg_dark);
    color: var(--bg_dark);
  }
`;

const ProyectosBox = styled.div`
  width: 11rem;
  height: 16rem;
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

  p {
    bottom: 0;
  }

  img {
    width: 100%;
    top: 0;
    height: 100%;
    object-fit: contain;
  }

  .img-chiquita {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 10.2rem);
    border-radius: 50%;
    z-index: 999;
  }
`;

const ProyectoImage = styled.div`
  width: 100%;
  height: 12rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    z-index: -1;
  }

  img:hover {
    opacity: 1;
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

  h3 {
    margin-top: 0.4rem;
  }

  p {
    margin-top: 0.2rem;
  }
`;
