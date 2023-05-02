import styled from "styled-components";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const DECarrusel2 = ({ tema }) => {
  return (
    <CultiboxContainer tema={tema}>
      <div
        style={{
          width: "100%",
          padding: " 0 1.2rem",
          display: "flex",
          flexWrap: "wrap",
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
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/G1.jpg" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/g2.jpg" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/g3.jpg" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/g4.jpg" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/g5.jpg" alt="" />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img src="https://appentropia.s3.amazonaws.com/g6.jpg" alt="" />
            </FotoCultibox>
          </SwiperSlide>
        </Swiper>
      </div>
    </CultiboxContainer>
  );
};

export default DECarrusel2;

const CultiboxContainer = styled.div`
  transform: translateY(-1.5rem);
  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "")};
  }

  .swiper-pagination-bullet-active {
    background-color: var(--colorEntropia);
  }
`;

const FotoCultibox = styled.div`
  width: 100%;
  height: 60vw;
  border-radius: 5px;
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
