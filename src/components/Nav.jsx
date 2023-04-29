// ICONS
import { Icon } from "@iconify/react";

const Nav = ({ handleTemaChange, tema, handleMenuChange, menuOpen }) => {
  return (
    <nav
      style={{
        width: "100%",
        height: "5rem",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "0 1.2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: ".3s",
        userSelect: "none",
        background: tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)",
        zIndex: "1000",
      }}
    >
      <img
        src="https://appentropia.s3.amazonaws.com/ENTROPIA.png"
        alt="logo"
        className="logo"
        style={{
          width: "12rem",
          transform: "translateX(-.4rem)",
          filter: tema === "dark" ? "" : "invert(.9)",
        }}
      />

      {/* <div
        style={{
          width: "3rem",npm run
          height: "2rem",
        }}
      /> */}

      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "6.2rem",
        }}
      >
        <div
          onClick={handleTemaChange}
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            background: "var(--blackColor)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            icon={tema === "dark" ? "ri:sun-fill" : "ri:moon-fill"}
            style={{
              color: "var(--whiteColor)",
              fontSize: "1.4rem",
            }}
          />
        </div>

        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            background: "var(--blackColor)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            icon="solar:menu-dots-broken"
            onClick={handleMenuChange}
            style={{
              color: "var(--whiteColor)",
              fontSize: "2rem",
              transition: ".3s",
              transform: menuOpen === "open" ? "rotate(180deg)" : "scale(1.2)",
            }}
          />
        </div>
      </section>
    </nav>
  );
};

export default Nav;
