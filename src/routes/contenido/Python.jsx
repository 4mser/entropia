import styled from "styled-components";

styled;

const Python = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
        alt=""
        className="bannerImg"
      />
      <p>
        Python es un lenguaje de programación de alto nivel que ha ganado una
        gran popularidad en los últimos años debido a su simplicidad,
        legibilidad y versatilidad. Fue creado en 1991 por el programador
        holandés Guido van Rossum, y ha sido utilizado en una gran variedad de
        aplicaciones, desde desarrollo web y científico hasta inteligencia
        artificial y aprendizaje automático.
      </p>
      <p>
        Una de las principales ventajas de Python es su sintaxis simple y fácil
        de entender. Su sintaxis se asemeja al lenguaje humano, lo que lo hace
        fácil de leer y aprender para los programadores novatos. Además, Python
        es un lenguaje interpretado, lo que significa que no es necesario
        compilar el código antes de ejecutarlo, lo que ahorra tiempo y hace que
        el proceso de desarrollo sea más rápido.
      </p>
      <p>
        Python también cuenta con una amplia variedad de bibliotecas y
        herramientas, lo que lo convierte en una herramienta muy versátil. Estas
        bibliotecas incluyen módulos para el procesamiento de texto, el manejo
        de bases de datos, el desarrollo web, la ciencia de datos y la
        inteligencia artificial. Esto permite a los programadores utilizar
        Python para crear una gran variedad de aplicaciones y proyectos.
      </p>
      <p>
        Otra de las ventajas de Python es su comunidad activa y comprometida.
        Python es un lenguaje de código abierto, lo que significa que cualquier
        persona puede contribuir al desarrollo del lenguaje y sus herramientas.
        Esto ha dado lugar a una gran cantidad de recursos, tutoriales y
        documentación en línea, lo que hace que sea fácil aprender y utilizar
        Python.
      </p>
      <p>
        Python también se ha convertido en una herramienta importante en la
        educación. Muchas escuelas y universidades enseñan Python como parte de
        sus programas de informática y ciencia de datos, y existen numerosos
        recursos y plataformas en línea que ofrecen cursos y tutoriales de
        Python.
      </p>
      <br />
    </Container>
  );
};

export default Python;

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
