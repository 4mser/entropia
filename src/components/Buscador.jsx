import { Icon } from "@iconify/react";

const Buscador = () => {
  return (
    <section
      style={{
        width: "2.5rem",
        height: "2.5rem",
        background: "var(--blackColor)",
        position: "fixed",
        top: "1.25rem",
        right: "8.6rem",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--whiteColor)",
        zIndex: "1000",
      }}
    >
      <Icon
        icon="ic:baseline-search"
        style={{
          color: "var(--whiteColor)",
          fontSize: "1.5rem",
        }}
      />
    </section>
  );
};

export default Buscador;
