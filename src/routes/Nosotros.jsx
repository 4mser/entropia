import styled from "styled-components";
import Lottie from "lottie-react";

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

// import { BsPersonWorkspace } from "react-icons/bs";

//ICONOS ANIMADOS
import guitarra from "/src/assets/icons/guitarra-electrica.json";
import buscando from "/src/assets/icons/buscando.json";
import bola from "/src/assets/icons/bola.json";
import valle from "/src/assets/icons/valle.json";
// import ordenador from "/src/assets/icons/ordenador-portatil.json";
// import mando from "/src/assets/icons/mando.json";
// import motocicleta from "/src/assets/icons/motocicleta.json";
import d3 from "/src/assets/icons/3d.json";
import calendario from "/src/assets/icons/calendario.json";
import bloc from "/src/assets/icons/bloc-de-dibujo.json";
import music from "/src/assets/icons/music.json";
import herramienta from "/src/assets/icons/herramientas-para-reparar.json";
import idea from "/src/assets/icons/idea.json";
import libro from "/src/assets/icons/libro.json";
import cine from "/src/assets/icons/cine.json";
// import caminar from "/src/assets/icons/caminar.json";
// import pintura from "/src/assets/icons/paleta-de-pintura.json";
// import bailar from "/src/assets/icons/ventilador.json";
import amigos from "/src/assets/icons/tres-amigos.json";

