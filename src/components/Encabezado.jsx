const Encabezado = ({ tema }) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "5rem",
        overflow: "hidden",
        alignItems: "center",
        top: "5rem",
        padding: "0 1.2rem",
        left: "0",
        background:
          tema === "dark" ? "var(--encabezado2)" : "var(--colorBoxDark)",
      }}
    >
      <p
        style={{
          top: "2rem",
          color: "var(--white2)",
          fontSize: ".7rem",
          fontWeight: "600",
        }}
      >
        INVESTIGACIÓN, APLICACIÓN E INNOVACIÓN CIENTÍFICO TECNOLÓGICA <br /> EN
        SIMBIOSIS CON EL MEDIOAMBIENTE
      </p>
    </div>
  );
};

export default Encabezado;
