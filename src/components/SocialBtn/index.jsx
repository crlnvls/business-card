import React from "react";

import "./SocialBtn.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialBtn = () => {
  return (
    <>
      <div className="social">
        <GitHubIcon sx={{ fontSize: 28 }} className="icons" />
        <LinkedInIcon sx={{ fontSize: 28 }} className="icons" />
        <InstagramIcon sx={{ fontSize: 28 }} className="icons" />
      </div>
    </>
  );
};

export default SocialBtn;
