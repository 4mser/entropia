import { Container } from "../../styles/TemaStyle";

const GeometriaFractal = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://th.bing.com/th/id/R.4f160043eba89d22857789f0dd960d9b?rik=xQmv%2fsBU0QnvIw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-6TyE_n-7w28%2fTtdyiumCmLI%2fAAAAAAAAA5Q%2f0ZXOG44qsuk%2fs1600%2fMandel_zoom_07_satellite.jpg&ehk=kbJ4eBq%2fJbOZGq%2bx8Otnzsjew%2f6BTblOOqid8U0EOn4%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="banner-img"
      />
      <h2>La Geometría Fractal</h2>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          height: "12rem",
        }}
      >
        <p>
          La geometría fractal es una rama de la matemática que estudia formas
          complejas y autosemejantes, es decir, formas que se repiten a
          diferentes escalas. <br /> La palabra "fractal" fue acuñada por el
          matemático Benoit Mandelbrot en 1975 y proviene del latín "fractus",
          que significa "roto" o "irregular".
        </p>
        <img
          className="img-autor"
          src="https://th.bing.com/th/id/R.9e50edbed2d7cc48314e0156e48691c6?rik=da%2bGi%2f%2fDR%2fWDNA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-WHthhAZod2w%2fUMdpf7t7J7I%2fAAAAAAAAAGA%2fqAQ-FgxcqZE%2fs1600%2fbenoit_mandelbrot.jpg&ehk=CaTPKE1y9mLQnGNRxqnVCu0CVatA%2b7zZpuHcowHqFqs%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          style={{ width: "30%" }}
        />
      </div>
      <br />
      <p>
        Una de las características más interesantes de la geometría fractal es
        su capacidad para describir formas que no pueden ser representadas con
        la geometría euclidiana tradicional. En la geometría euclidiana, la
        longitud, el área y el volumen son propiedades invariantes que se
        mantienen iguales cuando una forma se escala. Sin embargo, en la
        geometría fractal, las propiedades de una forma cambian a medida que se
        escala. Es decir, una forma fractal es autosemejante en todas sus
        escalas, lo que significa que se ve similar a diferentes niveles de
        detalle.
      </p>
      <p>
        Se ha utilizado en muchos campos, desde la física y la biología hasta la
        informática y el arte. En la física, las formas fractales se utilizan
        para describir fenómenos naturales, como las nubes y las montañas, y
        para modelar sistemas complejos, como el crecimiento de las plantas y la
        formación de estructuras en la galaxias.
      </p>
      <br />
      <img
        className="img-content"
        src="https://i.pinimg.com/originals/19/1b/02/191b0231f904ff89ec17d33cb0b3657e.jpg"
        alt=""
      />
      <br />
      <br />
      <p>
        En la informática, la geometría fractal se ha utilizado para la
        compresión de imágenes y la generación de gráficos y efectos visuales en
        películas y videojuegos.
      </p>
      <p>
        La geometría fractal también ha tenido un gran impacto en el campo de la
        medicina y la biología, ayudando a los científicos a comprender mejor la
        estructura y la función de los tejidos biológicos y los organismos
        vivos.
      </p>
      <p>
        Por ejemplo, los patrones fractales se han utilizado para describir la
        estructura de los vasos sanguíneos y los tejidos pulmonares, lo que ha
        permitido una mejor comprensión de cómo se producen y se propagan las
        enfermedades cardiovasculares y respiratorias. También se ha utilizado
        para describir la forma y el movimiento de los microorganismos, como las
        células cancerosas y los virus, lo que ha llevado a nuevos enfoques para
        el diagnóstico y tratamiento de enfermedades.
      </p>
      <br />
      <img
        className="img-content"
        src="https://th.bing.com/th/id/R.6d5830574250fa7c2b14c3071eb04d64?rik=F%2bb476cAqMwRcw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QzNySIjWqDg%2fTjAp0oVsxwI%2fAAAAAAAAA5A%2fobjeAXB7cX0%2fs1600%2fFractal_Cancer_1.jpg&ehk=%2b9MQdbmq75IMULKDvymGbIr%2fQA6Q4U5MLDWeboruGoE%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <br />
      <br />
      <p>
        También se ha utilizado para comprender la complejidad y la
        imprevisibilidad de los sistemas naturales y sociales, desde el clima y
        los ecosistemas hasta las redes sociales y la economía. Los modelos
        fractales se han utilizado para predecir patrones y tendencias en estos
        sistemas, lo que ha llevado a una mejor comprensión de su comportamiento
        y ha permitido la predicción de eventos futuros.
      </p>
      <br />
      <img
        className="img-content"
        src="https://th.bing.com/th/id/OIP.XZECsJlBhW7cz-FQLgKBswHaE5?pid=ImgDet&rs=1"
        alt=""
      />
      <br />
      <br />
      <p>
        Además, la geometría fractal ha tenido un gran impacto en el arte y la
        cultura. Artistas como Jackson Pollock y Salvador Dalí han utilizado
        formas fractales en sus obras, y la música fractal se ha utilizado para
        crear composiciones musicales complejas y autosemejantes.
      </p>
      <br />
      <img
        className="img-content"
        src="https://i.pinimg.com/originals/c5/86/dc/c586dc1422a4d7cf046604dede88f09b.jpg"
        alt=""
      />
      <br />
    </Container>
  );
};

export default GeometriaFractal;
