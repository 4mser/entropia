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
import Ciencia from "./contenido/Ciencia";
import Progra from "./contenido/Progra";
import Creatividad from "./contenido/Creatividad";
import Organizacion from "./contenido/Organizacion";
import Filosofia from "./contenido/Filosofia";

//COMPONENTES

const Contenido = ({ tema }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <SliderContenido tema={tema}>
      <Container tema={tema}>
        <Swiper
          tema={tema}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          mousewheel={true}
          keyboard={true}
          className="Swiper"
          breakpoints={{
            1000: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Mousewheel, Keyboard]}
          initialSlide={0}
        >
          {/* Ciencia y Matemáticas */}
          <SwiperSlide
            tema={tema}
            onClick={() => setSlideIndex(0)}
            className={`${slideIndex === 0 ? "active" : ""}`}
          >
            <AreaBox tema={tema}>
              Ciencia y Matemáticas
              <Lottie animationData={ciencia} className="icono-animado" />
            </AreaBox>
          </SwiperSlide>

          <SwiperSlide
            tema={tema}
            onClick={() => setSlideIndex(1)}
            className={`${slideIndex === 1 ? "active" : ""}`}
          >
            <AreaBox tema={tema}>
              Programación y Tecnología
              <Lottie animationData={codificacion} className="icono-animado" />
            </AreaBox>
          </SwiperSlide>

          <SwiperSlide
            tema={tema}
            onClick={() => setSlideIndex(2)}
            className={`${slideIndex === 2 ? "active" : ""}`}
          >
            <AreaBox tema={tema}>
              Creatividad, Arte y Diseño
              <Lottie
                animationData={idea}
                style={{ transform: "scale(.8)" }}
                className="icono-animado"
              />
            </AreaBox>
          </SwiperSlide>

          <SwiperSlide
            tema={tema}
            onClick={() => setSlideIndex(3)}
            className={`${slideIndex === 3 ? "active" : ""}`}
          >
            <AreaBox tema={tema}>
              Organización y Productividad
              <Lottie
                animationData={organizacion}
                style={{ transform: "scale(.8)" }}
                className="icono-animado"
              />
            </AreaBox>
          </SwiperSlide>

          <SwiperSlide
            tema={tema}
            onClick={() => setSlideIndex(4)}
            className={`${slideIndex === 4 ? "active" : ""}`}
          >
            <AreaBox tema={tema}>
              Filosofía, Especulación y Ciencia Ficción
              <Lottie
                animationData={ficcion}
                style={{ transform: "scale(1.2)" }}
                className="icono-animado"
              />
            </AreaBox>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Temas tema={tema}>
        {slideIndex === 0 && <Ciencia tema={tema} />}
        {slideIndex === 1 && <Progra tema={tema} />}
        {slideIndex === 2 && <Creatividad tema={tema} />}
        {slideIndex === 3 && <Organizacion tema={tema} />}
        {slideIndex === 4 && <Filosofia tema={tema} />}
      </Temas>
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

const Container = styled.div`
  width: 100%;
  height: 11rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  position: fixed;
  z-index: 10;

  @media (min-width: 1000px) {
    padding: 0 15vw;
    position: absolute;
  }
`;

const Temas = styled.div`
  @media (min-width: 1000px) {
    width: 100%;
    padding: 0 15vw;
  }
`;

const SliderContenido = styled.div`
  width: 100%;
  .Swiper {
    padding: 2.8rem 1rem 0 1rem;

    .active {
      animation: ContenidoSeleccionado infinite 2s alternate-reverse;

      @keyframes ContenidoSeleccionado {
        from {
          filter: invert(1);
        }
        to {
          filter: invert(1) hue-rotate(360deg);
        }
      }
    }
  }

  @media (min-width: 1000px) {
    padding: 3rem 0 0 0;
    .Swiper {
      padding: 2rem 0 0 0;
    }
  }
`;

const AreaBox = styled.div`
  width: 100%;
  height: 4.6rem;
  background: var(--blackColor);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  flex-shrink: 0;
  color: ${(props) => (props.tema === "dark" ? "white" : "white")};
  font-size: 0.7rem;
  transition: 0.3s;
  filter: ${(props) =>
    props.tema === "dark" ? "" : "invert(.97) hue-rotate(182deg) saturate(3)"};
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
