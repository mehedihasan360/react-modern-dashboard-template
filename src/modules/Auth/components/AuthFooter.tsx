import React from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";

const AuthFooter: React.FC = () => {
  const { xl } = useBreakpoint();
  const year: number = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        fontSize: "0.8rem",
        marginTop: xl ? "5rem" : "3rem",
      }}
    >
      © {year}{" "}
      <a
        href="https://m360ict.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        M360ICT
      </a>
      . All rights reserved. Empowering businesses through technology and
      innovation.
    </footer>
  );
};

export default AuthFooter;
