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
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        navigation={true}
        mousewheel={true}
        className="swiper"
        keyboard={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide className="slider">
          <FotoCultibox>
            <img src="https://appentropia.s3.amazonaws.com/de1.png" alt="" />
          </FotoCultibox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <FotoCultibox>
            <img src="https://appentropia.s3.amazonaws.com/de2.png" alt="" />
          </FotoCultibox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <FotoCultibox>
            <img src="https://appentropia.s3.amazonaws.com/de3.png" alt="" />
          </FotoCultibox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <FotoCultibox>
            <img src="https://appentropia.s3.amazonaws.com/de4.png" alt="" />
          </FotoCultibox>
        </SwiperSlide>
      </Swiper>
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

  .slider {
    height: 20rem;
    display: flex;
  }

  @media (min-width: 1000px) {
    width: 50%;

    .swiper {
      height: 100%;

      .slider {
        height: 20rem;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const FotoCultibox = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s;
  }

  :hover img {
    transform: scale(1.1);
  }
`;
