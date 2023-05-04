import styled from "styled-components";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

//ICONS
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

import { FiGithub } from "react-icons/fi";

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
            padding: "0 1.4rem",
          }}
        >
          LIFE IS ONLY A DREAM, AND WE ARE THE IMAGINATION OF OURSELVES
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
          slidesPerView={1}
          loop={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 4000000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
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
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
                <h3>Sobre mí:</h3>
                <p>
                  Desde que tengo memoria he tenido una pasión por los misterios
                  de la realidad y el comprender como funcionaba el mundo en el
                  que vivía, lo que me generó una enorme pasión la ciencia y la
                  tecnología.
                </p>
                <br />
                <h3>Mis áreas de interés son:</h3>
                <p>
                  Física - Matemáticas - Informática - Neurociencia - Innovación
                </p>
                <br />
                <h3>Redes:</h3>
                <Redes>
                  <div className="redes">
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>
                    <p>Whatsapp</p>
                  </div>

                  <div className="redes">
                    <FiGithub></FiGithub>
                    <p>Github</p>
                  </div>

                  <div className="redes">
                    <AiOutlineInstagram></AiOutlineInstagram>
                    <p>Instagram</p>
                  </div>

                  <div className="redes">
                    <AiOutlineMail></AiOutlineMail>
                    <p>correo</p>
                  </div>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
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
              </EmpleadoFirstSection>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/pipa.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Don Pipa</h3>
                  <h4>Gerente de llantos</h4>
                  <p>Físico Nuclear MIAUACH</p>
                </InfoEmpleado>
              </EmpleadoFirstSection>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
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
              </EmpleadoFirstSection>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/vinci.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Vinci Lengüitas</h3>
                  <h4>Apoyo Moral</h4>
                  <p>Experta en hacer compañía</p>
                </InfoEmpleado>
              </EmpleadoFirstSection>
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
  width: 100%;
  height: 100%;
  height: 30rem;
  overflow: hidden;
  border-radius: 5px;
  background: var(--blackColor);
  color: white;
  padding: 1rem;
  gap: 1rem;
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
  gap: 1rem;
`;
const FotoEmpleado = styled.div`
  height: 10rem;
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
    transform: scale(1.1);
  }
`;

const InfoEmpleado = styled.div`
  width: 50%;
  height: 10rem;
  top: 1rem;
  right: 1rem;
  overflow: hidden;

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
`;

const EmpleadoSecondSection = styled.div`
  width: 100%;
  height: 100%;

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

  .redes {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 0.6rem;
      margin-top: 0.2rem;
    }
  }
  svg {
    font-size: 1.5rem;
  }
`;
