import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <p className="footer">
      2023 Ⓒ
      <Link
        to="https://github.com/crlnvls/react-info-site"
        target="_blank"
        className="link"
      >
        Caroline Veloso
      </Link>
    </p>
  );
};

export default Footer;
