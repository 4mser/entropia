import styled from "styled-components";

const DeepEye = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: "translateY(5rem)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="https://appentropia.s3.amazonaws.com/img-eye.jpg"
          alt=""
        />
        <ShadowBanner></ShadowBanner>
      </div>
    </div>
  );
};

export default DeepEye;

const ShadowBanner = styled.div`
  width: 100%;
  height: 4rem;
  background: var(--shadowBanner);
  position: absolute;
  bottom: 0;
`;
