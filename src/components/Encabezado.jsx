const Encabezado = ({ tema }) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "5.2rem",
        overflow: "hidden",
        alignItems: "center",
        paddingLeft: "10%",
        paddingRight: "10%",
        justifyContent: "center",
        top: "5rem",
        left: "0",
        background:
          tema === "dark" ? "var(--encabezado)" : "var(--encabezadoLight)",
      }}
    >
      <p
        style={{
          top: "2rem",
          color: "var(--white2)",
          fontSize: ".8rem",
          fontWeight: "100",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Proyecto dedicado a la investigación y aplicación científico-tecnológica
        en diversas áreas del conocimiento.
      </p>
    </div>
  );
};

export default Encabezado;
