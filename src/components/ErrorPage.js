import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/Error-illustration.png";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-body">
        <div className="error-info">
          <h1>404 Page</h1>
          <h4>Oops! Page cannot be Found.</h4>
          <p>
             404 error page is didplayed to indicate that the 
             browser was able to communicate 
             with a given server, but the server could not find what was requested.
          </p>
          <Link to="/">
            <button>Home Page</button>
          </Link>
        </div>

        <div className="error-image">
          <img className="error-img" src={error} alt="404: Not found" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
