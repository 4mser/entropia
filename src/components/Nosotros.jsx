import styled from "styled-components";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Nosotros = ({ tema }) => {
  return (
    <NosotrosStyle tema={tema}>
      <div
        style={{
          position: "absolute",
          top: "5rem",
          width: "100%",
          height: "5rem",
          background: "var(--encabezado2)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "2.4vw",
            fontWeight: "600",
            padding: "0 1.2rem",
          }}
        >
          Nuestro equipo está compuesto por expertos en sus respectivas áreas,
          con una gran pasión por la sostenibilidad, la ciencia y la tecnología.{" "}
          <br />
          Juntos, estamos comprometidos en encontrar soluciones innovadoras que
          beneficien tanto a la sociedad como a la naturaleza.
        </p>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "5rem",
          padding: "5rem 1.2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Swiper
          grabCursor={true}
          spaceBetween={17}
          pagination={{ clickable: true }}
          slidesPerView={2}
          loop={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            <CartaEmpleado>
              <FotoEmpleado>
                <img
                  src="https://appentropia.s3.amazonaws.com/nicolasMoreno.jpeg"
                  alt=""
                />
              </FotoEmpleado>

              <InfoEmpleado>
                <h3>Nicolás Moreno</h3>
                <h4>Fundador</h4>
                <p>Estudiante de Ingeniería Informática</p>
              </InfoEmpleado>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <FotoEmpleado>
                <img
                  src="https://appentropia.s3.amazonaws.com/tarro.jpg"
                  alt=""
                />
              </FotoEmpleado>

              <InfoEmpleado>
                <h3>Angelo Cubillos</h3>
                <h4>Investigador</h4>
                <p>Estudiante de Bioquímica</p>
              </InfoEmpleado>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <FotoEmpleado>
                <img
                  src="https://appentropia.s3.amazonaws.com/pipa.jpg"
                  alt=""
                />
              </FotoEmpleado>

              <InfoEmpleado>
                <h3>Pipazo Don Pipa Pipael</h3>
                <h4>Gerente de llantos</h4>
                <p>Físico Nuclear MIAUACH</p>
              </InfoEmpleado>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <FotoEmpleado>
                <img
                  src="https://appentropia.s3.amazonaws.com/patitas.jpg"
                  alt=""
                />
              </FotoEmpleado>

              <InfoEmpleado>
                <h3>Feynman Patistrikis</h3>
                <h4>Un Tipazo</h4>
                <p>Experto en todo</p>
              </InfoEmpleado>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <FotoEmpleado>
                <img
                  src="https://appentropia.s3.amazonaws.com/vinci.jpg"
                  alt=""
                />
              </FotoEmpleado>

              <InfoEmpleado>
                <h3>Vinci Sativa Lengüitas</h3>
                <h4>Apoyo Moral</h4>
                <p>Se hace pipí al verte</p>
              </InfoEmpleado>
            </CartaEmpleado>
          </SwiperSlide>
        </Swiper>
      </div>
    </NosotrosStyle>
  );
};

export default Nosotros;

const NosotrosStyle = styled.div`
  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "")};
  }

  .swiper-pagination-bullet-active {
    background-color: var(--colorEntropia);
  }
`;

export const CartaEmpleado = styled.div`
  width: calc(100%);
  height: 100%;
  height: 21.5rem;
  overflow: hidden;
  border-radius: 5px;
  background: var(--blackColor);
  color: white;
  transition: 0.5s;

  :hover {
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.701);
  }
`;

const FotoEmpleado = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    object-fit: cover;
  }

  :hover img {
    transform: scale(1.1);
  }
`;

const InfoEmpleado = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw;

  h3 {
    font-size: 1rem;
    color: var(--colorEntropia);
    font-weight: 700;
  }

  h4 {
    font-weight: 400;
    padding: 0.2rem 0 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    opacity: 0.7;
  }
`;
