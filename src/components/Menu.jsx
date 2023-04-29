import styled from "styled-components";

//Color Icons

import {
  CiDeliveryTruck,
  CiHome,
  CiPalette,
  CiMobile1,
  CiMicrochip,
} from "react-icons/ci";

import { ImHome } from "react-icons/im";

const Menu = ({ tema, menuOpen }) => {
  return (
    <EstilosMenu tema={tema} menuOpen={menuOpen}>
      <div className="btn-menu">
        <ImHome></ImHome>
        <p>Inicio</p>
      </div>

      <div className="btn-menu">
        <CiPalette></CiPalette>
        <p>Áreas</p>
      </div>

      <div className="btn-menu">
        <CiDeliveryTruck></CiDeliveryTruck>
        <p>Proyectos</p>
      </div>

      <div className="btn-menu">
        <CiMicrochip></CiMicrochip>
        <p>Nosotros</p>
      </div>

      <div className="btn-menu">
        <CiMobile1></CiMobile1>
        <p>Contacto</p>
      </div>
    </EstilosMenu>
  );
};

export default Menu;

const EstilosMenu = styled.div`
  width: 100%;
  height: 5.2rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--whiteColor)" : "var(--blackColor)"};
  position: fixed;
  top: 5rem;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 998;
  padding: 0 2rem;
  overflow: hidden;
  transform: ${(props) =>
    props.menuOpen === "open" ? "translateX(100%)" : ""};
  transition: 0.8s;
  align-items: center;
  flex-direction: row;

  svg {
    width: 2rem;
    height: 1.5rem;
    color: ${(props) =>
      props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
  }

  .btn-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    p {
      font-size: 0.5rem;
      color: ${(props) =>
        props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
      margin-top: 0.2rem;
    }
  }
`;
