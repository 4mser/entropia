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
import ordenador from "/src/assets/icons/ordenador-portatil.json";
import mando from "/src/assets/icons/mando.json";
import motocicleta from "/src/assets/icons/motocicleta.json";
import d3 from "/src/assets/icons/3d.json";
import calendario from "/src/assets/icons/calendario.json";
import bloc from "/src/assets/icons/bloc-de-dibujo.json";
import music from "/src/assets/icons/music.json";
import herramienta from "/src/assets/icons/herramientas-para-reparar.json";
import idea from "/src/assets/icons/idea.json";
import libro from "/src/assets/icons/libro.json";
import cine from "/src/assets/icons/cine.json";
import caminar from "/src/assets/icons/caminar.json";
import pintura from "/src/assets/icons/paleta-de-pintura.json";
import bailar from "/src/assets/icons/ventilador.json";
import amigos from "/src/assets/icons/tres-amigos.json";

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
                  <h4>CEO</h4>
                  <p>Estudiante Ingeniería Informática</p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
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
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
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
                <Redes>
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

          {/* Kevin Bravo */}
          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.5bd86cba50759194b565c4cb37c62a94?rik=T%2bChbZa9UPAPwA&riu=http%3a%2f%2faninote.com%2fimages%2fanon.png&ehk=ZN%2bnq%2bStA6ovrFIZgA0jszi18QelUgI%2f%2bhcxI82hneY%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Kevin Bravo</h3>
                  <h4>CTO</h4>
                  <p>
                    - Técnico Telecomunicaciones
                    <br />- Analista Programador
                    <br />- Estudiante Ingeniería Conectividad y Redes
                  </p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
                    <Lottie
                      animationData={guitarra}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={bola} className="icono-animado" />
                    <Lottie
                      animationData={buscando}
                      className="icono-animado"
                    />
                    <Lottie animationData={valle} className="icono-animado" />
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>Expero en hacking desde que vi Mr Robot</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Servidores - Redes - Ciberseguridad - Hacking Ético</p>
                <br />
                <h3>Contacto:</h3>
                <Redes>
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
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/hugomoreno.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Hugo Moreno</h3>
                  <h4>Diseñador y Creativo - Fundador Cultibox</h4>
                  <p>Técnico Diseño de Espacios y Equipamiento</p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
                    <Lottie
                      animationData={herramienta}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={cine} className="icono-animado" />
                    <Lottie animationData={idea} className="icono-animado" />
                    <Lottie animationData={libro} className="icono-animado" />
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
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
                <p>Innovación - Emprendimiento - Autosustento - Historia</p>
                <br />
                <h3>Contacto:</h3>
                <Redes>
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

          {/* Pablo Villamizar */}
          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/pablo.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Pablo Villamizar</h3>
                  <h4>Ciberseguridad</h4>
                  <p>Estudiante Ingeniería Informática</p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
                    <Lottie
                      animationData={ordenador}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={bola} className="icono-animado" />
                    <Lottie
                      animationData={motocicleta}
                      className="icono-animado"
                    />
                    <Lottie animationData={mando} className="icono-animado" />
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>
                  Mi interés en la tecnología se remonta a mi infancia, cuando
                  tuve mi primera experiencia con la consola PlayStation 2
                </p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Ciberseguridad - Mecánica Automotriz - Videojuegos</p>
                <br />
                <h3>Contacto:</h3>
                <Redes>
                  <a href="" target="__blank">
                    <div className="redes">
                      <AiOutlineWhatsApp></AiOutlineWhatsApp>
                      <p>Whatsapp</p>
                    </div>
                  </a>

                  <a href="" target="__blank">
                    <div className="redes">
                      <FiGithub></FiGithub>
                      <p>Github</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/jvgpablo/"
                    target="__blank"
                  >
                    <div className="redes">
                      <AiOutlineInstagram></AiOutlineInstagram>
                      <p>Instagram</p>
                    </div>
                  </a>

                  <a href="mailto:jvgpablo@gmail.com" target="__blank">
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
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/toro.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Alexis Toro</h3>
                  <h4>Desarrollador FullStack</h4>
                  <p>Estudiante Ingeniería Informática</p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
                    <Lottie
                      animationData={calendario}
                      className="icono-animado"
                    />
                    <Lottie animationData={d3} className="icono-animado" />{" "}
                    <Lottie animationData={bloc} className="icono-animado" />
                    <Lottie animationData={music} className="icono-animado" />
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
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
                <Redes>
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
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.5bd86cba50759194b565c4cb37c62a94?rik=T%2bChbZa9UPAPwA&riu=http%3a%2f%2faninote.com%2fimages%2fanon.png&ehk=ZN%2bnq%2bStA6ovrFIZgA0jszi18QelUgI%2f%2bhcxI82hneY%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Ambar Martínez</h3>
                  <h4>Psicóloga</h4>
                  <p>Licenciada en Psicología</p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
                    <Lottie
                      animationData={calendario}
                      className="icono-animado"
                    />
                    <Lottie
                      animationData={guitarra}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={amigos} className="icono-animado" />
                    <Lottie animationData={d3} className="icono-animado" />
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>Ambar</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Ambar</p>
                <br />
                <h3>Contacto:</h3>
                <Redes>
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

          {/* Leya Inostroza */}
          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://appentropia.s3.amazonaws.com/leya.jpg"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Leya Inostroza</h3>
                  <h4>Administradora</h4>
                  <p>
                    - Técnico Comercio Exterior y Mercados Digitales
                    <br /> - Estudiante Ingeniería Administración
                  </p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
                    <Lottie animationData={caminar} className="icono-animado" />
                    <Lottie
                      animationData={pintura}
                      className="icono-animado"
                    />{" "}
                    <Lottie animationData={bailar} className="icono-animado" />
                    <Lottie animationData={amigos} className="icono-animado" />
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>Leya</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Leya</p>
                <br />
                <h3>Contacto:</h3>
                <Redes>
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

          {/* Martín */}
          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.5bd86cba50759194b565c4cb37c62a94?rik=T%2bChbZa9UPAPwA&riu=http%3a%2f%2faninote.com%2fimages%2fanon.png&ehk=ZN%2bnq%2bStA6ovrFIZgA0jszi18QelUgI%2f%2bhcxI82hneY%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Martin </h3>
                  <h4>Investigador</h4>
                  <p>Estudiante Ingeniería Física</p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
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
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>Martin</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Martin</p>
                <br />
                <h3>Contacto:</h3>
                <Redes>
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

          {/* Tarro */}
          <SwiperSlide>
            <CartaEmpleado>
              <EmpleadoFirstSection>
                <FotoEmpleado>
                  <img
                    src="https://th.bing.com/th/id/R.5bd86cba50759194b565c4cb37c62a94?rik=T%2bChbZa9UPAPwA&riu=http%3a%2f%2faninote.com%2fimages%2fanon.png&ehk=ZN%2bnq%2bStA6ovrFIZgA0jszi18QelUgI%2f%2bhcxI82hneY%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </FotoEmpleado>

                <InfoEmpleado>
                  <h3>Angelo Cubillos</h3>
                  <h4>Investigador</h4>
                  <p>Estudiante Bioquímica</p>
                  <h4>Pasatiempos:</h4>
                  <div className="pasatiempos">
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
                  </div>
                </InfoEmpleado>
              </EmpleadoFirstSection>

              <EmpleadoSecondSection>
                {/* <Spotify></Spotify> */}

                <h3>Sobre mí:</h3>
                <p>Tarro</p>
                <br />
                <h3>Áreas de interés:</h3>
                <p>Tarro</p>
                <br />
                <h3>Contacto:</h3>
                <Redes>
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

  @media (min-width: 1000px) {
    padding-top: 4rem;
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

  @media (min-width: 1000px) {
    height: 35rem;
  }

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
  height: 100%;
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
