const DeepEye = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: "translateY(5rem)",
          overflow: "hidden",
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
      </div>
    </div>
  );
};

export default DeepEye;
