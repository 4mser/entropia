const Footer = ({ tema }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "5rem",
        overflow: "hidden",
        marginTop: "15rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://appentropia.s3.amazonaws.com/EOA-PNG.png"
        alt=""
        style={{
          height: "50%",
          objectFit: "cover",
          opacity: ".5",
          filter: tema === "dark" ? "" : "invert(1)",
        }}
      />
    </div>
  );
};

export default Footer;
