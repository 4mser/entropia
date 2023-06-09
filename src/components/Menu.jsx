import styled from "styled-components";

//Rutas
import { Link } from "react-router-dom";

// Icons
import { ImHome, ImBooks, ImRocket, ImUsers } from "react-icons/im";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaStoreAlt } from "react-icons/fa";

const Menu = ({ tema, menuOpen, handleMenuChange }) => {
  return (
    <EstilosMenu
      tema={tema}
      menuOpen={menuOpen}
      handleMenuChange={handleMenuChange}
    >
      <Link
        to="/entropia/"
        style={{ textDecoration: "none" }}
        onClick={handleMenuChange}
      >
        <div className="btn-menu">
          <ImHome></ImHome>
          <p>Inicio</p>
        </div>
      </Link>

      <Link style={{ textDecoration: "none" }}>
        <div className="btn-menu">
          <ImBooks
            style={{
              transform: "translateX(.1rem)",
            }}
          ></ImBooks>
          <p>Recursos</p>
        </div>
      </Link>

      <Link style={{ textDecoration: "none" }}>
        <div className="btn-menu">
          <ImRocket
            style={{
              transform: "translateX(.1rem)",
            }}
          ></ImRocket>
          <p>Servicios</p>
        </div>
      </Link>

      <Link
        to="/entropia/nosotros"
        style={{ textDecoration: "none" }}
        onClick={handleMenuChange}
      >
        <div className="btn-menu">
          <ImUsers></ImUsers>
          <p>Nosotros</p>
        </div>
      </Link>

      <Link
        to="entropia/tienda"
        style={{ textDecoration: "none" }}
        onClick={handleMenuChange}
      >
        <div className="btn-menu">
          <FaStoreAlt
            style={{
              transform: "scale(.9)",
            }}
          ></FaStoreAlt>
          <p>Tienda</p>
        </div>
      </Link>
    </EstilosMenu>
  );
};

export default Menu;

const EstilosMenu = styled.div`
  width: 100%;
  height: 5rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--whiteColor)" : "var(--blackColor)"};
  position: fixed;
  top: 5rem;
  right: 0;
  display: flex;
  box-shadow: ${(props) =>
    props.menuOpen === "open" ? "" : "-2px 1px 8px var(--shadow)"};
  justify-content: space-between;
  z-index: 998;
  padding: 0 2rem;
  overflow: hidden;
  transform: ${(props) =>
    props.menuOpen === "open" ? "translateX(100%)" : ""};
  transition: 0.3s ease-out;
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

  @media (min-width: 1000px) {
    top: 5rem;
    padding: 0 15vw;
    box-shadow: none;
    background: ${(props) =>
      props.tema === "dark" ? "var(--menuDark)" : "var(--encabezado2)"};
    transform: ${(props) =>
      props.menuOpen === "open" ? "translateY(-100%)" : ""};

    .btn-menu {
      flex-direction: row;
      justify-content: space-between;
      gap: 0.6rem;

      :hover {
        opacity: 0.7;
      }

      p {
        font-size: 0.9rem;
        color: white;
      }

      svg {
        color: white;
      }
    }
  }
`;
