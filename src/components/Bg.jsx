const Bg = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: "-1",
        overflow: "hidden",
        background: "var(--bg_dark)",
      }}
    ></div>
  );
};

export default Bg;
