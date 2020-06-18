import React from "react";
import { white } from "color-name";

import "./style.footer.css";

const FooterPagePro = () => {
  return (
    <div
      style={{
        padding: "50px",
        fontSize: "2.5vw",
        backgroundColor: "rgba(101, 186, 209)",
        color: "white",
        margin: "0"
      }}
      className="footerContainer"
    >
      {" "}
      <div className="footer-copyright">
        <>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.qadan.co"
          >
            {" "}
            Muhammed Qadan
          </a>
        </>
      </div>{" "}
    </div>
  );
};

export default FooterPagePro;
