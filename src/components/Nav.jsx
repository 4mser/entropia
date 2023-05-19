// import { Link } from "react-router-dom";
// import styled from "styled-components";

// // ICONS
// import { Icon } from "@iconify/react";

// const Nav = ({ handleTemaChange, tema, handleMenuChange, menuOpen }) => {
//   return (
//     <NavStyle tema={tema}>
//       <Link
//         to="/entropia"
//         style={{ textDecoration: "none", transform: "translateY(.1rem)" }}
//         className="link"
//       >
//         <img
//           src="https://appentropia.s3.amazonaws.com/ENTROPIA.png"
//           alt="logo"
//           className="logo"
//         />
//       </Link>

//       <Container>
//         <Buttons onClick={handleTemaChange} tema={tema}>
//           <Icon
//             icon={tema === "dark" ? "ri:sun-fill" : "ri:moon-fill"}
//             style={{
//               color:
//                 tema === "dark" ? "var(--whiteColor)" : "var(--blackColor)",
//               fontSize: "1.4rem",
//             }}
//           />
//         </Buttons>

//         <Buttons tema={tema} onClick={handleMenuChange}>
//           <Icon
//             icon="solar:menu-dots-broken"
//             style={{
//               color:
//                 tema === "dark" ? "var(--whiteColor)" : "var(--blackColor)",
//               fontSize: "2rem",
//               transform: menuOpen === "open" ? "rotate(180deg)" : "",
//               transition: ".2s",
//             }}
//           />
//         </Buttons>
//       </Container>
//     </NavStyle>
//   );
// };

// export default Nav;

// const NavStyle = styled.div`
//   width: 100%;
//   height: 5rem;
//   position: fixed;
//   top: 0;
//   left: 0;
//   padding: 0 1.2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   user-select: none;
//   background: ${(props) =>
//     props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
//   z-index: 1000;

//   .link {
//     text-decoration: none;
//     transform: translateY(0.1rem);
//   }

//   .logo {
//     width: 12rem;
//     transform: translateX(-0.4rem);
//     filter: ${(props) => (props.tema === "dark" ? "" : "invert(.9)")};
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 6.2rem;
// `;

// const Buttons = styled.div`
//   width: 2.5rem;
//   height: 2.5rem;
//   border-radius: 50%;
//   background: ${(props) =>
//     props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// ICONS
import { Icon } from "@iconify/react";

const Nav = ({ handleTemaChange, tema, handleMenuChange, menuOpen }) => {
  return (
    <NavStyle tema={tema}>
      <Link
        to="/entropia"
        style={{ textDecoration: "none", transform: "translateY(.1rem)" }}
        className="link"
      >
        <img
          src="https://appentropia.s3.amazonaws.com/ENTROPIA.png"
          alt="logo"
          className="logo"
        />
      </Link>

      <Container>
        <Buttons onClick={handleTemaChange} tema={tema}>
          <Icon
            icon={tema === "dark" ? "ri:sun-fill" : "ri:moon-fill"}
            className={tema === "dark" ? "btn-tema-sun" : "btn-tema-moon"}
            style={{
              color:
                tema === "dark" ? "var(--whiteColor)" : "var(--blackColor)",
              fontSize: "1.4rem",
            }}
          />
        </Buttons>

        <Buttons tema={tema} onClick={handleMenuChange}>
          <Icon
            icon="solar:menu-dots-broken"
            style={{
              color:
                tema === "dark" ? "var(--whiteColor)" : "var(--blackColor)",
              fontSize: "2rem",
              transform: menuOpen === "open" ? "rotate(180deg)" : "",
              transition: ".2s",
            }}
          />
        </Buttons>
      </Container>
    </NavStyle>
  );
};

export default Nav;

const NavStyle = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background: ${(props) =>
    props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  z-index: 1000;

  .link {
    text-decoration: none;
    transform: translateY(0.1rem);
  }

  .logo {
    width: 12rem;
    transform: translateX(-0.4rem);
    filter: ${(props) => (props.tema === "dark" ? "" : "invert(.9)")};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 6.2rem;
`;

// Animación para el desplazamiento hacia arriba y desaparición
const slideUpAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const Buttons = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;

  .btn-tema-sun {
    animation: sun 0.2s forwards ease-in-out;

    @keyframes sun {
      from {
        transform: translateY(100%);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .btn-tema-moon {
    animation: moon 0.2s forwards ease-in-out;

    @keyframes moon {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  // Aplicar animación al hacer clic
  &:active .btn-tema-moon {
    animation: ${slideUpAnimation} 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }

  &:active .btn-tema-sun {
    animation: ${slideDownAnimation} 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
