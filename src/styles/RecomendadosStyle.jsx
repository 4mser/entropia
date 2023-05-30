import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  padding-top: 15.5rem;
  left: 0;
  color: var(--whiteColor);

  @media (min-width: 1000px) {
    padding: 19.5rem 15vw 0 15vw;
  }
`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;

  h3 {
    font-weight: 100;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  p {
    font-size: 0.7rem;
    color: ${(props) =>
      props.tema === "dark" ? "var(--colorSecundario)" : "var(--blackColor)"};
    opacity: 0.6;
  }

  @media (min-width: 1000px) {
    padding: 1rem;
    background: ${(props) =>
      props.tema === "dark" ? "var(--blackColor)" : "var(--encabezado2)"};
    border-radius: 5px;

    h3 {
      font-size: 1.3rem;
      color: white;
    }

    p {
      color: white;
      font-size: 1rem;
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1.2rem;

  @media (min-width: 1000px) {
    padding: 1.5rem 0;
  }
`;

export const AreasContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  .espacio {
    width: 1.2rem;
    height: 2rem;
    background: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
    color: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  }

  @media (min-width: 1000px) {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .ver-todo-contenido {
      display: none;
    }

    .espacio {
      display: none;
    }
  }
`;

export const RecomendadosBox = styled.div`
  width: 15rem;
  height: 10rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
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
    background: ${(props) =>
      props.tema === "light" ? "var(--blackColor)" : "var(--whiteColor)"};
  }

  :hover h3,
  :hover p {
    filter: invert(1);
  }

  h2 {
    text-align: center;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
  }

  :hover h2 {
    filter: invert(1);
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

  @media (min-width: 1000px) {
    margin-right: 0px;
    width: 100%;
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
    transition: 0.2s;
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
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    font-size: 0.8rem;
    opacity: 0.8;
    font-weight: 500;
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    opacity: 0.7;
    font-size: 0.7rem;
  }
`;
