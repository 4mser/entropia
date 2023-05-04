const Footer = ({ tema }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "5rem",
        overflow: "hidden",
        marginTop: "16rem",
        display: "flex",
        justifyContent: "center",
        // background: tema === "dark" ? "var(--whiteColor)" : "var(--blackColor)",
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
          opacity: ".7",
          filter: tema === "dark" ? "" : "invert(1)",
        }}
      />
      <p
        style={{
          opacity: ".4",
          fontSize: ".6rem",
          color: tema === "light" ? "black" : "white",
        }}
      >
        ©2023 ENTROPÍA - TODOS LOS DERECHOS RESERVADOS
      </p>
    </div>
  );
};

export default Footer;