const Nosotros = ({ tema }) => {
  return (
    <NosotrosStyle tema={tema}>
      <Banner tema={tema}>
        <p className="BannerP">CONOCE A NUESTRO TEAM</p>
      </Banner>
      <Container tema={tema}>
        <Swiper
          grabCursor={true}
          spaceBetween={17}
          pagination={{ clickable: true }}
          slidesPerView={1}
          initialSlide={2}
          loop={false}
          navigation={true}
          mousewheel={true}
          keyboard={true}
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
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {/* Nicolas Moreno */}
          <SwiperSlide>
            <CartaEmpleado tema={tema}>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/nicolasMoreno.jpeg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado tema={tema}>
                  <h3>Nicolás Moreno</h3>
                  <h4>Fundador</h4>
                  <p>Estudiante Ingeniería Informática</p>
                  <h4>Pasatiempos:</h4>
                  <Pasatiempos tema={tema}>
                    <Lottie
                      animationData={guitarra}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={valle} className="icono-animado" />
                    <Lottie
                      animationData={buscando}
                      className="icono-animado"
                    />
                    <Lottie animationData={cine} className="icono-animado" />
                  </Pasatiempos>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection tema={tema}>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>
                  Desde que tengo memoria he estado obsesionado con los
                  misterios de la realidad y comprender el porqué de las cosas,
                  lo que me generó una enorme pasión por la ciencia y la
                  tecnología.
                </p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>
                  Física - Matemáticas - Informática - Neurociencia - Fractales
                </p>
                <br />
                <h3>Contacto:</h3>
                <Redes tema={tema}>
                  <a href="https://wa.me/985702312" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a href="https://github.com/4mser" target="__blank">
                    <div className="redes">
                      <FiGithub></FiGithub>
                      <p>Github</p>
                    </div>
                  </a>

                  <a href="https://www.instagram.com/4mser/" target="__blank">
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a
                    href="mailto:nicolas.moreno.sagan@gmail.com"
                    target="__blank"
                  >
                    <div className="redes">
                      <AiOutlineMail></AiOutlineMail>
                      <p>correo</p>
                    </div>
                  </a>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide>

          {/* Hugo Moreno */}
          <SwiperSlide>
            <CartaEmpleado tema={tema}>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/hugomoreno.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado tema={tema}>
                  <h3>Hugo Moreno</h3>
                  <h4>Diseñador y Constructor</h4>
                  <p>Técnico Diseño de Espacios y Equipamiento</p>
                  <h4>Pasatiempos:</h4>
                  <Pasatiempos tema={tema}>
                    <Lottie
                      animationData={herramienta}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={cine} className="icono-animado" />
                    <Lottie animationData={idea} className="icono-animado" />
                    <Lottie animationData={libro} className="icono-animado" />
                  </Pasatiempos>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection tema={tema}>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>
                  Tengo 49 años y provengo de una familia numerosa de 7
                  hermanos. Soy padre de 2 hijos y he trabajado como maestro
                  constructor por más de 25 años. Me considero un profesional
                  independiente y emprendedor, siempre esforzándome por innovar
                  y aportar al desarrollo de proyectos con mirada social y
                  sustentable.
                </p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>
                  Innovación - Emprendimiento - Autosustento - Historia - Diseño
                </p>
                <br />
                <h3>Contacto:</h3>
                <Redes tema={tema}>
                  <a href="https://wa.me/957245370" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/hugomorenotorres1/"
                    target="__blank"
                  >
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a href="mailto:hugomoreno.torres@gmail.com" target="__blank">
                    <div className="redes">
                      <AiOutlineMail></AiOutlineMail>
                      <p>correo</p>
                    </div>
                  </a>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide>

          {/* Alexis Toro */}
          <SwiperSlide>
            <CartaEmpleado tema={tema}>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/toro.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado tema={tema}>
                  <h3>Alexis Toro</h3>
                  <h4>Desarrollador FullStack</h4>
                  <p>Estudiante Ingeniería Informática</p>
                  <h4>Pasatiempos:</h4>
                  <Pasatiempos tema={tema}>
                    <Lottie
                      animationData={calendario}
                      className="icono-animado"
                    />
                    <Lottie animationData={d3} className="icono-animado" />{" "}
                    <Lottie animationData={bloc} className="icono-animado" />
                    <Lottie animationData={music} className="icono-animado" />
                  </Pasatiempos>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection tema={tema}>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>
                  Soy una persona muy activa físicamente, creo que el ejercicio
                  es esencial para las personas. Disfruto bastante dibujar,
                  crear en Blender y utilizar IA para mi desarrollo. Actualmente
                  estoy aprendiendo a tocar guitarra.
                </p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Diseño 3D - Desarrollo Web - Backend</p>
                <br />
                <h3>Contacto:</h3>
                <Redes tema={tema}>
                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a href="https://github.com/XxtbmfxX" target="__blank">
                    <div className="redes">
                      <FiGithub></FiGithub>
                      <p>Github</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a href="mailto:aatn1321@gmail.com" target="__blank">
                    <div className="redes">
                      <AiOutlineMail></AiOutlineMail>
                      <p>correo</p>
                    </div>
                  </a>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide>

          {/* Ambar Martínez */}
          <SwiperSlide>
            <CartaEmpleado tema={tema}>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.4b5ef573d1d8b28907c823ecf5badb3f?rik=OQlXZtnmwXrusg&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado tema={tema}>
                  <h3>Ambar Martínez</h3>
                  <h4>Psicóloga</h4>
                  <p>Licenciada en Psicología</p>
                  <h4>Pasatiempos:</h4>
                  <Pasatiempos tema={tema}></Pasatiempos>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection tema={tema}>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>Ambar</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Ambar</p>
                <br />
                <h3>Contacto:</h3>
                <Redes tema={tema}>
                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineMail></AiOutlineMail>
                      <p>correo</p>
                    </div>
                  </a>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide>

          {/* Martín */}
          {/* <SwiperSlide>
            <CartaEmpleado tema={tema}>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.5bd86cba50759194b565c4cb37c62a94?rik=T%2bChbZa9UPAPwA&riu=http%3a%2f%2faninote.com%2fimages%2fanon.png&ehk=ZN%2bnq%2bStA6ovrFIZgA0jszi18QelUgI%2f%2bhcxI82hneY%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado tema={tema}>
                  <h3>Martin</h3>
                  <h4>Investigador</h4>
                  <p>Estudiante Ingeniería Física</p>
                  <h4>Pasatiempos:</h4>
                  <Pasatiempos tema={tema}>
                    <Lottie
                      animationData={calendario}
                      className="icono-animado"
                    />
                    <Lottie
                      animationData={guitarra}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={bloc} className="icono-animado" />
                    <Lottie animationData={d3} className="icono-animado" />
                  </Pasatiempos>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection tema={tema}>
                <h3>Sobre mí:</h3>
                <p>Martin</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Martin</p>
                <br />
                <h3>Contacto:</h3>
                <Redes tema={tema}>
                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a href="https://github.com/XxtbmfxX" target="__blank">
                    <div className="redes">
                      <FiGithub></FiGithub>
                      <p>Github</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a href="mailto:aatn1321@gmail.com" target="__blank">
                    <div className="redes">
                      <AiOutlineMail></AiOutlineMail>
                      <p>correo</p>
                    </div>
                  </a>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide> */}

          {/* Tarro */}
          <SwiperSlide>
            <CartaEmpleado tema={tema}>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.4b5ef573d1d8b28907c823ecf5badb3f?rik=OQlXZtnmwXrusg&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado tema={tema}>
                  <h3>Angelo Cubillos</h3>
                  <h4>Investigador</h4>
                  <p>Estudiante Bioquímica</p>
                  <h4>Pasatiempos:</h4>
                  <Pasatiempos tema={tema}></Pasatiempos>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection tema={tema}>
                <h3>Sobre mí:</h3>
                <p>Angelo</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Angelo</p>
                <br />
                <h3>Contacto:</h3>
                <Redes tema={tema}>
                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineMail></AiOutlineMail>
                      <p>correo</p>
                    </div>
                  </a>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide>

          <SwiperSlide>
            <CartaEmpleado tema={tema}>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.4b5ef573d1d8b28907c823ecf5badb3f?rik=OQlXZtnmwXrusg&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado tema={tema}>
                  <h3>Anna Belén</h3>
                  <h4>Psicóloga</h4>
                  <p>Licenciada en Psicología</p>
                  <h4>Pasatiempos:</h4>
                  <Pasatiempos tema={tema}></Pasatiempos>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection tema={tema}>
                <h3>Sobre mí:</h3>
                <p>Angelo</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Angelo</p>
                <br />
                <h3>Contacto:</h3>
                <Redes tema={tema}>
                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineMail></AiOutlineMail>
                      <p>correo</p>
                    </div>
                  </a>
                </Redes>
              </EmpleadoSecondSection>
            </CartaEmpleado>
          </SwiperSlide>
        </Swiper>
      </Container>
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

  @media (min-width: 1000px) {
    padding-top: 4rem;
  }
`;

export const CartaEmpleado = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 5px;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
  color: white;
  padding: 1rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  @media (min-width: 1000px) {
    height: 35rem;
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
    transition: 0.2s;
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
    color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--blackColor)"};
  }

  p {
    font-size: 0.8rem;
    opacity: 0.7;
    color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--blackColor)"};
  }

  @media (max-width: 1000px) {
    p {
      font-size: 0.6rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      padding: 0;
      font-size: 1rem;
    }
  }
`;

const Pasatiempos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  filter: ${(props) =>
    props.tema === "dark" ? "" : "invert(1) hue-rotate(180deg) saturate(4)"};

  .icono-animado {
    width: 2rem;
  }
`;

const EmpleadoSecondSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
    margin-bottom: 2px;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--blackColor)"};
  }

  p {
    font-size: 0.8rem;
    opacity: 0.8;
    color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--blackColor)"};
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
    color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--blackColor)"};
  }

  .redes {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 0.6rem;
      margin-top: 0.2rem;
      color: ${(props) =>
        props.tema === "dark" ? "white" : "var(--blackColor)"};
    }
  }

  .redes:hover {
    color: var(--colorEntropia);
    filter: brightness(1.2);
  }
  svg {
    font-size: 1.5rem;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  touch-action: 5rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--encabezado2)" : "var(--colorBoxDark)"};
  display: flex;
  align-items: center;

  .BannerP {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0 1.4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 4rem 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
