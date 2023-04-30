import styled from "styled-components";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const Nosotros = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "5rem",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "1.4rem",
            padding: "1.7rem 1.2rem",
            background: "var(--encabezado2)",
          }}
        >
          Nuestro equipo
        </h1>
        <p
          style={{
            color: "white",
            fontSize: ".8rem",
            opacity: ".8",
            lineHeight: ".85rem",
            padding: "1rem",
          }}
        >
          Nuestro equipo está compuesto por expertos en sus respectivas áreas,
          con una gran pasión por la sostenibilidad, la ciencia y la tecnología.{" "}
          <br />
          Juntos, estamos comprometidos en encontrar soluciones innovadoras que
          beneficien tanto a la sociedad como al medio ambiente
        </p>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "5rem",
          padding: "12.5rem 1.2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* <CartaEmpleado>
          <FotoEmpleado>
            <img src="src/assets/nicolasMoreno.jpeg" alt="" />
          </FotoEmpleado>

          <InfoEmpleado>
            <h3>Nicolás Moreno</h3>
            <h4>Fundador</h4>
            <p>Estudiante de Ingeniería Informática</p>
          </InfoEmpleado>
        </CartaEmpleado>

        <CartaEmpleado>
          <FotoEmpleado>
            <img src="src/assets/pipa.png" alt="" />
          </FotoEmpleado>

          <InfoEmpleado>
            <h3>Pipazo Don Pipa Pipael</h3>
            <h4>Gerente de ventas</h4>
            <p>Físico Nuclear MIAUACH</p>
          </InfoEmpleado>
        </CartaEmpleado>

        <CartaEmpleado>
          <FotoEmpleado>
            <img src="src/assets/pipa.png" alt="" />
          </FotoEmpleado>

          <InfoEmpleado>
            <h3>Pipazo Don Pipa Pipael</h3>
            <h4>Gerente de ventas</h4>
            <p>Físico Nuclear MIAUACH</p>
          </InfoEmpleado>
        </CartaEmpleado>

        <CartaEmpleado>
          <FotoEmpleado>
            <img src="src/assets/pipa.png" alt="" />
          </FotoEmpleado>

          <InfoEmpleado>
            <h3>Pipazo Don Pipa Pipael</h3>
            <h4>Gerente de ventas</h4>
            <p>Físico Nuclear MIAUACH</p>
          </InfoEmpleado>
        </CartaEmpleado> */}
        <Swiper
          grabCursor={true}
          pagination={{ clickable: true }}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <CartaEmpleado>
              <FotoEmpleado>
                <img src="src/assets/nicolasMoreno.jpeg" alt="" />
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
                <img src="src/assets/pipa.png" alt="" />
              </FotoEmpleado>

              <InfoEmpleado>
                <h3>Pipazo Don Pipa Pipael</h3>
                <h4>Gerente de ventas</h4>
                <p>Físico Nuclear MIAUACH</p>
              </InfoEmpleado>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado>
              <FotoEmpleado>
                <img src="src/assets/nicolasMoreno.jpeg" alt="" />
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
                <img src="src/assets/nicolasMoreno.jpeg" alt="" />
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
                <img src="src/assets/nicolasMoreno.jpeg" alt="" />
              </FotoEmpleado>

              <InfoEmpleado>
                <h3>Nicolás Moreno</h3>
                <h4>Fundador</h4>
                <p>Estudiante de Ingeniería Informática</p>
              </InfoEmpleado>
            </CartaEmpleado>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Nosotros;

export const CartaEmpleado = styled.div`
  width: calc(100% - 1.2rem);
  height: 100%;
  height: 21rem;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.442);
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
