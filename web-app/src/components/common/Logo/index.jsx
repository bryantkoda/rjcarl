import React from "react";
import logo from "../../../images/logo.png";

const Logo = ({ width }) => {
  return (
    <div id="logo">
      <img src={logo} {...{ width }} alt="Koda Coding Challenge" />
    </div>
  );
};

Logo.defaultProps = {
  width: "80",
};

export default Logo;
