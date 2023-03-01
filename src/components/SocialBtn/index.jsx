import React from "react";

import "./SocialBtn.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialBtn = () => {
  return (
    <>
      <div className="social">
        <a href="https://github.com/crlnvls/business-card" target="_blank">
          <GitHubIcon sx={{ fontSize: 28 }} className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/crlnvls/" target="_blank">
          <LinkedInIcon sx={{ fontSize: 28 }} className="icons" />
        </a>
        <a href="">
          <InstagramIcon sx={{ fontSize: 28 }} className="icons" />
        </a>
      </div>
    </>
  );
};

export default SocialBtn;
