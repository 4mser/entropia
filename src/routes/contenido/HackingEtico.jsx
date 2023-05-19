import styled from "styled-components";

import { Link } from "react-router-dom";

styled;

const HackingEtico = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://th.bing.com/th/id/R.b7953b7856dbcba7873c7a2602f80286?rik=MhSKrhJGEnCuWQ&riu=http%3a%2f%2fwww.renegadetribune.com%2fwp-content%2fuploads%2f2017%2f02%2fmr-robot-hacker.jpg&ehk=20z2dRb0hCnXcXkkoSBfUTkRZDNOv3Rm5diGKimZwII%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="bannerImg"
      />
      <p>
        El hacking ético es una práctica en la que los profesionales de
        seguridad informática utilizan sus habilidades y conocimientos para
        evaluar la seguridad de los sistemas informáticos y redes.
      </p>
      <p>
        El objetivo es identificar y corregir vulnerabilidades antes de que
        puedan ser explotadas por hackers malintencionados, los "Crackers". Los
        hackers éticos utilizan las mismas herramientas y técnicas que los
        crackers, pero lo hacen con el permiso del propietario del sistema y con
        el objetivo de mejorar la seguridad.
      </p>
      <p>
        El hacking ético es una parte importante de la seguridad informática y
        puede ayudar a prevenir ataques y proteger información confidencial
      </p>
      <br />
    </Container>
  );
};

export default HackingEtico;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 6rem 1.2rem;

  .bannerImg {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;
