import styled from "styled-components";
import Lottie from "lottie-react";
import React, { useState } from "react";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Mousewheel, Keyboard } from "swiper";

//ICONOS ANIMADOS
import codificacion from "/src/assets/icons/codificacion.json";
import idea from "/src/assets/icons/idea.json";
import ciencia from "/src/assets/icons/galaxia.json";
import ficcion from "/src/assets/icons/ciencia-ficcion.json";
import organizacion from "/src/assets/icons/organizacion.json";

//COMPONENTES
import Ciencia from "/src/components/Ciencia.jsx";
import Progra from "/src/components/Progra.jsx";
import Creatividad from "/src/components/Creatividad.jsx";
import Organizacion from "/src/components/Organizacion.jsx";
import Filosofia from "/src/components/Filosofia.jsx";

const Contenido = ({ tema }) => {
  const [slideIndex, setSlideIndex] = useState(null);

  return (
    <SliderContenido tema={tema}>
      <div
        style={{
          position: "absolute",
          top: "5rem",
          width: "100%",
          height: "5rem",
          background:
            tema === "dark" ? "var(--encabezado2)" : "var(--colorBoxDark)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "600",
            padding: "0 1.4rem",
          }}
        >
          CONTENIDO
        </p>
      </div>
      <Swiper
        tema={tema}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={1}
        loop={false}
        mousewheel={true}
        keyboard={true}
        className="Swiper"
        breakpoints={{
          1400: {
            slidesPerView: 5,
          },
          1000: {
            slidesPerView: 4,
          },
          700: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Keyboard]}
      >
        {/* Ciencia y Matemáticas */}
        <SwiperSlide tema={tema} onClick={() => setSlideIndex(0)}>
          <AreaBox tema={tema}>
            Ciencia y Matemáticas
            <Lottie animationData={ciencia} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema} onClick={() => setSlideIndex(1)}>
          <AreaBox tema={tema}>
            Programación y Tecnología
            <Lottie animationData={codificacion} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema} onClick={() => setSlideIndex(2)}>
          <AreaBox tema={tema}>
            Creatividad y Arte
            <Lottie
              animationData={idea}
              style={{ transform: "scale(.8)" }}
              className="icono-animado"
            />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema} onClick={() => setSlideIndex(3)}>
          <AreaBox tema={tema}>
            Organización y Productividad
            <Lottie animationData={organizacion} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema} onClick={() => setSlideIndex(4)}>
          <AreaBox tema={tema}>
            Filosofía y Especulación
            <Lottie animationData={ficcion} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>
      </Swiper>
      {slideIndex === 0 && <Ciencia tema={tema} />}
      {slideIndex === 1 && <Progra tema={tema} />}
      {slideIndex === 2 && <Creatividad tema={tema} />}
      {slideIndex === 3 && <Organizacion tema={tema} />}
      {slideIndex === 4 && <Filosofia tema={tema} />}
      <div
        style={{
          width: "100%",
          height: "5rem",
        }}
      ></div>
    </SliderContenido>
  );
};

export default Contenido;

const SliderContenido = styled.div`
  width: 100%;

  .Swiper {
    padding: 9rem 1rem 0 1rem;
  }
`;

const AreaBox = styled.div`
  height: 4.6rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--colorBoxLight)"};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  flex-shrink: 0;
  color: ${(props) => (props.tema === "dark" ? "white" : "white")};
  font-size: 0.7rem;
  transition: 0.3s;
  border-radius: 5px;
  user-select: none;

  :hover {
    box-shadow: 0px 1px 10px -5px black;
  }

  /* :hover {
    filter: invert(1);
  } */

  .icono-animado {
    width: 4rem;
  }
`;
