import styled from "styled-components";

const Cultibox = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "30rem",
          transform: "translateY(5rem)",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "105%",
            height: "105%",
            objectFit: "cover",
          }}
          src="https://appentropia.s3.amazonaws.com/cultibox.png"
          alt=""
        />
        <ShadowBanner></ShadowBanner>
      </div>
    </div>
  );
};

export default Cultibox;

const ShadowBanner = styled.div`
  width: 100%;
  height: 10rem;
  background: var(--shadowBanner);
  position: absolute;
  bottom: 0;
`;
