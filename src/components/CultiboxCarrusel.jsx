import styled from "styled-components";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const CultiboxCarrusel = ({ tema }) => {
  return (
    <CultiboxContainer tema={tema}>
      <div
        style={{
          width: "100%",
          padding: " 0 1.2rem",
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
            <FotoCultibox>
              <img
                src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-01.png"
                alt=""
              />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img
                src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-04.png"
                alt=""
              />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img
                src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-02.png"
                alt=""
              />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img
                src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-03.png"
                alt=""
              />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img
                src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-07.png"
                alt=""
              />
            </FotoCultibox>
          </SwiperSlide>

          <SwiperSlide>
            <FotoCultibox>
              <img
                src="https://appentropia.s3.amazonaws.com/cultibox_Mesa+de+trabajo+1-06.png"
                alt=""
              />
            </FotoCultibox>
          </SwiperSlide>
        </Swiper>
      </div>
    </CultiboxContainer>
  );
};

export default CultiboxCarrusel;

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
  height: 45vw;
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
