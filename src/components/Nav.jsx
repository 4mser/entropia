// ICONS
import { Icon } from "@iconify/react";

const Nav = () => {
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
        background: "var(--bg_dark)",
        zIndex: "1000",
      }}
    >
      <img
        src="https://appentropia.s3.amazonaws.com/ENTROPIA.png"
        alt="logo"
        style={{
          width: "12rem",
          transform: "translateX(-.4rem)",
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
            icon="ri:sun-fill"
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
            style={{
              color: "var(--whiteColor)",
              fontSize: "2rem",
            }}
          />
        </div>
      </section>
    </nav>
  );
};

export default Nav;
