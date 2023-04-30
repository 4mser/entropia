const Cultibox = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "40rem",
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
      </div>
    </div>
  );
};

export default Cultibox;
