import styled from "styled-components";

// Icons
import { ImHome, ImBooks, ImRocket, ImUsers, ImBubbles } from "react-icons/im";
import { BsPhoneVibrateFill } from "react-icons/bs";

const Menu = ({ tema, menuOpen }) => {
  return (
    <EstilosMenu tema={tema} menuOpen={menuOpen}>
      <div className="btn-menu">
        <ImHome></ImHome>
        <p>Inicio</p>
      </div>

      <div className="btn-menu">
        <ImBooks></ImBooks>
        <p>Áreas</p>
      </div>

      <div className="btn-menu">
        <ImRocket></ImRocket>
        <p>Proyectos</p>
      </div>

      <div className="btn-menu">
        <ImUsers></ImUsers>
        <p>Nosotros</p>
      </div>

      <div className="btn-menu">
        <BsPhoneVibrateFill></BsPhoneVibrateFill>
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
  transition: 0.5s ease;
  align-items: center;
  flex-direction: row;

  svg {
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4rem;
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
      font-size: 0.6rem;
      color: ${(props) =>
        props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
      margin-top: 0.2rem;
    }
  }
`;
