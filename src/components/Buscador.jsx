import { Icon } from "@iconify/react";

const Buscador = () => {
  return (
    <section
      style={{
        width: "calc(100% - 2.4rem)",
        height: "2.3rem",
        background: "var(--blackColor)",
        position: "absolute",
        top: "5.2rem",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "35px",
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        color: "var(--whiteColor)",
      }}
    >
      <Icon
        icon="ic:baseline-search"
        style={{
          color: "var(--whiteColor)",
          fontSize: "1.2rem",
          marginRight: ".3rem",
        }}
      />
      <p
        style={{
          fontSize: ".9rem",
        }}
      >
        Buscar...
      </p>
    </section>
  );
};

export default Buscador;
