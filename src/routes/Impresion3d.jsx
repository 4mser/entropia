import styled from "styled-components";

import { Link } from "react-router-dom";

styled;

const Impresion3d = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://th.bing.com/th/id/R.61e564eada65779845ad04ec499573b5?rik=OGHDCo9d6QG3vw&riu=http%3a%2f%2fwww.noticias.usm.cl%2fwp-content%2fuploads%2f2016%2f06%2fprotesis-3D.jpg&ehk=qZ%2f%2fwPJHBF4MOCGv6ZkU50u%2btrDMdiA5dWd1ej9mMzE%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="bannerImg"
      />
      <p>
        La impresión 3D es una tecnología que permite la creación de objetos
        tridimensionales a partir de un diseño digital. Esta tecnología funciona
        mediante la adición de capas sucesivas de material hasta que se forma el
        objeto deseado.
      </p>
      <p>
        La impresión 3D ha revolucionado la forma en que se fabrican los
        objetos, permitiendo la creación de piezas complejas y personalizadas de
        manera rápida y económica, aparte de tener muchas aplicaciones en
        diferentes campos, como la medicina, la ingeniería, la arquitectura y el
        arte.
      </p>
      <p>
        En medicina, por ejemplo, se pueden imprimir prótesis personalizadas
        para pacientes que han perdido una extremidad. En ingeniería, se pueden
        imprimir piezas de repuesto para maquinaria o prototipos para probar
        nuevos diseños. En arquitectura, se pueden imprimir maquetas detalladas
        de edificios para visualizar mejor los proyectos. Y en el arte, los
        artistas pueden utilizar la impresión 3D para crear esculturas únicas y
        detalladas.
      </p>
      <br />
    </Container>
  );
};

export default Impresion3d;

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
