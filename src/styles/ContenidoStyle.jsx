import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 3rem 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  transform: translateY(9rem);

  .link {
    width: calc(50% - 1rem);
    transform: translateX(0.5rem);
  }

  .span {
    width: calc(100% - 1rem);
  }
`;

export const RecomendadosBox = styled.div`
  width: 100%;
  height: 10rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
  flex-shrink: 0;
  position: relative;
  font-size: 0.7rem;
  border-radius: 5px;
  overflow: hidden;

  :hover {
    background: ${(props) =>
      props.tema === "light" ? "var(--blackColor)" : "var(--whiteColor)"};
  }

  :hover h3 {
    filter: invert(1);
  }

  img {
    width: 100%;
    top: 0;
    height: 100%;
    object-fit: contain;
    transition: 0.2s;
  }
`;

export const ProyectoImage = styled.div`
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
  }
`;

export const ProyectoAbout = styled.div`
  width: 100%;
  position: relative;
  height: 4rem;
  overflow: hidden;
  color: ${(props) => (props.tema === "dark" ? "var(--whiteColor)" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-weight: 400;
    text-align: center;
    color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--blackColor)"};
  }
`;
