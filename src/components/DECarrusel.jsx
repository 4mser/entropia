import styled from "styled-components";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const DECarrusel = ({ tema }) => {
  return (
    <CultiboxContainer tema={tema}>
      <div
        style={{
          width: "100%",
          height: "20rem",
          overflow: "hidden",
        }}
      >
        <Swiper
          grabCursor={true}
          slidesPerView={1}
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
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/de1.png" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/de2.png" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/de3.png" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/de4.png" alt="" />
            </FotoCultibox>
          </SwiperSlide>
        </Swiper>
      </div>
    </CultiboxContainer>
  );
};

export default DECarrusel;

const CultiboxContainer = styled.div`
  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "")};
  }

  .swiper-pagination-bullet-active {
    background-color: var(--colorEntropia);
  }
`;

const FotoCultibox = styled.div`
  width: 100%;
  transform: translateY(-2.5rem);
  height: 20rem;
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
