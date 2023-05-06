import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

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
import casa from "/src/assets/icons/casa.json";
import idea from "/src/assets/icons/idea.json";
import libro from "/src/assets/icons/libro.json";

import { FiGithub } from "react-icons/fi";

const integrantes = [
  {
    id: 1,
    nombre: "Nicolás Moreno",
    puesto: "CEO",
    descripcion: "Estudiante Ingeniería Informática",
    pasatiempos: [
      {
        icono: guitarra,
      },
      {
        icono: bola,
      },
      {
        icono: buscando,
      },
      {
        icono: valle,
      },
    ],
    imagen: "https://appentropia.s3.amazonaws.com/nicolasMoreno.jpeg",
    sobre:
      "Desde que tengo memoria he estado obsesionado con los misterios de la realidad y comprender el porqué de las cosas, lo que me generó una enorme pasión por la ciencia y la tecnología.",
    areas: "Física - Matemáticas - Informática - Neurociencia - Fractales",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "https://wa.me/985702312",
        texto: "Whatsapp",
      },
      {
        icono: <FiGithub />,
        enlace: "https://github.com/4mser",
        texto: "Github",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "https://www.instagram.com/4mser/",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:nicolas.moreno.sagan@gmail.com",
        texto: "Email",
      },
    ],
  },
  {
    id: 2,
    nombre: "Kevin Bravo",
    puesto: "CTO",
    descripcion:
      "Técnico Telecomunicaciones - Analista Programador - Estudiante Ingeniería Conectividad y Redes",
    pasatiempos: [
      {
        icono: guitarra,
      },
      {
        icono: bola,
      },
      {
        icono: buscando,
      },
      {
        icono: valle,
      },
    ],
    imagen: "",
    sobre:
      "Me apasiona la programación y crear soluciones innovadoras que faciliten la vida de las personas.",
    areas: "Redes - Servidores - Hacking Ético",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "",
        texto: "Whatsapp",
      },
      {
        icono: <FiGithub />,
        enlace: "",
        texto: "Github",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:",
        texto: "Email",
      },
    ],
  },

  {
    id: 3,
    nombre: "Hugo Moreno",
    puesto: "Diseñador y Creativo - Fundador Cultibox",
    descripcion: "Técnico Diseño de Espacios y Equipamiento",
    pasatiempos: [
      {
        icono: herramienta,
      },
      {
        icono: casa,
      },
      {
        icono: idea,
      },
      {
        icono: libro,
      },
    ],
    imagen: "https://appentropia.s3.amazonaws.com/hugomoreno.jpg",
    sobre:
      "Tengo 49 años y provengo de una familia numerosa de 7 hermanos. Soy padre de 2 hijos y he trabajado como maestro constructor por más de 25 años. Me considero un profesional independiente y emprendedor, siempre esforzándome por innovar y aportar al desarrollo de proyectos con mirada social y sustentable.",
    areas: "Innovación - Emprendimiento - Autosustento - Historia",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "https://wa.me/957245370",
        texto: "Whatsapp",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "https://www.instagram.com/hugomorenotorres1/",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:hugomoreno.torres@gmail.com",
        texto: "Email",
      },
    ],
  },
  {
    id: 4,
    nombre: "Pablo Villamizar",
    puesto: "Ciberseguridad",
    descripcion: "Estudiante Ingeniería Informática",
    pasatiempos: [
      {
        icono: ordenador,
      },
      {
        icono: bola,
      },
      {
        icono: motocicleta,
      },
      {
        icono: mando,
      },
    ],
    imagen: "https://appentropia.s3.amazonaws.com/pablo.jpg",
    sobre:
      "Mi interés en la tecnología se remonta a mi infancia, cuando tuve mi primera experiencia con la consola PlayStation 2",
    areas: "Ciberseguridad - Mecánica Automotriz - Videojuegos",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "",
        texto: "Whatsapp",
      },
      {
        icono: <FiGithub />,
        enlace: "",
        texto: "Github",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:",
        texto: "Email",
      },
    ],
  },
  {
    id: 5,
    nombre: "Alexis Toro",
    puesto: "Desarrollador FullStack",
    descripcion: "Estudiante Ingeniería Informática",
    pasatiempos: [
      {
        icono: calendario,
      },
      {
        icono: d3,
      },
      {
        icono: bloc,
      },
      {
        icono: music,
      },
    ],
    imagen: "https://appentropia.s3.amazonaws.com/toro.jpg",
    sobre:
      "Soy una persona muy activa físicamente, creo que el ejercicio es esencial para las personas. Disfruto bastante dibujar, crear en Blender y utilizar IA para mi desarrollo.",
    areas: "Diseño 3D - Desarrollo Web - Backend",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "",
        texto: "Whatsapp",
      },
      {
        icono: <FiGithub />,
        enlace: "",
        texto: "Github",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:",
        texto: "Email",
      },
    ],
  },
  {
    id: 6,
    nombre: "Ambar Martínez",
    puesto: "Psicóloga",
    descripcion: "Licenciada en Psicología",
    pasatiempos: [
      {
        icono: guitarra,
      },
      {
        icono: bola,
      },
      {
        icono: buscando,
      },
      {
        icono: valle,
      },
    ],
    imagen: "",
    sobre: "",
    areas: "",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "",
        texto: "Whatsapp",
      },
      {
        icono: <FiGithub />,
        enlace: "",
        texto: "Github",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:",
        texto: "Email",
      },
    ],
  },
  {
    id: 7,
    nombre: "Leya Inostroza",
    puesto: "Administradora",
    descripcion:
      "Técnico en administración - Estudiante Ingeniería Administración",
    pasatiempos: [
      {
        icono: guitarra,
      },
      {
        icono: bola,
      },
      {
        icono: buscando,
      },
      {
        icono: valle,
      },
    ],
    imagen: "https://appentropia.s3.amazonaws.com/leya.jpg",
    sobre: "",
    areas: "",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "",
        texto: "Whatsapp",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:",
        texto: "Email",
      },
    ],
  },
  {
    id: 8,
    nombre: "Martín",
    puesto: "Investigador",
    descripcion: "Estudiante Ingeniería Física",
    pasatiempos: [
      {
        icono: guitarra,
      },
      {
        icono: bola,
      },
      {
        icono: buscando,
      },
      {
        icono: valle,
      },
    ],
    imagen: "",
    sobre: "",
    areas: "",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "",
        texto: "Whatsapp",
      },
      {
        icono: <FiGithub />,
        enlace: "",
        texto: "Github",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:",
        texto: "Email",
      },
    ],
  },
  {
    id: 9,
    nombre: "Angelo Cubillos",
    puesto: "Investigador",
    descripcion: "Estudiante Ingeniería Bioquímica",
    pasatiempos: [
      {
        icono: guitarra,
      },
      {
        icono: bola,
      },
      {
        icono: buscando,
      },
      {
        icono: valle,
      },
    ],
    imagen: "",
    sobre: "",
    areas: "",
    contacto: [
      {
        icono: <AiOutlineWhatsApp />,
        enlace: "",
        texto: "Whatsapp",
      },
      {
        icono: <FiGithub />,
        enlace: "",
        texto: "Github",
      },
      {
        icono: <AiOutlineInstagram />,
        enlace: "",
        texto: "Instagram",
      },
      {
        icono: <AiOutlineMail />,
        enlace: "mailto:",
        texto: "Email",
      },
    ],
  },
];

export default integrantes;
