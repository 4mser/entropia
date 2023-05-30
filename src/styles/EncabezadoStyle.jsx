import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  align-items: center;
  top: 5rem;
  padding: 0 1.2rem;
  left: 0;
  background: ${(props) =>
    props.tema === "dark" ? "var(--encabezado2)" : "var(--colorBoxDark)"};
  p {
    top: 2rem;
    color: var(--white2);
    font-size: 0.7rem;
    font-weight: 600;
  }

  img {
    display: none;
  }

  @media (min-width: 1000px) {
    height: 23rem;
    top: 10rem;
    padding: 0 15vw;
    background: ${(props) =>
      props.tema === "dark" ? "var(--encabezado1)" : "var(--colorBoxDark)"};
    p {
      font-size: 2rem;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
    }
  }
`;
