import styled from "styled-components";
import Lottie from "lottie-react";

//DATOS
import integrantes from "../data/equipo";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const NosotrosTest = ({ tema }) => {
  return (
    <NosotrosStyle tema={tema}>
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
          CONOCE A NUESTRO TEAM
        </p>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "5rem",
          padding: "4rem 1.2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Swiper
          grabCursor={true}
          spaceBetween={17}
          pagination={{ clickable: true }}
          slidesPerView={1}
          initialSlide={2}
          loop={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 900000000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {integrantes.map((integrante) => (
            <SwiperSlide key={integrante.id}>
              <CartaEmpleado key={integrante.id}>
                <EmpleadoFirstSection>
                  <FotoEmpleado>
                    <img src={integrante.imagen} alt="" />
                  </FotoEmpleado>

                  <InfoEmpleado>
                    <h3>{integrante.nombre}</h3>
                    <h4>{integrante.puesto}</h4>
                    <p>{integrante.descripcion}</p>
                    <h4>Pasatiempos:</h4>
                    <div className="pasatiempos">
                      {integrante.pasatiempos.map((pasatiempo, index) => (
                        <Lottie
                          key={index}
                          animationData={pasatiempo.icono}
                          className="icono-animado"
                        />
                      ))}
                    </div>
                  </InfoEmpleado>
                </EmpleadoFirstSection>
                <EmpleadoSecondSection>
                  <h3>Sobre Mí:</h3>
                  <p>{integrante.sobre}</p>
                  <br />
                  <h3>Áreas de interés:</h3>
                  <p>{integrante.areas}</p>
                  <br />
                  <h3>Contacto:</h3>
                  <Redes>
                    {integrante.contacto.map((item, index) => (
                      <a href={item.enlace} target="__blank" key={index}>
                        <div className="redes">
                          {item.icono}
                          <p>{item.texto}</p>
                        </div>
                      </a>
                    ))}
                  </Redes>
                </EmpleadoSecondSection>
              </CartaEmpleado>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </NosotrosStyle>
  );
};

export default NosotrosTest;

const NosotrosStyle = styled.div`
  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "")};
  }

  .swiper-pagination-bullet-active {
    background-color: var(--colorEntropia);
  }
`;

export const CartaEmpleado = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 5px;
  background: var(--blackColor);
  color: white;
  padding: 1rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: 0.5s;

  :hover {
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.701);
  }
`;

const EmpleadoFirstSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35%;
  justify-content: center;
  gap: 1rem;
`;
const FotoEmpleado = styled.div`
  height: 100%;
  border-radius: 5px;
  width: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    border-radius: 5px;
    object-fit: cover;
  }

  :hover img {
    transform: scale(1.2);
  }
`;

const InfoEmpleado = styled.div`
  width: 50%;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h3 {
    font-size: 1.4rem;
    color: var(--colorEntropia);
    font-weight: 700;
  }

  h4 {
    font-weight: 400;
    padding: 0.2rem 0;
  }

  p {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .icono-animado {
    width: 2rem;
  }

  .pasatiempos {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const EmpleadoSecondSection = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
    margin-bottom: 2px;
    font-weight: 500;
  }

  p {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

const Redes = styled.div`
  width: 100%;
  margin-top: 0.4rem;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0.8;

  a {
    text-decoration: none;
    color: white;
  }

  .redes {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.2s;

    p {
      font-size: 0.6rem;
      margin-top: 0.2rem;
    }
  }

  .redes:hover {
    color: var(--colorEntropia);
    filter: brightness(1.2);
    transform: scale(1.1);
  }
  svg {
    font-size: 1.5rem;
  }
`;
