import React from "react";

import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="main">
        <img src="/photo.jpeg" alt="photo" />
        <div className="center-div">
          <h1 className="name"> Caroline Veloso</h1>
          <h2 className="job">Software Developer</h2>
          <button className="email">Email</button>
          <div className="text">
            <h3 className="heading">About</h3>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              voluptatibus quo impedit sapiente libero perspiciatis dolore et,
              nostrum aut, laudantium molestias. Exercitationem consequuntur
            </p>
            <h3 className="heading">Interests</h3>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              reiciendis est reprehenderit optio quidem nemo, quas consequuntur
              ut? Saepe at cum nam impedit iusto qui! Quod,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
