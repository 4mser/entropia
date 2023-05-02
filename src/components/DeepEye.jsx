import styled from "styled-components";

const DeepEye = ({ tema }) => {
  return (
    <Container
      tema={tema}
      style={{
        paddingTop: "5rem",
      }}
    >
      {/* <DeepEyeBanner tema={tema}>
        <div className="logoBanner">
          <img
            src="https://appentropia.s3.amazonaws.com/DELOGO-10.png"
            alt=""
          />
        </div>
      </DeepEyeBanner> */}
      <div
        style={{
          width: "100%",
          height: "9rem",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            width: "106%",
            height: "120%",
            objectFit: "cover",
          }}
          src="https://appentropia.s3.amazonaws.com/img-eye.jpg"
          alt=""
        />
        <ShadowBanner tema={tema}></ShadowBanner>
      </div>
      <p>
        Deep Eye es una plataforma dedicada a la investigación y reflexión sobre
        la mente humana y los estados alterados de conciencia.
      </p>
      <p>
        Abogando por reducir riesgos asociados al uso indebido de sustancias
        psicoactivas
      </p>
    </Container>
  );
};

export default DeepEye;

const Container = styled.div`
  p {
    font-size: 0.8rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    padding: 0 1.2rem;
  }
`;

const ShadowBanner = styled.div`
  width: 100%;
  height: 4rem;
  background: var(--shadowBanner);
  filter: ${(props) => (props.tema === "dark" ? "" : "invert(1)")};
  position: absolute;
  transform: translateY(5rem);
  transition: 0.7s;
`;

const DeepEyeBanner = styled.div`
  width: 100%;
  color: white;
  display: flex;
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .logoBanner {
    width: 100%;
    height: 5rem;
    padding: 0.8rem 1.4rem;
    background: var(--encabezado2);
    display: flex;
    justify-content: flex-start;

    img {
      height: 100%;
      object-fit: contain;
    }
  }
`;
