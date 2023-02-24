import React from "react";

import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="main">
        <img src="/photo.jpeg" alt="photo" />
        <div className="center-div">
          <h1> Caroline Veloso</h1>
          <h2>Software Developer</h2>
          <button>Email</button>
          <div>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              voluptatibus quo impedit sapiente libero perspiciatis dolore et,
              nostrum aut, laudantium molestias. Exercitationem consequuntur
              illum, laboriosam dolore laborum ea soluta eius?
            </p>
            <h3>Interests</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              reiciendis est reprehenderit optio quidem nemo, quas consequuntur
              ut? Saepe at cum nam impedit iusto qui! Quod, ipsam itaque! Nam,
              minus?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
