import Encabezado from "/src/components/Encabezado";
import Areas from "/src/components/Areas";
import Proyectos from "/src/components/Proyectos";
import Recomendados from "/src/components/Recomendados";
import Footer from "/src/components/Footer";

const Home = ({ tema }) => {
  return (
    <div>
      <Encabezado tema={tema}></Encabezado>
      <Areas tema={tema}></Areas>
      <Proyectos tema={tema}></Proyectos>
      <Recomendados tema={tema}></Recomendados>
      <Footer tema={tema}></Footer>
    </div>
  );
};

export default Home;
