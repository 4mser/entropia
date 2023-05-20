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

  @media (min-width: 1000px) {
    height: 23rem;
    top: 11rem;
    padding: 0 6vw;

    p {
      font-size: 2rem;
    }
  }
`;
