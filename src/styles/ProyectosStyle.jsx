import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  padding-top: 9rem;
  left: 0;
  color: var(--whiteColor);

  @media (min-width: 1000px) {
    padding-top: 8rem;
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
    margin: 0 15vw;
    background: ${(props) =>
      props.tema === "dark" ? "var(--blackColor)" : "var(--encabezado2)"};
    border-radius: 5px;

    h3 {
      font-size: 1.3rem;
      color: ${(props) => (props.tema === "dark" ? "white" : "white")};
    }

    p {
      font-size: 1rem;
      color: ${(props) =>
        props.tema === "dark" ? "var(--blackColor)" : "white"};
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1.2rem;

  @media (min-width: 1000px) {
    padding: 1.5rem 15vw;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    .espacio {
      display: none;
    }
  }
`;

export const ProyectosBox = styled.div`
  width: 23rem;
  height: 12rem;
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

  p {
    bottom: 0;
  }

  img {
    width: 100%;
    top: 0;
    height: 100%;
    transition: 0.2s;
    object-fit: contain;
  }

  .img-chiquita {
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    left: 0;
    border-radius: 50%;
    object-fit: cover;
    z-index: 2;
    border: 3px solid
      ${(props) => (props.tema === "dark" ? "var(--whiteColor)" : "white")};
  }

  :hover .img-chiquita {
    border: 3px solid var(--colorEntropia);
  }

  @media (min-width: 1000px) {
    width: 100%;
    margin-right: 0;
    height: 15rem;

    .img-chiquita {
      width: 3rem;
      height: 3rem;
      border: 4.5px solid
        ${(props) => (props.tema === "dark" ? "var(--whiteColor)" : "white")};
    }
    :hover .img-chiquita {
      border: 4.5px solid var(--colorEntropia);
    }
  }
`;

export const ProyectoImage = styled.div`
  width: 100%;
  height: 70%;
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

  .img-deep-eye {
    width: 104%;
  }
`;

export const ProyectoAbout = styled.div`
  width: 100%;
  position: relative;
  height: 30%;
  overflow: hidden;
  color: var(--whiteColor);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.4rem;
  gap: 0.5rem;
  flex-direction: row;

  h3 {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    font-size: 0.9rem;
    font-weight: 500;
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    opacity: 0.7;
    font-size: 0.7rem;
  }

  @media (min-width: 1000px) {
    padding-left: 1vw;
    gap: 0.8rem;
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
