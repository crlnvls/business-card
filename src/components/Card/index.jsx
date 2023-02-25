import React from "react";

import "./Card.css";
import EmailIcon from "@mui/icons-material/Email";
import SocialBtn from "../SocialBtn";

const Card = () => {
  return (
    <>
      <div className="main">
        <img src="/photo.jpeg" alt="photo" />
        <div className="center-div">
          <h1 className="name"> Caroline Veloso</h1>
          <h2 className="job">Software Developer</h2>
          <a
            href="https://crlnvls.github.io/"
            className="website"
            target="_blank"
          >
            crlnvls.website
          </a>
          <a href="mailto:cveloso@hotmail.co.uk" className="email">
            <EmailIcon className="icon" sx={{ fontSize: 19 }} />
            Email
          </a>
          <div className="text">
            <h3 className="heading">About</h3>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              voluptatibus quo impedit sapiente libero perspiciatis dolore et,
              nostrum aut, laudantium.
            </p>
            <h3 className="heading">Interests</h3>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              reiciendis est reprehenderit optio quidem nemo.
            </p>
          </div>
          <SocialBtn />
        </div>
      </div>
    </>
  );
};

export default Card;
