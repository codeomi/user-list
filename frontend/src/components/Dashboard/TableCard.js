import React from "react";
import "./tableCard.css";
import { Link } from "react-router-dom";

const TableCard = ({ heading, description }) => {
  return (
    <>
      <Link path="/table/:id" to={`/table/${heading}`} className="linktag">
        <div className="card-container">
          <div className="heading">{heading}</div>
          <div className="descriptions">{description}</div>
        </div>
      </Link>
    </>
  );
};

export default TableCard;
