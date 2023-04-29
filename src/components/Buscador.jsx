import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Buscador = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        width: isScrolled ? "2.5rem" : "calc(100% - 2.4rem)",
        height: "2.5rem",
        background: "var(--blackColor)",
        position: "fixed",
        top: isScrolled ? "1.25rem" : "5.2rem",
        right: isScrolled ? "8.6rem" : "50%",
        transform: isScrolled ? "translateX(-.0001rem)" : "translateX(50%)",
        borderRadius: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: isScrolled ? "center" : "",
        padding: isScrolled ? "" : "1rem",
        color: "var(--whiteColor)",
        zIndex: "1000",
        transition: ".8s ease",
      }}
    >
      <Icon
        icon="ic:baseline-search"
        style={{
          color: "var(--whiteColor)",
          fontSize: isScrolled ? "1.5rem" : "1.2rem",
          marginRight: isScrolled ? "" : ".3rem",
        }}
      />
      <p
        style={{
          fontSize: ".9rem",
        }}
      >
        {isScrolled ? "" : "Buscar..."}
      </p>
    </section>
  );
};

export default Buscador;
