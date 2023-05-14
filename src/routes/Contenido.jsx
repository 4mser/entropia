import styled from "styled-components";
import Lottie from "lottie-react";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Mousewheel, Keyboard } from "swiper";

//ICONS
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

import { FiGithub } from "react-icons/fi";

// import { BsPersonWorkspace } from "react-icons/bs";

//ICONOS ANIMADOS
import codificacion from "/src/assets/icons/codificacion.json";
import idea from "/src/assets/icons/idea.json";
import ciencia from "/src/assets/icons/galaxia.json";
import ficcion from "/src/assets/icons/ciencia-ficcion.json";
import organizacion from "/src/assets/icons/organizacion.json";

const Contenido = ({ tema }) => {
  return (
    <SliderContenido tema={tema}>
      <div
        style={{
          position: "absolute",
          top: "5rem",
          width: "100%",
          height: "5rem",
          background: "var(--encabezado2)",
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
        slidesPerView={3}
        loop={false}
        mousewheel={true}
        keyboard={true}
        className="Swiper"
        breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Keyboard]}
      >
        {/* Ciencia y Matemáticas */}
        <SwiperSlide tema={tema}>
          <AreaBox tema={tema}>
            Ciencia y Matemáticas
            <Lottie animationData={ciencia} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema}>
          <AreaBox tema={tema}>
            Programación y Tecnología
            <Lottie animationData={codificacion} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema}>
          <AreaBox tema={tema}>
            Creatividad y Arte
            <Lottie
              animationData={idea}
              style={{ transform: "scale(.8)" }}
              className="icono-animado"
            />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema}>
          <AreaBox tema={tema}>
            Organización y Productividad
            <Lottie animationData={organizacion} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>

        <SwiperSlide tema={tema}>
          <AreaBox tema={tema}>
            Filosofía y Especulación
            <Lottie animationData={ficcion} className="icono-animado" />
          </AreaBox>
        </SwiperSlide>
      </Swiper>
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

  :hover {
    filter: brightness(1.3);
  }

  .icono-animado {
    width: 4rem;
  }
`;
