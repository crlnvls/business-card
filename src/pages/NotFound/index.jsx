import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="type-container">
        <h1 className="type">Page not Found</h1>
        <Link to="/" className="type-back">
          Back to homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
