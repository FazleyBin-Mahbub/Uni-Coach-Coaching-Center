import React from "react";
import "./NotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
const NotFound = () => {
  return (
    <div className="text-center mt-5 not-found">
      <FontAwesomeIcon className="not-found-icon" icon={faExclamationTriangle} />
      <h1 className="pt-2">404</h1>
      <br />
      <p className="ps-2">Page Not Found</p>
    </div>
  );
};

export default NotFound;
