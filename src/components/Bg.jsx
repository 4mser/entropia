const Bg = ({ tema }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: "-1",
        overflow: "hidden",
        background: tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)",
        transition: ".7s",
      }}
    ></div>
  );
};

export default Bg;
